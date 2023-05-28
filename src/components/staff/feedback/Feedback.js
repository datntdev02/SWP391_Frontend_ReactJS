import { feedback } from "./FeedbackMap";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Feedback.scss";

const Feedback = () => {
  return (
    <div className="feedback-container">
      <h1>Feedback</h1>
      <div className="Box">
        <TableContainer component={Paper} sx={{ borderRadius: "2rem" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#839e77" }}>
                <TableCell
                  align="center"
                  sx={{ color: "white", fontWeight: "bolder", border: "0" }}
                >
                  Profile
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "white", fontWeight: "bolder", border: "0" }}
                >
                  Name&nbsp;
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "white", fontWeight: "bolder", border: "0" }}
                >
                  Feedback&nbsp;
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {feedback.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    width={5}
                    sx={{ border: "0" }}
                    className="IconCell"
                  >
                    <img className="Icon" src={row.img} alt="avatar" />
                  </TableCell>
                  <TableCell
                    align="center"
                    width={3}
                    className="Name"
                    sx={{ border: "0", fontWeight: "bolder" }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="left"
                    width={3}
                    className="Feedback"
                    sx={{ border: "0", fontWeight: "bolder" }}
                  >
                    {row.feedback}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Feedback;
