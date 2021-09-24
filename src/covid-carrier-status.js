import React from 'react';
import './App.css';
import exportFunc from './lib.js';

const tagetFile = './data/03.csv';

var jsonObj = exportFunc.CsvToJson(exportFunc.GetCsvData(tagetFile)[0], { header : 1, columnName : ['blank', '入院中', '（うち重症）', '入院調整中', '宿泊療養中', '自宅療養中', '退院・療養解除', '死亡', '総計'] });
var caption = exportFunc.CsvToCaption(exportFunc.GetCsvData(tagetFile)[0], { header : 1, columnName : ['blank', '入院中', '（うち重症）', '入院調整中', '宿泊療養中', '自宅療養中', '退院・療養解除', '死亡', '総計'] });
var lastMod = '最終更新：' + exportFunc.FormatDate( exportFunc.GetCsvData(tagetFile)[1], 'yyyy/MM/dd HH:mm' );

const CovidCarrierStatus = (props) => {
  return(
    <div className="contWrapper w-100 py-4">
      <div className="contTitle-right">
        検査陽性者の状況
      </div>
      <div className="contBody">
        <div className="of-y-scrl px-3">
          <div className="py-3">
            {
              jsonObj.map(item => (          
                <ul className="covid-graph">
                  <li>
                    <div className="d-flex justify-content-between px-2 py-1"><div className="p-2 text-nowrap">陽性者数（累計）</div><div className="p-2 text-nowrap"><span> {item['総計']}</span> 人</div></div> 
                    <ul className="pl-4">
                      <li>
                        <div className="d-flex justify-content-between px-2 py-1"><div className="px-2 py-1 text-nowrap">入院中</div><div className="px-2 py-1 text-nowrap"><span> {item['入院中']}</span> 人</div></div> 
                        <ul className="pl-4">
                          <li>
                            <div className="d-flex justify-content-between px-2 py-1"><div className="px-2 py-1 text-nowrap">重症</div><div className="px-2 py-1 text-nowrap"><span> {item['（うち重症）']}</span> 人</div></div> 
                          </li>
                          <li>
                            <div className="d-flex justify-content-between px-2 py-1"><div className="px-2 py-1 text-nowrap">重症以外</div><div className="px-2 py-1 text-nowrap"><span> {parseInt(item['入院中'],10) - parseInt(item['（うち重症）'],10)}</span> 人</div></div> 
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between px-2 py-1"><div className="px-2 py-1 text-nowrap">療養中</div><div className="px-2 py-1 text-nowrap"><span> {parseInt(item['宿泊療養中'],10) + parseInt(item['自宅療養中'],10)}</span> 人</div></div> 
                        <ul className="pl-4">
                          <li>
                            <div className="d-flex justify-content-between px-2 py-1"><div className="px-2 py-1 text-nowrap">宿泊療養中</div><div className="px-2 py-1 text-nowrap"><span> {item['宿泊療養中']} </span> 人</div></div> 
                          </li>
                          <li>
                            <div className="d-flex justify-content-between px-2 py-1"><div className="px-2 py-1 text-nowrap">自宅療養中</div><div className="px-2 py-1 text-nowrap"><span> {item['自宅療養中']} </span> 人</div></div> 
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between px-2 py-1"><div className="px-2 py-1 text-nowrap">入院調整中</div><div className="px-2 py-1 text-nowrap"><span> {item['入院調整中']} </span> 人</div></div> 
                      </li>
                      <li>
                        <div className="d-flex justify-content-between px-2 py-1"><div className="px-2 py-1 text-nowrap">退院・療養解除</div><div className="px-2 py-1 text-nowrap"><span> {item['退院・療養解除']} </span> 人</div></div> 
                      </li>
                      <li>
                        <div className="d-flex justify-content-between px-2 py-1"><div className="px-2 py-1 text-nowrap">死亡</div><div className="px-2 py-1 text-nowrap"><span> {item['死亡']} </span> 人</div></div> 
                      </li>
                    </ul>
                  </li>
                </ul>
              ))
            }
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

export default CovidCarrierStatus;
