import { useState } from "react";
import { BuscarCampeon,ChampRead } from "./components";


export const GamesApp = () => {
  const [campeones, setCampeones] = useState([
    "Iron Man",
    "Wolverine",
    "Captain America",
  ]);

  const onAddCampeon = (onNewCampeon) => {
    if (campeones.includes(onNewCampeon)) return;

    setCampeones([onNewCampeon, ...campeones]);
  };

  return (
    <div className="inputBusqueda">
      <h2>Buscar por nombre de Personaje:</h2>

      <BuscarCampeon onNewCampeon={(value) => onAddCampeon(value)} />

      {campeones.map((champ) => {
        return <ChampRead key={champ} campeon={champ} />;
      })}
    </div>
  );
};
