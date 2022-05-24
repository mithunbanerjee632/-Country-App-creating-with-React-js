import logo from './logo.svg';
import './App.css';
import react,{useState,useEffect} from 'react'


const url = "https://restcountries.com/v3.1/all";

function App() {

  const [isLoading,setIsLoading]=useState(true);
  const [error,setError]=useState(null);
  const [countries,setCountries]=useState([]);

  const fetchData= async (url)=>{
    setIsLoading(true);
    
     try{
     
      const response = await fetch(url);
      const data = await response.json();

      setCountries(data);

      console.log(countries);
      setIsLoading(false);
      setError(null);
     }catch(error){
      setIsLoading(false);
      setError(error);
     }
  }

   useEffect(()=>{
     fetchData(url)
   });

}

export default App;
