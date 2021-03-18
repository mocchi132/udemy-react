import React from 'react';

const App = () => {
  const profiles = [
    { name: "Mocchi", age:"10"},
    { name: "Hachi", age:"21"},
    { name: "Hachi"}
  ]
  return (
      <div>
        {
          // 繰り返し表現 []の変数.map
          profiles.map((profile, index) =>{
            return (
              <React.Fragment>
                <User name={profile.name} age={profile.age} key={index} />
                <br/>
              </React.Fragment>
            );
          })
        }
      </div>
  );
}

const User = (props) => {
  return (
    <React.Fragment>
      <div>Hi, I am {props.name}</div>
      <div>and {props.age} years old</div>
    </React.Fragment>
  );
}

// propsの属性にデフォルト値を設定する方法
User.defaultProps = {
  age: 1
}

export default App;
