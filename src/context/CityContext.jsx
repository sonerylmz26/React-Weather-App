import axios from "axios";
import { createContext, useContext, useState  } from "react";


const CityContext = createContext();

const CityContextProvider = ({children}) => {
const [city , setCity ] = useState("")
const [myData , setMyData ] = useState()



const getData = async() => {
  // const API_KEY = process.env.REACT_APP_apiKey

  const API_KEY = "66d68b83cc1917c740dcc7ba91c868a1";
  const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=tr`

try {
  const {data} = await axios(BASE_URL)
  setMyData(data)


} catch (error) {
  console.log(error)
}


}




return(
<CityContext.Provider value={{city, setCity, myData, setMyData, getData}}>

      {children}
</CityContext.Provider>


)

}

export default CityContextProvider ;


//? Karşılarken kullanmak için:
export  const useCityContext = () => {
  return useContext(CityContext)
}