import React, { useState, useEffect } from 'react';
import './App.css';
import InfoIcon from '@material-ui/icons/Info';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import LanguageIcon from '@material-ui/icons/Language';
import HelpOutlinedIcon from '@material-ui/icons/HelpOutlined';
import Footer from './footer';

function SideMenu() {
  return (
    <div className="sidebar-cont my-3">
      <div className="text-center px-4 mb-4">
        <a href="/">
          <img src="./images/logo02-v.png" className="covid-logo" />
        </a>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item px-3 px-lg-0">
          <a className="covidLink fs80" href="https://www.city.hachinohe.aomori.jp/corona/index.html" target="_blank">
            <div className="d-flex">
              <InfoIcon className="str-icon" />
              <div className="text-left">新型コロナウイルス感染症に関する情報（八戸市）</div>
            </div>
          </a>
        </li>
        <li className="list-group-item px-3 px-lg-0">
          <a className="covidLink fs85" href="https://www.pref.aomori.lg.jp/koho/coronavirus_index.html" target="_blank">
            <div className="d-flex">
              <InfoIcon className="str-icon" />
              <div className="text-left">新型コロナウイルス感染症に関する情報（青森県庁）</div>
            </div>
          </a>
        </li>
        <li className="list-group-item px-3 px-lg-0">
          <a className="covidLink fs85" href="https://www.pref.iwate.jp/kurashikankyou/iryou/covid19/index.html" target="_blank">
            <div className="d-flex">
              <InfoIcon className="str-icon" />
              <div className="text-left">新型コロナウイルス感染症に関する情報（岩手県庁）</div>
            </div>
          </a>
        </li>
        <li className="list-group-item px-3 px-lg-0">
          <a className="covidLink fs85" href="https://www.pref.aomori.lg.jp/koho/message.html" target="_blank">
            <div className="d-flex">
              <SmsOutlinedIcon className="str-icon" />
              <div className="text-left">青森県知事からのメッセージ</div>
            </div>
          </a>
        </li>
        <li className="list-group-item px-3 px-lg-0">
          <a className="covidLink fs85" href="https://www.daily-tohoku.news/" target="_blank">
            <div className="d-flex">
              <LanguageIcon className="str-icon" />
              <div className="text-left">デーリー東北デジタル</div>
            </div>
          </a>
        </li>
        <li className="list-group-item px-3 px-lg-0">
          <a className="covidLink fs85" href="/about">
            <div className="d-flex">
              <HelpOutlinedIcon className="str-icon" />
              <div className="text-left">当サイトについて</div>
            </div>
          </a>
        </li>
      </ul>
      <Footer />
    </div>
  );
}
export default SideMenu;
