// gshome.spec.ts
import GameStopHome from "../pages/gshome.page";

describe("GameStop Website...", () => {
    beforeAll(async() => {
        await browser.url("https://www.gamestop.com");
    })
    it("should include featured categories", async () => {
        expect(await GameStopHome.videoGames.isDisplayed()).toBe(true);
        expect(await GameStopHome.controllers.isDisplayed()).toBe(true);
        expect(await GameStopHome.pcGaming.isDisplayed()).toBe(true);
        expect(await GameStopHome.electronics.isDisplayed()).toBe(true);
        expect(await GameStopHome.keyboards.isDisplayed()).toBe(true);
        expect(await GameStopHome.headsets.isDisplayed()).toBe(true);
        expect(await GameStopHome.toys.isDisplayed()).toBe(true);
        expect(await GameStopHome.boardGames.isDisplayed()).toBe(true);
        expect(await GameStopHome.clothing.isDisplayed()).toBe(true);
        expect(await GameStopHome.lifestyle.isDisplayed()).toBe(true);
    });
    it("should be able to search for specified text", async () => {
        //await browser.url("https://www.gamestop.com");
        await GameStopHome.searchBar.setValue("playstation 5");
        await browser.keys('Enter');
        expect(await GameStopHome.firstResult.getText()).toContain("PlayStation 5 Console");
        expect(await GameStopHome.secondResult.getText()).toContain("PlayStation 5 Digital Edition Console");
    });
    it("should be able to add an item to cart", async () => {
        await GameStopHome.searchBar.setValue("super mario odyssey");
        await browser.keys('Enter');
        await GameStopHome.gameOne.click();
        await GameStopHome.addToCartBtn.click();
        await browser.pause(500);
        await GameStopHome.keepShopping.click();
        expect(+(await GameStopHome.cartQuantity.getText())).toBe(1);
    });
    it("should be able to add another item to cart", async () => {
        await GameStopHome.searchBar.setValue("gran turismo");
        await browser.keys('Enter');
        await GameStopHome.gameTwo.click();
        await GameStopHome.addToCartBtn.click();
        await browser.pause(500);
        await GameStopHome.keepShopping.click();
        expect(+(await GameStopHome.cartQuantity.getText())).toBe(2);
    });
    it("should confirm that two items are in the cart", async () => {
        await GameStopHome.cartLink.click();
        expect(await GameStopHome.numberOfItems.getText()).toBe("2 Items");
        expect(await GameStopHome.gameOneName.isDisplayed()).toBe(true);
        expect(await GameStopHome.gameTwoName.isDisplayed()).toBe(true);
    });
    it("should be able to remove an item from the cart", async () => {
        await GameStopHome.removeGameOne.click();
        await GameStopHome.confirmRemove.click();
        await browser.pause(1000);
        expect(await GameStopHome.numberOfItems.getText()).toBe("1 Item");
        expect(await GameStopHome.gameOneName.isDisplayed()).toBe(false);
        expect(await GameStopHome.gameTwoName.isDisplayed()).toBe(true);
    });
    it("should be able to confirm an empty cart", async () => {
        await GameStopHome.removeGameTwo.click();
        await GameStopHome.confirmRemove.click();
        //await browser.pause(1000);
        await GameStopHome.emptyCartLabel.waitForDisplayed({ timeout: 3000 });
        expect(await GameStopHome.emptyCartLabel.isDisplayed()).toBe(true);
        expect(await GameStopHome.emptyCartLabel.getText()).toBe("Your Shopping Cart is Empty");
    });
    it("should be able to sign into your account", async () => {
        await GameStopHome.logIntoAccount(GameStopHome.email, GameStopHome.password);
        await GameStopHome.userAccount.waitForDisplayed({ timeout: 3000 });
        expect(await GameStopHome.userAccount.isDisplayed()).toBe(true);
    });
    it("should be able to confirm the user's name", async () => {
        await GameStopHome.userAccount.click();
        await GameStopHome.usersName.waitForDisplayed({ timeout: 3000 });
        let fname = await GameStopHome.usersName.getText();
        await GameStopHome.closeAcctModal.click();
        expect(fname).toBe("Tester");
    });
    it("should be able to sign out of your account", async () => {
        await GameStopHome.signOutOfAccount();
    });
    it("should not be able to sign in with wrong credentials", async () => {
        await GameStopHome.logIntoAccount("watermoc@email.com","6909nhuyg_p#a");
        await GameStopHome.failedLoginAlert.waitForDisplayed({ timeout: 3000 });
        expect(await GameStopHome.failedLoginAlert.isDisplayed()).toBe(true);
    });
});
