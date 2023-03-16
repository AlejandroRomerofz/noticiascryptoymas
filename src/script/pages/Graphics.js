import CoinsRequest from "../utils/CoinsRequest"
import LoadingIcon from "../utils/LoadingIcon"

class Graphics {

    graphicContainer = document.querySelector(".graphics-container")
    viewMoreButton = document.querySelector("#view_more")
    page = 1;


    init() {
        this.viewMoreInit()
        this.getCryptos(4, 0)
    }

    viewMoreInit() {
        this.viewMoreButton.addEventListener("click", () => {
            this.page++
            this.getCryptos(4, 4 * this.page)
        })
    }

    getCryptos(number, offset) {
        const loading = new LoadingIcon(".graphics-container")
        loading.startLoading()
        new CoinsRequest().getAllCrypto(number, "USD", offset).then((data) => {
            data.map((crypto) => {
                this.createWidget(this.graphicContainer, crypto.name, crypto.code)
            })
            loading.stopLoading()
        })
    }

    createWidget(container, cryptoName, cryptoIdent, CryptoImage) {
        const cont = document.createElement("div")
        cont.classList.add("graphic")

        const title = document.createElement("p")
        title.textContent = cryptoName
        title.classList.add("font-bold")

        const graphic = document.createElement("iframe")
        graphic.src = `https://bit2me.com/widget/chart/v1?currency=${cryptoIdent}&fiat=USD`
        graphic.setAttribute("frameborder", "0")

        cont.append(title)
        cont.append(graphic)

        container.append(cont)
    }

}

export default Graphics