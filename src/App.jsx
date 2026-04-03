// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import RPwd from "./components/Auth/password reset/resetPassword";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/reset-password" element={<RPwd />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
