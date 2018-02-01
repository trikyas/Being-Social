<?php
$timezone = date_default_timezone_set("Australia/Sydney");
  $db['db_host'] = "localhost";
  $db['db_user'] = "root";
  $db['db_pass'] = "root";
  $db['db_name'] = "being_social";
foreach($db as $key => $value) {
define(strtoupper($key), $value);
}
$con = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
// if($connection) {
//   echo "We are AWESOME!";
// }
?>
