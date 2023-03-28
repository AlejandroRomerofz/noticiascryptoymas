import NewsPage from "./NewsPage"

class AllNews extends NewsPage {

    types = ["bitcoin", "blockchain", "ethereum"]
    newsContainer = document.querySelector("#all_news")

}

export default AllNews