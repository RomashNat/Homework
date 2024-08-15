<?php

$postData = file_get_contents("php://input");
file_put_contents("result.txt", print_r($postData, true));
$decode_data = json_decode($postData, true);

$keys = array_keys($decode_data);
foreach($keys as &$key)
    $decode_data[$key] = $decode_data[$key] . "!";

$encode_data = json_encode($decode_data);
echo $encode_data;
?>