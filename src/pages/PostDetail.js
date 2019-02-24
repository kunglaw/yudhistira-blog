import React,{ Component } from "react"
import Section from "./../components/organism/Section"
import Grid from "@material-ui/core/Grid"
import List from "./../components/organism/List"
import Text from "./../components/atoms/Text"
import CommentSubmit from "./../components/organism/CommentSubmit"
import CommentList from "./../components/organism/CommentList"

import { connect } from "react-redux"
import { fetchCategory } from "./../common/actions/categories"
import { fetchPostDetail } from "./../common/actions/post"
import Card  from "./../components/organism/Card";

class PostDetail extends Component {

    componentDidMount() {
        // console.log( this.props )
        const id = this.props.match.params.id
        // console.log( " componentDidMount ===> " )
        this.props.fetchPostDetail(id) // fetch posts pak 
        this.props.fetchCategory()
        
    }

   render() {

        const { categories, postDetail } = this.props
        const postD = postDetail.post

        // readable data for ListItem
        const itemList = categories.categories.map((item) => {
            return {
                title:item.category,
                href:"/post/?postId="+item.objectId
            }
        })

       return(
        <Section>
            <Grid container spacing={16}>
                <Grid item sm={10} xs={12}>
                   <Card cardHeader={true} title={ postD.title }>
                        { postD.description }
                   </Card>
                   <CommentSubmit postId={ postD.objectId } />
                   <CommentList postId={ postD.objectId } />
                </Grid>
                <Grid item sm={2} xs={12}>
                        <List component="nav" dataList={ itemList } subheader="Categories">
                        </List>
                </Grid>
            </Grid>
        </Section>
       )
   }
}


const mapStateToProps = (state) => {
    return {
        categories:state.categories,
        postDetail:state.post,
      
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchCategory:() => dispatch( fetchCategory()) ,
    fetchPostDetail:(id) => {
         //const id = props.match.params.id
        dispatch(fetchPostDetail(id))
    } , 
    // fetchPost,
})

export default connect( mapStateToProps, mapDispatchToProps )(PostDetail);