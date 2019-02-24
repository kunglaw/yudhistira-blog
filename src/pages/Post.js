import React, { Component } from 'react';
import Section from "./../components/organism/Section"
import Text from "./../components/atoms/Text"
import Card from "./../components/organism/Card"
// import Divider from '@material-ui/core/Divider';
import Grid from "@material-ui/core/Grid"
// import Box from "@material-ui/core/Box" // gak ngadong 
import List from "./../components/organism/List"
import { Link } from "react-router-dom"

import { connect } from "react-redux"
import { fetchPost } from "./../common/actions/posts" // action yang diambil 
import { fetchCategory } from "./../common/actions/categories"
import helpers  from "./../helpers/helpers"

class Post extends Component {

    componentWillMount() {
       
       // console.log( " shit ===> ",this.props.posts )
         // console.log( " componentDidMount ===> " )
         //this.props.fetchPost() // fetch posts pak 
         //this.props.fetchCategory()
    }

    componentDidMount() {
        // console.log( " componentDidMount ===> " )
        this.props.fetchPost() // fetch posts pak 
        this.props.fetchCategory()
        
    }

    // render() {
       
    //     const { categories, posts } = this.props
    //     console.log(" render ===> ", posts, categories)

    //     return (
    //         <div>
    //             {
                   
    //             }
    //         </div>
    //     )
    // }

    
    render() {

        const { posts , categories } = this.props
        const { wordLimiter } = helpers

        console.log(this.props)

       
        // readable data for ListItem
        const itemList = categories.categories.map((item) => {
            return {
                title:item.category,
                href:"/post/?postId="+item.objectId
            }
        })

        //console.log( " render ===> ",this.props.posts )

        const postList = posts.posts.map((item) => {
            return (
                <Grid key={item.id} item xs={12} sm={4} >
                    <Card
                        cardHeader={true}
                        avatar={"E"}
                        cardMedia={"https://via.placeholder.com/200x150"}
                        imageTitle="placeholder"
                        title={ <Link to={"/post/detail/"+ item.id }>{item.title}</Link> }
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
        categories:state.categories,
        posts:state.posts,
      
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchCategory: () => dispatch(fetchCategory()),
    fetchPost: () => dispatch(fetchPost())
})

export default connect( mapStateToProps, mapDispatchToProps )(Post);