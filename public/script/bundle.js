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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/index.scss */ \"./src/style/index.scss\");\n/* harmony import */ var _pages_AllNews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/AllNews */ \"./src/script/pages/AllNews.js\");\n/* harmony import */ var _pages_BitcoinNews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/BitcoinNews */ \"./src/script/pages/BitcoinNews.js\");\n/* harmony import */ var _pages_BlockchainNews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/BlockchainNews */ \"./src/script/pages/BlockchainNews.js\");\n/* harmony import */ var _pages_EthereumNews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/EthereumNews */ \"./src/script/pages/EthereumNews.js\");\n/* harmony import */ var _pages_Graphics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Graphics */ \"./src/script/pages/Graphics.js\");\n/* harmony import */ var _pages_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Header */ \"./src/script/pages/Header.js\");\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/Home */ \"./src/script/pages/Home.js\");\n\n\n\n\n\n\n\n\n\nwindow.addEventListener(\"DOMContentLoaded\", () => {\n    init()\n})\n\nconst routes = {\n    \"/hola\" : function(){console.log(\"aaaa\")},\n    \"\" : function() {\n        new _pages_Home__WEBPACK_IMPORTED_MODULE_7__[\"default\"]().init()\n    },\n    \"/graphics/crypto\" : function() {\n        new _pages_Graphics__WEBPACK_IMPORTED_MODULE_5__[\"default\"]().init()\n    },\n    \"/news/bitcoin\" : function() {\n        new _pages_BitcoinNews__WEBPACK_IMPORTED_MODULE_2__[\"default\"]().init()\n    },\n    \"/news/ethereum\" : function() {\n        new _pages_EthereumNews__WEBPACK_IMPORTED_MODULE_4__[\"default\"]().init()\n    },\n    \"/news/blockchain\" : function() {\n        new _pages_BlockchainNews__WEBPACK_IMPORTED_MODULE_3__[\"default\"]().init()\n    },\n    \"/news/all\" : function() {\n        new _pages_AllNews__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().init()\n    }\n    \n    \n\n}\n\nfunction init() {\n    var uri = window.location.pathname\n\n    if (uri.substring(uri.length - 1) == \"/\") {\n        uri = uri.substring(0, uri.length - 1)\n    }\n\n    new _pages_Header__WEBPACK_IMPORTED_MODULE_6__[\"default\"]().init()\n\n    console.log(uri)\n\n    const controller = routes[uri]\n    if(controller != undefined) {\n        controller()\n    }\n    \n}\n\n\n\n//# sourceURL=webpack://html/./src/script/index.js?");

/***/ }),

/***/ "./src/script/pages/AllNews.js":
/*!*************************************!*\
  !*** ./src/script/pages/AllNews.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _NewsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewsPage */ \"./src/script/pages/NewsPage.js\");\n\n\nclass AllNews extends _NewsPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    types = [\"bitcoin\", \"blockchain\", \"ethereum\"]\n    newsContainer = document.querySelector(\"#all_news\")\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllNews);\n\n//# sourceURL=webpack://html/./src/script/pages/AllNews.js?");

/***/ }),

/***/ "./src/script/pages/BitcoinNews.js":
/*!*****************************************!*\
  !*** ./src/script/pages/BitcoinNews.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _NewsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewsPage */ \"./src/script/pages/NewsPage.js\");\n\n\nclass BitcoinNews extends _NewsPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    types = [\"bitcoin\"]\n    newsContainer = document.querySelector(\"#bitcoin_news\")\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BitcoinNews);\n\n//# sourceURL=webpack://html/./src/script/pages/BitcoinNews.js?");

/***/ }),

/***/ "./src/script/pages/BlockchainNews.js":
/*!********************************************!*\
  !*** ./src/script/pages/BlockchainNews.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _NewsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewsPage */ \"./src/script/pages/NewsPage.js\");\n\n\nclass BlockchainNews extends _NewsPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    types = [\"blockchain\"]\n    newsContainer = document.querySelector(\"#blockchain_news\")\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockchainNews);\n\n//# sourceURL=webpack://html/./src/script/pages/BlockchainNews.js?");

/***/ }),

