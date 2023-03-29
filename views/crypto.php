<?php 
$cryptoSymbol = $_GET["code"];
$cryptoInfo = new CryptoInfo();
$info = $cryptoInfo->getCryptoInfo($cryptoSymbol);
include "./includes/head.php" ;
?>

<body>
    <?php include "./includes/header.php" ?>
    <div class="container mx-auto" style="color: black;">
        <p><?php var_dump($info) ?></p>
    </div>

<?php include "./includes/footer.php" ?>