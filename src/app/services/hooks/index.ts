import { useCallback, useState, useEffect, useRef } from "react";

import { useMenu } from "src/app/components/MenuProvider";
import { v4 as uuid } from "uuid";
import { numToPx } from "../string/parsers";

export const useForceUpdate = () => {
	const [, setValue] = useState(0);
	return useCallback(() => setValue((value) => value + 1), []);
};

export const useId = (): string => {
	const [id] = useState(uuid());
	return id;
};

export const useCompare = (value: any) => {
	const prevValue = usePrevious(value);
	return prevValue !== value;
};

const usePrevious = (value: any) => {
	const ref = useRef();
	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
};

export const useTextareaRef = (isOpen: boolean, value: string) => {
	const lengthHasChanged = useCompare(value.length);
	return useCallback(
		(node) => {
			if (node) {
				if (isOpen && !lengthHasChanged) {
					node.selectionStart = value.length;
					node.selectionEnd = value.length;
					if (node instanceof HTMLElement) {
						setTimeout(() => {
							node.focus();
						}, 1);
					}
				}
			}
		},
		[isOpen, value.length]
	);
};
export const useDidMountEffect = (func: (...rest: any) => any, deps: any[]) => {
	const didMount = useRef(false);

	useEffect(() => {
		if (didMount.current) func();
		else didMount.current = true;
	}, deps);
};

/**
 * Throttles events.
 * Guarantees an execution of events every x milliseconds
 */
export const useThrottle = (eventTime: number, waitTime: number) => {
	const [shouldExecute, setExecution] = useState(false);

	useEffect(() => {
		let intervalId: NodeJS.Timer = null;
		function startTimer() {
			intervalId = setInterval(() => {
				if (Date.now() - eventTime < waitTime) return;
				clearInterval(intervalId);
				setExecution(true);
			}, 50);
		}
		if (eventTime !== 0) {
			setExecution(false);
			startTimer();
		}
		return () => clearInterval(intervalId);
	}, [eventTime]);

	return shouldExecute;
};

export const useScrollTime = (className: string) => {
	const [eventTime, setEventTime] = useState(0);
	const [scrollTime, setScrollTime] = useState(0);

	let el: Node | null = null;

	const shouldExecute = useThrottle(eventTime, 150);

	useEffect(() => {
		if (shouldExecute) setScrollTime(Date.now());
	}, [shouldExecute]);

	useEffect(() => {
		function handleScroll() {
			setEventTime(Date.now());
		}

		el = document.getElementsByClassName(className)[0];
		if (el) el.addEventListener("scroll", handleScroll);

		return () => {
			if (el) el.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return scrollTime;
};

export const useTableScrollTime = () => {
	return useScrollTime("NLT__table-wrapper");
};

export const useObsidianScrollTime = () => {
	return useScrollTime("markdown-preview-view");
};

export const useObsidianResizeTime = () => {
	const [eventTime, setEventTime] = useState(0);
	const [resizeTime, setResizeTime] = useState(0);

	const shouldExecute = useThrottle(eventTime, 150);

	useEffect(() => {
		if (shouldExecute) setResizeTime(Date.now());
	}, [shouldExecute]);

	useEffect(() => {
		let observer: ResizeObserver | null = null;

		function handleResize() {
			setEventTime(Date.now());
		}

		setTimeout(() => {
			const el = document.getElementsByClassName("view-content")[0];
			if (el) {
				observer = new ResizeObserver(handleResize);
				observer.observe(el);
				handleResize();
			}
		}, 1);

		return () => {
			if (observer) {
				observer.disconnect();
			}
		};
	}, []);
	return resizeTime;
};

export const usePositionRef = (deps: any[] = []) => {
	const [position, setPosition] = useState({
		top: "0px",
		left: "0px",
		width: "0px",
		height: "0px",
	});
	const obsidianResizeTime = useObsidianResizeTime();
	const obsidianScrollTime = useObsidianScrollTime();
	const tableScrollTime = useTableScrollTime();

	const positionRef = useCallback(
		(node) => {
			if (node instanceof HTMLElement) {
				const { top, left } = node.getBoundingClientRect();
				//We use offsetWidth, and offsetHeight instead of the width and height of the rectangle
				//because we want whole values to match what we set as the column width.
				//This will make sure that the rendered cell and the input cell are the same size
				const { offsetWidth, offsetHeight } = node;
				setPosition({
					top: numToPx(top),
					left: numToPx(left),
					width: numToPx(offsetWidth),
					height: numToPx(offsetHeight),
				});
			}
		},
		[obsidianResizeTime, obsidianScrollTime, tableScrollTime, ...deps]
	);
	return { positionRef, position };
};

export const useCloseMenusOnScroll = (className: string): void => {
	const { isAnyMenuOpen, closeAllMenus } = useMenu();

	let el: Node | null = null;

	function handleScroll() {
		closeAllMenus();
	}

	useEffect(() => {
		el = document.getElementsByClassName(className)[0];
		if (el) {
			if (isAnyMenuOpen()) {
				el.addEventListener("scroll", handleScroll);
			} else {
				el.removeEventListener("scroll", handleScroll);
			}
		}
		return () => {
			if (el) el.removeEventListener("scroll", handleScroll);
		};
	}, [isAnyMenuOpen()]);
};

// export const useDisableScroll = (className: string): void => {
// 	const { isAnyMenuOpen } = useMenu();

// 	let el: Node | null = null;

// 	function removeScrollX(el: HTMLElement) {
// 		el.style.overflow = "hidden";
// 		el.style.left = `${el.scrollLeft}px`;
// 		el.style.marginBottom = `17px`;
// 	}

// 	function addScroll(el: HTMLElement) {
// 		el.style.overflow = "auto";
// 		el.style.marginBottom = "0px";
// 	}

// 	useEffect(() => {
// 		el = document.getElementsByClassName(className)[0];
// 		if (el instanceof HTMLElement) {
// 			if (isAnyMenuOpen()) {
// 				removeScrollX(el);
// 			} else {
// 				addScroll(el);
// 			}
// 		}

// 		return () => {
// 			if (el instanceof HTMLElement) removeScrollX(el);
// 		};
// 	}, [isAnyMenuOpen()]);
//};
