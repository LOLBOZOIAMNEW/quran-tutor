// surahLoader.js

const axios = require('axios');

const BASE_URL = 'https://api.quran.foundation/v1/surah';

async function fetchSurahData(surahNumber) {
    try {
        const response = await axios.get(`${BASE_URL}/${surahNumber}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Surah data:', error);
        throw error;
    }
}

async function parseSurahData(surahData) {
    // Your parsing logic here. For example:
    const { data } = surahData;
    return {
        number: data.number,
        name: data.name,
        verses: data.ayahs,
    };
}

module.exports = { fetchSurahData, parseSurahData };