import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './page/MainPage';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
    {/* 사이드바 */}
    <Sidebar/>
      <Routes>
        <Route path ="/" element={<MainPage/>}/>
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </>
    
  );
}

export default App;
