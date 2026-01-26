import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

function App() {
  // Называем переменную items, а не props
  const [items] = useState([
    {
      id: 1,
      title: 'Hoodie',
      img: 'HoodieGray.jpg',
      desc: 'Comfort + Whyte Style.',
      category: 'Hoodie',
      price: '49.99'
    },
    {
      id: 2,
      title: 'Jacket',
      img: 'jacketWhite.jpg',
      desc: 'Jacket for StreatWear.',
      category: 'tables',
      price: '149.00'
    },
    {
      id: 3,
      title: 'Hoodie Baggy',
      img: 'HoodieBlue.jpg',
      desc: 'Fresh and Ice.',
      category: 'Hoodie',
      price: '69.99'
    }
  ]);

  return (
    <div className="wrapper">
      <Header />
      {/* Передаем наш массив items */}
      <Items items={items} />
      <Footer />
    </div>
  );
}
export default App;