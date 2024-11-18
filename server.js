const express = require('express');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args)); //i dont know what it is, but this is the only way node-fetch works
const app = express();
const PORT = 5000;
const cors = require('cors');

app.use(cors());

app.get('/api/search', async (req, res) => {
    const { term } = req.query;
    try {
        const response = await fetch(`https://store.steampowered.com/api/storesearch/?term=${term}&cc=US`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data from Steam API' });
    }
});

app.get('/api/news', async (req, res) => {
    const { appId } = req.query;
    try {
        const response = await fetch(`https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${appId}&count=3&maxlength=3000&format=json`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ error: 'Failed to fetch news from Steam API' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});