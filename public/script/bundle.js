/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://html/./src/style/index.scss?");

/***/ }),

/***/ "./src/script/index.js":
/*!*****************************!*\
  !*** ./src/script/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/index.scss */ \"./src/style/index.scss\");\n/* harmony import */ var _pages_Graphics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Graphics */ \"./src/script/pages/Graphics.js\");\n/* harmony import */ var _pages_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Header */ \"./src/script/pages/Header.js\");\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Home */ \"./src/script/pages/Home.js\");\n\n\n\n\n\nwindow.addEventListener(\"DOMContentLoaded\", () => {\n    init()\n})\n\nconst routes = {\n    \"/hola\" : function(){console.log(\"aaaa\")},\n    \"\" : function() {\n        new _pages_Home__WEBPACK_IMPORTED_MODULE_3__[\"default\"]().init()\n    },\n    \"/graphics/crypto\" : function() {\n        new _pages_Graphics__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().init()\n    }\n}\n\nfunction init() {\n    var uri = window.location.pathname\n\n    if (uri.substring(uri.length - 1) == \"/\") {\n        uri = uri.substring(0, uri.length - 1)\n    }\n\n    new _pages_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"]().init()\n\n    console.log(uri)\n\n    const controller = routes[uri]\n    if(controller != undefined) {\n        controller()\n    }\n    \n}\n\n\n\n//# sourceURL=webpack://html/./src/script/index.js?");

/***/ }),

/***/ "./src/script/pages/Graphics.js":
/*!**************************************!*\
  !*** ./src/script/pages/Graphics.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_CoinsRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/CoinsRequest */ \"./src/script/utils/CoinsRequest.js\");\n/* harmony import */ var _utils_LoadingIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/LoadingIcon */ \"./src/script/utils/LoadingIcon.js\");\n\n\n\nclass Graphics {\n\n    graphicContainer = document.querySelector(\".graphics-container\")\n    viewMoreButton = document.querySelector(\"#view_more\")\n    page = 1;\n\n\n    init() {\n        this.viewMoreInit()\n        this.getCryptos(4, 0)\n    }\n\n    viewMoreInit() {\n        this.viewMoreButton.addEventListener(\"click\", () => {\n            this.page++\n            this.getCryptos(4, 4 * this.page)\n        })\n    }\n\n    getCryptos(number, offset) {\n        const loading = new _utils_LoadingIcon__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\".graphics-container\")\n        loading.startLoading()\n        new _utils_CoinsRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().getAllCrypto(number, \"USD\", offset).then((data) => {\n            data.map((crypto) => {\n                this.createWidget(this.graphicContainer, crypto.name, crypto.code)\n            })\n            loading.stopLoading()\n        })\n    }\n\n    createWidget(container, cryptoName, cryptoIdent, CryptoImage) {\n        const cont = document.createElement(\"div\")\n        cont.classList.add(\"graphic\")\n\n        const title = document.createElement(\"p\")\n        title.textContent = cryptoName\n        title.classList.add(\"font-bold\")\n\n        const graphic = document.createElement(\"iframe\")\n        graphic.src = `https://bit2me.com/widget/chart/v1?currency=${cryptoIdent}&fiat=USD`\n        graphic.setAttribute(\"frameborder\", \"0\")\n\n        cont.append(title)\n        cont.append(graphic)\n\n        container.append(cont)\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Graphics);\n\n//# sourceURL=webpack://html/./src/script/pages/Graphics.js?");

/***/ }),

