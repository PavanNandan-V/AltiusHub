import React from "react";
import { List, ListItem, ListItemText,Link} from "@material-ui/core";


function SideNav(){
    return(
        <List>
            <ListItem button component={Link} to="/invoices" >
                <ListItemText primary="Invoices" />
            </ListItem>
        </List>
    );
}
export default SideNav;