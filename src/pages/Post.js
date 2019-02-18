import React, { Component } from 'react';
import Section from "./../components/organism/Section"
import Text from "./../components/atoms/Text"
import Card from "./../components/organism/Card"
// import Divider from '@material-ui/core/Divider';
import Grid from "@material-ui/core/Grid"
// import Box from "@material-ui/core/Box" // gak ngadong 
import List from "./../components/organism/List"

class Post extends Component {
    render() {

        // data asal
        const dataList = [
            {
                category:"Category 1"
            },
            {
                category:"Category 2"
            },
            {
                category:"Category 3"
            }
        ]

        // readable data for ListItem
        const itemList = dataList.map((item) => {
            return {
                title:item.category
            }
        })

        return (
            <Section>
              
                <Text variant="h5" style={{ margin:"10px 0"}} > Posts Page </Text>

                <Grid container spacing={16}>
                    <Grid item sm={10} xs={12}> 
                        <Grid container spacing={ 8 }>
                            <Grid item xs={12} sm={4} >
                                <Card
                                    cardHeader={true}
                                    title="test title"
                                    subheader="creator and date"
                                >
                                    <p> Lorem ipsum sit dolor amet </p>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={4} >
                                <Card
                                    cardHeader={true}
                                    title="test title"
                                    subheader="creator and date"
                                >
                                    <p> Lorem ipsum sit dolor amet </p>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={4} >
                                <Card
                                    cardHeader={true}
                                    title="test title"
                                    subheader="creator and date"
                                >
                                    <p> Lorem ipsum sit dolor amet </p>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={2} xs={12}>
                        <List component="nav" dataList={ itemList } subheader="Categories">
                        </List>
                    </Grid>
                </Grid>
               
                
               
               
            </Section>
        );
    }
}

export default Post;