/***/ "./src/script/pages/Header.js":
/*!************************************!*\
  !*** ./src/script/pages/Header.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\nclass Header {\n\n    header = document.querySelector(\"#main_header\")\n    headerSustitute = document.querySelector(\"#header_sustitute\")\n    topOfPage = document.querySelector(\"#top_of_page\")\n    options = document.querySelectorAll(\".mh-nav-option\")\n\n    openMobileMenuButton = document.querySelector(\"#menu_open_button\")\n    mobileMenu = document.querySelector(\"#mobile_menu_container\")\n    blackScreen = document.querySelector(\"#black_screen\")\n\n    searchContainer = document.querySelector(\"#search_container\")\n    searchOpenButton = document.querySelector(\"#search_open_button\")\n    searchCloseButton = document.querySelector(\"#search_close_button\")\n    searchButton = document.querySelector(\"#search_button\")\n\n    \n\n    init() {\n        this.initMobileMenu()\n        this.addHoverEventToOptions()\n        this.createIntersectionObserver()\n        this.createSearchEvents()\n    }\n\n    initMobileMenu() {\n        this.blackScreen.addEventListener(\"click\", () => {\n            this.mobileMenuClose()\n        })\n        this.openMobileMenuButton.addEventListener(\"click\", () => {\n            this.mobileMenuOpen()\n        })\n    }\n\n    mobileMenuOpen() {\n        if (!this.mobileMenu.classList.contains(\"show\")) {\n            this.mobileMenu.classList.add(\"show\")        \n        }\n        if (!this.blackScreen.classList.contains(\"show\")) {\n            this.blackScreen.classList.add(\"show\")\n        }\n    }\n\n    mobileMenuClose() {\n        if (this.mobileMenu.classList.contains(\"show\")) {\n            this.mobileMenu.classList.remove(\"show\")\n        }\n        if (this.blackScreen.classList.contains(\"show\")) {\n            this.blackScreen.classList.remove(\"show\")\n        }\n    }\n\n    addHoverEventToOptions() {\n        this.options.forEach((option) => {\n            option.addEventListener(\"mouseover\", (e) => {\n                this.showDropMenu(option)\n            })\n            option.addEventListener(\"mouseleave\", (e) => {\n                this.hideDropMenu(option)\n            })\n        })\n    }\n\n    hideDropMenu(option) {\n        const dropMenu = option.querySelector(\".mh-option-drop\")\n        if (dropMenu.classList.contains(\"show\")) {\n            dropMenu.classList.remove(\"show\")\n        }\n    }\n\n    showDropMenu(option) {\n        const dropMenu = option.querySelector(\".mh-option-drop\")\n        dropMenu.classList.add(\"show\")  \n    }\n\n    createIntersectionObserver() {\n        new IntersectionObserver((entries, observer) => {\n            entries.forEach((entry) => {\n                if (entry.isIntersecting) {\n                    this.convertToBigHeader()\n                } else {\n                    this.convertToSmallHeader()\n                }\n            })\n        }).observe(this.topOfPage)\n    }\n\n    convertToSmallHeader() {\n        if (!this.header.classList.contains(\"small\")) {\n            this.header.classList.add(\"small\")\n            this.headerSustitute.classList.add(\"show\")\n        }\n    }\n\n    convertToBigHeader() {\n        if (this.header.classList.contains(\"small\")) {\n            this.header.classList.remove(\"small\")\n            this.headerSustitute.classList.remove(\"show\")\n        }\n    }\n\n    createSearchEvents() {\n        this.searchOpenButton.addEventListener(\"click\", () => {\n            this.showSearchContainer()\n        })\n        this.searchCloseButton.addEventListener(\"click\", () => {\n            this.hideSearchContainer()\n        })\n    }\n\n    showSearchContainer() {\n        if (!this.searchContainer.classList.contains(\"show\")) {\n            this.searchContainer.classList.add(\"show\")\n        }\n    }\n\n    hideSearchContainer() {\n        if (this.searchContainer.classList.contains(\"show\")) {\n            this.searchContainer.classList.remove(\"show\")\n        }\n    }\n}\n\n//# sourceURL=webpack://html/./src/script/pages/Header.js?");

/***/ }),

