import React, { useState } from 'react';
import './App.css';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


const cptlxServiceList = [
  {
    name: "Coinbase",
    type: "CEX",
    link: "https://www.coinbase.com/",
    description: "A large and beginner-friendly US-based exchange with over 200 cryptocurrencies supported."
  },
  {
    name: "Kraken",
    type: "CEX",
    link: "https://www.kraken.com/",
    description: "A reputable exchange with strong security features and good customer support."
  },
  {
    name: "Crypto.com",
    type: "CEX",
    link: "https://www.crypto.com/",
    description: "A popular exchange with its own token (CRO) and various features like staking and an NFT marketplace."
  }
]


function App () {
  const [filteredServices, setFilteredServices] = useState(cptlxServiceList);
  const [filterValue, setFilterValue] = useState('');

  const handleFilterChange = (event) => {
    const newFilterValue = event.target.value.toLowerCase();
    setFilterValue(newFilterValue);
  };

  const handleFilterSubmit = () => {
    const newFilteredServices = cptlxServiceList.filter((pool) =>
      pool.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    setFilteredServices(newFilteredServices);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleFilterSubmit();
    }
  };


  return (
    <div>
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="http://www.dappuniversity.com/bootcamp"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          Cptlx
        </a>
      </nav>
      <div className="container-fluid mt-5">
        <div className="p-mr-2">
          <span>Filter:</span>
          <InputText
            placeholder="Search by name"
            value={filterValue}
            onChange={handleFilterChange}
            onKeyDown={handleKeyDown}
          />
          <Button label="Filter" onClick={handleFilterSubmit} />
        </div>
      </div>
      <DataTable value={filteredServices}>
        {/* <column field="id" header="ID" sortable /> */}
        <column field="name" header="Name" sortable />
        <column field="type" header="Category" sortable />
      </DataTable>
    </div>
  );
}

export default App;
