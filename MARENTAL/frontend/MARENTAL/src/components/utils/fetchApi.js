import axios from 'axios';

export const baseUrl = 'https://bayut-com1.p.rapidapi.com/properties/list'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '81b9bb03e3msh556f2619d14c0f3p1311b0jsn1bd4e813880d',
            'X-RapidAPI-Host': 'bayut-com1.p.rapidapi.com'
 
    });

    return data;
}
