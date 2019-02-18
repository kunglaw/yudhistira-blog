import React,{ Component } from "react"
import Section from "./../components/organism/Section"

export default class NotFound extends Component {
    render() {
        return (
            <Section>
                <h1> Error 404 </h1>
                <p> Page not found </p>
            </Section>
        )
    }
}