import React from 'react';
import BigButton from '../components/BigButton';
import PropTypes from 'prop-types';

const Login = (props) => {
  const [email, setEmail] = React.useState('');
  const [pwd, setPwd] = React.useState('');

  const loginBtn = async () => {
    const response = await fetch('http://localhost:5005/user/auth/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password: pwd,
      })
    });
    const data = await response.json();
    if (data.error) {
      alert(data.error);
    } else {
      props.setTokenFn(data.token);
      localStorage.setItem('token', data.token);
    }
  };

  return (
    <>
      Email: <input type="text" onChange={(event) => setEmail(event.target.value)} value={email} /><br />
      Password: <input type="text" onChange={(event) => setPwd(event.target.value)} value={pwd} /><br />
      <BigButton name="loginBtn" onClick={loginBtn}>Login</BigButton>
    </>
  );
}

export default Login;

Login.propTypes = {
  setTokenFn: PropTypes.func,
};
