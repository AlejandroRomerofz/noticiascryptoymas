import CoinsRequest from "../utils/CoinsRequest"
import CryptoCalculator from "../utils/CryptoCalculator"
import LoadingIcon from "../utils/LoadingIcon"
import NewsRequest from "../utils/NewsRequest"

export default class Home {

    container = document.querySelector("#cont_bestcrypto")


    init() {
        this.initTopCoins()
        this.initCalculator()
        this.getTopNews()
    }


    /*TOP COINS*/

    initTopCoins() {
        const loading = new LoadingIcon(".cont-bestcrypto")
        loading.startLoading()
        new CoinsRequest().getAllCrypto(10).then((json) => {
            loading.stopLoading() 
            json.map((d) => {
                this.createTopCoinsElements(d)
            })
        })

    }

    createTopCoinsElements(coinDataJSon) {
        /*<div class="bc-crypto">
            <img class="bcc-image" src="/public/res/images/logo_small.png" alt="">
                <div class="bcc-title">
                    <p class="bcc-small-title">BTC</p>
                    <p class="bcc-big-title">Bitcoin</p>
                </div>
                <div class="bcc-value">
                    <p class="bcv-coin-value">32423$</p>
                    <div class="bcv-evo">
                        <p class="bcve-percentage">23.5%</p>
                        <p class="bcve-time">10d</p>
                    </div>
                </div>
        </div>*/
        const div = document.createElement("a")
        div.classList.add("bc-crypto")

        const image = document.createElement("img")
        image.classList.add("bcc-image")
        image.src = coinDataJSon.webp32

        const titleDiv = document.createElement("div")
        titleDiv.classList.add("bcc-title")

        const smallTitle = document.createElement("p")
        smallTitle.classList.add("bcc-small-title")
        smallTitle.textContent = coinDataJSon.code

        const bigTitle = document.createElement("p")
        bigTitle.classList.add("bcc-big-title")
        bigTitle.textContent = coinDataJSon.name

        titleDiv.append(smallTitle)
        titleDiv.append(bigTitle)

        const valueDiv = document.createElement("div")
        valueDiv.classList.add("bcc-value")

        const coinValue = document.createElement("p")
        coinValue.classList.add("bcv-coin-value")
        coinValue.textContent = `${coinDataJSon.rate.toFixed(2)}$`

        const bcvEvo = document.createElement("div")
        bcvEvo.classList.add("bcv-evo")

        const evoPerc = document.createElement("p")
        evoPerc.classList.add("bcve-percentage")
        evoPerc.textContent = coinDataJSon.delta.month.toFixed(2) + "%"

        const evoTime = document.createElement("p")
        evoTime.classList.add("bcve-time")
        evoTime.textContent = "last month"

        bcvEvo.append(evoPerc)
        bcvEvo.append(evoTime)
        valueDiv.append(coinValue)
        valueDiv.append(bcvEvo)

        div.append(image)
        div.append(titleDiv)
        div.append(valueDiv)

        this.container.append(div)
    }

    /*CALCULATOR*/


    valueInput = document.querySelector("#cc_value")
    selectors = document.querySelector(".cc-selectors")
    coinsSelect = document.querySelector("#coin_selector")
    cryptoSelect = document.querySelector("#crypto_selector")


    fromOutput = document.querySelector("#from_output")
    toOutput = document.querySelector("#to_output")
    switchButton = document.querySelector("#crypto_switch")

    convertor = new CryptoConvert(/*options?*/);
    calculator = new CryptoCalculator(this.valueInput, this.fromOutput, this.toOutput, this.convertor)


    initCalculator() {
        this.addOptions()
        this.switchButtonInit()

        this.coinsSelect.addEventListener("change", (e) => {
            this.calculator.setCoin(e.target.value)
        })
        this.cryptoSelect.addEventListener("change", (e) => {
            this.calculator.setCrypto(e.target.value)
        })
    }

    switchButtonInit() {
        this.switchButton.addEventListener("click", () => {
            this.selectors.classList.toggle("inverse")

            this.calculator.switchMode()
        })
    }

    addOptions() {
        this.convertor.ready().then(() => {
            for(var key in this.convertor.cryptoInfo) {
                const crypto = this.convertor.cryptoInfo[key]
                this.addCryptoOption(crypto)
            }
            this.calculator.setCrypto(this.cryptoSelect.value)
        })
        new CoinsRequest().getAllCoins().then((coins) => {
            coins.map((coin) => {

                if(this.convertor.list["fiat"].includes(coin.code)) {
                    this.addCoinOption(coin)
                }
            })
            this.calculator.setCoin(this.coinsSelect.value)
            
        })
    }

    addCoinOption(coinData) {
        const option = document.createElement("option")
        option.value = coinData.code
        option.textContent = `${coinData.code} ${coinData.name}`
        this.coinsSelect.appendChild(option)
    }

    addCryptoOption(cryptoData) {
        const option = document.createElement("option")
        option.value = cryptoData.symbol
        option.textContent = `${cryptoData.symbol} ${cryptoData.title}`
        this.cryptoSelect.appendChild(option)
    }

    /* NEWS */

    getTopNews() {
        const loading = new LoadingIcon(".cont-news")
        loading.startLoading()
        new NewsRequest().getNews(["all"],8).then((news) => {
            this.createNewsElements(news)
            loading.stopLoading()
        }).catch(() => {this.errorElement(); loading.stopLoading()})
    }

    errorElement() {
        const container = document.getElementById("news_container")
        const newItem = document.createElement("p")
        newItem.classList.add("text-error")
        newItem.textContent = "Ha ocurrido un error al obtener las noticias"
        container.appendChild(newItem)
    }

    createNewsElements(news) {
        const container = document.getElementById("news_container")
        news.forEach((newData) => {
            new NewsRequest().createNewsElement(container, newData)
        })
    }





}