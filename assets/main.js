const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCmS75G-98QihSusY7NfCZtw&part=snippet%2Cid&order=date&maxResults=9';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd59adb76bamshac7cafbff673f7ap14f423jsn93808f0e2f91',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}