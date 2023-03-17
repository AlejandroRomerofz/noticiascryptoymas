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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/index.scss */ \"./src/style/index.scss\");\n/* harmony import */ var _pages_Graphics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Graphics */ \"./src/script/pages/Graphics.js\");\n/* harmony import */ var _pages_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Header */ \"./src/script/pages/Header.js\");\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Home */ \"./src/script/pages/Home.js\");\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", () => {\r\n    init()\r\n})\r\n\r\nconst routes = {\r\n    \"/hola\" : function(){console.log(\"aaaa\")},\r\n    \"\" : function() {\r\n        new _pages_Home__WEBPACK_IMPORTED_MODULE_3__[\"default\"]().init()\r\n    },\r\n    \"/graphics/crypto\" : function() {\r\n        new _pages_Graphics__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().init()\r\n    }\r\n}\r\n\r\nfunction init() {\r\n    var uri = window.location.pathname\r\n\r\n    if (uri.substring(uri.length - 1) == \"/\") {\r\n        uri = uri.substring(0, uri.length - 1)\r\n    }\r\n\r\n    new _pages_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"]().init()\r\n\r\n    console.log(uri)\r\n\r\n    const controller = routes[uri]\r\n    if(controller != undefined) {\r\n        controller()\r\n    }\r\n    \r\n}\r\n\r\n\n\n//# sourceURL=webpack://html/./src/script/index.js?");

/***/ }),

/***/ "./src/script/pages/Graphics.js":
/*!**************************************!*\
  !*** ./src/script/pages/Graphics.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_CoinsRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/CoinsRequest */ \"./src/script/utils/CoinsRequest.js\");\n/* harmony import */ var _utils_LoadingIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/LoadingIcon */ \"./src/script/utils/LoadingIcon.js\");\n\r\n\r\n\r\nclass Graphics {\r\n\r\n    graphicContainer = document.querySelector(\".graphics-container\")\r\n    viewMoreButton = document.querySelector(\"#view_more\")\r\n    page = 1;\r\n\r\n\r\n    init() {\r\n        this.viewMoreInit()\r\n        this.getCryptos(4, 0)\r\n    }\r\n\r\n    viewMoreInit() {\r\n        this.viewMoreButton.addEventListener(\"click\", () => {\r\n            this.page++\r\n            this.getCryptos(4, 4 * this.page)\r\n        })\r\n    }\r\n\r\n    getCryptos(number, offset) {\r\n        const loading = new _utils_LoadingIcon__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\".graphics-container\")\r\n        loading.startLoading()\r\n        new _utils_CoinsRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().getAllCrypto(number, \"USD\", offset).then((data) => {\r\n            data.map((crypto) => {\r\n                this.createWidget(this.graphicContainer, crypto.name, crypto.code)\r\n            })\r\n            loading.stopLoading()\r\n        })\r\n    }\r\n\r\n    createWidget(container, cryptoName, cryptoIdent, CryptoImage) {\r\n        const cont = document.createElement(\"div\")\r\n        cont.classList.add(\"graphic\")\r\n\r\n        const title = document.createElement(\"p\")\r\n        title.textContent = cryptoName\r\n        title.classList.add(\"font-bold\")\r\n\r\n        const graphic = document.createElement(\"iframe\")\r\n        graphic.src = `https://bit2me.com/widget/chart/v1?currency=${cryptoIdent}&fiat=USD`\r\n        graphic.setAttribute(\"frameborder\", \"0\")\r\n\r\n        cont.append(title)\r\n        cont.append(graphic)\r\n\r\n        container.append(cont)\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Graphics);\n\n//# sourceURL=webpack://html/./src/script/pages/Graphics.js?");

/***/ }),

