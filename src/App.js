 
 import React, {useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Analytics from './components/Analytics/Analytics';
//import Cards from './components/Cards';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import LoggedIn from './components/LoggedIn/LoggedIn';
 
import {Routes, Route} from 'react-router-dom';

const  App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  return (
    <div>
  
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <Hero />
                <Analytics /> 
                <Footer />
              </>
            )}
          />
          <Route path="/login" element={ 
             <>
               {isLoggedIn ? (
        
               <LoggedIn setIsLoggedIn={setIsLoggedIn} />
       
               ) : (
               <Login setIsLoggedIn={setIsLoggedIn} />
               )}
             </>
           } />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        
      
       
    </div>
  );
}
export default App;
