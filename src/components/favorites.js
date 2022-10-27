import { observer } from 'mobx-react'
import mobxData from '../book-context';
import BookTemplate from './book-template';

const Favorites = () => {

  return (
    <div className="container">
      <div className="favorites">
        {
          mobxData.favorites.length ?
            mobxData.favorites.map(({id, image_url, title, authors}) => (
              <div className="book-item" key={id}>
                <BookTemplate image_url={image_url} id={id} title={title} authors={authors}/>
                {
                  <button className="book-item__btn" onClick={() => mobxData.removeFromFavorites(id)}>Remove from Favorites</button>
                }
              </div>
            )) :
            <h2>You don't have favorite books!</h2>
        }
      </div>
    </div>
  )
}

export default observer(Favorites)