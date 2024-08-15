<?php
if ($_POST['email_form'] == "Test@test.ru" && $_POST['password_form'] == "Test")
    echo json_encode(array('success' => 1));
else
    echo json_encode(array('success' => 0));