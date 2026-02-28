// app.js

const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Quran Foundation API base URL
const API_BASE_URL = 'https://api.quran.com/v4';

// Fetch Surahs
app.get('/surahs', async (req, res) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/surahs`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching Surahs' });
    }
});

// Fetch specific Surah by ID
app.get('/surahs/:id', async (req, res) => {
    const surahId = req.params.id;
    try {
        const response = await axios.get(`${API_BASE_URL}/surahs/${surahId}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching Surah' });
    }
});

// Fetch verses for a specific Surah
app.get('/surahs/:id/verses', async (req, res) => {
    const surahId = req.params.id;
    try {
        const response = await axios.get(`${API_BASE_URL}/surahs/${surahId}/verses`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching verses' });
    }
});

// Fetch translations for a specific Surah or verse
app.get('/translations', async (req, res) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/translations`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching translations' });
    }
});

// Fetch audio for a specific Surah
app.get('/audio/:id', async (req, res) => {
    const surahId = req.params.id;
    try {
        const response = await axios.get(`https://api.quran.com/v4/recitation/audio/${surahId}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching audio' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
