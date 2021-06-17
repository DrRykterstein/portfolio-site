interface PortfolioItem {
	title: string;
	src: string;
	github: string;
	link: string;
	desc: string;
}

export interface PortfolioItems {
	[key: string]: PortfolioItem;
}
