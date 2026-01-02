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
    setNewProperty({
      ...newProperty,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newProperty);
  };

  return (
    <>
      <div className="p-4">
        <h2>Add New Property</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="street">Street</label>
            <input
              type="text"
              name="street"
              id="street"
              value={newProperty.street}
              onChange={handleInputChange}
              placeholder="street name"
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              value={newProperty.city}
              onChange={handleInputChange}
              placeholder="city name"
            />
          </div>
          <div>
            <label htmlFor="postcode">Post code</label>
            <input
              type="text"
              name="postcode"
              id="postcode"
              value={newProperty.postcode}
              onChange={handleInputChange}
              placeholder="post code"
            />
          </div>
          <div>
            <label htmlFor="tenant">Tenant</label>
            <input
              type="text"
              name="tenant"
              id="tenant"
              value={newProperty.tenant}
              onChange={handleInputChange}
              placeholder="tenant name"
            />
          </div>
          <div>
            <label htmlFor="rent">Rent</label>
            <input
              type="number"
              name="rent"
              id="rent"
              value={newProperty.rent}
              onChange={handleInputChange}
              placeholder="rent amount"
            />
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <select
              name="status"
              id="status"
              value={newProperty.status}
              onChange={handleInputChange}
            >
              <option value="">Select status</option>
              <option value="Occupied">Occupied</option>
              <option value="Vacant">Vacant</option>
            </select>
          </div>

          <button type="submit">Add Property</button>
        </form>
      </div>
    </>
  );
}

export default Adding;
