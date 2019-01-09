import React, { Component } from 'react';
import '../styles/fentity.css'
import { Link, Redirect } from 'react-router-dom'



class Fentity extends Component {
 
    render() {
        const name = this.props.match.params.name
        const fentCategory = this.props.match.params.fentities
        const fentity = this.props.state[fentCategory].find(f=> f.name ===name)
        if (!fentity) {
            return <Redirect to="/about"></Redirect>
        }
        return (
            <div id="creature-container">
            <Link to={`./`}>Back</Link>
                <h1>{fentity.name}</h1>
                <img src={fentity.imgUrl} alt=""/>
                <div className="title">Power:</div>
                <div className="power text"> {fentity.power}</div>
                <div className="other text">{fentity.other}</div>
            </div>)
            
            
        
    }
}

export default Fentity;
