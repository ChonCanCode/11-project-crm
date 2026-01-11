import { useState, useEffect } from "react";
import propertiesData from "../json/propertiesData.json";
import { Link } from "react-router-dom";

function Properties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    setProperties(propertiesData);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Property List</h2>
      <Link to="/Adding">Adding New</Link>
      <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-300 text-left border-b">
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">Street Name</th>
            <th className="py-2 px-4">City</th>
            <th className="py-2 px-4">Post Code</th>
            <th className="py-2 px-4">Tenant</th>
            <th className="py-2 px-4">Rent (£)</th>
            <th className="py-2 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property.id} className="border-b hover:bg-gray-100">
              <td className="py-2 px-4">{property.id}</td>
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
