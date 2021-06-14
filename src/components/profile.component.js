import React, { Component } from "react";
import AuthService from "../services/auth.service";
import './css/profil.css';
import Score from "./score.component"
import NewQuestion from "./newquestion.component"


export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: AuthService.getCurrentUser()
        };
        
    }

    render() {
        const { currentUser } = this.state;
        var Question = null;
        console.log(this.state.currentUser);
        if(this.state.currentUser.roles.includes("ROLE_MODERATOR")){
            Question = <NewQuestion/>;
        }
        
        return (
            <div className="profil-container">
                <div className="profil-container-right">
                    <h3>
                        <strong>Profile: </strong>{currentUser.username}
                    </h3>
                    <p className="profil-content">
                        <strong>Id:</strong>{" "}
                        {currentUser.id}
                    </p>
                    <p className="profil-content">
                        <strong>Email:</strong>{" "}
                        {currentUser.email}
                    </p>
                    <p className="profil-content">
                        <Score></Score>
                    </p>
                
                    <p>
                        {Question}
                    </p>
                    <button className="btn--outline" onClick={AuthService.logout}><a className="logout" href="./">LOGOUT</a></button>
                </div>

                
            </div>
        );
    }
}