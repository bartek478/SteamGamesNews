import { useEffect, useState } from 'react';
import './Modal.css'; //in order to make modal more wide

function GameDetail({ appId }){
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

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

    if (isLoading) return <p>Loading...</p>;
    if (news.length === 0) return <p>No news available for this game</p>;

    return (
        <div>
            {news.length > 0 && (
                <div className="modal" id={`staticBackdrop-${appId}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`staticBackdropLabel-${appId}`} aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Game id: {appId}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {news.map((newsItem, index) => (
                                    <div key={index}>
                                        <h5>{newsItem.title}</h5>
                                        <div dangerouslySetInnerHTML={{ __html: newsItem.contents }} /> {/* because content in json contains tags like <a> and so on, i need to use dangerouslySetInnerHTML in order to have them appear like links and not html code*/}
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}


export default GameDetail