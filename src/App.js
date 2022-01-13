import React, {useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import UpdatePlace from './places/pages/UpdatePlace';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigator from './shared/components/Navigation/MainNavigator';
import { AuthContext } from './shared/context/auth-context';
import Auth from './user/pages/Auth';
import Users from './user/pages/Users';

const App =() => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true)
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false)
  }, []);

  let routes;
  if(isLoggedIn) {
    routes = (
      <Routes>
      <Route exact="true"  path="/" element={<Users/>} />
      <Route path="/places/new" element={<NewPlace/>} />
      <Route  exact="true" path="/places/:placeId" element={<UpdatePlace/>} />
      <Route  exact="true" path="/:userId/places" element={<UserPlaces/>} />
      {/* <Redirect to='/'/>  */}
      </Routes>
    );
  } else {
    routes = (
      <Routes>
      <Route exact="true"  path="/" element={<Users/>} />
      <Route  exact="true" path="/:userId/places" element={<UserPlaces/>} />
      <Route  exact="true" path="/auth" element={<Auth/>} />
      {/* <Redirect to='/auth'/>  */}
      </Routes>
    );
  }
//es6
  return (
    <AuthContext.Provider value={{isLoggedIn, login, logout }}>  
    <Router>
      <MainNavigator />
      <main >
     
        {routes}
      {/* <Route exact="true"  path="/" element={<Users/>} />
      <Route path="/places/new" element={<NewPlace/>} />
      <Route  exact="true" path="/:userId/places" element={<UserPlaces/>} />
      <Route  exact="true" path="/places/:placeId" element={<UpdatePlace/>} />
      <Route  exact="true" path="/auth" element={<Auth/>} /> */}
   
      </main>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
