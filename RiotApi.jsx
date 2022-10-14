
//const API_KEY = 'RGAPI-42684f88-d81c-4293-8388-89295c2b6c47'
const API_KEY = import.meta.env.VITE_KEY
console.log(import.meta.env.VITE_KEY)
const getSummonerData = (summonerName) => {
    fetch(`https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(res => getSummonerEntries(res.id))

}
const getSummonerEntries = (id) => {
    fetch(`https://la2.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(res => console.log(res))
}

export default getSummonerData 