import React, { Component } from 'react';
import TextField from "./../atoms/TextField"
import Button from "./../atoms/Button"
import Text from "./../atoms/Text"
import Devider from "@material-ui/core/Divider"
import "./ContactForm.css"

class ContactForm extends Component {

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
                    name="Name" onChange={() => this.handleChangeName() }
                    className="textfieldUI"></TextField>

                    <TextField fullWidth variant="filled" label="Email" 
                    type="email" className="textfieldUI" 
                    name="email" onChange={() => this.handleChangeEmail() }></TextField>

                    <TextField fullWidth variant="filled" label="Subject" 
                    type="text" className="textfieldUI"
                     onChange={() => this.handleChangeSubject()}
                    name="subject"></TextField>

                    <TextField fullWidth variant="filled" label="Description" 
                    type="text" className="textfieldUI"
                     onChange={() => this.handleChangeDescription()}
                    name="description" multiline rows="4" ></TextField>

                    <Button variant="contained" color="primary" type="submit"> Submit </Button>
                </form>
                
            </React.Fragment>
        );
    }
}

export default ContactForm;