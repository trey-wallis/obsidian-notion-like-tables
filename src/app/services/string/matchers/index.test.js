import { matchURLs, countNumTags } from "./index";

describe("matchURLs", () => {
	it("matches http", () => {
		const matched = matchURLs("https://google.com");
		expect(matched).toEqual(["https://google.com"]);
	});
	it("matches https", () => {
		const matched = matchURLs("https://google.com");
		expect(matched).toEqual(["https://google.com"]);
	});
	it("matches multiple urls", () => {
		const matched = matchURLs(
			"test https://google.com test https://yahoo.com"
		);
		expect(matched).toEqual(["https://google.com", "https://yahoo.com"]);
	});
});

describe("countNumTags", () => {
	it("counts single letter tag", () => {
		const numTags = countNumTags("#t");
		expect(numTags).toEqual(1);
	});

	it("counts single tag", () => {
		const numTags = countNumTags("#test");
		expect(numTags).toEqual(1);
	});

	it("counts many tags", () => {
		const numTags = countNumTags("#one #two #three");
		expect(numTags).toEqual(3);
	});

	it("counts tags with numbers", () => {
		const numTags = countNumTags("#123 #567");
		expect(numTags).toEqual(2);
	});

	it("counts tags with uppercase", () => {
		const numTags = countNumTags("#TEST");
		expect(numTags).toEqual(1);
	});

	it("counts tags with underscore", () => {
		const numTags = countNumTags("#test_test2");
		expect(numTags).toEqual(1);
	});

	it("counts tags with hyphen", () => {
		const numTags = countNumTags("#test-test2");
		expect(numTags).toEqual(1);
	});

	it("counts tag in middle of test", () => {
		const numTags = countNumTags("test #test test");
		expect(numTags).toEqual(1);
	});
});
