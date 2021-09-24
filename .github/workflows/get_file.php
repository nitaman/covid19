<?php
// オープンデータの配信ファイルリストjsonから各データのURLを取得
$filename = 'https://opendata.pref.aomori.lg.jp/api/package_show?id=5e4612ce-1636-41d9-82a3-c5130a79ffe0';
$json = file_get_contents($filename);
$json = mb_convert_encoding($json, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
$arr = json_decode($json,true);

}
?>
