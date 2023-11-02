import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation.component'
import { SignIn } from './routes/sign-in/sign-in.component';

export const Shop = () => {
  return <h1>This is the shop page</h1>
}




const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element = {<Home />} /> 
        <Route path='/shop' element = {<Shop />}/>
        <Route path='/signin' element = {<SignIn />}/>

        
      </Route>

    </Routes>
  )
}

export default App;