/***/ "./src/script/pages/Header.js":
/*!************************************!*\
  !*** ./src/script/pages/Header.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\nclass Header {\r\n\r\n    header = document.querySelector(\"#main_header\")\r\n    headerSustitute = document.querySelector(\"#header_sustitute\")\r\n    topOfPage = document.querySelector(\"#top_of_page\")\r\n    options = document.querySelectorAll(\".mh-nav-option\")\r\n\r\n    openMobileMenuButton = document.querySelector(\"#menu_open_button\")\r\n    mobileMenu = document.querySelector(\"#mobile_menu_container\")\r\n    blackScreen = document.querySelector(\"#black_screen\")\r\n\r\n    searchContainer = document.querySelector(\"#search_container\")\r\n    searchOpenButton = document.querySelector(\"#search_open_button\")\r\n    searchCloseButton = document.querySelector(\"#search_close_button\")\r\n    searchButton = document.querySelector(\"#search_button\")\r\n\r\n    \r\n\r\n    init() {\r\n        this.initMobileMenu()\r\n        this.addHoverEventToOptions()\r\n        this.createIntersectionObserver()\r\n        this.createSearchEvents()\r\n    }\r\n\r\n    initMobileMenu() {\r\n        this.blackScreen.addEventListener(\"click\", () => {\r\n            this.mobileMenuClose()\r\n        })\r\n        this.openMobileMenuButton.addEventListener(\"click\", () => {\r\n            this.mobileMenuOpen()\r\n        })\r\n    }\r\n\r\n    mobileMenuOpen() {\r\n        if (!this.mobileMenu.classList.contains(\"show\")) {\r\n            this.mobileMenu.classList.add(\"show\")        \r\n        }\r\n        if (!this.blackScreen.classList.contains(\"show\")) {\r\n            this.blackScreen.classList.add(\"show\")\r\n        }\r\n    }\r\n\r\n    mobileMenuClose() {\r\n        if (this.mobileMenu.classList.contains(\"show\")) {\r\n            this.mobileMenu.classList.remove(\"show\")\r\n        }\r\n        if (this.blackScreen.classList.contains(\"show\")) {\r\n            this.blackScreen.classList.remove(\"show\")\r\n        }\r\n    }\r\n\r\n    addHoverEventToOptions() {\r\n        this.options.forEach((option) => {\r\n            option.addEventListener(\"mouseover\", (e) => {\r\n                this.showDropMenu(option)\r\n            })\r\n            option.addEventListener(\"mouseleave\", (e) => {\r\n                this.hideDropMenu(option)\r\n            })\r\n        })\r\n    }\r\n\r\n    hideDropMenu(option) {\r\n        const dropMenu = option.querySelector(\".mh-option-drop\")\r\n        if (dropMenu.classList.contains(\"show\")) {\r\n            dropMenu.classList.remove(\"show\")\r\n        }\r\n    }\r\n\r\n    showDropMenu(option) {\r\n        const dropMenu = option.querySelector(\".mh-option-drop\")\r\n        dropMenu.classList.add(\"show\")  \r\n    }\r\n\r\n    createIntersectionObserver() {\r\n        new IntersectionObserver((entries, observer) => {\r\n            entries.forEach((entry) => {\r\n                if (entry.isIntersecting) {\r\n                    this.convertToBigHeader()\r\n                } else {\r\n                    this.convertToSmallHeader()\r\n                }\r\n            })\r\n        }).observe(this.topOfPage)\r\n    }\r\n\r\n    convertToSmallHeader() {\r\n        if (!this.header.classList.contains(\"small\")) {\r\n            this.header.classList.add(\"small\")\r\n            this.headerSustitute.classList.add(\"show\")\r\n        }\r\n    }\r\n\r\n    convertToBigHeader() {\r\n        if (this.header.classList.contains(\"small\")) {\r\n            this.header.classList.remove(\"small\")\r\n            this.headerSustitute.classList.remove(\"show\")\r\n        }\r\n    }\r\n\r\n    createSearchEvents() {\r\n        this.searchOpenButton.addEventListener(\"click\", () => {\r\n            this.showSearchContainer()\r\n        })\r\n        this.searchCloseButton.addEventListener(\"click\", () => {\r\n            this.hideSearchContainer()\r\n        })\r\n    }\r\n\r\n    showSearchContainer() {\r\n        if (!this.searchContainer.classList.contains(\"show\")) {\r\n            this.searchContainer.classList.add(\"show\")\r\n        }\r\n    }\r\n\r\n    hideSearchContainer() {\r\n        if (this.searchContainer.classList.contains(\"show\")) {\r\n            this.searchContainer.classList.remove(\"show\")\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://html/./src/script/pages/Header.js?");

/***/ }),

