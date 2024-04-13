import React from "react";
import { AppBar, Container, Drawer, Grid, Toolbar, Typography, makeStyles } from "@material-ui/core";
import SideNav from "./SideNav";
import { Routes,Route } from "react-router-dom";
import InvoiceDetailComponent from './InvoiceDetailComponent';
import InvoiceListComponent from './InvoiceListComponent';



const useStyles=makeStyles((theme) => ({
    root:{
        display:'flex'
    },
    appBar:{
        zIndex: theme.zIndex.drawer+1,
    },
    drawer:{
        width: 240
    },
    drawerPaper:{
        width:200
    },
    content:{
        flexGrow: 1,
        padding: theme.spacing(3)
    }

}));

function AppComponent(){
    const classes=useStyles();

    return(
        <div className="">
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h5" noWrap>
                        Invoice App
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer className={classes.drawer} variant="permanent" classes={{paper: classes.drawerPaper}}>
            <Toolbar />
            <SideNav />
            </Drawer>
            <main className={classes.content}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={10} sm={100}>
                    <Routes>
                        <Route path="/invoices" element={<InvoiceListComponent />} />
                    </Routes>
                     </Grid>
                     <Grid item xs={10} sm={100}>
                    <Routes>
                        <Route path="/invoices/new" element={<InvoiceDetailComponent />} />
                        <Route path="/invoices/:id" element={<InvoiceDetailComponent />} />
                    </Routes>
                     </Grid>
                </Grid>
            </Container>
            </main>
        </div>
    );
}
export default AppComponent;