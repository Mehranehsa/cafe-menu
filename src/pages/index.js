import React, { useState } from "react";
import Items from "./items/Items";


const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const coffeeList = [
    { name: "Espresso", price: "45T" },
    { name: "Latte", price: "68T" },
    { name: "Caramel Latte", price: "74T" },
    { name: "Mocha", price: "65T" },
    { name: "Americano", price: "60T" },
    { name: "Hot chocolate", price: "55T" },
    { name: "Frappuccino", price: "98T" },
    { name: "Iced Latte", price: "78T" },
    { name: "Iced Caramel Latte", price: "84T" },
    { name: "Iced Mocha", price: "88T" },
  ];

  const ItemsList = () => (
    <div className="flex flex-col items-center justify-start basis-1/5 border-r-4 my-10">
      <header className="bg-amber-400 rounded-lg text-xl font-semibold w-72 my-5 flex items-center justify-center h-10">
        Choose your coffee
      </header>
      {coffeeList.map((coffee) => (
        <Items
          key={coffee.name}
          name={coffee.name}
          price={coffee.price}
          onClick={(item) => handleSelectItem(item)}
        />
      ))}
    </div>
  );

  const Order = ({ title, item }) => (
    <div className="flex flex-col items-center justify-start basis-4/5 border-r-4 my-10">
      <header className="bg-amber-400 rounded-lg text-xl font-semibold w-11/12 m-5 flex items-center justify-center h-10">
        {title}
      </header>
      {item && (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-xl font-semibold">{item.name}</h2>
          <p className="text-lg">{item.price}</p>
        </div>
      )}
    </div>
  );
  
  

  return (
    <div className="bg-emerald-800 h-full w-screen">
      <header className="h-20 bg-white text-3xl font-bold text-emerald-800 flex items-center justify-center">
        Cafe
      </header>
      <div className="flex flex-row">
        <ItemsList />
        <Order title="Selected item" item={selectedItem}  />
      </div>
    </div>
  );
};

export default App;