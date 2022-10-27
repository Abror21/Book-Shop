import { observable } from 'mobx'

const mobxData = {
    favorites: [],
    addToFavorites: function (book) {
        this.favorites = [...this.favorites, book]
    },
    removeFromFavorites: function (id) {
        const newFavorites = this.favorites.filter(book => book.id !== id);
        this.favorites = newFavorites
    }
}
export default observable(mobxData);