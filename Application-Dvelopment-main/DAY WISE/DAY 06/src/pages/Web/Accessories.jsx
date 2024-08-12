import { useState } from 'react';

import Isotope from 'isotope-layout';

const Accessories = () => {
  const [cartVisible, setCartVisible] = useState(false);
  const [notificationVisible, setNotificationVisible] = useState(false);

  const toggleCart = () => setCartVisible(!cartVisible);

  const addToCart = () => {
    setNotificationVisible(true);
    setTimeout(() => setNotificationVisible(false), 3000);
  };

  const handleFilterChange = (e) => {
    const filterValue = e.target.value === '*' ? '*' : `.${e.target.value}`;
    isotope.arrange({ filter: filterValue });
  };

  const manipulateNumberInput = (e) => {
    e.preventDefault();
    const numberInput = e.target.parentElement.querySelector('input[type=number]');
    let currentValue = parseInt(numberInput.value) || 1;
    let adjustedValue = e.target.classList.contains('plus') ? currentValue + 1 : currentValue - 1;
    adjustedValue = Math.max(1, Math.min(adjustedValue, 5));
    numberInput.value = adjustedValue;
    numberInput.dispatchEvent(new Event('change'));
  };

  const validateNumberInput = (e) => {
    const numberInput = e.target;
    const minValue = parseInt(numberInput.getAttribute('min'));
    const maxValue = parseInt(numberInput.getAttribute('max'));
    numberInput.value = Math.max(minValue, Math.min(parseInt(numberInput.value), maxValue));
  };

  const isotope = new Isotope('.product-grid', {
    itemSelector: '.grid-product',
    layoutMode: 'masonry'
  });

  return (
    <div style={{ minHeight: '100%', height: '100%', margin: '0 auto -200px' }}>
      <header style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '120px', zIndex: 9999, backgroundColor: '#212a3f' }}>
        <div style={{ width: '960px', margin: '0 auto', display: 'table', height: '120px' }}>
          <h1 style={{ display: 'table-cell', verticalAlign: 'middle', margin: 0, fontWeight: 600, color: '#fff' }}>Shopping.</h1>
          <ul style={{ display: 'table-cell', verticalAlign: 'middle', fontSize: '16px', textAlign: 'right', color: '#b2c4d8', margin: 0, padding: 0, listStyle: 'none' }}>
            <li style={{ display: 'inline-block', padding: '0 7px' }}><a href="#" style={{ color: '#434f5b' }}><i className="fa fa-search"></i></a></li>
            <li style={{ display: 'inline-block', padding: '0 7px' }}><a href="#" style={{ color: '#6d7a8e' }}>Login</a></li>
            <li style={{ display: 'inline-block', padding: '0 7px' }}><button onClick={toggleCart} style={{ color: '#6d7a8e', border: 'none', background: 'none', outline: 'none' }}>
              Your Cart <i className="fa fa-lg fa-shopping-cart"></i>
            </button></li>
          </ul>
        </div>
      </header>

      <div style={{ position: 'fixed', top: '120px', left: 0, width: '100%', height: '30px', zIndex: 9999, backgroundColor: '#8ab839', transition: 'all 0.5s' }}>
        {notificationVisible && (
          <div style={{ float: 'left', width: '100%', padding: '5px 7px', fontWeight: 600, textAlign: 'right', opacity: 1, transition: 'opacity 0.5s' }}>
            <span style={{ color: '#434f5b' }}>Amazing Product Added to Cart!</span>
          </div>
        )}
      </div>

      <div style={{ position: 'fixed', top: '150px', left: 0, width: '100%', padding: '10px 0', backgroundColor: '#434f5b', zIndex: 8999 }}>
        <div style={{ width: '960px', margin: '0 auto' }}>
          <div style={{ float: 'left', width: '25%', padding: '7px' }}>
            <select onChange={handleFilterChange} style={{ fontWeight: 600 }}>
              <option value="*">Category</option>
              <option value="fav">Favorites</option>
            </select>
          </div>
          <div style={{ float: 'left', width: '25%', padding: '7px' }}>
            <select onChange={handleFilterChange} style={{ fontWeight: 600 }}>
              <option value="*">Product Type</option>
              <option value="square">Square</option>
              <option value="circular">Circular</option>
            </select>
          </div>
          <div style={{ float: 'left', width: '25%', padding: '7px' }}>
            <select disabled style={{ fontWeight: 600 }}>
              <option>Price</option>
            </select>
          </div>
          <div style={{ float: 'left', width: '25%', padding: '7px' }}>
            <select disabled style={{ fontWeight: 600 }}>
              <option>Brand</option>
            </select>
          </div>
        </div>
      </div>

      <div style={{ width: '960px', margin: '0 auto', padding: '30px 0' }}>
        <div className="product-grid" style={{ width: '100%' }}>
          {[...Array(20).keys()].map(i => (
            <div key={i} className="grid-product" style={{ width: '25%', padding: '7px' }}>
              <div className={`img-name ${i % 4 === 0 ? 'camera' : i % 4 === 1 ? 'watch' : i % 4 === 2 ? 'typewriter' : 'canoe'}`}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '190px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  border: '1px solid #434f5b'
                }}>
                <h4 style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  margin: 0,
                  padding: '15px',
                  fontSize: '18px',
                  color: '#212a3f',
                  backgroundColor: 'rgba(242, 242, 242, 0.8)'
                }}>Product {i + 1}</h4>
              </div>
              <p className="price" style={{
                position: 'relative',
                padding: '15px',
                fontWeight: 'bold',
                backgroundColor: '#434f5b'
              }}>$5.99 <button onClick={addToCart} className="add-to-cart" style={{
                position: 'absolute',
                top: '7px',
                right: '7px',
                color: '#fff',
                backgroundColor: '#434f5b',
                border: 'none',
                padding: '5px 10px',
                cursor: 'pointer'
              }}>Add</button></p>
            </div>
          ))}
        </div>
      </div>

      <div className="sticky" style={{ height: '200px' }}></div>

      <footer style={{ height: '230px', padding: '30px 7px', fontSize: '13px', backgroundColor: '#2e2e2e' }}>
        <div style={{ width: '960px', margin: '0 auto' }}>
          Footer Info
        </div>
      </footer>

      <div className="cart" style={{
        position: 'fixed',
        top: cartVisible ? '150px' : '-100%',
        zIndex: 9599,
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        backgroundColor: '#434f5b',
        transition: 'top 0.5s',
        color: '#fff'
      }}>
        <div style={{ width: '960px', margin: '0 auto' }}>
          <h2>Your Cart</h2>
          <table style={{ width: '100%' }}>
            <thead>
              <tr>
                <th style={{ width: '25%' }}>Remove Items</th>
                <th style={{ width: '25%' }}>Product</th>
                <th style={{ width: '25%' }}>Price</th>
                <th style={{ width: '25%' }}>Quantity</th>
                <th style={{ width: '25%' }}>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><button style={{ color: '#6d7a8e', border: 'none', background: 'none' }}>&times;</button></td>
                <td>Sample Product</td>
                <td>$5.99</td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button className="minus" onClick={manipulateNumberInput} style={{ border: 'none', backgroundColor: '#434f5b', color: '#fff', padding: '5px', cursor: 'pointer' }}>-</button>
                    <input type="number" defaultValue="1" min="1" max="5" onChange={validateNumberInput} style={{ width: '60px', textAlign: 'center' }} />
                    <button className="plus" onClick={manipulateNumberInput} style={{ border: 'none', backgroundColor: '#434f5b', color: '#fff', padding: '5px', cursor: 'pointer' }}>+</button>
                  </div>
                </td>
                <td>$5.99</td>
              </tr>
            </tbody>
          </table>
          <button onClick={() => setCartVisible(false)} style={{ marginTop: '10px', color: '#6d7a8e', border: 'none', background: 'none' }}>&times; Close</button>
        </div>
      </div>
    </div>
  );
};
export default Accessories
