export type ImageModel = {
	[key: string]: {
		title: string;
		name: string;
		github: string;
		link: string;
		desc: string;
	};
};

// Define portfolio images
const Images: ImageModel = {
	bookStore: {
		title: "Infinite Book Store",
		name: "book-store.png",
		github: "book-store",
		link: "https://book-store-nine.vercel.app",
		desc:
			"A Book store built in NextJS with Typescript and Shopify as a headless CMS. Products were fetched through the Shopify API with the Buy-SDK library.",
	},
	technologyBlog: {
		title: "Technology Blog",
		name: "technology-blog.png",
		github: "technology-blog",
		link: "https://technology-blog-mx3fs17kh-terioch.vercel.app",
		desc:
			"A Technology Blog built in NextJS with Typescript using static site generation and styled using the Material-ui library.",
	},
	todoApp: {
		title: "Todo App",
		name: "todo-app.png",
		github: "react-todo-app",
		link: "https://optimistic-poitras-267ce4.netlify.app",
		desc:
			"A Todo List App built in ReactJS using CRA and structured using class components. Contains a background image fetched using the Unsplash API.",
	},
	countryLibrary: {
		title: "Country Library",
		name: "country-library.png",
		github: "infinite-country-library",
		link: "https://modest-volhard-e48a9a.netlify.app",
		desc:
			"A website built in vanilla HTML, CSS and Javascript which displays information regarding a specific country fetched using the countries.eu API.",
	},
	currencyConverter: {
		title: "Currency Converter",
		name: "currency-converter.png",
		github: "react-currency-converter",
		link: "https://dreamy-hopper-a7849c.netlify.app",
		desc:
			"A simple currency converter built in ReactJS using CRA. Currency data is fetched via the Exchange Rates API.",
	},
	clickerGame: {
		title: "Clicker Game",
		name: "clicker-game.png",
		github: "react-clicker-game",
		link: "http://rio-clicker-game.herokuapp.com",
		desc:
			"A simple clicker game built in React with Typescript using CRA. Earn points based on clicks and progress through purchasing upgrades in the shop.",
	},
};

export default Images;
