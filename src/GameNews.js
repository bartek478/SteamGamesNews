import { useState, useEffect } from 'react';
import Game from './Game';
import GameDetail from './GameDetail';

function GameNews() {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [selectedGame, setSelectedGame] = useState(null);

  /*const fetchData = async () => { PRE-NODE VERSION OF FETCHDATA
        setIsLoading(true)
        try {
            const response = await fetch(`https://store.steampowered.com/api/storesearch/?term=${searchTerm}&cc=US`)
            if(!response.ok)
                throw new Error("Failed to fetch data")

            const result = await response.json()
            console.log(result.Search)
            setGames(result.Search)
            setIsLoading(false)
        }
        catch(error) {
            console.log(error)
        }
    }   */

    const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`http://localhost:5000/api/search?term=${searchTerm}`);
                if (!response.ok) 
                    throw new Error("Failed to fetch data");

                const result = await response.json();
                setGames(result.items || []);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };

    const handleSearch = () => {
        fetchData()
    }


  return (
    <div>
        <h1>Game News</h1>
        <input type="text" placeholder="search game" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        <button onClick={handleSearch}>Search</button>
        <div>
        {games.map((game, index) => (
          <div key={index} onClick={() => setSelectedGame(game)}>
            <Game param={game} />
          </div>
        ))}
      </div>
      {selectedGame && <GameDetail appId={selectedGame.id} />}
    </div>
  );
}

export default GameNews;