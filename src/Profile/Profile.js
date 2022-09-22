import React, { Component } from "react";
import img1 from "../images/Photo.jpg"


class Profil extends Component {
    constructor(props) {
        super(props);
    
    this.state = { 
        Person :{
            FullName:"Mohamed Amine Ben Hmida" ,
            Bio:"I’m a software engineer. I make websites, apps, bots—a bunch of other stuff. I build stuff that makes other people’s lives better. That’s really cool to me because it feels fundamentally important."  ,
            ImgSrc:img1  ,
            Profession:"Software enginner"},
            time: new Date(),
     }};
    render() { 
        return (
            <>
            <h1> {this.state.Person.FullName}</h1>
            <h2>{this.state.Person.Bio}</h2>
            <img src={this.state.Person.ImgSrc} alt=""/>
            <h3>{this.state.Person.Profession}</h3>
            <p>Time : {this.state.time.toLocaleTimeString()}</p>
            </>
          );
    }
}
 
export default Profil ;