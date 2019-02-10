import React, { Component } from 'react';
import Section from "./../components/organism/Section"
import Text from "./../components/atoms/Text"

class Post extends Component {
    render() {
        return (
            <Section>
                <Text variant="h1"> Posts Page </Text>
            </Section>
        );
    }
}

export default Post;