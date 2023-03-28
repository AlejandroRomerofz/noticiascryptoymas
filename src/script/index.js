import "../style/index.scss"
import AllNews from "./pages/AllNews"
import BitcoinNews from "./pages/BitcoinNews"
import BlockchainNews from "./pages/BlockchainNews"
import EthereumNews from "./pages/EthereumNews"
import Graphics from "./pages/Graphics"
import Header from "./pages/Header"
import Home from "./pages/Home"

window.addEventListener("DOMContentLoaded", () => {
    init()
})

const routes = {
    "/hola" : function(){console.log("aaaa")},
    "" : function() {
        new Home().init()
    },
    "/graphics/crypto" : function() {
        new Graphics().init()
    },
    "/news/bitcoin" : function() {
        new BitcoinNews().init()
    },
    "/news/ethereum" : function() {
        new EthereumNews().init()
    },
    "/news/blockchain" : function() {
        new BlockchainNews().init()
    },
    "/news/all" : function() {
        new AllNews().init()
    }
    
    

}

function init() {
    var uri = window.location.pathname

    if (uri.substring(uri.length - 1) == "/") {
        uri = uri.substring(0, uri.length - 1)
    }

    new Header().init()

    console.log(uri)

    const controller = routes[uri]
    if(controller != undefined) {
        controller()
    }
    
}

