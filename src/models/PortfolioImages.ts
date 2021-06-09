interface PortfolioImage {
	title: string;
	name: string;
	github: string;
	link: string;
	desc: string;
}

export interface PortfolioImages {
	[key: string]: PortfolioImage;
}
