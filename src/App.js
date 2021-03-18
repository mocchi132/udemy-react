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
          profiles.map((profile, index) => {
            return (
                <User name={profile.name} age={profile.age} key={index} />
            );
          })
        }
      </div>
  )
}

const User = (props) => {
  return (
    <React.Fragment>
      <div>Hi, I am {props.name} and {props.age} years old</div>
    </React.Fragment>
  );
}

// propsの属性にデフォルト値を設定する方法
User.defaultProps = {
  age: 1
}

export default App;
