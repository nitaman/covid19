import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DATA ='https://raw.githubusercontent.com/tokyo-metropolitan-gov/covid19/master/data/data.json';

function CovidNewsList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(DATA);
      setData(response.data.patients_summary.data.slice(-1)[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      【東京都】新型コロナ新規感染者数
      <div> 
        +{data['小計']}名
      </div>
    </div>
  );
};

export default CovidNewsList;
