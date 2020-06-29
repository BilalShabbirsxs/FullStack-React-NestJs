import React from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Title</th>
                <th>Subject</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.classData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.title}</td>
                <td>{row.subject}</td>
                <td><button onClick={() => props.removeCharacter(row._id)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { classData, removeClass } = props;
        return (
            <table>
                <TableHeader />
                <TableBody characterData={classData} removeCharacter={removeClass} />
            </table>
        );
}

export default Table;