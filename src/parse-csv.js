import React from 'react';
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { readRemoteFile } from 'react-papaparse';

readRemoteFile(
  './data/04.csv', {
    complete: (results) => {
      console.log('Results:', results);
      var csvObj = csvJoin(results.data,'\n');
      console.log('----------');
      console.log(csvObj);
      var jsonObj = csvToJson(csvObj, { header : 1, columnName : ['name', 'uv', 'pv', 'amt'] });
      console.log('----------');
      console.log(jsonObj);
    },
  }
);

var csvJoin = function(mycsv,delimit) {
  return mycsv.join(delimit);
};

var csvToJson = function(csvStr, userOptions) {
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
      data = {};
      for (j = 0, len2 = options.columnName.length; j < len2; j++) {
        if (typeof line[j] !== 'undefined') {
          row = line[j];
          row = row.replace(/^"(.+)?"$/, '$1');
        } else {
          row = null;
        }
        data[options.columnName[j]] = row;
      }
      json.push(data);
    } else {
      json.push(line);
    }
  }
  return json;
};

const data = [
  {
    name: 'A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'H',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'I',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'J',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


const CovidInspection = (props) => {
  return(
    <div className="commentBox">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" stackId="a" fill="#8884d8" />
        <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default CovidInspection;