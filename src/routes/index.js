import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, GameBoard, PlayerBoard, NotFound } from "../pages";
import { Header, Footer } from "../layouts";

const Index = () => {
  return (
    <div className='page-content'>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/player' element={<PlayerBoard></PlayerBoard>} />
          <Route path='/game' element={<GameBoard></GameBoard>} />
          <Route path='*' element={<NotFound></NotFound>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default Index;
