import NewsPage from "./NewsPage"

class CryptoNews extends NewsPage {

    types = ["bitcoin", "blockchain", "ethereum"]
    newsContainer = document.querySelector("#crypto_news")

}

export default CryptoNews