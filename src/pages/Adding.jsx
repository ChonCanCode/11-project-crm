import { useState } from "react";
import { Label } from "../components/Props";
import { Input } from "../components/Props";

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow mt-0">
        <h2 className="text-xl font-semibold mb-6 text-center">
          Add New Property
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="street">Street</Label>
            <Input
              type="text"
              name="street"
              id="street"
              value={newProperty.street}
              onChange={handleInputChange}
              placeholder="Enter street name"
            />
          </div>

          <div>
            <Label htmlFor="city">City</Label>
            <Input
              type="text"
              name="city"
              id="city"
              value={newProperty.city}
              onChange={handleInputChange}
              placeholder="Enter city"
            />
          </div>

          <div>
            <Label htmlFor="postcode">Postcode</Label>
            <Input
              type="text"
              name="postcode"
              id="postcode"
              value={newProperty.postcode}
              onChange={handleInputChange}
              placeholder="Enter postcode"
            />
          </div>

          <div>
            <Label htmlFor="tenant">Tenant</Label>
            <Input
              type="text"
              name="tenant"
              id="tenant"
              value={newProperty.tenant}
              onChange={handleInputChange}
              placeholder="Tenant name"
            />
          </div>

          <div>
            <Label htmlFor="rent">Rent (£)</Label>
            <Input
              type="number"
              name="rent"
              id="rent"
              value={newProperty.rent}
              onChange={handleInputChange}
              placeholder="Monthly rent"
            />
          </div>

          <div>
            <Label htmlFor="status">Status</Label>
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
