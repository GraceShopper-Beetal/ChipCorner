import React, { useEffect } from 'react';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import Navbar from '../../features/navbar/Navbar';
import AppRoutes from '../AppRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { getCartData } from './CartPageSlice';

const CartPage = () => {
  const orderDataList = useSelector((state) => state.order.orders);
  const cartData = useSelector((state) => state.order.cartData);

  const dispatch = useDispatch();

  // deStringify the JSON stringify
  const grabCartFromStorage =
    JSON.parse(window.localStorage.getItem('cart')) || {};
  // Array of product IDs
  const arrayOfProductId = Object.keys(grabCartFromStorage) || [];
  console.log(arrayOfProductId, 'this is the id');
  const arrayOfProductIdInteger = arrayOfProductId.map((element) =>
    parseInt(element)
  );

  // Array of the Object ex/ [ {ProductId#1} : Quantity , {ProductId#2} : Quantity ]
<<<<<<< HEAD
  const arrayOfQuantity = Object.entries(arrayOfProductIdInteger) || [];
  console.log(arrayOfQuantity);
  const testing = Object.values(grabCartFromStorage);

=======
  const arrayOfQuantity = Object.values(grabCartFromStorage) || [];
  console.log(arrayOfQuantity, 'HEELOELEEIJIGFU');
>>>>>>> main
  useEffect(() => {
    dispatch(getCartData({ arrayOfProductIdInteger }));
  }, []);

  const getTotalAmount = () => {
    let total = 0;
    if (
      cartData &&
      arrayOfQuantity &&
      cartData.length === arrayOfQuantity.length
    ) {
      for (let i = 0; i < cartData.length; i++) {
        total += cartData[i].price * arrayOfQuantity[i];
      }
    }
    return total;
  };

  return (
    <div id='container'>
      <section id='headerSection'>
        <header id='headerContainer'>
          <div id='websiteTitle'>
            <h3>The Chip Corner</h3>
            <img
              className='logoImage'
              src='https://media.istockphoto.com/id/164661881/vector/nachos-cartoon.jpg?s=612x612&w=0&k=20&c=AFnAYL79XMt0VQSVHtPRTuJUR1z0Iwig8LCzC3083Ag='
            />
          </div>
          <nav id='navContainer'>
            <AppRoutes />
            <Navbar />
          </nav>
        </header>
      </section>
<<<<<<< HEAD

=======
>>>>>>> main
      <div>
        {cartData ? (
          cartData.map((item, index) => (
            <div key={index}>
              <h4>{item.title}</h4>
              <img src={item.imageUrl} alt={item.name} />
              <p>Price: ${item.price}</p>
<<<<<<< HEAD
              <p> {testing[index]} </p>
=======
              <h1>{arrayOfQuantity[index]}</h1>
>>>>>>> main
            </div>
          ))
        ) : (
          <p>Empty</p>
        )}
      </div>
      <div>
<<<<<<< HEAD
        {arrayOfQuantity ? (
          arrayOfQuantity.map((item, index) => (
            <div key={index}>
              <h4>{item.index}</h4>
            </div>
          ))
        ) : (
          <p>Empty</p>
        )}
      </div>

      <section id="footerSection">
=======
        <h2>Total Amount: ${getTotalAmount()}</h2>
      </div>
      <section id='footerSection'>
>>>>>>> main
        <p> Copyrights © 2023 All Rights Reserved. The Chip Corner </p>
        <p> Beetal Team </p>
      </section>
    </div>
  );
};

export default CartPage;
