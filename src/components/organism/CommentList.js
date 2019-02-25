import React,{ Component } from "react" 


import List from "./List"
import { connect } from "react-redux"
import { fetchComments } from "../../common/actions/comments"

class CommentList extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

        const postId = this.props.postId
        console.log( "cdm => ",postId)
        this.props.fetchComments(postId)
    }

    render() {
        console.log("render ==> ",this.props.postId)
        // const comments = [
        //     {
        //         id:1,
        //         comment:"Hello World",
        //         listItemAvatar:"https://via.placeholder.com/50x50"
        //     }
        // ]
        
        // console.log( "render ==> ",this.props.comments )

        const { comments } = this.props.comments

        const dataList = comments.map((item) => {
            return {
                title:"guest",
                secondaryText:item.comment,
                listItemAvatar:item.listItemAvatar
            }
        })

        return (
           <div>
           
            <List subheader="comments : " dataList={dataList} />
           </div>
        )  
    }
}

const mapStateToProps = (state) => {
    return {
         comments:state.comments
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchComments:(postId) => { 
        dispatch(fetchComments(postId))
    }
})

export default connect( mapStateToProps, mapDispatchToProps )(CommentList);