import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomerRow from "./CustomerRow.jsx";

const MainPage = () => {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getBankData = async () => {
    const { data } = await axios.get("https://server-iota-murex.vercel.app/api/customers");
    const response = data.Data;
    setCustomers(response.customers);
    setTransactions(response.transactions);
  };

  const getCustomerName = (id) => {
    const customer = customers.find((customer) => id == customer.id);
    return customer ? customer.name : "Unknown";
  };

  const handleSearchChange = (e) => {
    setSearchQuery((prev) => e.target.value);
  };

  const filteredTransactions = transactions.filter((transaction) => {
    const customerName = getCustomerName(transaction.customer_id).toLowerCase();
    const transactionAmount = transaction.amount.toString();
    const query = searchQuery.toLowerCase();
    return customerName.includes(query) || transactionAmount.includes(query);
  });

  useEffect(() => {
    getBankData();
  }, []);

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="w-full h-full container mx-auto p-5">
        <h1 className="text-[40px] text-gray-700 text-center mb-10">
          Bank Dashboard
        </h1>
        <div className="searchBar w-full">
          <input
            type="text"
            placeholder="Search for a customer or a transaction"
            className="w-full p-2 mb-3 rounded-[8px]"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Customer</th>
              <th className="py-3 px-6 text-center">Date</th>
              <th className="py-3 px-6 text-center">Transaction amount</th>
              <th className="py-3 px-6 text-center">Details</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((transaction) => (
                <CustomerRow
                  key={transaction.id}
                  name={getCustomerName(transaction.customer_id)}
                  customer_id={transaction.customer_id}
                  transaction_id={transaction.id}
                  amount={transaction.amount}
                  date={transaction.date}
                />
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-3 px-6 text-gray-600">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default MainPage;
