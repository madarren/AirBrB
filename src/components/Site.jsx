import React from 'react';
import Register from '../pages/Register';
import Login from '../pages/Login';
import ListingNew from '../pages/ListingNew';
import ListingAll from '../pages/ListingAll';
import BigButton from './BigButton';

import {
  // BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // Redirect,
  useHistory,
  useLocation
} from 'react-router-dom';

function Site () {
  const [token, setToken] = React.useState(null);
  const history = useHistory();
  const { pathname } = useLocation();

  React.useEffect(() => {
    const lsToken = localStorage.getItem('token');
    if (lsToken) {
      setToken(lsToken);
    }
  }, []);

  React.useEffect(() => {
    if (token !== null) {
      if (pathname === '/login' || pathname === '/register') {
        history.push('/dashboard');
      }
    }
  }, [token]);

  const logout = async () => {
    // const response =
    await fetch('http://localhost:5005/user/auth/logout', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    // const data = await response.json();
    localStorage.removeItem('token');
    setToken(null);
  }

  return (
    <div>
      <nav>
        <ul>
          {!token && (
            <>
              <li>
                <button name="login-button"><Link to="/login" >Login</Link></button>
              </li>
              <li>
                <button name="register-button"><Link to="/register">Register</Link></button>
              </li>
            </>
          )}
          {token && (
            <>
              <li>
                <Link to="/dashboard">All Listings</Link>
              </li>
              <li>
                <Link to="/listing/current">Your Listings</Link>
              </li>
              <li>
                <button name="createnewlisting"><Link to="/listing/new">Create New Listing</Link></button>
              </li>
              <li>
                <Link to="/listing/publish">Published Listings</Link>
              </li>
            </>
          )}
        </ul>
        {token && (
          <BigButton name="logoutBtn" onClick={logout}>Logout</BigButton>
        )}
      </nav>

      <Switch>
        <Route path="/dashboard">
          <h3>Current Listings:</h3>
        </Route>
        <Route path="/login">
          <Login setTokenFn={setToken} />
        </Route>
        <Route path="/register">
          <Register setTokenFn={setToken} />
        </Route>
        <Route path="/listing/current">
          <ListingNew token={token} />
        </Route>
        <Route path="/listing/new">
          <ListingNew token={token} />
        </Route>
        <Route path="/listing/edit">
          <ListingNew token={token} />
        </Route>
        <Route path="/listing/publish">
          <ListingNew token={token} />
        </Route>
        <Route path="/">
          <h1>Welcome to AirBrB</h1>
          <h3>Current Listings:</h3>
          <ListingAll setTokenFn={setToken} />
        </Route>
      </Switch>
    </div>
  );
}

export default Site;
