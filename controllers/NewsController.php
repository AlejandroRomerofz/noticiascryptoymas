<?php 
class NewsController {

    private $mode;
    private $lang;

    private $enLinks = [ "https://cointelegraph.com/rss", "https://cointelegraph.com/rss/tag/altcoin", "https://cointelegraph.com/rss/tag/bitcoin", "https://cointelegraph.com/rss/tag/blockchain", "https://cointelegraph.com/rss/tag/ethereum"];
    private $esLinks = ["https://es.cointelegraph.com/rss", "https://es.cointelegraph.com/rss/tag/altcoin", "https://es.cointelegraph.com/rss/tag/bitcoin", "https://es.cointelegraph.com/rss/tag/blockchain", "https://es.cointelegraph.com/rss/tag/ethereum"];

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
            $this->mode = 0;
        }

        if (isset($jsonRequest->lang)) {
            $this->lang = $jsonRequest->lang;
        } else {
            $this->lang = "en";
        }
    }

    public function getNews() {

        $url = "";
        switch ($this->lang) {
            case "es":
                $url = $this->esLinks[$this->mode];
                break;
            case "en":
                $url = $this->enLinks[$this->mode];
                break;
            default:
                $url = $this->enLinks[$this->mode];
                break;
        };

        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_HEADER, false);
        $newsXML = curl_exec($curl);
        echo ($newsXML);

    }

    private function parameters() {

    }
}
