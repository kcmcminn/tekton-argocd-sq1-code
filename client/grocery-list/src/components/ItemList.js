
import React, { useState } from 'react';
import AddItemForm from './AddItemForm'
import Item from './Item';

function ItemList() {
    const [Items, setItems] = useState([]);
  
    const addItem = Item => {
      if (!Item.text) {
        return;
      }
  
      const newItems = [Item, ...Items];
  
      setItems(newItems);
      console.log(...Items);
    };
  
    const updateItem = (ItemId, newValue) => {
      if (!newValue.text) {
        return;
      }
  
      setItems(prev => prev.map(item => (item.id === ItemId ? newValue : item)));
    };
  
    const removeItem = id => {
      const removedArr = [...Items].filter(Item => Item.id !== id);
  
      setItems(removedArr);
    };
  
    const completeItem = id => {
      let updatedItems = Items.map(Item => {
        if (Item.id === id) {
          Item.isComplete = !Item.isComplete;
        }
        return Item;
      });
      setItems(updatedItems);
    };
  
    return (
      <>
        <h1>Grocery List</h1>
        <AddItemForm onSubmit={addItem} />
        <Item
          Items={Items}
          completeItem={completeItem}
          removeItem={removeItem}
          updateItem={updateItem}
        />
      </>
    );
  }
  
  export default ItemList;