/***/ "./src/script/pages/Home.js":
/*!**********************************!*\
  !*** ./src/script/pages/Home.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _utils_CoinsRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/CoinsRequest */ \"./src/script/utils/CoinsRequest.js\");\n/* harmony import */ var _utils_CryptoCalculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/CryptoCalculator */ \"./src/script/utils/CryptoCalculator.js\");\n/* harmony import */ var _utils_LoadingIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/LoadingIcon */ \"./src/script/utils/LoadingIcon.js\");\n/* harmony import */ var _utils_NewsRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/NewsRequest */ \"./src/script/utils/NewsRequest.js\");\n\r\n\r\n\r\n\r\n\r\nclass Home {\r\n\r\n    container = document.querySelector(\"#cont_bestcrypto\")\r\n\r\n\r\n    init() {\r\n        this.initTopCoins()\r\n        this.initCalculator()\r\n        this.getTopNews()\r\n    }\r\n\r\n\r\n    /*TOP COINS*/\r\n\r\n    initTopCoins() {\r\n        const loading = new _utils_LoadingIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\".cont-bestcrypto\")\r\n        loading.startLoading()\r\n        new _utils_CoinsRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().getAllCrypto(10).then((json) => {\r\n            loading.stopLoading() \r\n            json.map((d) => {\r\n                this.createTopCoinsElements(d)\r\n            })\r\n        })\r\n\r\n    }\r\n\r\n    createTopCoinsElements(coinDataJSon) {\r\n        /*<div class=\"bc-crypto\">\r\n            <img class=\"bcc-image\" src=\"/public/res/images/logo_small.png\" alt=\"\">\r\n                <div class=\"bcc-title\">\r\n                    <p class=\"bcc-small-title\">BTC</p>\r\n                    <p class=\"bcc-big-title\">Bitcoin</p>\r\n                </div>\r\n                <div class=\"bcc-value\">\r\n                    <p class=\"bcv-coin-value\">32423$</p>\r\n                    <div class=\"bcv-evo\">\r\n                        <p class=\"bcve-percentage\">23.5%</p>\r\n                        <p class=\"bcve-time\">10d</p>\r\n                    </div>\r\n                </div>\r\n        </div>*/\r\n        const div = document.createElement(\"a\")\r\n        div.classList.add(\"bc-crypto\")\r\n\r\n        const image = document.createElement(\"img\")\r\n        image.classList.add(\"bcc-image\")\r\n        image.src = coinDataJSon.webp32\r\n\r\n        const titleDiv = document.createElement(\"div\")\r\n        titleDiv.classList.add(\"bcc-title\")\r\n\r\n        const smallTitle = document.createElement(\"p\")\r\n        smallTitle.classList.add(\"bcc-small-title\")\r\n        smallTitle.textContent = coinDataJSon.code\r\n\r\n        const bigTitle = document.createElement(\"p\")\r\n        bigTitle.classList.add(\"bcc-big-title\")\r\n        bigTitle.textContent = coinDataJSon.name\r\n\r\n        titleDiv.append(smallTitle)\r\n        titleDiv.append(bigTitle)\r\n\r\n        const valueDiv = document.createElement(\"div\")\r\n        valueDiv.classList.add(\"bcc-value\")\r\n\r\n        const coinValue = document.createElement(\"p\")\r\n        coinValue.classList.add(\"bcv-coin-value\")\r\n        coinValue.textContent = `${coinDataJSon.rate.toFixed(2)}$`\r\n\r\n        const bcvEvo = document.createElement(\"div\")\r\n        bcvEvo.classList.add(\"bcv-evo\")\r\n\r\n        const evoPerc = document.createElement(\"p\")\r\n        evoPerc.classList.add(\"bcve-percentage\")\r\n        evoPerc.textContent = coinDataJSon.delta.month.toFixed(2) + \"%\"\r\n\r\n        const evoTime = document.createElement(\"p\")\r\n        evoTime.classList.add(\"bcve-time\")\r\n        evoTime.textContent = \"last month\"\r\n\r\n        bcvEvo.append(evoPerc)\r\n        bcvEvo.append(evoTime)\r\n        valueDiv.append(coinValue)\r\n        valueDiv.append(bcvEvo)\r\n\r\n        div.append(image)\r\n        div.append(titleDiv)\r\n        div.append(valueDiv)\r\n\r\n        this.container.append(div)\r\n    }\r\n\r\n    /*CALCULATOR*/\r\n\r\n\r\n    valueInput = document.querySelector(\"#cc_value\")\r\n    coinsSelect = document.querySelector(\"#coin_selector\")\r\n    cryptoSelect = document.querySelector(\"#crypto_selector\")\r\n\r\n\r\n    fromOutput = document.querySelector(\"#from_output\")\r\n    toOutput = document.querySelector(\"#to_output\")\r\n\r\n    calculator = new _utils_CryptoCalculator__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.valueInput, this.fromOutput, this.toOutput)\r\n\r\n\r\n    initCalculator() {\r\n        this.addOptions()\r\n        this.coinsSelect.addEventListener(\"change\", (e) => {\r\n            \r\n        })\r\n        this.cryptoSelect.addEventListener(\"change\", (e) => {\r\n\r\n        })\r\n    }\r\n\r\n    addOptions() {\r\n        new _utils_CoinsRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().getAllCoins().then((coins) => {\r\n            coins.map((coin) => {\r\n                this.addCoinOption(coin)\r\n            })\r\n            \r\n        })\r\n        new _utils_CoinsRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().getAllCrypto(200).then((cryptos) => {\r\n            cryptos.map((crypto) => {\r\n                this.addCryptoOption(crypto)\r\n            })\r\n        })\r\n    }\r\n\r\n    addCoinOption(coinData) {\r\n        const option = document.createElement(\"option\")\r\n        option.value = coinData.code\r\n        option.textContent = `${coinData.code} ${coinData.name}`\r\n        this.coinsSelect.appendChild(option)\r\n    }\r\n\r\n    addCryptoOption(cryptoData) {\r\n        const option = document.createElement(\"option\")\r\n        option.value = cryptoData.code\r\n        option.textContent = `${cryptoData.code} ${cryptoData.name}`\r\n        this.cryptoSelect.appendChild(option)\r\n    }\r\n\r\n    /* NEWS */\r\n\r\n    getTopNews() {\r\n        const loading = new _utils_LoadingIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\".cont-news\")\r\n        loading.startLoading()\r\n        new _utils_NewsRequest__WEBPACK_IMPORTED_MODULE_3__[\"default\"]().getNews(8).then((news) => {\r\n            this.createNewsElements(news)\r\n            loading.stopLoading()\r\n        }).catch(error => console.log(error))\r\n    }\r\n\r\n    createNewsElements(news) {\r\n        const container = document.getElementById(\"news_container\")\r\n        news.forEach((newData) => {\r\n            this.createNewsElement(container, newData)\r\n        })\r\n    }\r\n\r\n    createNewsElement(container, jsonData) {\r\n        const newItem = document.createElement(\"a\")\r\n        newItem.classList.add(\"cont-new\")\r\n        newItem.target = \"_blank\"\r\n        newItem.href = jsonData.link\r\n\r\n        const imgItem = document.createElement(\"img\")\r\n        imgItem.classList.add(\"new-img\")\r\n        imgItem.src = jsonData.image\r\n        newItem.appendChild(imgItem)\r\n\r\n        const content = document.createElement(\"div\")\r\n        content.classList.add(\"content\")\r\n\r\n        const titleItem = document.createElement(\"p\")\r\n        titleItem.classList.add(\"title\")\r\n        titleItem.textContent = jsonData.title\r\n        content.appendChild(titleItem)\r\n\r\n        const descItem = document.createElement(\"p\")\r\n        descItem.classList.add(\"description\")\r\n        descItem.textContent = jsonData.description\r\n        content.appendChild(descItem)\r\n\r\n        newItem.appendChild(content)\r\n\r\n        container.append(newItem)\r\n    }\r\n\r\n\r\n\r\n\r\n}\n\n//# sourceURL=webpack://html/./src/script/pages/Home.js?");

