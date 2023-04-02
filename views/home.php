<?php include "./includes/head.php" ?>
<body>
    <?php include "./includes/header.php" ?>
    <script defer src="https://www.livecoinwatch.com/static/lcw-widget.js"></script> 
    <div class="livecoinwatch-widget-5 big-livecoin" lcw-base="EUR" lcw-color-tx="#999999" lcw-marquee-1="coins" lcw-marquee-2="none" lcw-marquee-items="10" ></div>
    <div class="container mx-auto section">
        <h2 class="section-title">Las 10 Mejores <span>criptomonedas</span></h2>
        <div id="crypto_convertor" class="cont-bestcrypto" >
            <div class="bc-cryptos" id="cont_bestcrypto">
                
            </div>
        </div>
    </div>
    <div class="container mx-auto section">
        <h2 class="section-title">Conversor de <span>criptomonedas</span></h2>
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
            <h2 class="section-title"><span>Gráfica de</span> bitcoin</h2>
            <iframe src="https://bit2me.com/widget/chart/v1?currency=BTC&fiat=EUR" style="display:block;width:100%;height:400px;margin:0 auto;" frameborder="0"></iframe>
        </div>
        <div class="section">
            <h2 class="section-title"><span>Gráfica de</span> Ibex35</h2>
            <div" class="es35-widget">
                <div id="tradingview_3a5d7"></div>
                <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
                <script type="text/javascript">
                    new TradingView.widget({
                        "autosize": true,
                        "symbol": "VANTAGE:ES35",
                        "timezone": "Etc/UTC",
                        "theme": "light",
                        "style": "1",
                        "locale": "es",
                        "toolbar_bg": "#f1f3f6",
                        "enable_publishing": false,
                        "withdateranges": true,
                        "range": "YTD",
                        "hide_side_toolbar": true,
                        "allow_symbol_change": false,
                        "details": false,
                        "hotlist": false,
                        "calendar": false,
                        "show_popup_button": false,
                        "popup_width": "1000",
                        "popup_height": "400",
                        "container_id": "es35_container"
                    });
                </script>
            </div>        </div>
    </div>
    <div class="container mx-auto">
        <h2 class="section-title"><span>Noticias</span></h2>
        <div id="news_container" class="cont-news">

        </div>
    </div>
    <?php include "./includes/footer.php" ?>

</body>
</html>