export const exerciseURL = 'https://exercisedb.p.rapidapi.com/exercises';

export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '315fc9d183msh354058427e62504p15581ejsnccdd3daf90db',
    }
};

export const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '315fc9d183msh354058427e62504p15581ejsnccdd3daf90db',
  },
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
    // return fetch(url, options)
    //     .then(response => response.json())
    //     .then(data => {console.log(data); return data})
    //     .catch(err => console.log(err));
}
