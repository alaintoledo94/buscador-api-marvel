import { useState, useEffect } from "react";
import {getChamps} from "../helpers/getChamp"


export const useFetchHero = (campeon) => {
    const [heroes, setHeroes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getHeroes= async()=>{
      const newImages = await getChamps(campeon);
      setHeroes(newImages)
      setIsLoading(false)
    }
   
    useEffect(()=>{
     getHeroes();
    },[])
  

    return{
        heroes,
        isLoading
    }

}
