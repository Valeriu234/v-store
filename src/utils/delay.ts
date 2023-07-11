type delayFunction = (func: () => void, sec: number) => void;

export const delayFunction: delayFunction = (func, sec) => {
	const delay = setTimeout(func, sec);
	return () => {
		clearTimeout(delay);
	};
};
