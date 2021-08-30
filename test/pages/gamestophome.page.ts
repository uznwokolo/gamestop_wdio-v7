// gamestophome.page.ts
class GameStopHome {
    // Homepage
    get gamestopLogo() { return $("//a[@title='GameStop Home']") }
    get hamburgerMenu() { return $("//button[@class='navbar-toggler']") }
    get searchBar() { return $("input[name='q']") }
    get signInLink() { return $("a[id='account-modal-link-nocache']") }
    get cartLink() { return $("a[class='minicart-link']") }
    get findAStore() { return $("//span[contains(text(), 'store')]") }
    get tradeInLink() { return $("//span[contains(text(), 'Trade-Ins')]") }
    get giftCardsLink() { return $("//a[@data-name='Gift Cards']") }
    // Featured categories
    get videoGames() { return $("//p[contains(text(), 'Video Games')]") }
    get controllers() { return $("//p[contains(text(), 'Controllers')]") }
    get pcGaming() { return $("//p[contains(text(), 'PC Gaming')]") }
    get electronics() { return $("//p[contains(text(), 'Electronics')]") }
    get keyboards() { return $("//p[contains(text(), 'Keyboards')]") }
    get headsets() { return $("//p[contains(text(), 'Headsets')]") }
    get toys() { return $("//p[contains(text(), 'Toys')]") }
    get boardGames() { return $("//p[contains(text(), 'Games')]") }
    get clothing() { return $("//p[contains(text(), 'Clothing')]") }
    get lifestyle() { return $("//p[contains(text(), 'Lifestyle')]") }
    // Search results
    get firstResult() { return $("(//a[@class='link-name'])[1]") }
    get secondResult() { return $("(//a[@class='link-name'])[2]") }
    // Cart options
    get addToCartBtn() { return $("#add-to-cart") }
    get keepShopping() { return $("//a[contains(text(),'Keep Shopping')]") }
    get cartQuantity() { return $("(//span[contains(@class, 'minicart-quantity')])[1]") }
    get numberOfItems() { return $("//span[contains(@class, 'deliveryItemCount')]") }
    get removeItem() { return $("//a[contains(text(),'Remove')]") }
    get confirmRemove() { return $("#minicart-delete-confirmation-btn") }
    get emptyCartLabel() { return $("//h1") }
    // Game items
    get gameOne() { return $("//a[@title='Super Mario Odyssey - Nintendo Switch']") }
    get gameOneName() { return $("//a[contains(text(),'Super Mario Odyssey')]") }
    get removeGameOne() { return $("//a[@class='remove-btn remove-product remove-line-hyperlink' and @data-name='Super Mario Odyssey']") }
    get gameTwo() { return $("//a[@title='Gran Turismo Sport - PlayStation 4']") }
    get gameTwoName() { return $("//a[contains(text(),'Gran Turismo Sport')]") }
    get removeGameTwo() { return $("//a[@class='remove-btn remove-product remove-line-hyperlink' and @data-name='Gran Turismo Sport']") }
    
}

export default new GameStopHome()