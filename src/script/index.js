import "../style/index.scss"
import AllCrypto from "./pages/AllCrypto"
import BitcoinNews from "./pages/BitcoinNews"
import BolsaNews from "./pages/BolsaNews"
import Graphics from "./pages/Graphics"
import Header from "./pages/Header"
import Home from "./pages/Home"
import EconomyNews from "./pages/EconomyNews"
import CryptoNews from "./pages/CryptoNews"
import EstateNews from "./pages/estateNews"

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
    "/news/exchange" : function() {
        new BolsaNews().init()
    },
    "/news/economy" : function() {
        new EconomyNews().init()
    },
    "/news/crypto" : function() {
        new CryptoNews().init()
    },
    "/news/estate" : function() {
        new EstateNews().init()
    },
    "/crypto/all" : function() {
        new AllCrypto().init()
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

