import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function App() {
  const [data, setData] = useState({ hints: [] });
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.edamam.com/api/food-database/v2/parser?ingr=red%20apple&app_id=a0d47957&app_key=1780eeb43c88c71e11d9e5a85e9321ef',);
 console.log("result",result);
      setData(result.data);
    };
 
    fetchData();
  }, []);
 
  return (
    <ul>
        <h1>FoodDatabases</h1>
      {data.hints.map(item => (
        <li>
          <a href = {item.food.label}>{item.food.label}</a> </li>
 
      ))}
    </ul>
  );
}
 
export default App;