import React, { Component } from 'react';
import SideMenu from './side-menu';
import Drawer from './drawer';

function About() {
  const style = {
    margin: "15px auto 0 auto",
    fontSize: "200%",
  };
  return (
    <div className="container-fluid">
      <div className="container">
        <div>
          <Drawer />
        </div>
        <div className="row my-3">
          <div className="col-12 col-md-4 col-lg-3 position-fixed mb-5">
            <div className="side-menu-wrapper">
              <div className="nav flex-nowrap vh-100 overflow-auto p-2 d-none d-md-block">
                <SideMenu />
              </div>
            </div>
          </div>
          <div className="col-12 offset-md-4 offset-lg-3 col-md-8 col-lg-9 px-3">
            <div className="main-menu-wrapper">
              <div className="contWrapper w-100 py-4">
                <div className="contTitle-left">
                  当サイトについて
                </div>
                <div className="contBody of-y-scrl px-3 fs85">
                  当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、デーリー東北新聞社（青森県八戸市）が開設したものです。青い森オープンデータカタログの「青森県内における新型コロナウイルス感染症の感染動向データ」を利用しています。<br />
                  県や市町村による公式情報と取材にもとづいた情報をわかりやすく伝えることで、青森県にお住まいの方や、青森県内に拠点を持つ企業の方、青森県を訪れる方が、現状を把握して適切な対策を取れるようにすることを目的としています。<br />
                </div>
              </div>

              <div className="contWrapper w-100 py-4">
                <div className="contTitle-left">
                  ブラウザ環境について
                </div>
                <div className="contBody of-y-scrl px-3 fs85">
                  当サイトは以下の環境でご覧いただくことを推奨いたします。<br />
                  <ul className="my-3">
                    <li>Microsoft Edge 最新版</li>
                    <li>Mozilla Firefox 最新版</li>
                    <li>Google Chrome 最新版（Windows 10以上, Android 8.0以上）</li>
                    <li>Safari 最新版（macOS, iOS）</li>
                    <li>Opera Software ASA Opera 最新版</li>
                  </ul>
                  ※推奨環境以外で利用された場合や、推奨環境下でもご利用のブラウザの設定等によっては、正しく表示されない場合がありますのでご了承ください。<br />
                </div>
              </div>

              <div className="contWrapper w-100 py-4">
                <div className="contTitle-left">
                  当サイトへのリンクについて
                </div>
                <div className="contBody of-y-scrl px-3 fs85">
                  当サイトへのリンクは自由です。<br />
                </div>
              </div>

              <div className="contWrapper w-100 py-4">
                <div className="contTitle-left">
                  JavaScriptについて
                </div>
                <div className="contBody of-y-scrl px-3 fs85">
                  当サイトではJavaScriptを使用しております。<br />
                  JavaScriptを無効にして使用された場合、各ページが正常に動作しない、または、表示されない場合がございます。<br />
                  当サイトをご利用の際には、JavaScriptを有効にして頂きますようお願いいたします。<br />
                </div>
              </div>

              <div className="contWrapper w-100 py-4">
                <div className="contTitle-left">
                  クッキー (Cookie) について
                </div>
                <div className="contBody of-y-scrl px-3 fs85">
                  当サイトの一部ではクッキーを使用しています。<br />
                  クッキーとは、Webコンテンツからの要求で利用者の手元の端末に一時的に保存されるデータのことで、当サイトでは利用状況の把握のためにクッキーを使用する場合があります。<br />
                  ブラウザに関する情報の収集を希望しない場合は、インターネット閲覧ソフト（ブラウザ）をご自身で設定することにより、クッキーの機能が働かないようにすることも可能です。<br />
                  ただし、クッキーを受け入れない設定をされている場合は、当サイトの機能が正常に動作しない場合がございます。<br />
                </div>
              </div>

              <div className="contWrapper w-100 py-4">
                <div className="contTitle-left">
                  Google Analyticsの利用について
                </div>
                <div className="contBody of-y-scrl px-3 fs85">
                  当サイトでは、サービス向上やサイトの改善のためにGoogle LLCの提供するアクセス分析のツールであるGoogle Analyticsを利用した計測を行っております。<br />
                  Google Analyticsは、当サイトが発行するクッキー (Cookie) を利用して、個人を特定する情報を含まずにWebサイトの利用データ（アクセス状況、トラフィック、閲覧環境など）を収集しております。クッキー (Cookie) の利用に関してはGoogleのプライバシーポリシーと規約に基づいております。<br />
                  取得したデータは Webサイト利用状況の分析、サイト運営者へのレポートの作成、その他のサービスの提供に関わる目的に限り、これを使用します。<br />
                  Google Analyticsの利用規約及びプライバシーポリシーに関する説明については、Google Analyticsのサイトをご覧ください。<br />
                  <ul className="my-3">
                    <li><a className="covid-link" href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank">Google Analytics利用規約</a></li>
                    <li><a className="covid-link" href="https://policies.google.com/privacy?hl=ja" target="_blank">Googleのプライバシーポリシー</a></li>
                    <li><a className="covid-link" href="https://support.google.com/analytics/answer/6004245?hl=ja" target="_blank">Google Analyticsに関する詳細情報</a></li>
                  </ul>
                </div>
              </div>

              <div className="contWrapper w-100 py-4">
                <div className="contTitle-left">
                  免責事項
                </div>
                <div className="contBody of-y-scrl px-3 fs85">
                  当サイトに掲載されている情報の正確性については万全を期していますが、デーリー東北新聞社は利用者が当サイトの情報を用いて行う一切の行為について責任を負うものではありません。<br />
                  また、利用者が当サイトを利用したことにより発生した利用者の損害及び利用者が第三者に与えた損害に対して、責任を負うものではありません。<br />
                  当サイトに掲載されている情報は、予告なしに変更又は削除することがあります。<br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
