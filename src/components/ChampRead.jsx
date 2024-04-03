import { ChampGridItem } from "./ChampGridItem";
import { useFetchHero } from "../hooks/useFetchHero";




export const ChampRead = ({ campeon }) => {

const {heroes, isLoading} = useFetchHero(campeon);
console.log({ heroes});


  return (
    <>
      
      {
        isLoading&&(<h2>Cargando...</h2>)
      }
      
      

      <div className="card-grid">
      {
        heroes.map((her) =>(
        <ChampGridItem 
          key={her.id} 
          name={her.name}
          foto={her.foto}
          desc={her.desc}
          comics={her.comics}
          />
         
         
        ))
      }
      </div>
     
    
    </>
  );
};
