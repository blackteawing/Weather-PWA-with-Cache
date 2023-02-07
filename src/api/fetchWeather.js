import axios from "axios";

export const fetchWeather = async (query) => {
    const options = {
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        params: { appid: 'b3ec1f59423b1221d4a775a0feb2a7c3', q: query, unit: 'metric' }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};