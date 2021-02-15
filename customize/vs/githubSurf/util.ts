export const getBrowserUrl = (): string => {
	return window.location.href;
};

export const replaceBrowserUrl = (url: string) => {
	if (window.history.replaceState) {
		window.history.replaceState(null, '', url);
	}
};