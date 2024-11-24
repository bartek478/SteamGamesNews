function Docs() {
    return(
        <div>
            <br></br>
            <h1>Documentation</h1>
            <br></br>
            <p>Steam Games News App is a react project used to fetch and display news related to steam games. It allows users to search for games and view their 10 latest updates in a modal interface.</p>
            <hr></hr>
            <p>If you want to open project localy, then after downloading you have to:</p>
            <p>1. Run the server by typing "node server.js" in terminal</p>{/*list without using <ol> because why not*/}
            <p> 2. Run react app by typing "npm start" in terminal</p>
            <hr></hr>
            <h5>How to use the website</h5>
            <p>1. Open SEARCH NEWS card</p>
            <p>2. Enter a game name in the search bar</p>
            <p>3. Click "Search"</p>
            <p>4. Select a game to view its details in a modal</p>
            <p>5. Click on a game to open the modal</p>
            <p>5.1. If no news is available, the game will be non-interactive</p>
            <hr></hr>
            <h5>Apis used in the project</h5>
            <p>https://store.steampowered.com/api/storesearch/?term=EXAMPLE&cc=US</p>
            <p>https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=EXAMPLEID&count=10&maxlength=3000&format=json</p>
        </div>
    )
}
export default Docs