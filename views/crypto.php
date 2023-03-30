<?php 
$cryptoSymbol = $_GET["code"];
$cryptoInfo = new CryptoInfo();
$info = $cryptoInfo->getCryptoInfo($cryptoSymbol);
include "./includes/head.php" ;
?>

<body>
    <?php include "./includes/header.php" ?>
    <div class="crypto-info">
        <div class="container mx-auto" style="color: black;">
            <div class="ci-header">
                <img src="<?php echo $info["logo"]; ?>" alt="">
                <h1 class="ci-symbol"><?php echo $info["symbol"]; ?></h1>
                <p class="ci-title"><?php echo $info["title"]; ?></p>
            </div>
            <div class="ci-graphic">
                <iframe src="https://bit2me.com/widget/chart/v1?currency=<?php echo $info["symbol"]; ?>&fiat=EUR" style="display:block;width:100%;height:400px;margin:0 auto;" frameborder="0"></iframe>
            </div>
        </div>
    </div>
    

<?php include "./includes/footer.php" ?>