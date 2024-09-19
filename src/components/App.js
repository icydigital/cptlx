import React, { useEffect, useState } from 'react';
import ServicesTableComponent from './ServicesTable.js'
import servicesData from '../services.json';
import './App.css';

function App () {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(servicesData);
  }, []);

  return (
    <div>
      <h1>Financial crypto services</h1>
      <ServicesTableComponent data={JSON.parse(servicesData)} />
    </div>
  );
}

export default App;
