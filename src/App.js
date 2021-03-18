import React from 'react';
import PropTypes from 'prop-types';

const App = () => {

  const profiles = [
    { name: "Mocchi", age:"10"},
    { name: "Hachi", age:"21"},
    { name: "Ha" }
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
      <div>Hi, I am {props.name} and {props.age} years old</div>
  );
}

// props内の型定義 誤った型を渡すとブラウザでWarningが出るようになる
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.string.isRequired
}

export default App;
