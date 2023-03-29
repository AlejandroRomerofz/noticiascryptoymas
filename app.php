<?php
require("./Router.php");
$router = new Router();

$router->get("", function () {
    Router::render("home.php");
});

$router->get("/graphics/crypto", function () {
    Router::render("graphics.php");
});

$router->get("/graphics/ibex", function () {
    Router::render("ibexGraphic.php");
});

$router->get("/graphics/nasdaq", function () {
    Router::render("nasdaq.php");
});

$router->get("/graphics/dowJones", function () {
    Router::render("dowJonesGraphic.php");
});

$router->get("/news/ethereum", function () {
    Router::render("ethereumNews.php");
});

$router->get("/news/bitcoin", function () {
    Router::render("bitcoinNews.php");
});

$router->get("/news/blockchain", function () {
    Router::render("blockchainNews.php");
});

$router->get("/news/all", function () {
    Router::render("allNews.php");

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


$router->post("/api/news", function () {
    require("controllers/NewsController.php");
    $nc = new NewsController();
    $news = $nc->getNews();
    echo(json_encode(["result" => $news]));
});


$router->init();
?>