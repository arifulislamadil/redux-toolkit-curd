import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBooks from '../fetaures/books/AddBooks';
import BooksView from '../fetaures/books/BooksView';
import EditBooks from '../fetaures/books/EditBooks';
import NavBar from '../layouts/navbar/NavBar';
import Error from '../pages/Error';
import Home from '../pages/Home';

const Index = () => {
    return (
        <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/show-books' element={<BooksView/>}/>
                <Route path='/add-books' element={<AddBooks/>}/>
                <Route path='/edit-book' element={<EditBooks/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Index;