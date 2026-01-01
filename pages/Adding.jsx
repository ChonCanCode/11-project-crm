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
            <label htmlFor="street">Street Name</label>
            <input
              type="text"
              name="street"
              id="street"
              value={newProperty.street}
              onChange={handleInputChange}
              placeholder="Enter street name"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Adding;
