const STORAGE_FAVORITE_KEY = 'deezweb.favorites'

export default {
    // Retourne les favoris du localStorage du navigateur
    getFavoritesFromStorage() {
        return JSON.parse(window.localStorage.getItem(STORAGE_FAVORITE_KEY)) || []
    },

    // Vérifie si une musique se trouve dans les favoris
    isFavorite(music) {
        return Boolean(this.getFavoritesFromStorage().find(f => f.id === music.id))
    },

    // Permet d'ajouter/supprimer un favori du localStorage
    toggleFavorite(music) {
        if (this.isFavorite(music)) {
            this.removeFavoriteFromStorage(music)
        } else {
            this.addFavoriteToStorage(music)
        }     
    },

    // Ajoute un favori au localStorage
    addFavoriteToStorage(music) {
        const favorites = this.getFavoritesFromStorage()
        favorites.push(music)
        window.localStorage.setItem(STORAGE_FAVORITE_KEY, JSON.stringify(favorites))
    },

    // Supprime un favori du localStorage
    removeFavoriteFromStorage(music) {
        const favorites = this.getFavoritesFromStorage()
        const musicIndex = favorites.findIndex(f => f.id === music.id)
        favorites.splice(musicIndex, 1)
        window.localStorage.setItem(STORAGE_FAVORITE_KEY, JSON.stringify(favorites))
    }
}