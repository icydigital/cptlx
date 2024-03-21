import React from 'react';
import logo from '../logo.png';
import './App.css';


const cptlxPool = [
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

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            // href="http://www.dappuniversity.com/bootcamp"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            Cptlx
          </a>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                Searchbar 
                <br></br>
                List of Services 
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
