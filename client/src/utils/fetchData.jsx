export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    }
};

export const exerciseURL = 'https://exercisedb.p.rapidapi.com/exercises';

export const fetchData = async (url, options) => {
    // const response = await fetch(url, options);
    // const data = await response.json();
    // return data;
    return fetch(url, options)
        .then(response => response.json())
        .then(data => {console.log(data); return data})
        .catch(err => console.log(err));
}

