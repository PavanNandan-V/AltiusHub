import { Table, TableBody, TableCell, Button,Paper,TableContainer, TableHead, TableRow } from "@material-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";

function InvoiceListComponent(){
    const[page,setPage]=useState(0);
    const[rowsPerPage,setRowsPerPage]=useState(5)
    const[invoices]=useState([
        {id:1,invoiceNumber:101,customerName:'John',totalAmount:100},
        {id:2,invoiceNumber:102,customerName:'Pavan',totalAmount:200},
        {id:3,invoiceNumber:103,customerName:'Balaji',totalAmount:400}
    ]);

    return(
        <div>
            <h2>Invoice List</h2>
            <Button variant="contained" color="primary" component={Link} to="/invoices/new">Add Invoice</Button>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Invoice Number</TableCell>
                            <TableCell>Customer Name</TableCell>
                            <TableCell>Total Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage>0 ?invoices.slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage):invoices).map((invoices) => (
                            <TableRow key={invoices.id}>
                                <TableCell>{invoices.invoiceNumber}</TableCell>
                            </TableRow>
                        )
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}


export default InvoiceListComponent;