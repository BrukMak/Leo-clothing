import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation.component'
import { Authentication } from './routes/authentication/authentication.component';

export const Shop = () => {
  return <h1>This is the shop page</h1>
}




const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element = {<Home />} /> 
        <Route path='/shop' element = {<Shop />}/>
        <Route path='/auth' element = {<Authentication />}/>
        
        
      </Route>

    </Routes>
  )
}

export default App;
