export default function handler(search,  setWeather, setCountry, setCity, clear, notify , loading, setLoading) {

        
        const getData = async () =>{
          setLoading(!loading)
          const query = await fetch( `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=9e55c6d35b6e1e83bba868c6dc2ddf2d`);
          const response = await query.json();

          
          if (response.cod == "400" || response.length == 0 ) 
            {
              clear();
              notify();
              setLoading(false)
            }
            else 
            {
              console.log('response from api length ', response);
              setCountry(response[0].country)
              setCity(response[0].name)
              const SecondQuery = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${response[0].lat}&longitude=${response[0].lon}&current=temperature_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto`);
              const SecondResponse = await SecondQuery.json();
              setWeather(SecondResponse);
              setLoading(false) 
            }
        }
        getData();
}