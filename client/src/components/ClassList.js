import React, {Component} from 'react';
import axios from 'axios';
//import {Link} from 'react-router-dom';

export default class ClassList extends Component{
    state = {
        classes: [],
    };


    componentDidMount(){
       axios.get('http://localhost:4000/classes')
        .then(res =>{
            console.log(res);
            //debugger;
            this.setState({classes: res.data})
        })
    }

    handleDelete(e, id){
        e.preventDefault()
        axios.delete('http://localhost:4000/classes/'+id)
        .then(res =>{
                console.log(res.data);
                }
        )
        
        this.setState({
            classes: this.state.classes.filter(el=>el._id !== id)
        })
       
    }

    handleUpdate(e, id){
        e.preventDefault();

    }

    render(){
    return (
        <div className="container">
            
                <table>
                    <thead>
                        <tr>
                            <th>Items</th>
                            <th>Title</th>
                            <th>Subject</th>
                            <th>Remove</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                    {this.state.classes.map((clas, index)=>
                        <tr key={clas._id}>
                            <td>{index}</td>
                            <td>{clas.title}</td>
                            <td>{clas.subject}</td>
                            <td><button onClick={e=> this.handleDelete(e ,clas._id) }>Delete</button></td>
                            <td><button onClick={e=> window.location.href='/update/'+clas._id}>Update</button></td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <button onClick={e=> window.location.href='/input'}>Add Class</button>
              
        </div>

    )
    }

} 