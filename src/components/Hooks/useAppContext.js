import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('context error');
    }
    return context;
}

const AppContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (rental) => {
        const oldFavorites = [...favorites];
        const newFavorites = oldFavorites.concat(rental);
        setFavorites(newFavorites);        
    }
    const removeFromFavorites = (id) => {
        const oldFavorites = [...favorites];
        const newFavorites = oldFavorites.filter(rental => rental.id !== id);
        setFavorites(newFavorites);
        
    }
    

    return (
        <AppContext.Provider value={{favorites, addToFavorites, removeFromFavorites}}>
            {children}
      </AppContext.Provider>
  )
}

export default AppContextProvider;