/***/ "./src/script/pages/EthereumNews.js":
/*!******************************************!*\
  !*** ./src/script/pages/EthereumNews.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _NewsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewsPage */ \"./src/script/pages/NewsPage.js\");\n\n\nclass EthereumNews extends _NewsPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    types = [\"ethereum\"]\n    newsContainer = document.querySelector(\"#ethereum_news\")\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EthereumNews);\n\n//# sourceURL=webpack://html/./src/script/pages/EthereumNews.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _utils_CoinsRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/CoinsRequest */ \"./src/script/utils/CoinsRequest.js\");\n/* harmony import */ var _utils_CryptoCalculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/CryptoCalculator */ \"./src/script/utils/CryptoCalculator.js\");\n/* harmony import */ var _utils_LoadingIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/LoadingIcon */ \"./src/script/utils/LoadingIcon.js\");\n/* harmony import */ var _utils_NewsRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/NewsRequest */ \"./src/script/utils/NewsRequest.js\");\n\n\n\n\n\nclass Home {\n\n    container = document.querySelector(\"#cont_bestcrypto\")\n\n\n    init() {\n        this.initTopCoins()\n        this.initCalculator()\n        this.getTopNews()\n    }\n\n\n    /*TOP COINS*/\n\n    initTopCoins() {\n        const loading = new _utils_LoadingIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\".cont-bestcrypto\")\n        loading.startLoading()\n        new _utils_CoinsRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().getAllCrypto(10).then((json) => {\n            loading.stopLoading() \n            json.map((d) => {\n                this.createTopCoinsElements(d)\n            })\n        })\n\n    }\n\n    createTopCoinsElements(coinDataJSon) {\n        /*<div class=\"bc-crypto\">\n            <img class=\"bcc-image\" src=\"/public/res/images/logo_small.png\" alt=\"\">\n                <div class=\"bcc-title\">\n                    <p class=\"bcc-small-title\">BTC</p>\n                    <p class=\"bcc-big-title\">Bitcoin</p>\n                </div>\n                <div class=\"bcc-value\">\n                    <p class=\"bcv-coin-value\">32423$</p>\n                    <div class=\"bcv-evo\">\n                        <p class=\"bcve-percentage\">23.5%</p>\n                        <p class=\"bcve-time\">10d</p>\n                    </div>\n                </div>\n        </div>*/\n        const div = document.createElement(\"a\")\n        div.classList.add(\"bc-crypto\")\n\n        const image = document.createElement(\"img\")\n        image.classList.add(\"bcc-image\")\n        image.src = coinDataJSon.webp32\n\n        const titleDiv = document.createElement(\"div\")\n        titleDiv.classList.add(\"bcc-title\")\n\n        const smallTitle = document.createElement(\"p\")\n        smallTitle.classList.add(\"bcc-small-title\")\n        smallTitle.textContent = coinDataJSon.code\n\n        const bigTitle = document.createElement(\"p\")\n        bigTitle.classList.add(\"bcc-big-title\")\n        bigTitle.textContent = coinDataJSon.name\n\n        titleDiv.append(smallTitle)\n        titleDiv.append(bigTitle)\n\n        const valueDiv = document.createElement(\"div\")\n        valueDiv.classList.add(\"bcc-value\")\n\n        const coinValue = document.createElement(\"p\")\n        coinValue.classList.add(\"bcv-coin-value\")\n        coinValue.textContent = `${coinDataJSon.rate.toFixed(2)}$`\n\n        const bcvEvo = document.createElement(\"div\")\n        bcvEvo.classList.add(\"bcv-evo\")\n\n        const evoPerc = document.createElement(\"p\")\n        evoPerc.classList.add(\"bcve-percentage\")\n        evoPerc.textContent = coinDataJSon.delta.month.toFixed(2) + \"%\"\n\n        const evoTime = document.createElement(\"p\")\n        evoTime.classList.add(\"bcve-time\")\n        evoTime.textContent = \"last month\"\n\n        bcvEvo.append(evoPerc)\n        bcvEvo.append(evoTime)\n        valueDiv.append(coinValue)\n        valueDiv.append(bcvEvo)\n\n        div.append(image)\n        div.append(titleDiv)\n        div.append(valueDiv)\n\n        this.container.append(div)\n    }\n\n    /*CALCULATOR*/\n\n\n    valueInput = document.querySelector(\"#cc_value\")\n    coinsSelect = document.querySelector(\"#coin_selector\")\n    cryptoSelect = document.querySelector(\"#crypto_selector\")\n\n\n    fromOutput = document.querySelector(\"#from_output\")\n    toOutput = document.querySelector(\"#to_output\")\n\n    calculator = new _utils_CryptoCalculator__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.valueInput, this.fromOutput, this.toOutput)\n\n\n    initCalculator() {\n        this.addOptions()\n\n        this.coinsSelect.addEventListener(\"change\", (e) => {\n            this.calculator.setCoin(e.target.value)\n        })\n        this.cryptoSelect.addEventListener(\"change\", (e) => {\n            this.calculator.setCrypto(e.target.value)\n        })\n    }\n\n    addOptions() {\n        new _utils_CoinsRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().getAllCoins().then((coins) => {\n            coins.map((coin) => {\n                this.addCoinOption(coin)\n            })\n            this.calculator.setCoin(this.coinsSelect.value)\n            \n        })\n        new _utils_CoinsRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().getAllCrypto(200).then((cryptos) => {\n            cryptos.map((crypto) => {\n                this.addCryptoOption(crypto)\n            })\n            this.calculator.setCrypto(this.cryptoSelect.value)\n        })\n    }\n\n    addCoinOption(coinData) {\n        const option = document.createElement(\"option\")\n        option.value = coinData.code\n        option.textContent = `${coinData.code} ${coinData.name}`\n        this.coinsSelect.appendChild(option)\n    }\n\n    addCryptoOption(cryptoData) {\n        const option = document.createElement(\"option\")\n        option.value = cryptoData.code\n        option.textContent = `${cryptoData.code} ${cryptoData.name}`\n        this.cryptoSelect.appendChild(option)\n    }\n\n    /* NEWS */\n\n    getTopNews() {\n        const loading = new _utils_LoadingIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\".cont-news\")\n        loading.startLoading()\n        new _utils_NewsRequest__WEBPACK_IMPORTED_MODULE_3__[\"default\"]().getNews([\"all\"],8).then((news) => {\n            this.createNewsElements(news)\n            loading.stopLoading()\n        }).catch(() => {this.errorElement(); loading.stopLoading()})\n    }\n\n    errorElement() {\n        const container = document.getElementById(\"news_container\")\n        const newItem = document.createElement(\"p\")\n        newItem.classList.add(\"text-error\")\n        newItem.textContent = \"Ha ocurrido un error al obtener las noticias\"\n        container.appendChild(newItem)\n    }\n\n    createNewsElements(news) {\n        const container = document.getElementById(\"news_container\")\n        news.forEach((newData) => {\n            new _utils_NewsRequest__WEBPACK_IMPORTED_MODULE_3__[\"default\"]().createNewsElement(container, newData)\n        })\n    }\n\n\n\n\n\n}\n\n//# sourceURL=webpack://html/./src/script/pages/Home.js?");