/***/ }),

/***/ "./src/script/utils/CoinsRequest.js":
/*!******************************************!*\
  !*** ./src/script/utils/CoinsRequest.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass CoinsRequest {\r\n\r\n    token = \"8a04021d-4ffb-457a-83fa-f16f8cdafff0\"\r\n\r\n    cryptoList = \"https://api.livecoinwatch.com/coins/list\"\r\n    coinList = \"https://api.livecoinwatch.com/fiats/all\"\r\n\r\n    headers = new Headers({\r\n        \"content-type\": \"application/json\",\r\n        \"x-api-key\": this.token,\r\n    })\r\n\r\n    getAllCrypto(limit = 50, compareCoin = \"USD\", offset = 0) {\r\n        return fetch(this.cryptoList, {\r\n            method: \"POST\",\r\n            headers: this.headers,\r\n            body: JSON.stringify({\r\n                currency: compareCoin,\r\n                sort: \"rank\",\r\n                order: \"ascending\",\r\n                offset: offset,\r\n                limit: limit,\r\n                meta: true,\r\n            })\r\n        }).then((data) => {\r\n            return data.json()\r\n        })\r\n    }\r\n\r\n    getAllCoins() {\r\n        return fetch(this.coinList, {\r\n                method: \"POST\",\r\n                headers: this.headers,\r\n                body: JSON.stringify({})\r\n        }).then((data) => {\r\n            return data.json()\r\n        })\r\n    }\r\n\r\n    coinListPromise(resolve, reject) {\r\n        \r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoinsRequest);\n\n//# sourceURL=webpack://html/./src/script/utils/CoinsRequest.js?");

/***/ }),

