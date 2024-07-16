import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CustomerDetails = () => {
  const [customer, setCustomer] = useState(null); 
  const [transactions, setTransactions] = useState([]);
  const params = useParams();

  const getCustomerData = async () => {
    try {
      const { data } = await axios.get(
        `https://server-iota-murex.vercel.app/api/customers/${params.id}`, {
          headers: {
            'Cache-Control': 'no-cache'
          }
        }
      );
      setCustomer(data?.customer[0]);
      setTransactions(data?.transactions);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };

  useEffect(() => {
    getCustomerData();
  }, []);

  if (!customer) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <ClipLoader size={80} color="#111827" />
      </div>
    );
  }

  return (
    <section id="dashboard" className="h-screen container w-[95%] mx-auto">
      <h1 className="pt-5 text-[24px] font-semibold text-gray-800 m-0">
        Good Evening, {customer.name}!
      </h1>
      <h6 className="text-gray-400 mb-5">
        Here's an overview of your account.
      </h6>
      <div className="chartSection bg-white w-full shadow-xl rounded-[10px] py-4 px-2">
        <div className="header mb-5 border-b">
          <h3 className="text-[18px] font-semibold text-gray-800">Account overview</h3>
          <h6 className="text-gray-400 mb-2">Your account transactions.</h6>
        </div>

        <ResponsiveContainer width="90%" height={300}>
          <BarChart
            data={transactions}
          
          >
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#111827" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default CustomerDetails;
