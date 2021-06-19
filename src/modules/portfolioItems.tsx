import { PortfolioItems } from "../models/PortfolioItems";

// Define portfolio images
const Images: PortfolioItems = {
	borgfy: {
		title: "Borgfy",
		src: "borgfy.png",
		github: "null",
		link: "https://borgfy.com",
		desc: "A website for a technology development company built in NextJS with Ghost as a headless CMS. The design was implemented using Styled Components, SCSS and Material UI.",
	},
	bookStore: {
		title: "Infinite Book Store",
		src: "book-store.png",
		github: "infinite-book-store",
		link: "https://book-store-nine.vercel.app",
		desc: "A Book store built in NextJS, Typescript, and Shopify with headless integration as well as full firebase authentication. Products are fetched using GraphQL through Shopify's storefront API.",
	},
	technologyBlog: {
		title: "Technology Blog",
		src: "technology-blog.png",
		github: "technology-blog",
		link: "https://tech-blog-five.vercel.app/",
		desc: "A Technology Blog built in NextJS, Typescript, and Material-UI with SQLite database integration using Prisma alongside form authentication.",
	},
	todoApp: {
		title: "Todo App",
		src: "todo-app.png",
		github: "react-todo-app",
		link: "https://optimistic-poitras-267ce4.netlify.app",
		desc: "A Todo List App built in ReactJS and structured using class components. Includes full CRUD functionality as well as MySQL database integration. Contains a background image fetched using the Unsplash REST API.",
	},
	countryLibrary: {
		title: "Country Library",
		src: "country-library.png",
		github: "infinite-country-library",
		link: "https://modest-volhard-e48a9a.netlify.app",
		desc: "A website built in vanilla HTML, CSS and Javascript that displays information regarding a specific country fetched using the countries.eu API.",
	},
	currencyConverter: {
		title: "Currency Converter",
		src: "currency-converter.png",
		github: "react-currency-converter",
		link: "https://dreamy-hopper-a7849c.netlify.app",
		desc: "A simple currency converter built in ReactJS. Currency data is fetched via the Exchange Rates API.",
	},
	clickerGame: {
		title: "Clicker Game",
		src: "clicker-game.png",
		github: "react-clicker-game",
		link: "http://rio-clicker-game.herokuapp.com",
		desc: "A clicker game built in React with Typescript. Earn points based on clicks and make progress by purchasing upgrades in the shop.",
	},
};

export default Images;
