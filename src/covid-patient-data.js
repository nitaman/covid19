import React from 'react';
import exportFunc from './lib.js';

const tagetFile = './data/02.csv';

var jsonObj = exportFunc.CsvToJson(exportFunc.GetCsvData(tagetFile)[0], { header : 1, columnName : ['ＮＯ', '全国地方公共団体コード', '都道府県名', '保健所管内' ,'公表_年月日', '判明_年月日', '居住地', '年代', '性別'] });
var caption = exportFunc.CsvToCaption(exportFunc.GetCsvData(tagetFile)[0], { header : 1, columnName : ['ＮＯ', '全国地方公共団体コード', '都道府県名', '保健所管内' ,'公表_年月日', '判明_年月日', '居住地', '年代', '性別'] });
var lastMod = '最終更新：' + exportFunc.FormatDate( exportFunc.GetCsvData(tagetFile)[1], 'yyyy/MM/dd HH:mm' );

{/* 降順 */}
function compareDown(a, b) {
  return parseInt(b['ＮＯ']) - parseInt(a['ＮＯ']);
}
{/* 昇順 */}
function compareUp(a, b) {
  return parseInt(a['ＮＯ']) - parseInt(b['ＮＯ']);
}
jsonObj.sort(compareDown);

const CovidPatientData = (props) => {
  return(
    <div className="contWrapper w-100 py-4">
      <div className="contTitle-right">
        感染症患者データ
      </div>
      <div className="contBody">
        <div className="of-y-scrl px-3">
          <div className="mh-350px py-3">
            <div className="table-responsive">
              <table id="patient-table" className="table table-striped text-left fs75">
                <thead>
                  <tr>
                    <th className="border-right-def tablesorter-header tablesorter-headerUnSorted">公表日</th>
                    <th className="border-right-def tablesorter-header tablesorter-headerUnSorted">居住地</th>
                    <th className="border-right-def tablesorter-header tablesorter-headerUnSorted">年代</th>
                    <th className="tablesorter-header tablesorter-headerUnSorted">性別</th>
                  </tr>
                </thead>
                <tbody>
                {
                  jsonObj.map(item => (
                    <tr>
                      <td className="px-1 border-right-def" key={("date-")+item['ＮＯ']}>{item['公表_年月日']}</td>
                      <td className="px-1 border-right-def" key={("area-")+item['ＮＯ']}>{item['居住地']}</td>
                      <td className="px-1 border-right-def" key={("age-")+item['ＮＯ']}>{item['年代']}</td>
                      <td className="px-1" key={("gender-")+item['ＮＯ']}>{item['性別']}</td>
                    </tr>
                  ))
                }
                </tbody>
              </table>
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

export default CovidPatientData;
