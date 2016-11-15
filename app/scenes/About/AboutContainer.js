import React, { Component } from 'react';
import {
    Image,
    Text,
    View,
    ActivityIndicator,
} from 'react-native';
import { toJson } from 'unsplash-js/native'
import { unsplash } from '../../config/settings.js'
import About from './About';

class AboutContainer extends Component {
    static route = {
        navigationBar: {
            title: 'About',
        }
    }
    constructor(props) {
        super(props);

    }


    render() {
        if (this.state.isLoading) {
            return (
                <ActivityIndicator animating={true} size="small" color="black" />
            );
        } else {
            return (
                <About />
            )
        }
    }
}

export default AboutContainer;