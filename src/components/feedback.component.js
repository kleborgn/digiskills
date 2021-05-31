import React, { } from 'react';
import axios from 'axios';
import './css/Feedback.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    handleSubmit(e){
        e.preventDefault();
        axios({
            method: "POST",
            url:"http://localhost:8081/reviews",
            data:  this.state
        }).then((response)=>{
            if (response.data.status === 'success'){
                alert("Message Sent.");
                this.resetForm()
            }else if(response.data.status === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){

        this.setState({name: '', email: '', message: ''})
    }

    render() {

        return (
            <div className="form-div">
                <div className="container-feedback">
                    <div className="title">
                        <h3>leave us a comment !</h3>
                    </div>
                                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                                        <input type="text" className="form-control" id="name" placeholder="Enter your Name..."value={this.state.name} onChange={this.onNameChange.bind(this)} />
                                        <input type="text" className="form-control" id="email" placeholder="Enter your Email..."aria-describedby="emailHelp" value={this.state.email} onChange={this.onemailChange.bind(this)} />
                                        <textarea className="form-control"  id="message" placeholder="Enter your Message"value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                                </div>
            </div>
        );
    }
    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onemailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
}


export default App;