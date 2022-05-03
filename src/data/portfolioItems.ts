import { PortfolioItems } from "../models/PortfolioItems";

// Define items for portfolio
const portfolioItems: PortfolioItems = {
	bugTracker: {
		title: "Bugtrace",
		src: "bug-tracker.png",
		github: "bug-tracker",
		link: "https://bugtrace.herokuapp.com/",
		desc: "A bug/issue tracking application built with C# .NET MVC that stores and maintains issues in the form of tickets for a collection of projects. Includes authentication and role-based authorization with Identity.",
	},
	techBlog: {
		title: "Techtrace",
		src: "techtrace.png",
		github: "tech-blog-server",
		link: "https://techtrace.vercel.app/blog",
		desc: "A programming tutorial blog built with C# .NET Web API and React that implements JWT authentication, claims-based authorization, and Entity Framework data access.",
	},
	// wired: {
	// 	title: "Wired",
	// 	src: "wired.png",
	// 	github: "wired",
	// 	link: "https://wired-terioch.herokuapp.com/",
	// 	desc: "A full-stack messaging app built in React and Node using web sockets with socket.io, JWT authentication and a PostgreSQL database. Testing was also implemented with Jest and React Testing Library.",
	// },
	// borgfy: {
	// 	title: "Borgfy",
	// 	src: "borgfy.png",
	// 	github: "null",
	// 	link: "https://borgfy-five.vercel.app",
	// 	desc: "A website for a technology development company built in NextJS with Ghost as a headless CMS. The design was implemented using Styled Components, SCSS and Material UI.",
	// },
	bookStore: {
		title: "Infinite Book Store",
		src: "book-store.png",
		github: "infinite-book-store",
		link: "https://book-store-nine.vercel.app",
		desc: "A Book store built with NextJS, Typescript, and Shopify with headless integration as well as full firebase authentication. Products are fetched using GraphQL through Shopify's storefront API.",
	},
	taskTracker: {
		title: "Task Tracker",
		src: "task-tracker.png",
		github: "task-tracker",
		link: "https://optimistic-poitras-267ce4.netlify.app",
		desc: "A task tracking application built with React. Includes MySQL database integration and displays a background image fetched via the Unsplash REST API.",
	},
	countryLibrary: {
		title: "Country Library",
		src: "country-library.png",
		github: "infinite-country-library",
		link: "https://modest-volhard-e48a9a.netlify.app",
		desc: "A website built with HTML, CSS and Javascript that displays information regarding a specific country based on data fetched from an external API.",
	},
};

export default portfolioItems;
