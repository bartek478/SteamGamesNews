import { useEffect, useState } from 'react';

function GameDetail({ appId }){
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        /*const fetchNews = async () => { PRE-NODE VERSION OF FETCHDATA
            setIsLoading(true);
            try {
                const response = await fetch(`https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${appId}&count=3&maxlength=3000&format=json`);
                if (!response.ok) throw new Error("Failed to fetch news");

                const result = await response.json();
                setNews(result.appnews.newsitems || []);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };*/

        const fetchNews = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`http://localhost:5000/api/news?appId=${appId}`);
                if (!response.ok) 
                    throw new Error("Failed to fetch news");
        
                const result = await response.json();
                setNews(result.appnews.newsitems || []);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };
        

        fetchNews();
    }, [appId]);

    return (
        <div>
            <h2>Game News</h2>
            {news.length === 0 ? (
                <p>No news available for this game.</p>
            ) : (
                news.map((newsItem, index) => (
                    <div key={index}>
                        <h3>{newsItem.title}</h3>
                        <p>{newsItem.contents}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default GameDetail