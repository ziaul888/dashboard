import React from "react";
import "./home.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import NavBar from "../../component/navbar/NavBar";
import Widget from "../../component/widget/Widget";
import Featured from "./../../component/Featured/Featured";
import Charts from "../../component/Charts/Charts";
import TableList from "../../component/table/TableList";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <NavBar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="erarning" />
          <Widget type="banlance" />
        </div>
        <div className="charts">
          <Featured />
          <Charts />
        </div>
        <div className="listConatiner">
          <div className="listTitle">Latest Transactions </div>
          <TableList />
        </div>
      </div>
    </div>
  );
};

export default Home;
