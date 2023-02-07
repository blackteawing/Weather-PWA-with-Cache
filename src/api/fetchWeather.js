import axios from "axios";

export const fetchWeather = async (query) => {
    const options = {
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        params: { appid: 'YOUR API KEY', q: query, unit: 'metric' }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
