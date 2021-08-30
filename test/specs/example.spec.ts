// example.spec.ts
import ExampleClass from "../pages/example.page";

describe("Google Search", () => {
    it("should search for specified text", async () => {
        await browser.url("https://www.google.com");
        await (await ExampleClass.searchInput).setValue("WebdriverIO Search Example");
        await browser.keys('Enter');
        await expect(await((await ExampleClass.firstResult).getText())).toContain("WebdriverIO");
    });
});