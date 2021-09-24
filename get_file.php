<?php
// オープンデータの配信ファイルリストjsonから各データのURLを取得
$filename = 'https://opendata.pref.aomori.lg.jp/api/package_show?id=5e4612ce-1636-41d9-82a3-c5130a79ffe0';
$json = file_get_contents($filename);
$json = mb_convert_encoding($json, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
$arr = json_decode($json,true);

//$path = '/var/www/html/wp-content/themes/understrap-child-dtnews/covid/';
//$path = '/Users/dailytohoku/AWS/react/covid/public/data/';
$path = $_SERVER['DOCUMENT_ROOT'];

echo $path;

$target = $path.'*.csv';
$result = glob($target);
/*
if(empty($result)) {
  $localFilePath = '';
}else{
  $localFilePath = $path;
}
*/
$localFilePath = $path;

for($i=0; $i<count($arr['result']['resources']); $i++) {
  $csvName = $arr['result']['resources'][$i]['name'];
  $csvUpDate = $arr['result']['resources'][$i]['updated'];
  $csvOrder = explode('_', $csvName)[0];
  $csvData = file_get_contents($arr['result']['resources'][$i]['download_url']);
  $csvData = mb_convert_encoding($csvData, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
  $file = $localFilePath.$csvOrder.'.csv';
  file_put_contents($file, $csvData); // 処理の結果をファイルに書き出す
}
?>
