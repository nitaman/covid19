import React, { Component } from 'react';
import SideMenu from './side-menu';
import CovidCarrierStatus from './covid-carrier-status';
import CovidCarrierNumber from './covid-carrier-number';
import CovidTestedNumber from './covid-tested-number';
import CovidPatientData from './covid-patient-data';
import CovidNewsList from './covid-news';
import CovidAdviceCenter from './covid-advice-center';
import CovidCallCenter from './covid-call-center';
import Drawer from './drawer';

function Home() {
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
        <div className="row">
          <div className="col-12 col-lg-3">
            <div className="side-menu-wrapper sticky-top">
              <div className="nav flex-nowrap vh-100 overflow-auto p-2 d-none d-lg-block">
                <SideMenu />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-9 px-3">
            <div className="main-menu-wrapper">
              <div className="row">
                <div className="col-12 col-lg-12 mx-auto">
                  <CovidNewsList />
                </div>
                <div className="col-12 col-lg-6">
                  <CovidCarrierNumber />
                </div>
                <div className="col-12 col-lg-6">
                  <CovidTestedNumber />
                </div>
                <div className="col-12 col-lg-6">
                  <CovidCarrierStatus />
                </div>
                <div className="col-12 col-lg-6">
                  <CovidPatientData />
                </div>
                <div className="col-12 col-lg-6">
                  <CovidAdviceCenter />
                </div>
                <div className="col-12 col-lg-6">
                  <CovidCallCenter />
                </div>
              </div>
            </div>

            {/*
            <div className="text-center">
              <iframe id="vaccine-graph" src="https://e.infogram.com/c2903dda-3c88-45f5-802b-ee3c364ddd81?src=embed" title="ワクチン接種数" width="700" height="2610" scrolling="no" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
              <div className="vaccine-graph-link-wrapper text-center mx-auto">
                <a className="vaccine-graph-link-top" href="https://infogram.com/c2903dda-3c88-45f5-802b-ee3c364ddd81" target="_blank">ワクチン接種数</a><br />
                <a className="vaccine-graph-link-bottom" href="https://infogram.com" target="_blank" rel="nofollow">Infogram</a>
              </div>
            </div>

            <div className="text-center">
              <iframe id="vaccine-chart" src="https://e.infogram.com/ba9944f3-2ecf-4f77-8f90-8203cd3663af?src=embed" title="ワクチン接種数（県別）" width="700" height="1220" scrolling="no" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
              <div className="vaccine-chart-link-wrapper text-center mx-auto">
                <a className="vaccine-chart-link-top" href="https://infogram.com/ba9944f3-2ecf-4f77-8f90-8203cd3663af" target="_blank">ワクチン接種数（県別）</a><br />
                <a className="vaccine-chart-link-bottom" href="https://infogram.com" target="_blank" rel="nofollow">Infogram</a>
              </div>
            </div>
            */}

          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
