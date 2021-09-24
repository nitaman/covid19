/*
**************************************************
GetCsvData (datePath)
--------------------------------------------------
datePath: ターゲットファイル
--------------------------------------------------
csvから取得した文字列データと最終更新日を取得
--------------------------------------------------
2021.09.02　作成　by shingo nita
**************************************************
*/
exports.GetCsvData = (dataPath) => {
  const request = new XMLHttpRequest();
  request.open("GET", dataPath, false);
	request.send(null);
  let myLastMod = new Date(request.getResponseHeader("last-modified"));
  return [request.responseText,myLastMod];
};



/*
**************************************************
CsvToJson (csvStr, userOptions)
--------------------------------------------------
csvStr: csvデータから取得した文字列
userOptions: header情報
--------------------------------------------------
csvから取得したデータをもとにjsonデータを作成
--------------------------------------------------
2021.09.02　作成　by shingo nita
**************************************************
*/
exports.CsvToJson = (csvStr, userOptions) => {
  if (typeof csvStr !== 'string') {
    return null
  };
  var options = { header : 0, columnName : [], ignoreBlankLine : true };
  if (userOptions) {
    if (userOptions.header) options.header = userOptions.header;
    if (userOptions.columnName) options.columnName = userOptions.columnName;
  }
  var rows = csvStr.split('\n');
  var json = [], line = [], row = '', data = {};
  var i, len, j, len2, x;
  for (i = 0, len = rows.length; i < len; i++) {
    if( rows[i].indexOf(',,,') != -1 ) {
      continue;
    }
    if ((i + 1) <= options.header) continue;
    if (options.ignoreBlankLine && rows[i] === '') continue;
    line = rows[i].split(',');
    if (options.columnName.length > 0) {

      /* 行を「,」で分解した要素が空だったらnullを入れる（要素が空だと動作しない？） */
      /* 2021.09.06 ADD By Shingo Nita  */
      /*
      for (x=0; x<line.length; x++) {
        if(!line[x]) {
          row = null;
          continue;
        }       
      }
      */
      /*
      if(!line[0]) {
        row = null;
        continue;
      }else {
        if(!line[2]) {
          row = null;
          continue;
        }
      }
      */
      data = {};
      for (j = 0, len2 = options.columnName.length; j < len2; j++) {
        if (typeof line[j] !== 'undefined') {
          if ( line[j] ){
            row = line[j];
            row = row.replace(/^"(.+)?"$/, '$1');
            row = row.replace(/\r/, '');
            row = row.replace(/\n/, '');
          } else {
            row = 0;
          }
        } else {
          row = null;
        }
        data[options.columnName[j]] = row;
      }
      json.unshift(data);
    } else {
      json.unshift(line);
    }
  }
  return json;
};



/*
**************************************************
CsvToCaption (csvStr, userOptions)
--------------------------------------------------
csvStr: csvデータから取得した文字列
userOptions: header情報
--------------------------------------------------
csvから取得したデータをもとにjsonデータを作成
--------------------------------------------------
2021.09.02　作成　by shingo nita
**************************************************
*/
exports.CsvToCaption = (csvStr, userOptions) => {
  if (typeof csvStr !== 'string') {
    return null
  };
  var options = { header : 0, columnName : [], ignoreBlankLine : true };
  if (userOptions) {
    if (userOptions.header) options.header = userOptions.header;
    if (userOptions.columnName) options.columnName = userOptions.columnName;
  }
  var rows = csvStr.split('\n');
  var line = [];
  var caption = [];
  var i, len;
  for (i = 0, len = rows.length; i < len; i++) {
    if( rows[i].indexOf(',,,') != -1 ) {
      line = rows[i].split(',');
      if ( line.length < 9 ) {
        if( line[0] ) {
          caption.unshift(line[0]);
        }
      }
    } else {
      continue;
    }
  }
  return caption;
};



/*
**************************************************
FormatDate (date, format)
--------------------------------------------------
date: 日付オブジェクト
format: 書式フォーマット
--------------------------------------------------
jsonから取得したdateをフォーマットを指定して変換する。
--------------------------------------------------
2021.09.01　作成　by shingo nita
**************************************************
*/
exports.FormatDate = (date, format) => {
  format = format.replace(/yyyy/g, date.getFullYear());
  format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
  format = format.replace(/dd/g, ('0' + date.getDate()).slice(-2));
  format = format.replace(/HH/g, ('0' + date.getHours()).slice(-2));
  format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
  format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
  format = format.replace(/SSS/g, ('00' + date.getMilliseconds()).slice(-3));
  return format;
}

// 例：2017年1月2日3時4分5秒6ミリ秒
/*
var date = new Date(2017, 0, 2, 3, 4, 5, 6);

console.log(FormatDate(date, 'yyyyMMdd')); // "20170102"
console.log(FormatDate(date, 'yyyyMMddHHmmssSSS')); // "20170102030405006"
console.log(FormatDate(date, 'yyyy/MM/dd')); // "2017/01/02"
console.log(FormatDate(date, 'yyyy-MM-dd')); // "2017-01-02"
console.log(FormatDate(date, 'HH:mm')); // "03:04"
console.log(FormatDate(date, 'HH:mm:ss:SSS')); // "03:04:05:006"
*/
