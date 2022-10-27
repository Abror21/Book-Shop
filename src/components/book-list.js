import React, { useState, useEffect } from 'react';
import { BOOKS_API } from '../api';
import axios from 'axios';
import { observer } from 'mobx-react'
import mobxData from '../book-context';
import { useNavigate } from 'react-router-dom';
import BookTemplate from './book-template';


const BookList = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(BOOKS_API)
      .then(res => setBooks(res.data))
  }, [])

  const favoriteCheck = (id) => {
    return mobxData.favorites.some(book => book.id === id)
  }

  return (
    <div className="container">
      <h1 className="text-center fw-bold mb-3">World of Books</h1>
      <div className="book-list">
        {
          books.map(book => {
            const { id, image_url, title, authors } = book;
            return <div className="book-item" key={id}>
              <BookTemplate image_url={image_url} id={id} title={title} authors={authors} />
              {
                favoriteCheck(id) ?
                  <button className="book-item__btn" onClick={() => mobxData.removeFromFavorites(id)}>Remove from Favorites</button> :
                  <button className="book-item__btn" onClick={() => mobxData.addToFavorites(book)}>Add to Favorites</button>
              }
            </div>
          })
        }
      </div>
    </div>
  )
}

export default observer(BookList)