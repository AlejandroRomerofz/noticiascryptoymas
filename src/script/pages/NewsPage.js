import LoadingIcon from "../utils/LoadingIcon"
import NewsRequest from "../utils/NewsRequest"
import PaginationMenu from "../utils/PaginationMenu"

class NewsPage {

    newsPerPage = 12
    totalPages = 1
    types = []
    page = 1
    newsContainer
    pagination

    init() {
        this.createNews()
        this.pagination = new PaginationMenu(this.newsContainer.parentElement, this.totalPages)
        this.pagination.onSelectedChange = (number) => {
            console.log(number)
            this.page = number
            this.createNews()
        }
    }

    createNews() {
        this.resetContainer()
        const loading =  new LoadingIcon("#"+this.newsContainer.id)
        loading.startLoading()
        new NewsRequest().getNews(this.types, this.newsPerPage, (this.page - 1) * this.newsPerPage, true).then((news) => {
            this.totalPages = Math.ceil(news[1] / this.newsPerPage)
            this.pagination.setPageNumber(this.totalPages)
            news[0].map((newData) => {
                new NewsRequest().createNewsElement(this.newsContainer, newData);
            })
            loading.stopLoading()
        })
    }

    resetContainer() {
        this.newsContainer.querySelectorAll(".cont-new").forEach(element => {
            element.remove()
        });
    }

    pageUp() {
        this.page = this.page + 1
        this.onPageChange()
    }

    pageDown() {
        if (this.page != 0) {
            this.spage = this.page-1
        }
        this.onPageChange()
    }

    onPageChange() {
        this.createNews()
    }
}

export default NewsPage