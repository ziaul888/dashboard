import React from "react";
import DataTable from "../../component/datatable/DataTable";
import NavBar from "../../component/navbar/NavBar";
import Sidebar from "../../component/sidebar/Sidebar";
import "./list.scss";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <NavBar />
        <DataTable />
      </div>
    </div>
  );
};

export default List;
