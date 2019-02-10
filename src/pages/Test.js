import React, { Component } from 'react';
import Text from "./../components/atoms/Text"
import TextField from "./../components/atoms/TextField"
import Section from "./../components/organism/Section"
import Grid from "@material-ui/core/Grid"

class Test extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name:""
        }

        //this.handleKeyup = this.handleKeyup.bind(this)
        // this.nameHandleOnChange = this.nameHandleOnChange.bind(this)
        // this.emailHandleOnChange = this.emailHandleOnChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    // handleKeyup(event) {
    //     console.log(event.target.value," <=== ")
    //     this.setState({
    //         name:event.target.value
    //     })
    // }
    nameHandleOnChange(event) {
        this.setState({
            name:event.target.value,

        })
    }

    emailHandleOnChange(event) {
        this.setState({
            email:event.target.value
        })
    }

    passwordHandleOnChange = (event) => {
        this.setState({
            password:event.target.value
        })   
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
    }

    render() {
        return (
            <Section >
                <Grid container>
                    <Grid item sm={12}>
                        <h2> Halaman Test </h2>
                        <hr></hr>
                    </Grid>
                    <Grid item sm={12}>
                    <form action="" onSubmit={ this.handleSubmit.bind(this) } method="post">
                        <div>
                            <TextField label="Name" variant="outlined" type="text" value={ this.state.name } name="name" onChange={ this.nameHandleOnChange.bind(this) }></TextField>
                            <p><b>{ this.state.name }</b></p>
                        </div>
                        
                        <div>
                            
                            <TextField variant="filled" label="email" type="email" value={ this.state.email } name="email" onChange={ (e) => this.setState({email: e.target.value}) }></TextField>
                            <p><b>{ this.state.email }</b></p>
                        </div>
                        <div>
                        
                            <TextField label="password" type="password" value={ this.state.password } name="password" onChange={ this.passwordHandleOnChange } ></TextField>
                            <p><b>{ this.state.password }</b></p>
                        </div>
                        <input type="submit" value="Submit Bang" /> 
                    </form>
                    </Grid>
                </Grid>
            </Section>
        );
    }
}

export default Test;