/***/ "./src/script/utils/CryptoCalculator.js":
/*!**********************************************!*\
  !*** ./src/script/utils/CryptoCalculator.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass CryptoCalculator {\r\n\r\n    coin = \"USD\"\r\n    crypto = \"BTC\"\r\n    mode = 0\r\n\r\n    fromOutput\r\n    toOutput\r\n\r\n    constructor(inputData, outputFromData, outputToData) {\r\n        this.fromOutput = outputFromData\r\n        this.toOutput = outputToData    \r\n        this.calculate(1)\r\n\r\n        inputData.addEventListener(\"keydown\", (e) => {\r\n            if (isNaN(e.target.value)) {\r\n                e.target.value = 0\r\n            }\r\n            this.calculate(e.target.value)\r\n        })\r\n    }\r\n\r\n    setCoin(coin) {\r\n        this.coin = coin\r\n    }\r\n\r\n    setCrypto(crypto) {\r\n        this.crypto = crypto\r\n    }\r\n\r\n    setMode(mode) {\r\n        if (mode == 0 || mode == 1) {\r\n            this.mode = mode\r\n        } else {\r\n            this.mode = 0\r\n        }\r\n    }\r\n\r\n    calculate(val) {\r\n        if (this.mode == 0) {\r\n            this.fromOutput.textContent = `${val} ${this.crypto}`\r\n        } else {\r\n\r\n        }\r\n    }\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CryptoCalculator);\n\n//# sourceURL=webpack://html/./src/script/utils/CryptoCalculator.js?");

/***/ }),

