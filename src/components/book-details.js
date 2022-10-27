import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BOOK_API } from '../api';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${BOOK_API}${id}`)
      .then(({ data }) => setBook(data))
  }, [id])

  return (
    <div className="container">
      <div className="row book-details">
        <div className="col-lg-4 col-xl-3 book-details__img overflow-hidden">
          <img className="img-fluid d-block mx-auto mb-3 mb-lg-0" src={book.image_url} alt="" />
        </div>
        <div className="col-lg-8 col-xl-9 book-details__info">
          <p><h4><b>Name:</b> {book.title}</h4></p>
          <p><b>Authors:</b> {book.authors}</p>
          <p><b>Number of pages:</b> {book.num_pages}</p>
          <p><b>Genres:</b> {book.genres}</p>
          <p><b>Description:</b> {book.description}</p>
        </div>
      </div>
    </div>
  )
}

export default BookDetails