import { Link } from "react-router-dom";

const CustomerRow = ({ customer_id, name, amount, date }) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
      <td className="py-3 px-6 text-left text-black text-[17px]">{customer_id}</td>
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <div className="mr-2">
            <img
              src="person.png"
              alt="placeholder image"
              className="w-[24px]"
            />
          </div>
          <span className="font-medium">{name}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-center text-black font-semibold">{date}</td>
      <td className="py-3 px-6 text-center text-green-600 font-semibold">{amount}</td>
      <td className="text-center py-3 px-6">
        <Link
          to={`/customers/${customer_id}`}
          className="rounded-lg py-2 px-10 bg-gray-900 text-white hover:bg-green-600"
        >
          Customer details
        </Link>
      </td>
    </tr>
  );
};

export default CustomerRow;
