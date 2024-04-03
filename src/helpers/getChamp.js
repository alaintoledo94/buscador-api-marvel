export const getChamps = async (campeon) => {
    const url = `https://gateway.marvel.com/v1/public/characters?ts=1&&apikey=ced1a6e186f1712083ba1f103db4177f&hash=e74c5a8bbeb6e627707837838baa1df0&name=${campeon}`
    const resp = await fetch(url)
    const {data} = await resp.json();
  
    const heroe = data.results.map(hero => ({
      id: hero.id,
      name: hero.name,
      foto: hero.thumbnail,
      desc: hero.description,
      comics: hero.comics.items
    }))
  
  
   return heroe;
   
  }

  export const getComic = async (campeon) => {
    const url = `https://gateway.marvel.com/v1/public/characters?ts=1&&apikey=ced1a6e186f1712083ba1f103db4177f&hash=e74c5a8bbeb6e627707837838baa1df0&name=${campeon}`
    const resp = await fetch(url)
    const {data} = await resp.json();

   
  }