/***/ }),

/***/ "./src/script/pages/NewsPage.js":
/*!**************************************!*\
  !*** ./src/script/pages/NewsPage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_LoadingIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/LoadingIcon */ \"./src/script/utils/LoadingIcon.js\");\n/* harmony import */ var _utils_NewsRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/NewsRequest */ \"./src/script/utils/NewsRequest.js\");\n/* harmony import */ var _utils_PaginationMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/PaginationMenu */ \"./src/script/utils/PaginationMenu.js\");\n\n\n\n\nclass NewsPage {\n\n    newsPerPage = 12\n    totalPages = 1\n    types = []\n    page = 1\n    newsContainer\n    pagination\n\n    init() {\n        this.createNews()\n        this.pagination = new _utils_PaginationMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.newsContainer.parentElement, this.totalPages)\n        this.pagination.onSelectedChange = (number) => {\n            console.log(number)\n            this.page = number\n            this.createNews()\n        }\n    }\n\n    createNews() {\n        this.resetContainer()\n        const loading =  new _utils_LoadingIcon__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"#\"+this.newsContainer.id)\n        loading.startLoading()\n        new _utils_NewsRequest__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().getNews(this.types, this.newsPerPage, (this.page - 1) * this.newsPerPage, true).then((news) => {\n            this.totalPages = Math.ceil(news[1] / this.newsPerPage)\n            this.pagination.setPageNumber(this.totalPages)\n            news[0].map((newData) => {\n                new _utils_NewsRequest__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().createNewsElement(this.newsContainer, newData);\n            })\n            loading.stopLoading()\n        })\n    }\n\n    resetContainer() {\n        this.newsContainer.querySelectorAll(\".cont-new\").forEach(element => {\n            element.remove()\n        });\n    }\n\n    pageUp() {\n        this.page = this.page + 1\n        this.onPageChange()\n    }\n\n    pageDown() {\n        if (this.page != 0) {\n            this.spage = this.page-1\n        }\n        this.onPageChange()\n    }\n\n    onPageChange() {\n        this.createNews()\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsPage);\n\n//# sourceURL=webpack://html/./src/script/pages/NewsPage.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass CryptoCalculator {\n\n    coin = \"USD\"\n    crypto = \"BTC\"\n    mode = 0\n    inputData\n\n    fromOutput\n    toOutput\n\n    constructor(inputData, outputFromData, outputToData) {\n        this.fromOutput = outputFromData\n        this.toOutput = outputToData    \n        this.calculate(1)\n\n        inputData.addEventListener(\"keyup\", (e) => {\n            if (e.target.value == \"\") {\n                this.calculate(0)\n                return false\n            }\n            this.calculate(e.target.value)\n        })\n\n        this.inputData = inputData\n    }\n\n    setCoin(coin) {\n        this.coin = coin\n        this.inputData.value = \"\"\n        this.calculate(0)\n    }\n\n    setCrypto(crypto) {\n        this.crypto = crypto\n        this.inputData.value = \"\"\n        this.calculate(0)\n    }\n\n    setMode(mode) {\n        if (mode == 0 || mode == 1) {\n            this.mode = mode\n        } else {\n            this.mode = 0\n        }\n    }\n\n    calculate(val) {\n        if (this.mode == 0) {\n            this.fromOutput.textContent = `${val} ${this.crypto}`\n            this.toOutput.textContent = `${val} ${this.coin}`\n        } else {\n            this.fromOutput.textContent = `${val} ${this.coin}`\n            this.toOutput.textContent = `${val} ${this.crypto}`\n        }\n    }\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CryptoCalculator);\n\n//# sourceURL=webpack://html/./src/script/utils/CryptoCalculator.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass NewsRequest {\n    URL = \"http://80.29.46.216/api/news\"\n\n    modesTraduction = {\n        \"all\" : 0,\n        \"altcoin\" : 1,\n        \"bitcoin\" : 2,\n        \"blockchain\" : 3,\n        \"ethereum\" : 4,\n    }\n\n    getNews(modes = [\"all\"], limit = -1, from = 0, getTotalNumber = false) {\n\n        const m = []\n\n        modes.forEach((mode) => {\n\n            console.log(mode)\n            if (this.modesTraduction[mode] == undefined) {\n                return false\n            }\n            m.push(this.modesTraduction[mode])\n        })\n\n        console.log(m)\n        \n        const url = this.URL\n        return new Promise((resolve, reject) => {\n            fetch(url, {method : \"POST\", body : JSON.stringify({mode : m, lang : \"es\"})}).then((data) => {\n                return data.json()\n            }).then((dataJson) => {\n                const results = dataJson.result\n                var news = []\n                if (!results) {\n                    reject(\"Error parameters\")\n                    return false;\n                }\n                results.map((result) => {\n                    news = news.concat(...new window.DOMParser().parseFromString(result, \"text/xml\").querySelectorAll(\"item\"))\n                })\n                console.log(news)\n                return news\n            })\n            .then((items) => {\n                if (!items) {\n                    reject(\"Error\")\n                }\n\n                var results = []\n                items.forEach((item) => {\n                    results.push(this.parseJSON(item))\n                })\n\n                console.log(results)\n                \n                results.sort((a,b) => {\n                    if (a.date.getTime() < b.date.getTime()) {\n                        return 1\n                    } else if (a.date.getTime() > b.date.getTime()) {\n                        return -1\n                    } else {\n                        return 0\n                    }\n                })\n\n                console.log(results)\n                \n                \n                const result = results.slice(from, from + limit)\n\n                if (getTotalNumber) {\n                    resolve([result, results.length])\n\n                } else {\n                    resolve(result)\n                }\n            })\n            .catch((e) => {\n                reject(e)\n            })\n        })\n    }\n\n    parseJSON(element) {\n        const json = {}\n        json[\"title\"] = element.querySelector(\"title\").textContent\n        var description = new window.DOMParser().parseFromString(element.querySelector(\"description\").textContent, \"text/html\").querySelectorAll(\"p\")\n        json[\"description\"] = description.length > 1 ? description[1].textContent : description[0].textContent\n        json[\"image\"] = element.querySelector(\"enclosure\").getAttribute(\"url\")\n        json[\"date\"] = new Date(element.querySelector(\"pubDate\").textContent)\n        json[\"link\"] = element.querySelector(\"link\").textContent\n        return json\n    }\n\n    createNewsElement(container, jsonData) {\n        const newItem = document.createElement(\"a\")\n        newItem.classList.add(\"cont-new\")\n        newItem.target = \"_blank\"\n        newItem.href = jsonData.link\n\n        const imgItem = document.createElement(\"img\")\n        imgItem.classList.add(\"new-img\")\n        imgItem.src = jsonData.image\n        newItem.appendChild(imgItem)\n\n        const content = document.createElement(\"div\")\n        content.classList.add(\"content\")\n\n        const titleItem = document.createElement(\"p\")\n        titleItem.classList.add(\"title\")\n        titleItem.textContent = jsonData.title\n        content.appendChild(titleItem)\n\n        const descItem = document.createElement(\"p\")\n        descItem.classList.add(\"description\")\n        descItem.textContent = jsonData.description\n        content.appendChild(descItem)\n\n        newItem.appendChild(content)\n\n        container.append(newItem)\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsRequest);\n\n//# sourceURL=webpack://html/./src/script/utils/NewsRequest.js?");

