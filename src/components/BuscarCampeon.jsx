import { useState } from "react";

export const BuscarCampeon = ({ onNewCampeon }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <1) return;

    // onNewCampeon((campeones) => [...campeones, inputValue]);
    onNewCampeon(inputValue.trim())
    setInputValue('')
    
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Ingresar nombre"
        value={inputValue}
        onChange={(e) => onInputChange(e)}
      />
    </form>
  );
};
