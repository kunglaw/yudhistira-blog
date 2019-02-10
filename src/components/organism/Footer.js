import React, { Component } from 'react';
import Section from "./Section"
import "./Footer.css"
import ContactForm from '../organism/ContactForm';
import Grid from "@material-ui/core/Grid"
import Text from "./../atoms/Text"

class Footer extends Component {
    render() {
        return (
            
            <footer>
                <Section class="container">
                    <Grid direction="row" spacing={32} container>
                        <Grid className="footer-left" item xs={12} sm={6} justify="flex-start">
                           
                           <Text paragraph textColor="white" variant="h2">Yudhistira Blog </Text> 

                            <Text paragraph textColor="white" align="justify" variant="body1"> 
                                To change the way a picture fits in your document, 
                                click it and a button for layout options appears next to it. 
                                When you work on a table, click where you want to add a row or a column, 
                                and then click the plus sign. 
                                Reading is easier, too, in the new Reading view. 
                            </Text>
                            
                            <div class="sitemap">
                                <Text textColor="white" variant="h5"> Sitemap </Text>
                            
                                <Grid container xs={12}>
                                    <Grid item sm={6} direction="row">
                                        <ul class="">
                                            <li><a href="#"> Home </a></li>
                                            <li><a href="#"> Vacancy </a></li>
                                            <li><a href="#"> Seatizen </a></li>
                                            <li><a href="#"> Company </a></li>
                                        </ul>
                                    </Grid>
                                    <Grid item>
                                        <ul class="">
                                            <li><a href="#"> About </a></li>
                                            <li><a href="#"> Vision and Mission </a></li>
                                            
                                        </ul>
                                    </Grid>
                                </Grid>
                                
                                
                                
                            </div>

                            <div class="connect">
                                <Text textColor="white" variant="h5"> Connect Us </Text>
                            </div>
                            
                        </Grid>
                        <Grid item xs={12} sm={6} justify="flex-start">
                            <ContactForm></ContactForm>
                        </Grid>
                        
                        
                    </Grid>   
                     
                </Section>
                <Section class="copyright bg-primary">
                    <p align="center"> Copyright &copy; 2019 </p>
                </Section>  
            </footer>
           
        );
    }
}

export default Footer;