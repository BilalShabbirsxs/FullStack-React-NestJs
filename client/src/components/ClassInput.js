import React, {Component} from 'react';
import axios from 'axios';

export default class ClassInput extends Component{
    state = {
        title: '',
        subject: '',
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    handleSubmit=(event)=>{
        event.preventDefault();

        const clas = {
            title: this.state.title,
            subject: this.state.subject,
        }

        axios.post('http://localhost:4000/classes', clas)
        .then(res=>{
            console.log(res);
            console.log(res.data);
            window.location.href="/";
        })
    }



    render(){
    return (
    <div className="container">
     <form onSubmit={this.handleSubmit}>
         <label>ClassName:</label>
             <input type="text" name="title" onChange={this.handleChange} />
         <label>Subject:</label>
             <input type="text" name="subject" onChange={this.handleChange}/>
         <button type="submit">Insert Class</button>
     </form>
     </div>
    )
    }

} 