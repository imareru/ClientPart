export const isProduction = process.env.NODE_ENV === 'production';

export const dateLocaleOptions = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric'
};

export const sources = {
	1: "ProKazan",
	2: "Газета РТ",
	3: "Бизнес Online"
};



export const apiUrl = isProduction ? "http://rssapi.cleverfox.space/" : "http://127.0.0.1:8080";
