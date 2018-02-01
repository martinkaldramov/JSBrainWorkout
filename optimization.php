<?php
$alldrv = json_decode(file_get_contents("drv.json"));
$baddrv = json_decode(file_get_contents("baddrv.json"), true);

$data = $alldrv->data;
$badTotal = count($baddrv);

for($i = 0; $i < $badTotal; $i++){
  $v = $badTotal[$i];
  foreach ($data as $n => $d) {
    $serial = $d->serial;
    if ($v === $serial) 
      echo 'Found bad: ', $v, '\n';
  }
}

?>
