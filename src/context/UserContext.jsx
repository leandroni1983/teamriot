import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from "axios";
export const summonerContext = createContext()

export const sumCont = () => {
    const context = useContext(summonerContext);
    if (!context) throw new Error('There is not auth provider')
    return context
};
function UserProvider({ children }) {
    const [summoner, setSummoner] = useState({})
    const [summonerRanks, setSummonerRanks] = useState([])
    const [championsMaestries, setChampionsMaestries] = useState([])
    const URL = 'https://la2.api.riotgames.com/lol/'
    const API_KEY = import.meta.env.VITE_KEY
    const getSummonerV4 = (summonerName) => {
        axios.get(`${URL}summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`,)
            .then(res => setSummoner(res.data))

    }
    const getSummonerRanks = (id) => {
        axios.get(`${URL}league/v4/entries/by-summoner/${id}?api_key=${API_KEY}`)
            .then(res => setSummonerRanks(res.data))
    }

    const getChampionsMaestries = (id) => {
        axios.get(`${URL}champion-mastery/v4/champion-masteries/by-summoner/${id}/top?count=5&api_key=${API_KEY}`)
            .then(res => setChampionsMaestries(res.data))
    }
    return (
        <summonerContext.Provider value={{ summoner, getChampionsMaestries, summonerRanks, getSummonerV4, getSummonerRanks, championsMaestries }}>
            {children}
        </summonerContext.Provider>
    )
}

export default UserProvider;
