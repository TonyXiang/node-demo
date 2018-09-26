<?php
    header('Access-Control-Allow-Headers:x-requested-with,content-type');

    $rws_post = $GLOBALS['HTTP_RAW_POST_DATA'];
    $mypost = json_decode($rws_post);
    $ref = (string)$mypost->ref;
    exit($newsid);
?>