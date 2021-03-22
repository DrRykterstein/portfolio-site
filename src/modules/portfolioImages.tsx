export type ImagesTypes = {
  [key: string]: {
    title: string;
    name: string;
    link: string;
  }
}

// Define portfolio images
const Images: ImagesTypes = {
  todoApp: {
    title: "Todo App",
    name: "todo-app",
    link: "https://optimistic-poitras-267ce4.netlify.app/" 
  },
  countryLibrary: { 
    title: "Country Library",
    name: "country-library",
    link: "https://modest-volhard-e48a9a.netlify.app/"
  },
  currencyConverter: {
    title: "Currency Converter",
    name: "currency-converter",
    link: "https://dreamy-hopper-a7849c.netlify.app/" 
  },
  clickerGame: { 
    title: "Clicker Game", 
    name: "clicker-game",
    link: "http://rio-clicker-game.herokuapp.com/"
  }
};

export default Images