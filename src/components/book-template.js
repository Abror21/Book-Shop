import { useNavigate } from 'react-router-dom';

const BookTemplate = ({ image_url, id, title, authors }) => {
  const navigate = useNavigate();
    
    return (
        <div className="book-item__wrapper">
            <img className="book-item__img" src={image_url} alt="" onClick={() => navigate(`/${id}`)} />
            <h3 className="book-item__title">{title}</h3>
            <p className="book-item__author">{authors}</p>
        </div>
    )
}

export default BookTemplate