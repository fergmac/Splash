import React, { Component } from 'react';
import {
    Image,
    Text,
    View,
    ActivityIndicator,
} from 'react-native';
import { toJson } from 'unsplash-js/native'
import { unsplash } from '../../config/settings.js'
// import { randomStyles } from './styles.js'
import Random from './Random';

class RandomContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            randomPhoto: {}
        }
    }
    componentWillMount() {
        unsplash.photos.getRandomPhoto()
            .then(toJson)
            .then(json => {
                this.setState({ randomPhoto: json })
            })
            .catch(error => console.log(`Error fetching JSON: ${error}`));
    }
    componentDidUpdate() {
        if (this.state.randomPhoto && this.state.isLoading) {
            this.setState({ isLoading: false, });
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <ActivityIndicator animating={true} size="small" color="black" />
            );
        } else {
            return (
                <Random randomPhoto={this.state.randomPhoto } />
            )
        }
    }
}

export default RandomContainer;