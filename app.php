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
});

$router->get("/news/bitcoin", function () {
});

$router->get("/news/blockchain", function () {
});

$router->get("/news/crypto", function () {
});


$router->post("/api/news", function () {
    require("controllers/NewsController.php");
    $nc = new NewsController();
    $nc->getNews();
});


$router->init();
?>