/***/ "./src/script/pages/Home.js":
/*!**********************************!*\
  !*** ./src/script/pages/Home.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _utils_CoinsRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/CoinsRequest */ \"./src/script/utils/CoinsRequest.js\");\n/* harmony import */ var _utils_CryptoCalculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/CryptoCalculator */ \"./src/script/utils/CryptoCalculator.js\");\n/* harmony import */ var _utils_LoadingIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/LoadingIcon */ \"./src/script/utils/LoadingIcon.js\");\n/* harmony import */ var _utils_NewsRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/NewsRequest */ \"./src/script/utils/NewsRequest.js\");\n\n\n\n\n\nclass Home {\n\n    container = document.querySelector(\"#cont_bestcrypto\")\n\n\n    init() {\n        this.initTopCoins()\n        this.initCalculator()\n        this.getTopNews()\n    }\n\n\n    /*TOP COINS*/\n\n    initTopCoins() {\n        const loading = new _utils_LoadingIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\".cont-bestcrypto\")\n        loading.startLoading()\n        new _utils_CoinsRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().getAllCrypto(10).then((json) => {\n            loading.stopLoading() \n            json.map((d) => {\n                this.createTopCoinsElements(d)\n            })\n        })\n\n    }\n\n    createTopCoinsElements(coinDataJSon) {\n        /*<div class=\"bc-crypto\">\n            <img class=\"bcc-image\" src=\"/public/res/images/logo_small.png\" alt=\"\">\n                <div class=\"bcc-title\">\n                    <p class=\"bcc-small-title\">BTC</p>\n                    <p class=\"bcc-big-title\">Bitcoin</p>\n                </div>\n                <div class=\"bcc-value\">\n                    <p class=\"bcv-coin-value\">32423$</p>\n                    <div class=\"bcv-evo\">\n                        <p class=\"bcve-percentage\">23.5%</p>\n                        <p class=\"bcve-time\">10d</p>\n                    </div>\n                </div>\n        </div>*/\n        const div = document.createElement(\"a\")\n        div.classList.add(\"bc-crypto\")\n\n        const image = document.createElement(\"img\")\n        image.classList.add(\"bcc-image\")\n        image.src = coinDataJSon.webp32\n\n        const titleDiv = document.createElement(\"div\")\n        titleDiv.classList.add(\"bcc-title\")\n\n        const smallTitle = document.createElement(\"p\")\n        smallTitle.classList.add(\"bcc-small-title\")\n        smallTitle.textContent = coinDataJSon.code\n\n        const bigTitle = document.createElement(\"p\")\n        bigTitle.classList.add(\"bcc-big-title\")\n        bigTitle.textContent = coinDataJSon.name\n\n        titleDiv.append(smallTitle)\n        titleDiv.append(bigTitle)\n\n        const valueDiv = document.createElement(\"div\")\n        valueDiv.classList.add(\"bcc-value\")\n\n        const coinValue = document.createElement(\"p\")\n        coinValue.classList.add(\"bcv-coin-value\")\n        coinValue.textContent = `${coinDataJSon.rate.toFixed(2)}$`\n\n        const bcvEvo = document.createElement(\"div\")\n        bcvEvo.classList.add(\"bcv-evo\")\n\n        const evoPerc = document.createElement(\"p\")\n        evoPerc.classList.add(\"bcve-percentage\")\n        evoPerc.textContent = coinDataJSon.delta.month.toFixed(2) + \"%\"\n\n        const evoTime = document.createElement(\"p\")\n        evoTime.classList.add(\"bcve-time\")\n        evoTime.textContent = \"last month\"\n\n        bcvEvo.append(evoPerc)\n        bcvEvo.append(evoTime)\n        valueDiv.append(coinValue)\n        valueDiv.append(bcvEvo)\n\n        div.append(image)\n        div.append(titleDiv)\n        div.append(valueDiv)\n\n        this.container.append(div)\n    }\n\n    /*CALCULATOR*/\n\n\n    valueInput = document.querySelector(\"#cc_value\")\n    coinsSelect = document.querySelector(\"#coin_selector\")\n    cryptoSelect = document.querySelector(\"#crypto_selector\")\n\n\n    fromOutput = document.querySelector(\"#from_output\")\n    toOutput = document.querySelector(\"#to_output\")\n\n    calculator = new _utils_CryptoCalculator__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.valueInput, this.fromOutput, this.toOutput)\n\n\n    initCalculator() {\n        this.addOptions()\n        this.coinsSelect.addEventListener(\"change\", (e) => {\n            \n        })\n        this.cryptoSelect.addEventListener(\"change\", (e) => {\n\n        })\n    }\n\n    addOptions() {\n        new _utils_CoinsRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().getAllCoins().then((coins) => {\n            coins.map((coin) => {\n                this.addCoinOption(coin)\n            })\n            \n        })\n        new _utils_CoinsRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().getAllCrypto(200).then((cryptos) => {\n            cryptos.map((crypto) => {\n                this.addCryptoOption(crypto)\n            })\n        })\n    }\n\n    addCoinOption(coinData) {\n        const option = document.createElement(\"option\")\n        option.value = coinData.code\n        option.textContent = `${coinData.code} ${coinData.name}`\n        this.coinsSelect.appendChild(option)\n    }\n\n    addCryptoOption(cryptoData) {\n        const option = document.createElement(\"option\")\n        option.value = cryptoData.code\n        option.textContent = `${cryptoData.code} ${cryptoData.name}`\n        this.cryptoSelect.appendChild(option)\n    }\n\n    /* NEWS */\n\n    getTopNews() {\n        const loading = new _utils_LoadingIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\".cont-news\")\n        loading.startLoading()\n        new _utils_NewsRequest__WEBPACK_IMPORTED_MODULE_3__[\"default\"]().getNews(8).then((news) => {\n            this.createNewsElements(news)\n            loading.stopLoading()\n        }).catch(error => console.log(error))\n    }\n\n    createNewsElements(news) {\n        const container = document.getElementById(\"news_container\")\n        news.forEach((newData) => {\n            this.createNewsElement(container, newData)\n        })\n    }\n\n    createNewsElement(container, jsonData) {\n        const newItem = document.createElement(\"a\")\n        newItem.classList.add(\"cont-new\")\n        newItem.target = \"_blank\"\n        newItem.href = jsonData.link\n\n        const imgItem = document.createElement(\"img\")\n        imgItem.classList.add(\"new-img\")\n        imgItem.src = jsonData.image\n        newItem.appendChild(imgItem)\n\n        const content = document.createElement(\"div\")\n        content.classList.add(\"content\")\n\n        const titleItem = document.createElement(\"p\")\n        titleItem.classList.add(\"title\")\n        titleItem.textContent = jsonData.title\n        content.appendChild(titleItem)\n\n        const descItem = document.createElement(\"p\")\n        descItem.classList.add(\"description\")\n        descItem.textContent = jsonData.description\n        content.appendChild(descItem)\n\n        newItem.appendChild(content)\n\n        container.append(newItem)\n    }\n\n\n\n\n}\n\n//# sourceURL=webpack://html/./src/script/pages/Home.js?");

