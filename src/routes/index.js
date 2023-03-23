import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, GameBoard, NotFound } from '../pages';
import { Header, Footer } from '../layouts';
import Cards from '../components/Cards';

const Index = () => {
    return (
        <div className='page-content'>
            <BrowserRouter>
                <Header></Header>
                <Cards />
                <Routes>
                    <Route path='/' element={<Home></Home>} />
                    <Route path='/cards' element={<Cards></Cards>} />
                    <Route path='/game' element={<GameBoard></GameBoard>} />
                    <Route path='*' element={<NotFound></NotFound>} />
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    )
}

export default Index