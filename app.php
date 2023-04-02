<?php
require("./Router.php");
$router = new Router();

$router->get("", function () {
    Router::render("home.php");
});

$router->get("/graphics/crypto", function () {
    Router::render("graphics.php");
});

$router->get("/graphics/exchange", function () {
    Router::render("exchangeGraphic.php");
});

$router->get("/news/exchange", function () {
    Router::render("bolsaNews.php");
});

$router->get("/news/estate", function () {
    Router::render("estateNews.php");
});

$router->get("/news/bitcoin", function () {
    Router::render("bitcoinNews.php");
});

$router->get("/news/economy", function () {
    Router::render("economyNews.php");
});

$router->get("/news/crypto", function () {
    Router::render("cryptoNews.php");

});

$router->get("/crypto/all", function () {
    Router::render("allCrypto.php");

});

$router->get("/crypto", function () {
    if (isset($_GET["code"])) {
        include "./controllers/CryptoInfo.php";
        $symbol = $_GET["code"];
        $info = new CryptoInfo();
        $list = $info->getCryptoList();
        if (isset($list[$symbol])) {
            Router::render("crypto.php");
        } else {
            Router::render("not_found.php");
        }        

    } else {
        Router::render("not_found.php");
    }

});


$router->post("/api/crypto", function () {
    include "./controllers/CryptoInfo.php";
    $info = new CryptoInfo();
    $list = $info->getCryptoList();
    echo(json_encode($list));
});

$router->post("/api/news", function () {
    require("controllers/NewsController.php");
    $nc = new NewsController();
    $news = $nc->getNews();
    echo(json_encode(["result" => $news]));
});


$router->init();
?>