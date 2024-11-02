import Head from "next/head";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { useState, CSSProperties} from "react";
import handler from "./api/hello";
import ClipLoader from "react-spinners/ClipLoader";

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const notify = () => toast("Sorry no city found");

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function Home() {


  const [search, setSearch] = useState("");
  const [weather, setWeather]= useState([]);
  const [country, setCountry]= useState([]);
  const [city, setCity]= useState([]);

  let [loading, setLoading] = useState(false);
  


  const clear = () => {
    setCity([]);
    setCountry([]);
    setWeather([]);
   
  }
  const searchpressed = () => {
    handler(search,  setWeather, setCountry, setCity, clear, notify, loading, setLoading);
  }
 

  return (
    <>  

          
      <Head>
        <title>Weather app</title>
        <meta name="description"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       
      </Head>

      
      <       div>
                <ToastContainer />
              </div>

                


      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>

            
            <div style={{fontSize: 40}}>Weather App</div>
            <div>
               <input
               type = 'text'
               placeholder= "Enter City"
               onChange={(e)=> setSearch(e.target.value)}
               >    
            
               </input>
               <button onClick={searchpressed}>Check Weather</button>
            </div>

            <div className="sweet-loaing">

                <ClipLoader
                color= "#fffff"
                loading={loading}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
                />
                </div>

            {typeof weather.current != "undefined" ?
            
            <h2>
                <ul>
                  <li style={{fontSize: 40}}  >{ String(city).charAt(0).toUpperCase() + String(city).slice(1)} {country}</li>
                  <li style={{fontSize: 40}}  >{weather.current.temperature_2m}°C</li>
                  <li>Wind speed {weather.current.wind_speed_10m} Km/h</li>
                </ul> 
              </h2>
            :
            ""
            }
                
                {typeof weather.current != "undefined" ?
           
                <div style={{fontSize: 40}}>7- Day Forecast</div>
                  
                  :
                  ""
                  }

          <div className={styles.ctas}>

          {typeof weather.current != "undefined" ?
            <a>
              <ul>
                  <li style={{fontSize: 25}}>{(new Date(weather.daily.time[0]).toString()).substring(4,10)}</li> 
                  <li>Max {weather.daily.temperature_2m_max[0]}°C</li>
                  <li>Min {weather.daily.temperature_2m_min[0]}°C</li>
              </ul> 
            </a>
            :
            ""
            }

          {typeof weather.current != "undefined" ?
            <a>
              <ul>
                  <li style={{fontSize: 25}}>{(new Date(weather.daily.time[1]).toString()).substring(4,10)}</li> 
                  <li>Max {weather.daily.temperature_2m_max[1]}°C</li>
                  <li>Min {weather.daily.temperature_2m_min[1]}°C</li>
              </ul> 
            </a>
            :
            ""
            }

           {typeof weather.current != "undefined" ?
            <a>
              <ul>
                  <li style={{fontSize: 25}}>{(new Date(weather.daily.time[2]).toString()).substring(4,10)}</li> 
                  <li>Max {weather.daily.temperature_2m_max[2]}°C</li>
                  <li>Min {weather.daily.temperature_2m_min[2]}°C</li>
              </ul> 
            </a>
            :
            ""
            }   

            {typeof weather.current != "undefined" ?
            <a>
              <ul>
                  <li style={{fontSize: 25}}>{(new Date(weather.daily.time[3]).toString()).substring(4,10)}</li> 
                  <li>Max {weather.daily.temperature_2m_max[3]}°C</li>
                  <li>Min {weather.daily.temperature_2m_min[3]}°C</li>
              </ul> 
            </a>
            :
            ""
            }
            
            {typeof weather.current != "undefined" ?
            <a>
              <ul>
                  <li style={{fontSize: 25}}>{(new Date(weather.daily.time[4]).toString()).substring(4,10)}</li> 
                  <li>Max {weather.daily.temperature_2m_max[4]}°C</li>
                  <li>Min {weather.daily.temperature_2m_min[4]}°C</li>
              </ul> 
            </a>
            :
            ""
            }

            {typeof weather.current != "undefined" ?
            <a>
              <ul>
                  <li style={{fontSize: 25}}>{(new Date(weather.daily.time[5]).toString()).substring(4,10)}</li> 
                  <li>Max {weather.daily.temperature_2m_max[5]}°C</li>
                  <li>Min {weather.daily.temperature_2m_min[5]}°C</li>
              </ul> 
            </a>
            :
            ""
            }


            {typeof weather.current != "undefined" ?
            <a>
              <ul>
                  <li style={{fontSize: 25}}>{(new Date(weather.daily.time[6]).toString()).substring(4,10)}</li> 
                  <li>Max {weather.daily.temperature_2m_max[6]}°C</li>
                  <li>Min {weather.daily.temperature_2m_min[6]}°C</li>
              </ul> 
            </a>
            :
            ""
            }
  
          </div>


        </main>
       
      </div>
    </>
  );
}
