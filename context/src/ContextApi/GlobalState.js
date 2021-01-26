import React, {createContext, useState, useEffect} from 'react'
import GamesAPI from '../API/gamesAPI'

export const GlobalState = createContext()


export const DataProvider = ({children}) =>{
    
    const state = {
        name: "habib",
        prenom: "elmtahef",
        gamesApi: GamesAPI()
    }
    
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}