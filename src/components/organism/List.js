import React, { Component } from 'react';
import ListUI from "@material-ui/core/List"
import ListItem from '@material-ui/core/ListItem';
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import { ListSubheader, Paper } from '@material-ui/core';

class List extends Component {
    render() {
        const props = this.props;
       

        const dataList = props.dataList.length > 0 ? props.dataList.map((item) => {
            
            const listItemAvatar = item.listItemAvatar ? 
                <ListItemAvatar>
                    <Avatar alt="image" src={ item.listItemAvatar } />
                </ListItemAvatar> : "" 
            
            const primaryText = item.title ? item.title : ""
            const secondaryText = item.secondaryText ? item.secondaryText : ''

            return <ListItem button key={ item.id }>
                { listItemAvatar }
                <ListItemText
                    primary={ primaryText }
                    secondary={ 
                        <React.Fragment>
                            { secondaryText }
                        </React.Fragment>
                    }
                > 
                    
                </ListItemText>
            </ListItem>
        }) : <ListItem key={0} > No Data </ListItem>
        const subHeader = props.subheader ? <ListSubheader component="div">{ props.subheader }</ListSubheader> : ""

        return (
            <Paper>
                <ListUI subheader={ subHeader }>
                    { dataList }
                </ListUI>
            </Paper>
        );
    }
}

export default List;