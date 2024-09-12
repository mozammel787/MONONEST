import { FaTruck, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint
    fetch('https://your-api-endpoint.com/orders')
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) => console.error('Error fetching orders:', error));
  }, []);

  const toggleDetails = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-6">Order History</h3>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="bg-gray-50 p-4 rounded-lg shadow-md mb-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-lg font-semibold">Order #{order.id}</h4>
                <p className="text-gray-600">Placed on: {order.date}</p>
              </div>
              <button
                className="text-blue-500 flex items-center"
                onClick={() => toggleDetails(order.id)}
              >
                {expandedOrderId === order.id ? (
                  <>
                    <FaAngleUp className="mr-2" /> Hide Details
                  </>
                ) : (
                  <>
                    <FaAngleDown className="mr-2" /> View Details
                  </>
                )}
              </button>
            </div>

            {expandedOrderId === order.id && (
              <div className="mt-4">
                {order.items.map((item) => (
                  <p key={item.id}>{item.name}: ${item.price.toFixed(2)}</p>
                ))}
                <p>Total: ${order.total.toFixed(2)}</p>
                <p>
                  Status: {order.status}{' '}
                  <FaTruck className="inline-block ml-2" />
                </p>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;
