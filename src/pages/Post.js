import React, { Component } from 'react';
import Section from "./../components/organism/Section"
import Text from "./../components/atoms/Text"
import Card from "./../components/organism/Card"
// import Divider from '@material-ui/core/Divider';
import Grid from "@material-ui/core/Grid"
// import Box from "@material-ui/core/Box" // gak ngadong 
import List from "./../components/organism/List"

import { connect } from "react-redux"
import { fetchPost } from "./../common/actions/posts"
import helpers  from "./../helpers/helpers"

class Post extends Component {

    componentWillMount() {
        this.props.fetchPost() // fetch posts pak 
        console.log( " componentWillMount ==> ",this.props)
       // console.log( " shit ===> ",this.props.posts )
    }

    componentDidMount() {
        // console.log( " componentDidMount ===> " )
        this.props.fetchPost() // fetch posts pak 
        console.log( " componentDidMount ==> ",this.props.posts)
    }

    // render() {
    //     console.log( "render ==> ",this.props.posts)
    //     const { posts } = this.props
    //     console.log( "render lagi ==> ",Array.isArray( posts.posts ))

    //     return (
    //         <div>
    //             {
                   
    //             }
    //         </div>
    //     )
    // }

    
    render() {

        const { posts } = this.props
        const { wordLimiter } = helpers

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

        //console.log( " render ===> ",this.props.posts )

        const postList = posts.posts.map((item) => {
            return (
                <Grid key={item.id} item xs={12} sm={4} >
                    <Card
                        cardHeader={true}
                        title={ item.title }
                    >
                        <p> { wordLimiter( item.description , 20)} </p>
                    </Card>
                </Grid>
            )
        })

        return (
            <Section>
                
                <Text variant="h5" style={{ margin:"10px 0"}} > Posts Page </Text>

                <Grid container spacing={16}>
                    <Grid item sm={10} xs={12}> 
                        <Grid container spacing={ 8 }>
                           { postList }
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

const mapStateToProps = (state) => {
    return {
        posts:state.posts,
    }
}

const mapDispatchToProps = {
    fetchPost
}

export default connect( mapStateToProps, mapDispatchToProps )(Post);