import React, { useState } from 'react';
import AddItemForm from './AddItemForm';


const Item = ({ Items, completeItem, removeItem, updateItem }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    quantity: ''
  });

  const submitUpdate = value => {
    updateItem(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <AddItemForm edit={edit} onSubmit={submitUpdate} />;
  }

  return Items.map((Item, index) => (
    <div
      className={Item.isComplete ? 'Item-row complete' : 'Item-row'}
      key={index}
    >
      <div key={Item.id} onClick={() => completeItem(Item.id)}>
        {Item.text} qty {Item.quantity}
      </div>
      <div className='icons'>
        <img src="https://img.icons8.com/ios/24/000000/circled-x.png"
         onClick={() => removeItem(Item.id)}
         className='delete-icon'/>
        <img src="https://img.icons8.com/android/24/000000/edit.png"
          onClick={() => setEdit({ id: Item.id, value: Item.text })}
          className='edit-icon'/>
      </div>
    </div>
  ));
};

export default Item;
