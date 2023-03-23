import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Loading, NotFound } from '../pages';
import { useSelector } from 'react-redux';
import Cards from '../components/Cards';


const Index = () => {
    return (
        <div className='page-content'>
            <BrowserRouter>
                {/* <Header></Header> */}
                <Cards />
                <Routes>
                    <Route path='/' element={<Home></Home>} />
                    <Route path='/cards' element={<Cards></Cards>} />
                    <Route path='*' element={<NotFound></NotFound>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Index