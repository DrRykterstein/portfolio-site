import {
	createContext,
	useState,
	useEffect,
	useContext,
	Dispatch,
	SetStateAction,
} from "react";

// Define alias for setState/dispatcher type
type screenSizeDispatcher<S> = Dispatch<SetStateAction<S>>;

export type ScreenSizeModel = {
	screenWidth: number;
	setScreenWidth: screenSizeDispatcher<number>;
};

// Initialize screen size context
const ScreenSizeContext = createContext<ScreenSizeModel>({
	screenWidth: 0,
	setScreenWidth: (): void => {},
});

export const ScreenSizeProvider: React.FC = ({ children }) => {
	const [screenWidth, setScreenWidth] = useState<number>(
		window.innerWidth
	);

	// Listen for screen size change
	useEffect(() => {
		window.addEventListener("resize", () => {
			setScreenWidth(window.innerWidth);
		});
	}, []);

	return (
		<ScreenSizeContext.Provider value={{ screenWidth, setScreenWidth }}>
			{children}
		</ScreenSizeContext.Provider>
	);
};

export const useScreenSize = () => useContext(ScreenSizeContext);
