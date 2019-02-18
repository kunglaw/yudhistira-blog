import React, { Component } from 'react';
import ListUI from "@material-ui/core/List"
import ListItem from '@material-ui/core/ListItem';
import { ListSubheader, Paper } from '@material-ui/core';

class List extends Component {
    render() {
        const props = this.props;
        const dataList = props.dataList.length > 0 ? props.dataList.map((item) => {
            return <ListItem button> { item.title }</ListItem>
        }) : <ListItem> No Data </ListItem>
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