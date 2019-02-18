import React,{ Component } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Text from "./../atoms/Text"
// import Button from "./../atoms/Button"
import Grid from "@material-ui/core/Grid"
import { Link } from "react-router-dom"
import LinkUi from "@material-ui/core/Link"
import Button from "./../atoms/Button"

export default class Navbar extends Component {
    render() {
        return(
            <AppBar position="static" color="primary" >
                <Toolbar>
                   <Grid container>
                        <Grid item xs={2} sm={2}>
                            <Link component={ LinkUi } to="/">
                                <Text textColor="white" variant="h5" color="inherit"> Yudhistira Blog </Text>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/post">
                               <Button style={{color:"white"}}> Posts </Button>
                            </Link>
                        </Grid>

                   </Grid>                     
                </Toolbar>
               
                   
            </AppBar>
        )
    }
}