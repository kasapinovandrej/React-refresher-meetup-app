import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => { },
    removeFavorite: (meetupId) => { },
    addItem: (meetupId) => { }
});

export const FavoritesContextProvider = (props) => {
    const [userFavorites, setUserFavorites] = useState([])

    const addFavoriteHandler = (favoriteMeetup) => {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup)
        })
    }
    const removeFavoriteHandler = (meetupId) => {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(el => el.id !== meetupId)
        })
    }
    const itemIsFavoriteHandler = (meetupId) => {
        return userFavorites.some(meetup => meetup.id === meetupId)
    }
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        addItem: itemIsFavoriteHandler
    }


    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;