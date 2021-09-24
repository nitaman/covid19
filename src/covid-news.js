import React, { useState, useEffect } from 'react';
import axios from "axios";
import exportFunc from './lib.js';

{/*
const URL = 'https://www.daily-tohoku.news/wp-json/wp/v2/categories?slug=main';
export const ApiGet_Simple = (URL) => {
  axios // axiosモジュールを使う
    .get(URL) // getメソッドを呼び出す
    .then((results) => { // レスポンスが来たらthenを実行
      console.log(results.data); // コンソールログにresultsに含まれるdataを表示
    })
    .catch((error) => { // 通信エラーが発生したら
      console.log('通信失敗'); // ログに失敗と表示
      console.log(error.status); // エラーコードを表示
    });
    return "null";
};
*/}

function CovidNewsList() {
  const promise = axios.get('https://www.daily-tohoku.news/wp-json/wp/v2/categories?slug=main');
  const targetID = promise.then((response) => response.data[0].id);
  const targetCount = promise.then((response) => response.data[0].count);
  console.log(targetID);
  console.log(targetCount);

  const [data, setData] = useState([]);
  useEffect(async () => {
    const result = await axios(
      'https://www.daily-tohoku.news/wp-json/wp/v2/posts?categories=30&per_page=100&page=1',
    );
    setData(result.data);
  }, []);
  return (
    <div className="contWrapper w-100 py-4">
      <div className="contTitle-right">
        新型コロナ関連ニュース
      </div>
      <div className="contBody of-y-scrl px-3">
        <div className="mh-250px px-3">
          <ul className="ls-none p-0">
          {
            data.map(item => (
              <li className="my-1 line150">
                <div className="d-flex news-divider text-wrap">
                  <div className="mr-2 fs85 text-secondary">{exportFunc.FormatDate(new Date(item.date), 'yyyy/MM/dd')}</div>
                  <div><a className="covidLink fs90" href={item.link}>{item.title.rendered.replace(/<span class="d-inlne bg-dark rounded px-2 py-1 text-white m-1 fs90">Free<\/span>/, '')}</a></div>
                </div>
              </li>
            ))
          }
          </ul>
        </div>
      </div>
    </div>
  );
}
export default CovidNewsList;

{/*
class CovidNewsList extends React.Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios.get("https://www.daily-tohoku.news/wp-json/wp/v2/posts?categories=30&per_page=100&page=1")
    .then(response => {
      const posts = response.data;
      this.setState({ posts });
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.posts.map(post => (
            <li>{post.title.rendered}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default CovidNewsList;
*/}
