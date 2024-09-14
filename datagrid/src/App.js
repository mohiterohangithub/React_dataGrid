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
        width: "30",
      },
      {
        key: "first_name",
        name: "First Name",
        width: "100",
      },
      {
        key: "last_name",
        name: "Last Name",
        width: "100",
      },
      {
        key: "email",
        name: "Email",
        width: "120",
      },
      {
        key: "gender",
        name: "Gender",
      },
      {
        key: "ip_address",
        name: "Ip Address",
        width: "100",
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

  const rows = useMemo(() => {
    return Data;
  }, []);

  return (
    <div className="App">
      <div style={{ width: "600px", height: "600px" }}>
        <ReactDataGrid columns={columns} rows={rows} />
      </div>
    </div>
  );
}

export default App;
