<?php 
class NewsController {

    private $mode = [];
    private $lang;

    private $enLinks = [ "https://cointelegraph.com/rss", "https://cointelegraph.com/rss/tag/altcoin", "https://cointelegraph.com/rss/tag/bitcoin", "https://cointelegraph.com/rss/tag/blockchain", "https://cointelegraph.com/rss/tag/ethereum"];
    private $esLinks = ["https://es.cointelegraph.com/rss", "https://es.cointelegraph.com/rss/tag/altcoin", "https://es.cointelegraph.com/rss/tag/bitcoin", "https://es.cointelegraph.com/rss/tag/blockchain", "https://es.cointelegraph.com/rss/tag/ethereum", "https://e00-expansion.uecdn.es/rss/economia.xml", "https://es.investing.com/rss/news_25.rss", "https://es.investing.com/rss/news_14.rss", "https://e00-expansion.uecdn.es/rss/mercados.xml", "https://e00-expansion.uecdn.es/rss/empresasinmobiliario.xml"];

    function __construct() {
        $jsonRequest = new stdClass();
        try {
            $jsonRequest = json_decode(file_get_contents('php://input'));
        } catch(Exception $e) {
            echo("Error");
        }

        if (isset($jsonRequest->mode)) {
            $this->mode = $jsonRequest->mode;
        } else {
            array_push($this->mode, 0);
        }

        if (isset($jsonRequest->lang)) {
            $this->lang = $jsonRequest->lang;
        } else {
            $this->lang = "en";
        }
    }

    public function getNews() {


        $allNewsXML = [];

        for($i = 0; $i < count($this->mode); $i++) {
            $mode = $this->mode[$i];
            $url = "";
            switch ($this->lang) {
                case "es":
                    $url = $this->esLinks[$mode];
                    break;
                case "en":
                    $url = $this->enLinks[$mode];
                    break;
                default:
                    $url = $this->enLinks[$mode];
                    break;
            };

            $curl = curl_init();
            curl_setopt($curl, CURLOPT_URL, $url);
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($curl, CURLOPT_HEADER, false);
            
            $newsXML = curl_exec($curl);
            array_push($allNewsXML, $newsXML);

        }

        return $allNewsXML;

    }

    private function parameters() {

    }
}
