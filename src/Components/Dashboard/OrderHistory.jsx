import { FaCheckCircle } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useAuth } from '../../Hook/useAuth';

const OrderHistory = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    if (user?.email) {
      fetch(`${API_URL}/payment/${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data))
        .catch((error) => console.error('Error fetching orders:', error));
    }
  }, [user]);

  return (
    <div className="bg-white p-6 rounded shadow border">
      <h3 className="text-2xl font-bold mb-6">Order History</h3>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="w-full">
          <div className="bg-white rounded-xl  overflow-y-auto">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="h-16 w-full text-sm leading-none text-gray-800">
                  <th className="font-normal text-left pl-4">ID</th>
                  <th className="font-normal text-left pl-12">Date</th>
                  <th className="font-normal text-left pl-16">Product Quantity</th>
                  <th className="font-normal text-left pl-16">Price</th>
                  <th className="font-normal text-left pl-16">Transaction ID</th>
                  <th className="font-normal text-left pl-12">Payment Status</th>
                </tr>
              </thead>
              <tbody className="w-full">
                {orders.map((order, i) => {
                  // Assuming `order.items` contains the list of items
                  const totalQuantity = order.items?.reduce((total, item) => total + (item.quantity || 0), 0);

                  return (
                    <tr
                      key={i}
                      className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                    >
                      <td className="pl-6">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          {i + 1}
                        </p>
                      </td>
                      <td className="pl-12">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          {new Date(order.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                      </td>
                      <td className="pl-24">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          {totalQuantity}
                        </p>
                      </td>
                      <td className="pl-16">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          ${order.totalAmount}
                        </p>
                      </td>
                      <td className="pl-[68px]">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          {order.paymentIntentId}
                        </p>
                      </td>
                      <td className="pl-20">
                        <FaCheckCircle className="text-green-500 text-xl" />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
