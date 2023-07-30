import {Link} from "react-router-dom";
import {FormInput, FormWeather, WeatherCards, WeatherButton, WeatherContainer} from "../styles/WeatherApp.styled";
import  {useCityContext } from "../context/CityContext";

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const WeatherApp = () => {
const {city, setCity, getData, myData} = useCityContext()




console.log("mydata:" , myData)

const handleWeatherSubmit = (e) => {
  e.preventDefault ();

getData();

setCity("");

}


  return (
    <>
  
<WeatherContainer>

<h2 className="text-lg text-red-600 font-bold mt-14">Weather App</h2>
<FormWeather>

  <div className="mb-6">
    <FormInput
      type="text"
      id="email"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Enter City Name..."
      value={city}
      required=""
onChange={(e)=>setCity(e.target.value)}

    />
  </div>
 
  <WeatherButton
    type="submit"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    onClick={handleWeatherSubmit}
  >
    Submit
  </WeatherButton>
</FormWeather>

<WeatherCards>



<div className="cards ">
  <Link className="m-auto text-center" to="/">
    <img className=" w-80 m-80" src={`http://openweathermap.org/img/wn/${myData?.weather[0]?.icon}@4x.png`} alt={myData?.weather[0].main} />
  </Link>
  <div className="p-5">
  <h1>{myData?.weather[0].main}</h1>
    <Link to="">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
    </Link>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in
      reverse chronological order.
    </p>
 
  </div>
</div>


</WeatherCards>

</WeatherContainer>



</>
  )
}

export default WeatherApp