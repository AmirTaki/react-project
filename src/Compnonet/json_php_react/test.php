<?php

    require_once "../../../functions/pdo_connection.php"; 
    require_once "../../../functions/config.php"; 
 
    require_once "../../../functions/middleware.php";
    checkAuthentication();

    $method = $_SERVER['REQUEST_METHOD'];

    switch($method){
        case "POST":
    
            $user = json_decode(file_get_contents("php://input"));

            $base64Data =  $user->image;
            if(checkFileImage($base64Data)){
                // print_r(uploadImage($base64Data, "\back-end\\tables\megaMenu\menuImage\uploadImage\\"));
            }
     
        }

            
                    

    

?>