import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';

const products = [
  {
    id: 1,
    name: 'Camera',
    price: 35,
    description: 'This is the First product.',
    image: 'https://th.bing.com/th/id/OIP.2TAf2DhU9zZEBS6ihk3xSwHaHa?rs=1&pid=ImgDetMain',
  },
  {
    id: 2,
    name: 'Bag',
    price: 20,
    description: 'This is the second product.',
    image: 'https://th.bing.com/th/id/OIP.SLXZeuIoCke-8XztFgrLYwHaE8?rs=1&pid=ImgDetMain',
  },
  {
    id: 3,
    name: 'Shoe',
    price: 30,
    description: 'This is the third product.',
    image: 'https://th.bing.com/th/id/OIP.a-YDWw7IcFGxYeuz_1wUrgHaHa?rs=1&pid=ImgDetMain',
  },
  {
    id: 4,
    name: 'T-shirt',
    price: 35,
    description: 'This is the third product.',
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  },
  {
    id: 5,
    name: 'Shoe',
    price: 20,
    description: 'This is the second product.',
    image: 'https://th.bing.com/th/id/OIP.Vui1gAtnHmqJTYC5Xi0kMgHaFC?w=248&h=180&c=7&r=0&o=5&pid=1.7',
  },
  {
    id: 6,
    name: 'Nail Polish',
    price: 30,
    description: 'This is the third product.',
    image: 'https://th.bing.com/th/id/OIP.tXQaubbYRZfiOBVdmQLugAHaH3?w=159&h=180&c=7&r=0&o=5&pid=1.7',
  },
  {
    id: 7,
    name: 'Camera',
    price: 35,
    description: 'This is the third product',
    image: 'https://th.bing.com/th/id/OIP.2TAf2DhU9zZEBS6ihk3xSwHaHa?rs=1&pid=ImgDetMain',
  },

  {
    id: 8,
    name: 'Dress',
    price: 20,
    description: 'This is the second product.',
    image: 'https://th.bing.com/th/id/OIP.6KAG0KwUFxe_wx5Q24-llQHaEN?w=322&h=180&c=7&r=0&o=5&pid=1.7',
  },
  {
    id: 9,
    name: 'New Product',
    price: 30,
    description: 'This is the third product.',
    image: 'https://th.bing.com/th/id/OIP.XMZNccFMn_exhvZKEA7prAHaEW?w=298&h=180&c=7&r=0&o=5&pid=1.7',
  },
  {
    id: 10,
    name: 'Dress',
    price: 35,
    description: 'Camera',
    image: 'https://th.bing.com/th?id=OIF.siPU562TigU%2bwCDS6gbrJw&w=122&h=183&c=7&r=0&o=5&pid=1.7',
  },
  {
    id: 11,
    name: 'Watch',
    price: 20,
    description: 'This is the second product.',
    image: 'https://th.bing.com/th?id=OIF.ydSWBqLB0TW%2bfzihnDbEAg&w=179&h=180&c=7&r=0&o=5&pid=1.7',
  },
  {
    id: 12,
    name: 'Makeup kit',
    price: 30,
    description: 'This is the third product.',
    image: 'https://th.bing.com/th?id=OIF.Eyh%2flXq%2fse0p3ilb9ZFtgw&w=179&h=180&c=7&r=0&o=5&pid=1.7',
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      ).filter((item) => item.quantity > 0)
    );
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const handleSearch = (query) => setSearchQuery(query);
  const toggleCart = () => setShowCart(!showCart);
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <Navbar onSearch={handleSearch} toggleCart={toggleCart} showCart={showCart} />

      <header>
        <h1>React Shopping List</h1>
      </header>

      {showCart && (
        <section className="shopping-cart">
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <span>{item.name} ({item.quantity})</span>
                  <span>${item.price * item.quantity}</span>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              ))}
              <p>Total: ${totalPrice}</p>
            </div>
          )}
        </section>
      )}

      <main>
        <section className="product-list">
          <h2>Products</h2>
          <ProductList products={filteredProducts} addToCart={addToCart} setSelectedProduct={setSelectedProduct} />
        </section>
      </main>

      {selectedProduct && (
        <div className="overlay" onClick={() => setSelectedProduct(null)}>
          <div className="product-detail">
            <h2>{selectedProduct.name}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <p>{selectedProduct.description}</p>
            <p>${selectedProduct.price}</p>
            <button onClick={() => addToCart(selectedProduct)}>Add to Cart</button>
            <button onClick={() => setSelectedProduct(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
