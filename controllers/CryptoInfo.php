<?php
class CryptoInfo {

    private $curl;
    private $URL = "https://api.coinconvert.net/v2/list";

    function __construct() {
        $this->curl = curl_init();
        curl_setopt($this->curl, CURLOPT_URL, $this->URL);
        curl_setopt($this->curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($this->curl, CURLOPT_HEADER, false);
    }

    public function getCryptoInfo($symbol) {
        $result = curl_exec($this->curl);
        $decode = json_decode($result, true)["crypto"][$symbol];
        if ($decode) {
            return $decode;
        } else {
            return false;
        }
    }

    public function getCryptoList() {
        $result = curl_exec($this->curl);
        return json_decode($result, true)["crypto"];
    }
} 
?>