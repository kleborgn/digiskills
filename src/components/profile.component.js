import React, { Component } from "react";
import AuthService from "../services/auth.service";
import './css/profil.css';

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: AuthService.getCurrentUser()
        };
    }

    render() {
        const { currentUser } = this.state;

        return (
            <div className="hidden">
            <div className="profil-container">
                <div className="profil-container-right">
                    <h3>
                        <strong>Profile: </strong>{currentUser.username}
                    </h3>
                
                <p className="profil-content">
                    <strong>Token:</strong>{" "}
                    {currentUser.accessToken.substring(0, 20)} ...{" "}
                    {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
                </p>
                <p className="profil-content">
                    <strong>Id:</strong>{" "}
                    {currentUser.id}
                </p>
                <p className="profil-content">
                    <strong>Email:</strong>{" "}
                    {currentUser.email}
                </p>
                <p className="profil-content">
                <strong>Authorities:</strong>
                <ul className="profil-content">
                    {currentUser.roles &&
                    currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                </ul>
                </p>
                </div>
            </div>
            </div>
        );
    }
}