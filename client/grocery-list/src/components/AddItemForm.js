import React, { useState, useRef } from 'react';

function AddItemForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const [quantity, setQuantity] = useState(props.edit ? props.edit.quantity : '')

  const inputRef = useRef(null);
  const quantityRef = useRef(null);

  const handleInputChange = e => {
    setInput(e.target.value);
  };
  const handleQuantityChange = e => {
    setQuantity(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),//Change for DB
      text: input,
      quantity: quantity
    });
    setInput('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit} className='Item-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleInputChange}
            name='text'
            ref={inputRef}
            className='Item-input edit'
            />
          <input
            placeholder='Update quantity'
            value={quantity} 
            onChange={handleQuantityChange}
            name='text'
            className='quantity-input edit'
            ref={quantityRef}
            />
          <button onClick={handleSubmit} className='Item-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add your item'
            value={input}
            onChange={handleInputChange}
            name='text'
            className='Item-input'
            ref={inputRef}
          />
           <input
            placeholder='Quantity'
            value={quantity} 
            onChange={handleQuantityChange}
            name='text'
            className='quantity-input'
            ref={quantityRef}
          />
          <button onClick={handleSubmit} className='Item-button'>
            Add
          </button>
        </>
      )}
    </form>
  );
}

export default AddItemForm;