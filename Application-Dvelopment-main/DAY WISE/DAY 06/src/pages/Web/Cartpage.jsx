// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// const Cartpage = () => {
//   const location = useLocation();
//   const initialCartItems = location.state?.cartItems || [];
//   const [cartItems, setCartItems] = useState(initialCartItems);
//   const [averageTotal, setAverageTotal] = useState(0);

//   useEffect(() => {
//     const calculateAverageTotal = () => {
//       if (cartItems.length === 0) return 0;
//       const totalSum = cartItems.reduce(
//         (sum, item) => sum + item.price * item.quantity,
//         0
//       );
//       return totalSum / cartItems.length;
//     };
//     setAverageTotal(calculateAverageTotal());
//   }, [cartItems]);

//   const handleCancel = (index) => {
//     const updatedCartItems = cartItems.filter((_, i) => i !== index);
//     setCartItems(updatedCartItems);
//   };

//   const handleQuantityChange = (index, newQuantity) => {
//     const updatedCartItems = cartItems.map((item, i) =>
//       i === index ? { ...item, quantity: newQuantity } : item
//     );
//     setCartItems(updatedCartItems);
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.heading}>
//         <h1 style={styles.cartTitle}>My Cart</h1>
//         <a href="/" style={styles.continueShopping}>Continue Shopping</a>
//       </div>
//       {cartItems.length > 0 ? (
//         <table style={styles.cartTable}>
//           <thead>
//             <tr>
//               <th style={styles.tableHeader}>Item</th>
//               <th style={styles.tableHeader}>Price</th>
//               <th style={styles.tableHeader}>Size</th>
//               <th style={styles.tableHeader}>Quantity</th>
//               <th style={styles.tableHeader}>Total</th>
//               <th style={styles.tableHeader}>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cartItems.map((item, index) => (
//               <tr key={index} style={styles.cartItem}>
//                 <td style={styles.productName}>{item.name}</td>
//                 <td style={styles.price}>₹{item.price.toFixed(2)}</td>
//                 <td style={styles.size}>{item.size}</td>
//                 <td style={styles.quantity}>
//                   <input
//                     type="number"
//                     value={item.quantity}
//                     min="1"
//                     onChange={(e) =>
//                       handleQuantityChange(index, parseInt(e.target.value, 10))
//                     }
//                     style={styles.quantityInput}
//                   />
//                 </td>
//                 <td style={styles.totalPrice}>
//                   ₹{(item.price * item.quantity).toFixed(2)}
//                 </td>
//                 <td>
//                   <button
//                     style={styles.cancelButton}
//                     onClick={() => handleCancel(index)}
//                   >
//                     Cancel
//                   </button>
//                 </td>
//               </tr>
//             ))}
//             <tr style={styles.averageRow}>
//               <td colSpan="4" style={styles.averageLabel}>
//                 Average Total
//               </td>
//               <td colSpan="2" style={styles.averageValue}>
//                 ₹{averageTotal.toFixed(2)}
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       ) : (
//         <p>Your cart is empty</p>
//       )}
//     </div>
//   );
// };
// const styles = {
//     container: {
//       fontFamily: "Arial, sans-serif",
//       padding: "20px",
//       maxWidth: "800px",
//       margin: "0 auto",
//     },
//     heading: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       borderBottom: "1px solid #ccc",
//       paddingBottom: "10px",
//       marginBottom: "20px",
//     },
//     cartTitle: {
//       fontWeight: "bold",
//       textAlign: "left", 
//       margin: 0, 
//       fontSize:"30px"
//     },
//     continueShopping: {
//       textAlign: "right", 
//       color: "#00b300",
//       textDecoration: "none",
//       fontWeight: "bold",
//     },
//     cartTable: {
//       width: "100%",
//       borderCollapse: "collapse",
//     },
//     tableHeader: {
//       borderBottom: "1px solid #ccc",
//       textAlign: "left",
//       padding: "10px",  // Adjusted padding
//       fontWeight: "bold",
//     },
//     cartItem: {
//       borderBottom: "1px solid #eee",
//     },
//     productName: {
//       fontSize: "18px",
//       fontWeight: "bold",
//       padding: "10px",  // Adjusted padding
//     },
//     price: {
//       fontSize: "16px",
//       color: "#333",
//       padding: "10px",  // Adjusted padding
//     },
//     size: {
//       fontSize: "16px",
//       color: "#333",
//       padding: "10px",  // Adjusted padding
//     },
//     quantity: {
//       padding: "10px",  // Adjusted padding
//     },
//     quantityInput: {
//       width: "50px",
//       padding: "5px",
//       textAlign: "center",
//     },
//     totalPrice: {
//       fontSize: "16px",
//       fontWeight: "bold",
//       padding: "10px",  // Adjusted padding
//     },
//     cancelButton: {
//       backgroundColor: "#ff0000",
//       color: "#fff",
//       border: "none",
//       padding: "5px 10px",  // Adjusted padding
//       cursor: "pointer",
//       borderRadius: "5px",
//       textAlign: "center",
//     },
//     averageRow: {
//       borderTop: "2px solid #ccc",
//     },
//     averageLabel: {
//       fontSize: "16px",
//       fontWeight: "bold",
//       textAlign: "right",
//       padding: "10px",  // Adjusted padding
//     },
//     averageValue: {
//       fontSize: "16px",
//       fontWeight: "bold",
//       textAlign: "left",
//       padding: "10px",  // Adjusted padding
//     },
//   };
// export default Cartpage;


import { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai"; // Importing shopping cart icon
import { useLocation } from "react-router-dom";

const Cartpage = () => {
  const location = useLocation();
  const initialCartItems = location.state?.cartItems || [];
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [averageTotal, setAverageTotal] = useState(0);

  useEffect(() => {
    const calculateAverageTotal = () => {
      if (cartItems.length === 0) return 0;
      const totalSum = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      return totalSum / cartItems.length;
    };
    setAverageTotal(calculateAverageTotal());
  }, [cartItems]);

  const handleCancel = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCartItems = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  return (
    <div style={styles.container}>
      <div style={styles.heading}>
        <h1 style={styles.cartTitle}>My Cart</h1>
        <a href="/" style={styles.continueShopping}>Continue Shopping</a>
      </div>
      {cartItems.length > 0 ? (
        <table style={styles.cartTable}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Item</th>
              <th style={styles.tableHeader}>Price</th>
              <th style={styles.tableHeader}>Size</th>
              <th style={styles.tableHeader}>Quantity</th>
              <th style={styles.tableHeader}>Total</th>
              <th style={styles.tableHeader}>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index} style={styles.cartItem}>
                <td style={styles.productName}>{item.name}</td>
                <td style={styles.price}>₹{item.price.toFixed(2)}</td>
                <td style={styles.size}>{item.size}</td>
                <td style={styles.quantity}>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      handleQuantityChange(index, parseInt(e.target.value, 10))
                    }
                    style={styles.quantityInput}
                  />
                </td>
                <td style={styles.totalPrice}>
                  ₹{(item.price * item.quantity).toFixed(2)}
                </td>
                <td>
                  <button
                    style={styles.cancelButton}
                    onClick={() => handleCancel(index)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
            <tr style={styles.averageRow}>
              <td colSpan="4" style={styles.averageLabel}>
                Average Total
              </td>
              <td colSpan="2" style={styles.averageValue}>
                ₹{averageTotal.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div style={styles.emptyCartContainer}>
          <AiOutlineShoppingCart size={50} /> {/* Icon */}
          <p style={styles.emptyCartMessage}>Your cart is empty</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  heading: {
    display: "flex",
    justifyContent: "space-between", // Align items to corners
    alignItems: "center",
    borderBottom: "1px solid #ccc",
    paddingBottom: "10px",
    marginBottom: "20px",
  },
  cartTitle: {
    fontWeight: "bold",
    margin: 0,
    fontSize: "30px",
    textAlign: "left", // Align to the left
  },
  continueShopping: {
    color: "#00b300",
    textDecoration: "none",
    fontWeight: "bold",
    textAlign: "right", // Align to the right
  },
  cartTable: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableHeader: {
    borderBottom: "1px solid #ccc",
    textAlign: "left",
    padding: "10px",
    fontWeight: "bold",
  },
  cartItem: {
    borderBottom: "1px solid #eee",
  },
  productName: {
    fontSize: "18px",
    fontWeight: "bold",
    padding: "10px",
  },
  price: {
    fontSize: "16px",
    color: "#333",
    padding: "10px",
  },
  size: {
    fontSize: "16px",
    color: "#333",
    padding: "10px",
  },
  quantity: {
    padding: "10px",
  },
  quantityInput: {
    width: "50px",
    padding: "5px",
    textAlign: "center",
  },
  totalPrice: {
    fontSize: "16px",
    fontWeight: "bold",
    padding: "10px",
  },
  cancelButton: {
    backgroundColor: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "5px",
    textAlign: "center",
  },
  averageRow: {
    borderTop: "2px solid #ccc",
  },
  averageLabel: {
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "right",
    padding: "10px",
  },
  averageValue: {
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "left",
    padding: "10px",
  },
  emptyCartContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
  },
  emptyCartMessage: {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "10px",
  },
};

export default Cartpage;
