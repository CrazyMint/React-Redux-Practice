export const getInitCounterApi = async () => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(100);
		}, 2000);
	});
};
