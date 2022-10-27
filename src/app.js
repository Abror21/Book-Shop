import React from 'react';
import './app.css';
import Header from './components/header';
import Footer from './components/footer';
import BookList from './components/book-list';
import Favorites from './components/favorites';
import BookDetails from './components/book-details';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter basename='/book'>
      <Header />
      <Routes>
        <Route exact path="/" element={<BookList />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/:id" element={<BookDetails />} />
        <Route path="*" element={<div className="container text-center"><h1>Page Not Found</h1></div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;