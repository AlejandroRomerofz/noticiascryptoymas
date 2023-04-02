<?php include "./includes/head.php" ?>
<script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
<body>
    <?php include "./includes/header.php" ?>
    <div class="container mx-auto">
        <h2 class="section-title">Gráfico del <span>Ibex 35</span></h2>
        <div id="es35_container" class="es35-graphic">
            <div class="tradingview-widget-container">
                <div id="tradingview_3a5d7"></div>                
                <script type="text/javascript">
                    new TradingView.widget({
                        "autosize": true,
                        "symbol": "VANTAGE:ES35",
                        "timezone": "Etc/UTC",
                        "theme": "light",
                        "style": "1",
                        "locale": "en",
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
    <div class="container mx-auto">
        <h2 class="section-title">Gráfico de <span>NASDAQ</span></h2>
        <div id="nasdaq_container" class="es35-graphic">
            <div class="tradingview-widget-container">
                <div id="tradingview_3a5d7"></div>                
                <script type="text/javascript">
                    new TradingView.widget({
                        "autosize": true,
                        "symbol": "SKILLING:NASDAQ",
                        "timezone": "Etc/UTC",
                        "theme": "light",
                        "style": "1",
                        "locale": "en",
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
                        "container_id": "nasdaq_container"
                    });
                </script>
            </div>
        </div>
    </div>
    <div class="container mx-auto">
        <h2 class="section-title">Gráfico de <span>DOWJONES</span></h2>
        <div id="dowjones_container" class="es35-graphic">
            <div class="tradingview-widget-container">
                <div id="tradingview_3a5d7"></div>                
                <script type="text/javascript">
                    new TradingView.widget({
                        "autosize": true,
                        "symbol": "SKILLING:DJ30",
                        "timezone": "Etc/UTC",
                        "theme": "light",
                        "style": "1",
                        "locale": "en",
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
                        "container_id": "dowjones_container"
                    });
                </script>
            </div>
        </div>
    </div>
    <?php include "./includes/footer.php" ?>