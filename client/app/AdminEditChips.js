import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateChips } from './chipsSlice';
const AdminEditChips = ({ chips }) => {
  console.log(chips, 'this is chips info');
  const [title, setTitle] = useState(chips.title);
  const [description, setDescription] = useState(chips.description);
  const [brand, setBrand] = useState(chips.brand);
  const [size, setSize] = useState(chips.size);
  const [baked, setBaked] = useState(chips.baked);
  const [ingredients, setIngredients] = useState(chips.ingredients);
  const [nutritional, setNutritional] = useState(chips.nutritional);
  const [imageUrl, setImageUrl] = useState(chips.price);
  const [price, setPrice] = useState(chips.price);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const updateProduct = {
      id: chips.id,
      title,
      description,
      brand,
      size,
      baked,
      ingredients,
      nutritional,
      imageUrl,
      price,
    };
    dispatch(updateChips(updateProduct));
    // Clear input fields after submitting
    setTitle('');
    setDescription('');
    setBrand('');
    setSize('');
    setBaked('');
    setIngredients('');
    setNutritional('');
    setImageUrl('');
    setPrice('');
  };
  return (
    <div>
      <h2>Edit Chips</h2>
      <form onSubmit={handleSubmit}>
        <div className='chip-input'>
          <label htmlFor='title'>Name of Chips:</label>
          <input
            className='input-box'
            type='text'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='chip-input'>
          <label htmlFor='description'>Description:</label>
          <input
            className='input-box'
            type='text'
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='chip-input'>
          <label htmlFor='brand'>Brand:</label>
          <input
            className='input-box'
            type='text'
            id='brand'
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div className='chip-input'>
          <label htmlFor='size'>Size:</label>
          <input
            className='input-box'
            type='text'
            id='size'
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </div>
        <div className='chip-input'>
          <label htmlFor='baked'>Baked:</label>
          <input
            className='input-box'
            type='text'
            id='baked'
            value={baked}
            onChange={(e) => setBaked(e.target.value)}
          />
        </div>
        <div className='chip-input'>
          <label htmlFor='ingredients'>Ingredients:</label>
          <input
            className='input-box'
            type='text'
            id='ingredients'
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>
        <div className='chip-input'>
          <label htmlFor='nurtritional'>Nutritional:</label>
          <input
            className='input-box'
            type='text'
            id='nutritional'
            value={nutritional}
            onChange={(e) => setNutritional(e.target.value)}
          />
        </div>
        <div className='chip-input'>
          <label htmlFor='imageUrl'>Image:</label>
          <input
            className='input-box'
            type='text'
            id='imageUrl'
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div className='chip-input'>
          <label htmlFor='price'>Price:</label>
          <input
            className='input-box'
            type='text'
            id='Price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button className='add-btn'>Edit</button>
      </form>
    </div>
  );
};
export default AdminEditChips;
