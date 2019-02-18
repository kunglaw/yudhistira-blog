import React, { Component } from 'react';
import TextField from "./../atoms/TextField"
import Button from "./../atoms/Button"
import Text from "./../atoms/Text"
import Devider from "@material-ui/core/Divider"
import "./ContactForm.css"

class ContactForm extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            name:"",
            email:"",
            subject:"",
            description:""
        }
    }

    handleChangeName(event) {
        this.setState({
            name:event.target.value
        })
    }

    handleChangeEmail(event) {
        this.setState({
            email:event.target.value
        })
    }

    handleChangeSubject(event) {
        this.setState({
            subject:event.target.value
        })
    }

    handleChangeDescription(event) {
        this.setState({
            description:event.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <Text textColor="white" variant="h4" > Contact Form </Text>
                <Devider></Devider>
                <form method="post">
                    <TextField fullWidth variant="filled" label="Name" 
                    value={ this.state.name }
                    name="Name" onChange={(event) => this.handleChangeName(event) }
                    className="textfieldUI"></TextField>

                    <TextField fullWidth variant="filled" label="Email" 
                    type="email" className="textfieldUI" 
                    value={ this.state.email }
                    name="email" onChange={(event) => this.handleChangeEmail(event) }></TextField>

                    <TextField fullWidth variant="filled" label="Subject" 
                    type="text" className="textfieldUI"
                    value={ this.state.subject }
                     onChange={(event) => this.handleChangeSubject(event)}
                    name="subject"></TextField>

                    <TextField fullWidth variant="filled" label="Description"
                    value={ this.state.description }
                    type="text" className="textfieldUI"
                     onChange={(event) => this.handleChangeDescription(event)}
                    name="description" multiline rows="4" ></TextField>

                    <Button variant="contained" color="primary" type="submit"> Submit </Button>
                </form>
                
            </React.Fragment>
        );
    }
}

export default ContactForm;