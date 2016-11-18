import React, { Component, PropTypes } from 'react';
import {
    Image,
    Text,
    View,
    ActivityIndicator,
    saveToCameraRoll,
} from 'react-native';
import { toJson } from 'unsplash-js/native'
import { unsplash } from '../../config/settings.js';
import PhotoBox from './PhotoBox';
import Loader from '../../components/Loader';
import { faved, saveFave } from '../../lib/databaseHelpers';

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
        this.props.navigator.pop();
    }
    _callSaveFave() {
        saveFave(faved(this.props.photo.id), this.props.photo.id)
    }
    //do this but also with a faved so that we can change color of icon conditionally
    constructor(props) {
        super(props);
        this._goBackRecent = this._goBackRecent.bind(this)

    }



    render() {
        console.log("photos", this.props)

        return (
            <PhotoBox 
                photo={this.props.photo} 
                goToRecent={this._goBackRecent} 
                callSaveFave={this._callSaveFave.bind(this)}
            />
        )
    }
}


export default PhotoBoxContainer;