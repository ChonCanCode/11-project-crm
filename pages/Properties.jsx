import { useState } from "react";

function Properties() {
  const [properties, setProperties] = useState([
    {
      id: 1,
      street: "Betsham Street",
      city: "Manchester",
      postcode: "M1 7AJ",
      tenant: "John Cena",
      rent: 900,
      status: "Occupied",
    },
    {
      id: 2,
      street: "Ernest Street",
      city: "Bolton",
      postcode: "BL1 4RZ",
      tenant: "Jack Daniel",
      rent: 800,
      status: "Occupied",
    },
    {
      id: 3,
      street: "Sycamore Avenue",
      city: "Warrington",
      postcode: "WA3 3SJ",
      tenant: "Bruce Lee",
      rent: 800,
      status: "Occupied",
    },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editedProperty, setEditedProperty] = useState({
    street: "",
    city: "",
    postcode: "",
    tenant: "",
    rent: "",
    status: "",
  });

  const handleEdit = (property) => {
    setEditingId(property.id);
    setEditedProperty({ ...property });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Property List</h2>
      <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-300 text-left border-b">
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
            <tr key={property.id}>
              <td>
                {editingId === property.id ? <input></input> : property.street}
              </td>
            </tr>
          ))}
          {/* {properties.map((property) => (
            <tr key={property.id} className="border-b hover:bg-gray-100">
              <td className="py-2 px-4">{property.street}</td>
              <td className="py-2 px-4">{property.city}</td>
              <td className="py-2 px-4">{property.postcode}</td>
              <td className="py-2 px-4">{property.tenant}</td>
              <td className="py-2 px-4">{property.rent}</td>
              <td className="py-2 px-4">{property.status}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
}
export default Properties;
