import './App.css';
import { useState } from 'react'
import { fetchWeather } from './api/fetchWeather';



function App() {

  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState()

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query)

      setWeather(data)
      setQuery('')//自动清除搜索框 
      console.log(weather);
    }
  }

  return (
    <div className="main-container">

      <input type="text"
        className='search'
        placeholder='Search City Weather...'
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyPress={search}
      />

      {weather && (
        <div className='city'>

          <h2 className='city-name'>
            {weather.name}
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className='city-temp'>
            {Math.round(weather.main.temp - 273.15)}
            <sup>℃</sup>
          </div>
          <div className='info'>
            <img className='city-icon' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
            <p>{weather.weather[0].description}</p>
          </div>

        </div>
      )}


    </div>
  );
}

export default App;
