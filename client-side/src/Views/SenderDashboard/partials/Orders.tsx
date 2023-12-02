import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { IUser } from "../SenderDashboard.interface";

// Generate Order Data
function createData(
  _id: string,
  parcelName: string,
  pickupAddress: string,
  dropOffAddress: string,
  parcelStatus: "picked" | "pending" | "delivered",
  deliveredBy?: IUser,
  dropOffTime?: string,
  pickupTime?: string
) {
  return {
    _id,
    parcelName,
    pickupAddress,
    dropOffAddress,
    parcelStatus,
    deliveredBy,
    dropOffTime,
    pickupTime,
  };
}

const rows: [
  {
    _id: string;
    parcelName: string;
    pickupAddress: string;
    dropOffAddress: string;
    parcelStatus: "picked" | "pending" | "delivered";
    deliveredBy?: IUser;
    dropOffTime?: string;
    pickupTime?: string;
  }
] = [
  createData(
    "0",
    "Mina's request",
    "Giza",
    "Cairo",
    "picked",
    {
      userName: "Hamada",
      _id: "233333",
    },
    "22-04-2024",
    "23-04-2024"
  ),
];

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Picked from</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Delivered by</TableCell>
            <TableCell>Picked at</TableCell>
            <TableCell>delivered at</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row._id} className={row.parcelStatus}>
              <TableCell>{row.parcelName}</TableCell>
              <TableCell>{row.pickupAddress}</TableCell>
              <TableCell>{row.dropOffAddress}</TableCell>
              <TableCell className="black-color">{row.parcelStatus}</TableCell>
              <TableCell>{row.deliveredBy?.userName}</TableCell>
              <TableCell>{row.pickupTime}</TableCell>
              <TableCell>{row.dropOffTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
    </React.Fragment>
  );
}
