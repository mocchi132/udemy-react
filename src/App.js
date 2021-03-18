import React from 'react';

// クラスコンポーネント
// class App extends Component {
//  render() {
//   return (
//       <React.Fragment>
//         <div>
//           <label htmlFor="for">bar1</label>
//           <input type="text" onChange={consFunc} />
//         </div>
//         <div>
//           <label htmlFor="for2">bar2</label>
//           <input type="text" onChange={consFunc2} />
//         </div>
//       </React.Fragment>
//   );
//   }
// }

// functional コンポーネント
const App = () => {
  return (
      <div>
        <Cat />
        <Cat />
        <Cat />
        <Cat />
      </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}
export default App;
