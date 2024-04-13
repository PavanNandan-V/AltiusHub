import React from "react";
import { AppBar, Button, Container, Drawer, Grid, TextField, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Routes,Route } from "react-router-dom";
import { useState } from "react";

const InvoiceDetailComponent=()=>{
    const[invoice,setInvoice]=useState({
        date:'',
        invoiceNumber:0,
        customerName: '',
        billingAddress: '',
        shippingAddress:'',
        GSTIN: '',
        items :[{itemName:'', quantity: 1,price:0, amount:0}],
        billSundrys:[],
        totalAmount:0,
    });


const handleSubmit=(e)=>{
    e.preventDefault();
    if (invoice.items.length ===0){
        alert('Atleast one item is requeired');
        return;
    }
    console.log("Invoice Details is submitted:",invoice)
    // window.location.href='/invoices'

}

const handleItemChange=(index,field,value)=>{
    setInvoice((prevInvoice) => ({
        ...prevInvoice,
        items: prevInvoice.items.map((item,i) => (i===index ? {...item,[field]: value}:item)),
    }));
};


const handleBillSundryChange=(index,field,value)=>{
    setInvoice()

}

const removeItem =(index) => {
    setInvoice((prevInvoice)=> ({

    }))
}

const addBillSundry =(index) => {
    setInvoice((prevInvoice)=> ({

    }))
}


const addItem =(index) => {
    setInvoice((prevInvoice)=> ({

    }))
}




return(
    <div>
        <Typography variant="h4">Create Invoice</Typography>
        <form onSubmit={handleSubmit}>
            <Typography variant="h6">Invoice Details</Typography>
        
        <Grid item xs={12} sm={6}>
            <TextField label="Date" type="Date" value={invoice.date} onChange={(e)=> setInvoice({ ...invoice,date: e.target.value})} required  />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField label="Invoice Number" type="Date" value={invoice.invoiceNumber} onChange={(e)=> setInvoice({ ...invoice,invoiceNumber: e.target.value})} required />
        </Grid>
        <TextField label="Customer Name" type="Date" value={invoice.customerName} onChange={(e)=> setInvoice({ ...invoice,customerName: e.target.value})} required />
        <TextField label="Billing Address" type="Date" value={invoice.billingAddress} onChange={(e)=> setInvoice({ ...invoice,invoiceNumber: e.target.value})} required />
        <TextField label="Shipping Address" type="Date" value={invoice.shippingAddress} onChange={(e)=> setInvoice({ ...invoice,shippingAddress: e.target.value})} required />
        <TextField label="GSTIN" type="Date" value={invoice.GSTIN} onChange={(e)=> setInvoice({ ...invoice,GSTIN: e.target.value})} required />
       
        <Typography variant="='h6" >Items</Typography>
        {invoice.items.map((item,index) => (
            <div key={index}>
                <TextField label="Item Name"  value={item.itemName} onChange={(e)=> handleItemChange(index,'itemChange', e.target)} required />
                <TextField label="Quantity"  value={item.quantity} onChange={(e)=> handleItemChange(index,'quantity', e.target.value)} required />
                <TextField label="Price"  value={item.itemName} onChange={(e)=> handleItemChange(index,'price', e.target.value)} required />
                <TextField label="Amount"  value={item.itemName} onChange={(e)=> handleItemChange(index,'amount', e.target.value)} required />
                <Button variant="contained" color="secondary" onClick={()=> removeItem(index)} >RemoveItem</Button>
            </div>
        ))}
         <Button variant="contained" color="primary" onClick={addItem} >RemoveItem</Button>

         <Grid item xs={12}>
            <Typography variant="h6">Bill Sundires</Typography>
            {invoice.billSundrys.map((billSundry,index) => (
                <div key={index}>
                    <TextField label="BillSundry Name"  value={billSundry.billSundryName} onChange={(e)=> handleBillSundryChange(index,'billSundyName',e.target.value)} required  fullWidth/>
                    <TextField label="Amount"  value={billSundry.amount} onChange={(e)=> handleBillSundryChange(index,'Amount', e.target.value)} required  fullWidth/>
                </div>
            ))}
            <Button variant="contained" color="primary" onClick={addBillSundry} >Add BillSundry</Button>
            </Grid>

            <Button variant="submit" color="contained" onClick={addItem} >Save</Button>

            </form>
    </div>        
   
)
}
export default InvoiceDetailComponent;