/***/ }),

/***/ "./src/script/utils/CoinsRequest.js":
/*!******************************************!*\
  !*** ./src/script/utils/CoinsRequest.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass CoinsRequest {\n\n    token = \"8a04021d-4ffb-457a-83fa-f16f8cdafff0\"\n\n    cryptoList = \"https://api.livecoinwatch.com/coins/list\"\n    coinList = \"https://api.livecoinwatch.com/fiats/all\"\n\n    headers = new Headers({\n        \"content-type\": \"application/json\",\n        \"x-api-key\": this.token,\n    })\n\n    getAllCrypto(limit = 50, compareCoin = \"USD\", offset = 0) {\n        return fetch(this.cryptoList, {\n            method: \"POST\",\n            headers: this.headers,\n            body: JSON.stringify({\n                currency: compareCoin,\n                sort: \"rank\",\n                order: \"ascending\",\n                offset: offset,\n                limit: limit,\n                meta: true,\n            })\n        }).then((data) => {\n            return data.json()\n        })\n    }\n\n    getAllCoins() {\n        return fetch(this.coinList, {\n                method: \"POST\",\n                headers: this.headers,\n                body: JSON.stringify({})\n        }).then((data) => {\n            return data.json()\n        })\n    }\n\n    coinListPromise(resolve, reject) {\n        \n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoinsRequest);\n\n//# sourceURL=webpack://html/./src/script/utils/CoinsRequest.js?");

/***/ }),

/***/ "./src/script/utils/CryptoCalculator.js":
/*!**********************************************!*\
  !*** ./src/script/utils/CryptoCalculator.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass CryptoCalculator {\n\n    coin = \"USD\"\n    crypto = \"BTC\"\n    mode = 0\n\n    fromOutput\n    toOutput\n\n    constructor(inputData, outputFromData, outputToData) {\n        this.fromOutput = outputFromData\n        this.toOutput = outputToData    \n        this.calculate(1)\n\n        inputData.addEventListener(\"keydown\", (e) => {\n            if (isNaN(e.target.value)) {\n                e.target.value = 0\n            }\n            this.calculate(e.target.value)\n        })\n    }\n\n    setCoin(coin) {\n        this.coin = coin\n    }\n\n    setCrypto(crypto) {\n        this.crypto = crypto\n    }\n\n    setMode(mode) {\n        if (mode == 0 || mode == 1) {\n            this.mode = mode\n        } else {\n            this.mode = 0\n        }\n    }\n\n    calculate(val) {\n        if (this.mode == 0) {\n            this.fromOutput.textContent = `${val} ${this.crypto}`\n        } else {\n\n        }\n    }\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CryptoCalculator);\n\n//# sourceURL=webpack://html/./src/script/utils/CryptoCalculator.js?");

/***/ }),

