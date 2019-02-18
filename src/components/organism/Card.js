import React,{ Component } from "react"
import CardUI from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
// import MoreVertIcon from "@material-ui/core/MoreVert"

export default class Card extends Component {
    
    render() {

        const props = this.props

        const cardHeader = props.title ? 
            <CardHeader avatar={
                <Avatar aria-label="Recipe"> E </Avatar>
            }
            action={
                <IconButton>
                
                </IconButton>
            }
            title={ props.title }
            subheader={ props.subheader }
            ></CardHeader> 
        : ""
        const cardMedia = props.cardMedia ? 
            <CardMedia 
                image={ props.cardMedia }
                title={ props.imageTitle }
            ></CardMedia> : ""
        
        return (
            <CardUI>
                { cardHeader }
                { cardMedia }
                <CardContent>
                    { props.children }
                </CardContent>
            </CardUI>
        )
    }
}