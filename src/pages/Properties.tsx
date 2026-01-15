import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type Property = {
  _id: string;
  street: string;
  city: string;
  postcode: string;
  tenant: string;
  rent: number;
  status: string;
};

function Properties() {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/properties", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch(console.error);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Property List</h2>

      <Link
        to="/Adding"
        className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 mb-4"
      >
        Add New Property
      </Link>

      <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-md">
        <thead>
          <tr className="bg-gray-300 text-left border-b">
            <th className="py-2 px-4">Street</th>
            <th className="py-2 px-4">City</th>
            <th className="py-2 px-4">Post Code</th>
            <th className="py-2 px-4">Tenant</th>
            <th className="py-2 px-4">Rent (£)</th>
            <th className="py-2 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property._id} className="border-b hover:bg-gray-100">
              <td className="py-2 px-4">{property.street}</td>
              <td className="py-2 px-4">{property.city}</td>
              <td className="py-2 px-4">{property.postcode}</td>
              <td className="py-2 px-4">{property.tenant}</td>
              <td className="py-2 px-4">{property.rent}</td>
              <td className="py-2 px-4">{property.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Properties;