/***/ "./src/script/utils/LoadingIcon.js":
/*!*****************************************!*\
  !*** ./src/script/utils/LoadingIcon.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass LoadingIcon {\n\n    container\n    loadingContainer\n    loadingIcon\n\n    constructor(containerClassOrID) {\n        this.container = document.querySelector(containerClassOrID)\n        if (this.container) {\n            this.loadingContainer = this.container.querySelector(\".loading\")\n        } else {\n            throw new Error(\"No existe el container\")\n        }\n\n        if (!this.loadingContainer) {\n            this.createLoading()\n        } else {\n            this.loadingIcon = this.loadingContainer.querySelector(\".loading-icon\")\n            if (!this.loadingIcon) {\n                this.createIcon()\n            }\n        }\n\n        console.log(this.loadingContainer)\n        console.log(this.loadingIcon) \n    }\n\n    createLoading() {\n        const loading = document.createElement(\"div\")\n        loading.classList.add(\"loading\")\n\n        const icon = document.createElement(\"i\")\n        icon.classList.add(\"loading-icon\")\n        icon.classList.add(\"fa-solid\")\n        icon.classList.add(\"fa-circle-notch\")\n        icon.classList.add(\"fa-spin\")\n\n        loading.appendChild(icon)\n\n        this.loadingContainer = loading\n        this.container.appendChild(loading)\n    }\n\n    createIcon() {\n        const icon = document.createElement(\"i\")\n        icon.classList.add(\"loading-icon\")\n        icon.classList.add(\"fa-solid\")\n        icon.classList.add(\"fa-circle-notch\")\n        icon.classList.add(\"fa-spin\")\n\n        this.loadingContainer.appendChild(icon)\n    }\n\n    startLoading() {\n        if (!this.loadingContainer.classList.contains(\"show\")) {\n            this.loadingContainer.classList.add(\"show\")\n        }\n    }\n\n    stopLoading() {\n        if (this.loadingContainer.classList.contains(\"show\")) {\n            this.loadingContainer.classList.remove(\"show\")\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingIcon);\n\n//# sourceURL=webpack://html/./src/script/utils/LoadingIcon.js?");

/***/ }),

/***/ "./src/script/utils/NewsRequest.js":
/*!*****************************************!*\
  !*** ./src/script/utils/NewsRequest.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass NewsRequest {\n    URL = \"http://80.29.46.216/api/news\"\n\n    getNews(limit = -1, from = 0) {\n        const url = this.URL\n        return new Promise((resolve, reject) => {\n            fetch(url, {method : \"POST\", body : JSON.stringify({mode : 0, lang : \"es\"})}).then((data) => {\n                return data.text()\n            }).then((dataText) => {\n                if (dataText == \"Error\") {\n                    reject(\"Error parameters\")\n                }\n                return new window.DOMParser().parseFromString(dataText, \"text/xml\").querySelectorAll(\"item\")\n            })\n            .then((items) => {\n                if (!items) {\n                    reject(\"Error\")\n                }\n\n                var results = []\n                items.forEach((item) => {\n                    results.push(this.parseJSON(item))\n                })\n                results = results.slice(from, from + limit)\n                resolve(results)\n            })\n            .catch((e) => {\n                reject(e)\n            })\n        })\n    }\n\n    parseJSON(element) {\n        const json = {}\n        json[\"title\"] = element.querySelector(\"title\").textContent\n        var description = new window.DOMParser().parseFromString(element.querySelector(\"description\").textContent, \"text/html\").querySelectorAll(\"p\")\n        json[\"description\"] = description.length > 1 ? description[1].textContent : description[0].textContent\n        json[\"image\"] = element.querySelector(\"enclosure\").getAttribute(\"url\")\n        json[\"date\"] = element.querySelector(\"pubDate\").textContent\n        json[\"link\"] = element.querySelector(\"link\").textContent\n        return json\n\n\n\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsRequest);\n\n//# sourceURL=webpack://html/./src/script/utils/NewsRequest.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script/index.js");
/******/ 	
/******/ })()
;