<?php include "./includes/head.php" ?>

<body>
    <?php include "./includes/header.php" ?>
    <div class="container mx-auto">
        <h2 class="section-title">Grafico de <span>Nasdaq</span></h2>
        <div id="es35_container" class="es35-graphic">
            <div class="tradingview-widget-container">
                <div id="tradingview_3a5d7"></div>
                <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/SKILLING-NASDAQ/" rel="noopener" target="_blank"><span class="blue-text">Tabla de Nasdaq</span></a> by TradingView</div>
                <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
                <script type="text/javascript">
                    new TradingView.widget({
                        "autosize": true,
                        "symbol": "SKILLING:NASDAQ",
                        "timezone": "Etc/UTC",
                        "theme": "light",
                        "style": "1",
                        "locale": "es",
                        "toolbar_bg": "#f1f3f6",
                        "enable_publishing": true,
                        "withdateranges": true,
                        "range": "YTD",
                        "hide_side_toolbar": false,
                        "allow_symbol_change": true,
                        "details": true,
                        "hotlist": true,
                        "calendar": true,
                        "show_popup_button": true,
                        "popup_width": "1000",
                        "popup_height": "650",
                        "container_id": "es35_container"
                    });
                </script>
            </div>
        </div>
    </div>
    <?php include "./includes/footer.php" ?>