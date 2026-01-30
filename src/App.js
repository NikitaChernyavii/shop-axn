import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem"; // Импортируем новый компонент

function App() {
  const [items] = useState([
    { id: 1, title: 'Hoodie', img: 'HoodieGray.jpg', desc: 'Comfort + Whyte Style.', category: 'Zip', price: '49.99' },
    { id: 2, title: 'Jacket', img: 'jacketWhite.jpg', desc: 'Jacket for StreatWear.', category: 'Jacket', price: '149.00' },
    { id: 3, title: 'Hoodie Baggy', img: 'HoodieBlue.jpg', desc: 'Fresh and Ice.', category: 'Hoodie', price: '69.99' },
  ]);

  const [currentItems, setCurrentItems] = useState(items);
  const [orders, setOrders] = useState([]);
  
  // СОСТОЯНИЕ ДЛЯ МОДАЛЬНОГО ОКНА
  const [showFullItem, setShowFullItem] = useState(false); // Показываем или нет
  const [fullItem, setFullItem] = useState({}); // Какой именно товар показываем

  const onShowItem = (item) => {
    setFullItem(item);
    setShowFullItem(!showFullItem);
  }

  const addToOrder = (item) => {
    let isInArray = orders.some(el => el.id === item.id);
    if(!isInArray) setOrders([...orders, item]);
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter(el => el.id !== id));
  }

  const chooseCategory = (category) => {
    if (category === 'all') {
      setCurrentItems(items);
      return;
    }
    setCurrentItems(items.filter(el => el.category === category));
  }

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder}/>
      <Categories chooseCategory={chooseCategory}/>
      {/* Передаем функцию открытия товара в Items */}
      <Items items={currentItems} onAdd={addToOrder} onShowItem={onShowItem} />

      {/* УСЛОВИЕ: если showFullItem истина, показываем компонент */}
      {showFullItem && <ShowFullItem item={fullItem} onAdd={addToOrder} onShowItem={onShowItem} />}
      
      <Footer />
    </div>
  );
}

export default App;