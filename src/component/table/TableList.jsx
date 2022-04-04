import React from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableList = () => {
  const rows = [
    {
      id: "1143155",
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81lWUzhyBlL._AC_SL1500_.jpg",
      customer: "john Deo",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: "114315895",
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81lWUzhyBlL._AC_SL1500_.jpg",
      customer: "john Deo",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "panding",
    },
    {
      id: "114315895",
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81lWUzhyBlL._AC_SL1500_.jpg",
      customer: "john Deo",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "panding",
    },
    {
      id: "1143155",
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81lWUzhyBlL._AC_SL1500_.jpg",
      customer: "john Deo",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="tableCall">Tracking ID</TableCell>
            <TableCell className="tableCall">Product</TableCell>
            <TableCell className="tableCall">Customer</TableCell>
            <TableCell className="tableCall">Date</TableCell>
            <TableCell className="tableCall">Amount</TableCell>
            <TableCell className="tableCall">Payment Method</TableCell>
            <TableCell className="tableCall">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCall" component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell className="tablecall">
                <div className="callWrapper">
                  <img src={row.img} alt={row.product} className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCall">{row.customer}</TableCell>
              <TableCell className="tableCall">{row.date}</TableCell>
              <TableCell className="tableCall">{row.amount}</TableCell>
              <TableCell className="tableCall">{row.method}</TableCell>
              <TableCell className="tableCall">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableList;
