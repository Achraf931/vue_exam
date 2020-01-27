<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$res = new \stdClass();
http_response_code(200);

if ($_POST['email'] == '' AND $_POST['password'] == '')
{
    $res->error = 'Please enter an email address and password';
    $res->value = 'all';
}

else if ($_POST['email'] == '')
{
    $res->error = 'Please enter an email address';
    $res->value = 'email';
}

else if ($_POST['password'] == '')
{
    $res->error = 'Please enter a password';
    $res->value = 'password';
}

echo json_encode($res);
