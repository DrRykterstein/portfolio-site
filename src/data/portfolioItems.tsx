import { PortfolioItems } from "../models/PortfolioItems";

// Define items for portfolio
const portfolioItems: PortfolioItems = {
	wired: {
		title: "Wired",
		src: "wired.png",
		github: "wired",
		link: "https://wired-terioch.herokuapp.com/",
		desc: "A full-stack messaging app built in React and Node using a RESTful system coupled with JWT authentication and a PostgreSQL database. The frontend was designed using Material UI.",
	},
	borgfy: {
		title: "Borgfy",
		src: "borgfy.png",
		github: "null",
		link: "https://borgfy-five.vercel.app",
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
		desc: "A Todo List App built in React and structured using class components. Includes full CRUD functionality as well as MySQL database integration. Contains a background image fetched using the Unsplash REST API.",
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
		desc: "A simple currency converter built in React. Currency data is fetched via the Exchange Rates API.",
	},
};

export default portfolioItems;
