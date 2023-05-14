import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';
import { Address, Restaurant } from './model/Restaurant';
import BestMenu from './BestMenu';

let data: Restaurant = {
  name: "누나네 식당",
  category: 'western',
  address: {
    city: "Inchon",
    detail: "somewhere",
    zipCode: 13432,
  },
  menu: [
    {name: "Rose Pasta", category: 'pasta', price: 2000},
    {name: "noodle", category: 'noodle', price: 1000},
  ]
}


const App: React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);
  const changeAddress = (address: Address) => {
    setMyRestaurant({...myRestaurant, address:address})
  }
  const showBestMenuName = (name:string) => {
    return name;
  }
  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress} />
      <BestMenu name="불고기피자" category="피자" showBestMenuName={showBestMenuName} />
    </div>
  );
}

export default App;
