import React, { useState } from 'react';

// Styling in same document due to project size being small
const styles = {
    table: {
        width: '75vw',
        padding: '20px',
        boxSizing: 'border-box',
        backgroundColor: 'white',
        borderRadius: '40px 0px 40px 0px',
        boxShadow: '4px 4px darkgrey',
    }, 
    smallCol: {
        width: '10%',
    },
    meduimCol: {
        width: '25%'
    },
    longCol: {
        width: '35%',
    },
    header: {
        fontSize: '30px',
        fontWeight: 'bolder',
        margin: '30px'
    },
    content: {
        backgroundColor: '#fff',
        padding: '0',
    },
    hovered: {
        backgroundColor: 'lightgrey',
        padding: '0',
    }
}

// Creates table for the list, and then maps the list in the <tbody>
export default function List ({list}) {

    return (
        <table style={styles.table}>
            <colgroup>
                <col span={1} style={styles.meduimCol} />
                <col span={1} style={styles.smallCol} />
                <col span={1} style={styles.longCol} />
                <col span={1} style={styles.smallCol} />
            </colgroup>
            <thead>
                <tr style={styles.header}>
                    <td>Full name:</td>
                    <td>Owner: </td>
                    <td>License: </td>
                    <td>Fork count:</td>
                </tr>
            </thead>
            <tbody>
                { list.map(repo => <ListItem item={repo} key={repo.id} />) }
            </tbody>
            
        </table>
    )
}

// Created a list component for more readable code. Uses same styling const, due to small size of project
function ListItem ({item}) {
    const [ hovered, setHovered ] = useState(false);

    return (
        <tr 
            style={hovered ? styles.hovered : styles.content} 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <td><a href={item.html_url} target="_blank">{item.name}</a></td>
            <td>{item.owner.login}</td>
            <td>{item.license ? item.license.name : ''}</td>
            <td>{item.forks}</td>
        </tr>
    )
}