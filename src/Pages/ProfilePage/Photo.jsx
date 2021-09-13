/* eslint-disable no-unused-vars */

import React, { Component } from 'react';
import axios from 'axios';
// import { useParams } from 'react-router';


// const {firstname, lastname, username, email} = props;
const USEREMAIL = localStorage.getItem('USEREMAIL');
const USERNAME = localStorage.getItem('USERNAME');
const Token = localStorage.getItem('Token');
const refreshPage = () => {
    window.location.reload();
}


class Photo extends Component  {
  constructor(props) {
    super(props) ;
    const {firstname} = this.props;
    const {lastname} = this.props
// console.log(firstname,lastname)
  }

  state = {
    firstname:'bikin',
    lastname:'lagi',
    username:`${USERNAME}`,
    email:`${USEREMAIL}`,
    image: null,
  };
  
  

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    let form_data = new FormData();
    form_data.append('firstname', this.state.firstname);
    form_data.append('lastname', this.state.lastname);
    form_data.append('username', this.state.username);
    form_data.append('email', this.state.email);
    form_data.append('image', this.state.image, this.state.image.name);

    let url = `https://remindme.gabatch13.my.id/api/v1/user/`;
    axios.put(url, form_data, {
      headers: { Authorization: `Bearer ${Token}` }
    })
        .then(res => {
          // console.log(res.data);(alert(`Photo Updated`)); 
        })
        // .catch(err => console.log(err))
  };
  // , 'Content-Type' : 'multiform/formdata'
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
         
          <p>
            <input type="file"
                   id="photo"
                   accept="image/png, image/jpeg"  onChange={this.handleImageChange} required/>
          </p>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default Photo;