/***/ }),

/***/ "./src/script/utils/PaginationMenu.js":
/*!********************************************!*\
  !*** ./src/script/utils/PaginationMenu.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass PaginationMenu {\n\n    parentContainer\n    container = document.createElement(\"div\")\n    pageNumber;\n    onSelectedChange = () => {}\n\n    constructor(parent, pageNumber) {\n        this.parentContainer = parent\n        this.pageNumber = pageNumber\n        this.createLayout()\n        this.setSelected(1)\n    }\n\n    setSelected(index) {\n        const realIndex = index - 1\n        const element = this.container.childNodes[realIndex]\n        if (!element) {\n            return false\n        }\n        const lastSelected = this.container.querySelector(\".selected\")\n\n\n        if (lastSelected) {\n            lastSelected.classList.remove(\"selected\")\n        }\n\n        element.classList.add(\"selected\")\n        this.onSelectedChange(index)\n    }\n\n    setPageNumber(pn) {\n        this.pageNumber = pn\n        this.recreateLayout()    \n    }\n\n    createLayout() {\n        this.container = document.createElement(\"div\")\n        this.container.classList.add(\"pagination-menu\")\n\n        for(var i = 1; i <= this.pageNumber; i++) {\n            const page = document.createElement(\"p\")\n            page.textContent = i\n            page.addEventListener(\"click\", (e) => {\n                this.setSelected(parseInt(e.target.textContent))\n            })\n            this.container.append(page)\n        }\n\n        this.parentContainer.append(this.container)\n    }\n\n    recreateLayout() {\n        const number = this.container.childNodes.length\n\n        for(var i = number + 1; i <= this.pageNumber; i++) {\n            const page = document.createElement(\"p\")\n            page.textContent = i\n            page.addEventListener(\"click\", (e) => {\n                this.setSelected(parseInt(e.target.textContent))\n            })\n            this.container.append(page)\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaginationMenu);\n\n//# sourceURL=webpack://html/./src/script/utils/PaginationMenu.js?");

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