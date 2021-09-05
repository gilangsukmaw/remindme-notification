
import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const USERID = localStorage.getItem('USERID');
const Token = localStorage.getItem('Token');
const refreshPage = () => {
    window.location.reload();
}


class Photo extends Component {
  

  state = {
    
    photo: null
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange = (e) => {
    this.setState({
      photo: e.target.files[0]
    })
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('photo', this.state.photo, this.state.photo.name);

    let url = `https://demovie.gabatch13.my.id/users/${USERID}`;
    axios.put(url, form_data, {
      headers: { Authorization: `Bearer ${Token}` }
    })
        .then(res => {
          console.log(res.data);(alert(`Photo Updated`)); refreshPage();
        })
        .catch(err => console.log(err))
  };

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