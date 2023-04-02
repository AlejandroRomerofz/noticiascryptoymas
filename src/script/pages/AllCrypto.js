import AllCryptoRequest from "../utils/AllCryptoRequest"
import LoadingIcon from "../utils/LoadingIcon"

class AllCrypto {

    container = document.querySelector("#crypto_container")

    init() {
        this.getCryptoElements()
    }
    

    getCryptoElements() {
        const loading = new LoadingIcon("#" + this.container.id)
        loading.startLoading()
        new AllCryptoRequest().getAll().then((cryptos) => {
            console.log(cryptos)
            for(const crypto of Object.entries(cryptos)) {
                this.createCryptoElement(crypto[1])
            }
            loading.stopLoading()
        }) 
    }

    createCryptoElement(cryptoInfo) {
        const crypto = document.createElement("a")
        crypto.classList.add("ac-crypto")
        crypto.href = "/crypto?code=" + cryptoInfo.symbol

        const image = document.createElement("img")
        image.src = cryptoInfo.logo

        const symbol = document.createElement("p")
        symbol.classList.add("symbol")
        symbol.textContent = cryptoInfo.symbol

        const title = document.createElement("p")
        title.classList.add("title")
        title.textContent = cryptoInfo.title

        const content = document.createElement("div")
        content.classList.add("acc-content")

        content.appendChild(image)
        content.appendChild(symbol)
        content.appendChild(title)

        crypto.append(content)

        this.container.append(crypto)
    }
}

export default AllCrypto