import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from "../projects/PrejectList";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'; 
import { compose } from 'redux';

class Dashboard extends Component {
  render() {
    console.log('Dashboard props: ', this.props);

    const {projects} = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications></Notifications>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state: ', state);
  return {
    projects: state.firestore.ordered.projects
  }
};

export default compose(
  firestoreConnect(() => ["projects"]),
  connect(mapStateToProps)
)(Dashboard);