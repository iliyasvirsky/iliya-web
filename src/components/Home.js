import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'
import Layout from './Layout';
import Night_Skyline from '../images/Night_Skyline.jpg'
import { Polar } from 'react-chartjs-2';
import Modal from 'react-bootstrap/lib/Modal';
import WorkChart from './WorkChart'

const page = {
  backgroundImage: 'url(' + Night_Skyline + ')',
  backgroundSize: 'cover',
  backgroundBlendMode: 'darken',
  backgroundPosition: '0px -100px',
  minHeight: '300px',
}

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);

    this.state= {
      showModal: false,
      name: '',
      email: '',
      desc: '',
      error: false,
      errorText: ''
    }
  }
  handleClose () {
    this.setState({ showModal: false, errorText: '' });

  }
  handleNameChange (event) {
      this.setState({name: event.target.value});
  }

  handleEmailChange (event) {
      this.setState({email: event.target.value});
  }

  handleDescChange (event) {
      this.setState({desc: event.target.value});
  }

  handleSubmit (event) {
    event.preventDefault();
    if (this.state.email == '' || this.state.name == '' || this.state.desc == '') {
      this.setState({ errorText: "please enter all information so i can get back to you" });
    } else {
      return fetch('/contact', {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          credentials: "same-origin", // include, same-origin, *omit
          headers: {
              "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(this.state.formData), // body data type must match "Content-Type" header
      })
      .then(response => {
        this.setState({ showModal: false });
      }) // parses response to JSON
      .catch(error => {
        console.error(`Fetch Error =\n`, error)
      });
    }
  }

  handleShow () {
    this.setState({ showModal: true });
  }

  render() {
    //------------------------------------------------------------------------------------------------------------------------------------
    console.log('this state isnt working ', this.state.showModal)
    if (this.state.showModal) {
      return (
        <Layout>
          <Modal bsSize="large" aria-labelledby="contained-modal-title-lg" show={this.state.showModal} onHide={this.handleClose}>
            <Modal.Title><h1 className="text-center mt-3">Lets Work Togather</h1></Modal.Title>
            <Modal.Body>
                <h3 className="text-danger">{this.state.errorText}</h3>
                <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                  <label> Name: </label>
                  <input className="form-control" placeholder="Please enter name" type="text" value={this.state.name} onChange={this.handleNameChange} />
                </div>
                <div class="form-group">
                  <label> Email: </label>
                  <input className="form-control" placeholder="Please enter name" type="text" value={this.state.email} onChange={this.handleEmailChange} />
                </div>
                <div class="form-group">
                  <label> In regards to what: </label>
                  <textarea className="form-control" placeholder="Reason for contact" type="text" value={this.state.desc} onChange={this.handleDescChange} rows="3" />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <button onClick={this.handleClose}>Cancel</button>
              <button onClick={this.handleSubmit}>Sumbit</button>
            </Modal.Footer>
          </Modal>
          <div style={page} className="jumbotron">
            <div className="container align-text-left">
              <div className="display-3 text-white">
                I am Iliya Svirsky
              </div>
              <div className="display-4 text-white">
                And I am a Full Stack Developer
              </div>
              <button onClick={this.onOpenModal} className="btn btn-info btn-lg mt-3" role="button">
                Contact Me!
              </button>
            </div>
          </div>
          <WorkChart />
        </Layout>
      );
    } else {
      return (
        <Layout>
          <div style={page} className="jumbotron">
            <div className="container align-text-left">
              <div className="display-3 text-white">
                I am Iliya Svirsky
              </div>
              <div className="display-4 text-white">
                And I am a Full Stack Developer
              </div>
              <button onClick={this.handleShow} className="btn btn-info btn-lg mt-3" role="button">
                Contact Me!
              </button>
            </div>
          </div>
          <WorkChart />
        </Layout>
      );
    }
  }
}

export default Home;
