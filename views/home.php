<?php include "./includes/head.php" ?>
<body>
    <?php include "./includes/header.php" ?>
    <script defer src="https://www.livecoinwatch.com/static/lcw-widget.js"></script> 
    <div class="livecoinwatch-widget-5 big-livecoin" lcw-base="USD" lcw-color-tx="#999999" lcw-marquee-1="coins" lcw-marquee-2="none" lcw-marquee-items="10" ></div>
    <div class="container mx-auto section">
        <h2 class="section-title">Las <span>10 Mejores Criptomonedas</span></h2>
        <div id="crypto_convertor" class="cont-bestcrypto" >
            <div class="bc-cryptos" id="cont_bestcrypto">
                
            </div>
        </div>
    </div>
    <div class="container mx-auto section">
        <h2 class="section-title">calculadora <span>criptografica</span></h2>
        <div class="cont-cryptoconvertor">
            <form class="cc-form" action="">
                <input id="cc_value" value="1" placeholder="valor" type="number" min="0">
                <div class="cc-selectors">
                    <select name="" id="crypto_selector"></select>
                    <div id="crypto_switch" class="cc-changer">
                        <i class="fa-solid fa-repeat"></i>
                    </div>
                    <select name="" id="coin_selector">

                    </select>
                </div>
            </form>
            <div class="result">
                <p class="from" id="from_output"></p>
                <p>=</p>
                <p class="to" id="to_output"></p>
            </div>
        </div>
    </div>
    <div class="container mx-auto flex cont-analysis flex-wrap">
        <div class="section">
            <h2 class="section-title"><span>analisis de</span> bitcoins</h2>
            <iframe src="https://bit2me.com/widget/chart/v1?currency=BTC&fiat=EUR" style="display:block;width:100%;height:400px;margin:0 auto;" frameborder="0"></iframe>
        </div>
        <div class="section">
            <h2 class="section-title"><span>analisis de</span> etereo</h2>
            <iframe src="https://bit2me.com/widget/chart/v1?currency=ETH&fiat=EUR" style="display:block;width:100%;height:400px;margin:0 auto;" frameborder="0"></iframe>
        </div>
    </div>
    <div class="container mx-auto">
        <h2 class="section-title"><span>Noticias</span></h2>
        <div id="news_container" class="cont-news">

        </div>
    </div>
    <?php include "./includes/footer.php" ?>

</body>
</html>