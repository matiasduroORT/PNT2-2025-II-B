import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const TeamContext = createContext()

export const useTeam = () => useContext(TeamContext)

export function TeamProvider({children}){

    const [team, setTeam] = useState([])

    const addToTeam = (pokemon) => {
        setTeam((prev) => [...prev, pokemon])
    }
    
    

    return (
    <TeamContext.Provider value={{team, addToTeam}}> 
        {children}
    </TeamContext.Provider>
    )
    
}