import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number) {
	const [debouncedValue, setDdebouncedValue] = useState(value);
	useEffect(() => {
		const handler = setTimeout(() => {
			setDdebouncedValue(value);
		}, delay);
		return () => {
			clearTimeout(handler);
		};
	}, [delay, value]);
}
