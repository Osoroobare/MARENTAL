import { useState, useEffect } from "react";

const useFetch = ()=>{

  
  const [items, setItems]= useState([]);

useEffect(()=>{ 
  fetchData()
}, []);

const fetchData = () =>{
  const options = {
    method: 'GET',
    url:'https://bayut-com1.p.rapidapi.com/properties/list',
    headers: {
      'X-RapidAPI-Key': '81b9bb03e3msh556f2619d14c0f3p1311b0jsn1bd4e813880d',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  };
  
  fetch('https://bayut-com1.p.rapidapi.com/properties/list',options)
    .then(response => response.json())
    .then(response => {
      const data =[]
          response.hits.map(({id, title, coverPhoto, purpose, price, location}) =>{
            data.push({
              id,
              title,
              purpose,
              price,
              url : coverPhoto.url,
              state: location[0].name})
              return (data);
          })
          
          setItems(data); 
          console.log(data)
})
         
    .catch(err => console.error(err));
}
  
  return {items};
  }
  
  
  export default useFetch;
  
