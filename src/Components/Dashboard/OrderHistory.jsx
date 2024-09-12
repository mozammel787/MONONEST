import { FaTruck, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const OrderHistory = () => {
  // const [orders, setOrders] = useState([]);
  // const [expandedOrderId, setExpandedOrderId] = useState(null);

  // useEffect(() => {
  //   // Replace with your API endpoint
  //   fetch('https://your-api-endpoint.com/orders')
  //     .then((response) => response.json())
  //     .then((data) => setOrders(data))
  //     .catch((error) => console.error('Error fetching orders:', error));
  // }, []);

  // const toggleDetails = (orderId) => {
  //   setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  // };

  return (
    <div className="bg-white p-6 ">
      <h3 className="text-2xl font-bold mb-6">Order History</h3>

      {/* {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => ( */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Number ID</th>
              <th>Dates</th>
              <th>Status</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* ))
      )} */}
    </div>
  );
};

export default OrderHistory;
