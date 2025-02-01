import React from "react";
import DashboardLayout from "./layouts/DashboardLayout";
import { UserMgt } from "./pages/UserMgt";

function App() {
  return (
    <>
      {/* <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/shipments" element={<Shipments />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </DashboardLayout> */}
      <div className="">
        <DashboardLayout>
          <UserMgt />
        </DashboardLayout>
      </div>
    </>
  );
}

export default App;
