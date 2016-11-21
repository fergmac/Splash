import React, { Component, PropTypes } from 'react';
import About from './About';
import Loader from '../../components/Loader';
import realm from '../../config/models';

class AboutContainer extends Component {
    static propTypes = {
        route: PropTypes.object.isRequired,
        navigation: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired
    };
    static route = {
        navigationBar: {
            title: 'About',
        }
    }
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
        }

    }


    render() {
        console.log(realm.path)
        if (this.state.isLoading) {
            return (
              <Loader />
            );
        } else {
            return (
              <About />
            )
        }
    }
}

export default AboutContainer;