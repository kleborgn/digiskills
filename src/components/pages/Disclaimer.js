import React from 'react';
import "../css/Home.css"
export default class Disclaimer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            OncloseDisclaimer: true
        };
    }

    render(){
        if(!this.state.OncloseDisclaimer) return null
        return(
            <div  className="disclaimer" ><p>Disclaimer, your email and your username are saved on a database but they are not shared ! <span className="cross" onClick={()=>this.setState({OncloseDisclaimer: false})}><i className="fa fa-times" ></i></span></p></div>
        )
    }
}
