import React, { useMemo } from "react";

import "./App.css";
import ReactDataGrid from "./components/dataGrid/ReactDataGrid";
import Data from "../src/data/MOCK_DATA .json";

function App() {
  const columns = useMemo(() => {
    return [
      {
        key: "id",
        name: "ID",
      },
      {
        key: "first_name",
        name: "First Name",
      },
      {
        key: "last_name",
        name: "Last Name",
      },
      {
        key: "email",
        name: "Email",
      },
      {
        key: "gender",
        name: "Gender",
      },
      {
        key: "ip_address",
        name: "Ip Address",
      },
      {
        key: "car_make",
        name: "Car Make",
      },
      {
        key: "car_model",
        name: "Car Model",
      },
      {
        key: "color",
        name: "Color",
      },
      {
        key: "company_name",
        name: "Company Name",
      },
      {
        key: "city",
        name: "City",
      },
    ];
  }, []);

  return (
    <div className="App">
      <ReactDataGrid columns={columns} rows={Data} />
    </div>
  );
}

export default App;
