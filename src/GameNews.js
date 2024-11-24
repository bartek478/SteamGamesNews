import { useState, useEffect } from 'react';
import Game from './Game';
import GameDetail from './GameDetail';
import Loading from './Loading/Loading';

function GameNews() {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [selectedGame, setSelectedGame] = useState(null);
  const [newsAvailable, setNewsAvailable] = useState({});

    const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`http://localhost:5000/api/search?term=${searchTerm}`);
                if (!response.ok) 
                    throw new Error("Failed to fetch data");

                const result = await response.json();
                setGames(result.items || []);
                // check which games have news and if they dont, we cant click them
                const availability = {};
                await Promise.all(
                    result.items.map(async (game) => {
                        const newsResponse = await fetch(`http://localhost:5000/api/news?appId=${game.id}`);
                        const newsResult = await newsResponse.json();
                        availability[game.id] = (newsResult.appnews.newsitems || []).length > 0;
                    })
                );
                setNewsAvailable(availability);
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
        {isLoading && <Loading/>}
        <br></br>
        <h1>Games News</h1>
        <br></br>
        <input type="text" placeholder="search game" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        <button onClick={handleSearch}>Search</button>
        <div>
        <br></br>
        {games.map((game, index) => (
          <div key={index}>
          {newsAvailable[game.id] ? (
              <div data-bs-toggle="modal" data-bs-target={`#staticBackdrop-${game.id}`}>
                  <Game param={game} />
              </div>
          ) : (
              <div style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                  <Game param={game} />
              </div>
          )}
          <GameDetail appId={game.id} />
          </div>
        ))}
      </div>
      {selectedGame && <GameDetail appId={selectedGame.id} />}
    </div>
  );
}

export default GameNews;

