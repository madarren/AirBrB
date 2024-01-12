import PropTypes from 'prop-types';
import React from 'react';
import BigButton from '../components/BigButton';

const Register = (props) => {
  const [email, setEmail] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  const [confpwd, setConfPwd] = React.useState('');
  const [name, setName] = React.useState('');

  const registerBtn = async () => {
    if (pwd !== confpwd) {
      alert('Passwords do not match');
    } else {
      const response = await fetch('http://localhost:5005/user/auth/register', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password: pwd,
          name,
        })
      });
      const data = await response.json();
      if (data.error) {
        alert(data.error);
      } else {
        props.setTokenFn(data.token);
        localStorage.setItem('token', data.token);
      }
    }
  };

  const styleObj = {
    background: pwd !== '' && pwd.length < 8 ? 'red' : 'white',
  };

  return (
    <>
      Email: <input type="text" name="email" onChange={(event) => setEmail(event.target.value)} value={email} /><br />
      Password: <input style={styleObj} type="text" name="password" onChange={(event) => setPwd(event.target.value)} value={pwd} /><br />
      Confirm Password: <input style={styleObj} type="text" name="cpassword" onChange={(event) => setConfPwd(event.target.value)} value={confpwd} /><br />
      Name: <input type="text" name="name" onChange={(event) => setName(event.target.value)} value={name} /><br />
      <BigButton name="registerbtn" onClick={registerBtn}>Register</BigButton>
    </>
  );
}

export default Register;

Register.propTypes = {
  setTokenFn: PropTypes.func,
};
