import React, {Component} from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  // stateとは、javaでいうインスタンス変数のこと

  constructor(props){
    super(props)
    console.log(this.state)
    this.state = {count:0}
  }

  handlePlusButton = () => {
    const currentCount = this.state.count
    this.setState({count: currentCount + 1})
  }
  handleMinusButton = () => {
    const currentCount = this.state.count
    this.setState({count: currentCount - 1})
  }

  // 初期化のthis.state = {const:0}を使うと、renderが行われず、再描画されない
  // this.setStateを実行すると、最後にrenderメソッドを実行し、再描画してくれる。
  // そのため、必ず、setStateをすること

  render(){
    console.log(this.state)
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
