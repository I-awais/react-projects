import { useEffect, useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';
import './TravelList.css';

export default function TravelList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('list')))
      setItems(JSON.parse(localStorage.getItem('list')));
    setItems([]);
  }, []);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
    localStorage.setItem('list', JSON.stringify(items));
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleDeleteList() {
    if (items.length < 1) {
      alert('There is no item in the list');
      return;
    }
    const confirmed = window.confirm('Do you want to clear List?');
    if (confirmed) setItems([]);
    localStorage.removeItem('list');
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onDeleteList={handleDeleteList}
      />
      <Stats items={items} />
    </div>
  );
}
