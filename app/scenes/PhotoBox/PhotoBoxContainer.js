import React, { Component, PropTypes } from 'react';
import {
    Image,
    Text,
    View,
    ActivityIndicator,
} from 'react-native';
import { toJson } from 'unsplash-js/native'
import { unsplash } from '../../config/settings.js';
import PhotoBox from './PhotoBox';
import saveFave from '../../lib/databaseHelpers';
import Loader from '../../components/Loader';

class PhotoBoxContainer extends Component {

    static propTypes = {
        route: PropTypes.object.isRequired,
        navigation: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired
    };
    static route = {
        navigationBar: {
            visible: false,
        }
    }

    _goBackRecent() {
        props.navigator.pop();
    }
  


    render() {
        console.log("photos", this.props)

        return (
            <PhotoBox photo={this.props.photo} />
        )
    }
}


export default PhotoBoxContainer;