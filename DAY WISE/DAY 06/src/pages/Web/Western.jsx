
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Western = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({}); // State to track selected sizes for products
  const navigate = useNavigate();

  const products = [
  
    {
      id: 1,
      name: "ZAYAH",
      price: 3360,
      description: "Melengi pink dress",
      imageUrl: "https://dhb8p39s5y2g5.cloudfront.net/rib/1523005776237_RIB_2426_1.jpg",
    },
    {
      id: 2,
      name: "RIB",
      price: 1890,
      description: "Fairy Tail Gown",
      imageUrl: "https://dhb8p39s5y2g5.cloudfront.net/rib/1477315682993_RIB_828_0.jpg",
    },

    {
      id: 3,
      name: "CERISE UK",
      price: 890,
      description: "Sea Green Gown",
      imageUrl: "https://dhb8p39s5y2g5.cloudfront.net/rib/1557046504580_RIB_2756_1.jpg",
    },
    {
      id: 4,
      name: "RIB",
      price: 3999,
      description: "Black Sequins Gown",
      imageUrl: "https://dhb8p39s5y2g5.cloudfront.net/rib/1561448000468_RIB_3063_1.jpg",
    },
    {
      id: 5,
      name: "AANINA BY ADITI",
      price: 2460,
      description: "Grey Sequin Gown",
      imageUrl: "https://dhb8p39s5y2g5.cloudfront.net/rib/1556031026538_RIB_W2843_1.jpg",
    },
    {
      id: 6,
      name: "MOUTIKA",
      price: 2240,
      description: "Black Beauty",
      imageUrl: "https://dhb8p39s5y2g5.cloudfront.net/rib/1556030593735_RIB_2818_1.jpg",
    },
    {
      id: 7,
      name: "MOUTIKA",
      price: 2240,
      description: "Nettty Pink Dress",
      imageUrl: "https://dhb8p39s5y2g5.cloudfront.net/rib/1556030590990_RIB_2817_1.jpg",
    },
    {
      id: 8,
      name: "RIB",
      price: 39.99,
      description: "Black Sequins Gown",
      imageUrl: "https://dhb8p39s5y2g5.cloudfront.net/rib/1552674037874_RIB_2727_1.jpg",
    },
    {
      id: 9,
      name: "AVASAA",
      price: 2240,
      description: "Embellished body party wear",
      imageUrl: "https://dhb8p39s5y2g5.cloudfront.net/rib/1561448000468_RIB_3063_1.jpg",
    },
    {
      id: 10,
      name: "RUVIERO APPAREL",
      price: 2130,
      description: "Off shoulder party wear",
      imageUrl: "https://dhb8p39s5y2g5.cloudfront.net/rib/1550678316625_RIB_2725_1.jpg",
    },
    {
      id: 11,
      name: "RUVIERO APPAREL",
      price: 2190,
      description: "I Love Red",
      imageUrl: "https://dhb8p39s5y2g5.cloudfront.net/rib/1550678313539_RIB_2724_1.jpg",
    },
    {
      id: 12,
      name: "RUVIERO APPAREL",
      price: 2240,
      description: "Take me to party",
      imageUrl: "https://dhb8p39s5y2g5.cloudfront.net/rib/1550678310827_RIB_2723_1.jpg",
    },
    {
      id: 13,
      name: "CAROUSEL BY ARYA",
      price: 4210,
      description: "Black Betty Gown",
      imageUrl: "https://dhb8p39s5y2g5.cloudfront.net/rib/1539381321773_RIB_2572_1.jpg",
    },
    {
      id: 14,
      name: "SUDESHNA URBAN",
      price: 780,
      description: "Purple Off Shoulder gown",
      imageUrl: "https://dhb8p39s5y2g5.cloudfront.net/rib/1525350784501_RIB_2522_1.jpg",
    },
    {
      id: 15,
      name: "SUDESHNA URBAN",
      price: 660,
      description: "The Su Set",
      imageUrl: "https://dhb8p39s5y2g5.cloudfront.net/rib/1525350771634_RIB_2518_1.jpg",
    },
    {
      id: 16,
      name: "SUDESHNA URBAN",
      price: 780,
      description: "Off shoulder jump suit",
      imageUrl: "https://dhb8p39s5y2g5.cloudfront.net/rib/1525350773375_RIB_2519_1.jpg",
    },
    {
      id: 17,
      name: "MANJARI",
      price: 1340,
      description: "Khadi Dress",
      imageUrl: "https://dhb8p39s5y2g5.cloudfront.net/rib/1525350744560_RIB_2509_1.jpg",
    },
    {
      id: 18,
      name: "RED SISTER BLUE",
      price: 780,
      description: "White and blue jump suit",
      imageUrl: "https://dhb8p39s5y2g5.cloudfront.net/rib/1523005794260_RIB_2432_1.jpg",
    },
    {
      id: 19,
      name: "RED SISTER BLUE",
      price: 740,
      description: "Grey Jumpsuit",
      imageUrl: "https://dhb8p39s5y2g5.cloudfront.net/rib/1523005781465_RIB_2428_1.jpg",
    },
    {
      id: 20,
      name: "RED SISTER BLUE",
      price: 850,
      description: "Khadi shirt dress",
      imageUrl: "https://dhb8p39s5y2g5.cloudfront.net/rib/1523005784623_RIB_2429_1.jpg",
    },
    
  ];

  const addToCart = (product) => {
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }
    const productWithSize = { ...product, size: selectedSize };
    setCartItems([...cartItems, productWithSize]);
  };

  const handleSizeChange = (productId, size) => {
    setSelectedSizes({ ...selectedSizes, [productId]: size });
  };

  const goToCart = () => {
    navigate("/cart", { state: { cartItems } });
  };

  return (
    <div style={styles.container}>
      <div style={styles.cartHeader}>
        <button onClick={goToCart} style={styles.viewCartButton}>
          View Cart ({cartItems.length})
        </button>
      </div>
      <h1 style={styles.header}>WESTERN</h1>
      <div style={styles.gridContainer}>
        {products.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <img src={product.imageUrl} alt={product.name} style={styles.image} />
            <div style={styles.productDetails}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p style={styles.price}>₹{product.price.toFixed(2)}</p>
              <div style={styles.sizeSelector}>
                <label htmlFor={`size-${product.id}`}>Size:</label>
                <select
                  id={`size-${product.id}`}
                  value={selectedSizes[product.id] || ""}
                  onChange={(e) => handleSizeChange(product.id, e.target.value)}
                  style={styles.sizeDropdown}
                >
                  <option value="">Select Size</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
              </div>
              <button onClick={() => addToCart(product)} style={styles.button}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  cartHeader: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "20px",
  },
  viewCartButton: {
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  header: {
    textAlign: "center",
    fontWeight:"bold",
    fontSize:"30px",
    color:"bg-gray-700",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // 4 columns
    gap: "20px",
    margin: "20px 0",
  },
  productCard: {
    width: "250px", // Adjusted for larger size
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  image: {
    width: "100%", // Full width of the card
    height: "auto",
    marginBottom: "15px",
    objectFit: "cover",
  },
  productDetails: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  price: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  sizeSelector: {
    marginBottom: "10px",
  },
  sizeDropdown: {
    marginLeft: "5px",
    padding: "5px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Western;
