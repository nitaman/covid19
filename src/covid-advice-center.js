import React from 'react';
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import exportFunc from './lib.js';

const tagetFile = './data/05.csv';

var jsonObj = exportFunc.CsvToJson(exportFunc.GetCsvData(tagetFile)[0], { header : 1, columnName : [ '全国地方公共団体コード', '都道府県名', '受付_年月日', '相談件数'] });
var caption = exportFunc.CsvToCaption(exportFunc.GetCsvData(tagetFile)[0], { header : 1, columnName : [ '全国地方公共団体コード', '都道府県名', '受付_年月日', '相談件数'] });
var lastMod = '最終更新：' + exportFunc.FormatDate( exportFunc.GetCsvData(tagetFile)[1], 'yyyy/MM/dd HH:mm' );
var value = jsonObj[(jsonObj.length-1)]['相談件数'] -  jsonObj[(jsonObj.length-2)]['相談件数'];
if ( value >0 ) { value = '+' + value; }
var total = 0;
var t = 0;
for (t=0; t<jsonObj.length; t++) {
  total = total + parseInt(jsonObj[t]['相談件数']);
}

const CovidAdviceCenter = (props) => {
  return(
    <div className="contWrapper w-100 py-4">
      <div className="contTitle-right">
        相談センター相談件数
      </div>
      <div className="todayPatient px-4">
        <div className="fs200 font-weight-bold">{jsonObj[(jsonObj.length-1)]['相談件数']}人</div>
        <div className="my-1">
          <div className="fs85 text-secondary text-right">前日比：{value}件</div>
          <div className="fs85 text-secondary text-right">累計：{total}件</div>
        </div>
      </div>
      <div className="contBody">
        <div className="of-y-scrl px-3">
          <div className="chartWrapper">
            <BarChart
              className="graphLTR"
              width={jsonObj.length * 8}
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
              <XAxis dataKey="受付_年月日" /> 
              <YAxis orientation="right" />
              <Tooltip />
              <Legend />
              <Bar dataKey="相談件数" stackId="a" fill="#26A69A" />
            </BarChart>
            <div className="graphCaption mb-3">
              {caption}
            </div>
          </div>
        </div>
        <div className="graphCaption mb-3 px-3">
          {
            caption.map(item => (
              <div className="my-1">{item}</div>
            ))
          }
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

export default CovidAdviceCenter;