<?php 
class Router {
    private static $viewsDirectory = "./views/";

    private $getList = [];
    private $postList = [];

    public function get(string $get, callable $function) {

        if (!array_key_exists($get, $this->postList)) {
            $this->getList[$get] = $function;
        }
    }

    public function post(string $post, callable $function) {
        if (!array_key_exists($post, $this->postList)) {
            $this->postList[$post] = $function;
        }
    }

    public static function render($fileUrl) {
        ob_start();
        require self::$viewsDirectory . $fileUrl;
        $output = ob_get_clean();
        echo $output;
    }

    private function not_found() {
        self::render("not_found.php");
    }

    public function init() {
        $route = $_SERVER["REQUEST_URI"];

        $route = explode("?", $route)[0];

        if ($this->endsWith($route, "/")) {
            $route = substr($route, 0, strlen($route) - 1);
        }


        switch($_SERVER["REQUEST_METHOD"]) {
            case "GET":
                if (!array_key_exists($route, $this->getList)) {
                    $this->not_found();
                    return false;
                }
                call_user_func($this->getList[$route]);
                break;
            case "POST":
                if (!array_key_exists($route, $this->postList)) {
                    $this->not_found();
                    return false;
                }
                call_user_func($this->postList[$route]);
                break;
        }

      
    }

    public function endsWith( $haystack, $needle ) {
        $length = strlen( $needle );
        if( !$length ) {
            return true;
        }
        return substr( $haystack, -$length ) === $needle;
    }


}








?>