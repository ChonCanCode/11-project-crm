import { useState } from "react";

function Adding() {
  const [newProperty, setNewProperty] = useState({
    id: "",
    street: "",
    city: "",
    postcode: "",
    tenant: "",
    rent: "",
    status: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProperty((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newProperty);
  };

  const inputClass =
    "w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";

  const labelClass = "block mb-1 font-medium text-gray-700";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow mt-0">
        <h2 className="text-xl font-semibold mb-6 text-center">
          Add New Property
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="street" className={labelClass}>
              Street
            </label>
            <input
              type="text"
              name="street"
              id="street"
              value={newProperty.street}
              onChange={handleInputChange}
              placeholder="Enter street name"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="city" className={labelClass}>
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              value={newProperty.city}
              onChange={handleInputChange}
              placeholder="Enter city"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="postcode" className={labelClass}>
              Postcode
            </label>
            <input
              type="text"
              name="postcode"
              id="postcode"
              value={newProperty.postcode}
              onChange={handleInputChange}
              placeholder="Enter postcode"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="tenant" className={labelClass}>
              Tenant
            </label>
            <input
              type="text"
              name="tenant"
              id="tenant"
              value={newProperty.tenant}
              onChange={handleInputChange}
              placeholder="Tenant name"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="rent" className={labelClass}>
              Rent (£)
            </label>
            <input
              type="number"
              name="rent"
              id="rent"
              value={newProperty.rent}
              onChange={handleInputChange}
              placeholder="Monthly rent"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="status" className={labelClass}>
              Status
            </label>
            <select
              name="status"
              id="status"
              value={newProperty.status}
              onChange={handleInputChange}
              className={inputClass}
            >
              <option value="">Select status</option>
              <option value="Occupied">Occupied</option>
              <option value="Vacant">Vacant</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Add Property
          </button>
        </form>
      </div>
    </div>
  );
}

export default Adding;
