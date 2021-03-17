import React, { Component} from 'react';

class App extends Component {
  render() {
// パターン１ 変数のぶち込み
//    const greeting = "Hi, Tom!";
//    const dom = <h1 className="foo">{greeting}</h1>;
//    return dom;

// パターン２ クリックイベントの追加と、アロー関数
//  return <input type="text" onClick={() => {console.log("I am clicked")}} />;

// パターン３ 関数が入った変数を、パラメータに設定
  return (
      <div>
        <div>
          <label htmlFor="for">bar1</label>
          <input type="text" onChange={consFunc} />
        </div>
        <div>
          <label htmlFor="for2">bar2</label>
          <input type="text" onChange={consFunc2} />
        </div>
      </div>
  );
  }
}

var i = 0;
var j = 0;

// 無名関数を変数に代入する
// このパターンは、使用する前に代入が行われていないといけない
var consFunc = function(){
  i += 1;
  console.log("I am consFunc1：" + i);
}

// 普通の関数宣言
// このパターンは、上でも下でもどこに記述してても使用できる
// 無名関数と普通の関数で、関数渡しは普通にできる
// 宣言の位置に注意する必要があるだけだった・・・　とほほ
function consFunc2(){
  j += 1;
  console.log("I am consFunc2：" + j);
}

export default App;
