import React, { Component, PropTypes } from 'react';
import {
    Image,
    Text,
    View,
    ActivityIndicator,
} from 'react-native';
import { toJson } from 'unsplash-js/native'
import { unsplash } from '../../config/settings.js'
// import { randomStyles } from './styles.js'
import PhotoBox from './PhotoBox';

class PhotoBoxContainer extends Component {

    static propTypes = {
        route: PropTypes.object.isRequired,
        navigation: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired
    };
    static route = {
        navigationBar: {
            title: 'PhotoBox',
        }
    }
    _goBackRecent() {
        props.navigator.pop();
    }
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
        
        }
    }


    render() {
        if (this.state.isLoading) {
            return (
                <ActivityIndicator animating={true} size="small" color="black" />
            );
        } else {
            return (
                <PhotoBox />
            )
        }
    }
}

export default PhotoBoxContainer;