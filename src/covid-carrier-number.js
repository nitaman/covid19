import React from 'react';
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import exportFunc from './lib.js';

const tagetFile = './data/04.csv';
/*
var getCsvData = (dataPath) => {
  const request = new XMLHttpRequest();
  request.open("GET", dataPath, false);
	request.send(null);
  let myLastMod = exportFunc.FormatDate(new Date(request.getResponseHeader("last-modified")), 'yyyy/MM/dd');
  return [request.responseText,myLastMod];
};
*/

/*
["2020年4月7日", "18", "1", "17"]
0（検査日時）: "2020年4月7日"
1（実施数）: "18"
2（陽性者数）: "1"
3（陰性者数）: "17"
*/

/*
var CsvToJson = (csvStr, userOptions) => {
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
  var i, len, j, len2;
  for (i = 0, len = rows.length; i < len; i++) {
    if ((i + 1) <= options.header) continue;
    if (options.ignoreBlankLine && rows[i] === '') continue;
    line = rows[i].split(',');
    if (options.columnName.length > 0) {
      if(!line[0]) {
        row = null;
        continue;
      }else {
        if(!line[2]) {
          row = null;
          continue;
        }
      }
      data = {};
      for (j = 0, len2 = options.columnName.length; j < len2; j++) {
        if (typeof line[j] !== 'undefined') {
          row = line[j];
          row = row.replace(/^"(.+)?"$/, '$1');
          row = row.replace(/\r/, '');
          row = row.replace(/\n/, '');
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
*/
var jsonObj = exportFunc.CsvToJson(exportFunc.GetCsvData(tagetFile)[0], { header : 1, columnName : ['検査日時', '実施数', '陽性者数', '陰性者数'] });
var caption = exportFunc.CsvToCaption(exportFunc.GetCsvData(tagetFile)[0], { header : 1, columnName : ['検査日時', '実施数', '陽性者数', '陰性者数'] });
var lastMod = '最終更新：' + exportFunc.FormatDate( exportFunc.GetCsvData(tagetFile)[1], 'yyyy/MM/dd HH:mm' );
var value = jsonObj[(jsonObj.length-1)]['陽性者数'] -  jsonObj[(jsonObj.length-2)]['陽性者数'];
if ( value >0 ) { value = '+' + value; }
var t = 0;
var total = 0;
for (t=0; t<jsonObj.length; t++) {
  total = total + parseInt(jsonObj[t]['陽性者数']);
}

const CovidCarrierNumber = (props) => {
  return(
    <div className="contWrapper w-100 py-4">
      <div className="contTitle-right">
        陽性判明数
      </div>
      <div className="todayPatient px-4">
        <div className="fs200 font-weight-bold">{jsonObj[(jsonObj.length-1)]['陽性者数']}人</div>
        <div className="my-1">
          <div className="fs85 text-secondary text-right">前日比：{value}人</div>
          <div className="fs85 text-secondary text-right">累計：{total}人</div>
        </div>
      </div>
      <div className="contBody">
        <div className="of-y-scrl px-3">
          <div className="chartWrapper">
            <BarChart
              className="graphLTR"
              width={jsonObj.length * 10}
              height={320}
              data={jsonObj}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="検査日時" />
              <YAxis orientation="right" />
              <Tooltip />
              <Legend />
              <Bar dataKey="陽性者数" stackId="a" fill="#26A69A" />
            </BarChart>
          </div>
          <div className="graphCaption mb-3">
            （注）健康福祉部報告後に判明した陽性件数は翌日公表となるため、判明日と公表日で件数に差異が生じる場合があります。
          </div>
        </div>
        <div className="graphCaption text-right mt-3 px-3">
          <a href="https://opendata.pref.aomori.lg.jp/dataset/1531.html" className="covidLink" target="_blank">出典元：青い森オープンデータカタログ </a>
          <div className="mt-1">
            {lastMod}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CovidCarrierNumber;
