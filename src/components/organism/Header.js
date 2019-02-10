import React, { Component } from 'react';
import Section from "./Section"
import Text from "./../atoms/Text"

class Header extends Component {
    render() {
        return (
            <Section>
                <Text variant="h1"> Header </Text>
            </Section>
        );
    }
}

export default Header;