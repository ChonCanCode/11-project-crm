import { useState } from "react";

function PropertyTable() {
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: "Sunset Apartments",
      address: "123 Main St",
      tenant: "John Doe",
      rent: 1200,
      status: "Occupied",
    },
    {
      id: 2,
      name: "Lakeside Villa",
      address: "456 Lake Rd",
      tenant: "",
      rent: 1500,
      status: "Vacant",
    },
  ]);

  return (
    <div>
      <h2>Property List</h2>
    </div>
  );
}

export default PropertyTable;
