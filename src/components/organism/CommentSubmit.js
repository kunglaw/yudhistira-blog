import React,{Component} from "react"
import Card from './Card'
import TextField from "./../atoms/TextField"
import { connect } from "react-redux"
import { addComment } from "../../common/actions/comments"

class CommentSubmit extends Component {

    constructor(props) {
        super(props)

        this.state = {
            inputComment:""
        }
    }

    _handleKeyPress = (e) => {
        const postId = this.props.postId
        if (e.key === 'Enter') {
            this.props.addComment({
                "postId":{
                    objectId:postId
                },
                "comment":this.state.inputComment
            })
            this.setState({
                inputComment:""
            })
        }
    }

    handleOnChangeEvent(event) {
        this.setState({
            inputComment:event.target.value
        })
    }

    render() {
        return(
            <Card>
                
                <TextField value={ this.state.inputComment } 
                style={{ width:"100%"}} 
                onChange={(event) => { this.handleOnChangeEvent(event) }}
                onKeyUp={ this._handleKeyPress }
                placeholder="write comment here ... "></TextField>
            </Card>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addComment:(data) => { 
        dispatch(addComment(data))
    }
})

export default connect( null, mapDispatchToProps )(CommentSubmit);