/***/ "./src/script/utils/LoadingIcon.js":
/*!*****************************************!*\
  !*** ./src/script/utils/LoadingIcon.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass LoadingIcon {\r\n\r\n    container\r\n    loadingContainer\r\n    loadingIcon\r\n\r\n    constructor(containerClassOrID) {\r\n        this.container = document.querySelector(containerClassOrID)\r\n        if (this.container) {\r\n            this.loadingContainer = this.container.querySelector(\".loading\")\r\n        } else {\r\n            throw new Error(\"No existe el container\")\r\n        }\r\n\r\n        if (!this.loadingContainer) {\r\n            this.createLoading()\r\n        } else {\r\n            this.loadingIcon = this.loadingContainer.querySelector(\".loading-icon\")\r\n            if (!this.loadingIcon) {\r\n                this.createIcon()\r\n            }\r\n        }\r\n\r\n        console.log(this.loadingContainer)\r\n        console.log(this.loadingIcon) \r\n    }\r\n\r\n    createLoading() {\r\n        const loading = document.createElement(\"div\")\r\n        loading.classList.add(\"loading\")\r\n\r\n        const icon = document.createElement(\"i\")\r\n        icon.classList.add(\"loading-icon\")\r\n        icon.classList.add(\"fa-solid\")\r\n        icon.classList.add(\"fa-circle-notch\")\r\n        icon.classList.add(\"fa-spin\")\r\n\r\n        loading.appendChild(icon)\r\n\r\n        this.loadingContainer = loading\r\n        this.container.appendChild(loading)\r\n    }\r\n\r\n    createIcon() {\r\n        const icon = document.createElement(\"i\")\r\n        icon.classList.add(\"loading-icon\")\r\n        icon.classList.add(\"fa-solid\")\r\n        icon.classList.add(\"fa-circle-notch\")\r\n        icon.classList.add(\"fa-spin\")\r\n\r\n        this.loadingContainer.appendChild(icon)\r\n    }\r\n\r\n    startLoading() {\r\n        if (!this.loadingContainer.classList.contains(\"show\")) {\r\n            this.loadingContainer.classList.add(\"show\")\r\n        }\r\n    }\r\n\r\n    stopLoading() {\r\n        if (this.loadingContainer.classList.contains(\"show\")) {\r\n            this.loadingContainer.classList.remove(\"show\")\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingIcon);\n\n//# sourceURL=webpack://html/./src/script/utils/LoadingIcon.js?");

/***/ }),

/***/ "./src/script/utils/NewsRequest.js":
/*!*****************************************!*\
  !*** ./src/script/utils/NewsRequest.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass NewsRequest {\r\n    URL = \"http://localhost/api/news\"\r\n\r\n    getNews(limit = -1, from = 0) {\r\n        const url = this.URL\r\n        return new Promise((resolve, reject) => {\r\n            fetch(url, {method : \"POST\", body : JSON.stringify({mode : 0, lang : \"es\"})}).then((data) => {\r\n                return data.text()\r\n            }).then((dataText) => {\r\n                if (dataText == \"Error\") {\r\n                    reject(\"Error parameters\")\r\n                }\r\n                return new window.DOMParser().parseFromString(dataText, \"text/xml\").querySelectorAll(\"item\")\r\n            })\r\n            .then((items) => {\r\n                if (!items) {\r\n                    reject(\"Error\")\r\n                }\r\n\r\n                var results = []\r\n                items.forEach((item) => {\r\n                    results.push(this.parseJSON(item))\r\n                })\r\n                results = results.slice(from, from + limit)\r\n                resolve(results)\r\n            })\r\n            .catch((e) => {\r\n                reject(e)\r\n            })\r\n        })\r\n    }\r\n\r\n    parseJSON(element) {\r\n        const json = {}\r\n        json[\"title\"] = element.querySelector(\"title\").textContent\r\n        var description = new window.DOMParser().parseFromString(element.querySelector(\"description\").textContent, \"text/html\").querySelectorAll(\"p\")\r\n        json[\"description\"] = description.length > 1 ? description[1].textContent : description[0].textContent\r\n        json[\"image\"] = element.querySelector(\"enclosure\").getAttribute(\"url\")\r\n        json[\"date\"] = element.querySelector(\"pubDate\").textContent\r\n        json[\"link\"] = element.querySelector(\"link\").textContent\r\n        return json\r\n\r\n\r\n\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsRequest);\n\n//# sourceURL=webpack://html/./src/script/utils/NewsRequest.js?");

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