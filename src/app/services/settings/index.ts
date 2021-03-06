import { TabbableElement } from "../appData/state/tabbableElement";
import { TABBABLE_ELEMENT_TYPE } from "src/app/constants";
import { SaveState } from "../appData/state/saveState";
import { AppData } from "../appData/state/appData";

export interface NltSettings {
	appData: {
		[sourcePath: string]: {
			[tableIndex: string]: AppData;
		};
	};
	state: {
		[sourcePath: string]: {
			[tableIndex: string]: SaveState;
		};
	};
	focusedElement: TabbableElement;
	excludedFiles: string[];
}

export const DEFAULT_SETTINGS: NltSettings = {
	appData: {},
	state: {},
	focusedElement: { id: "-1", type: TABBABLE_ELEMENT_TYPE.UNFOCUSED },
	excludedFiles: [],
};
