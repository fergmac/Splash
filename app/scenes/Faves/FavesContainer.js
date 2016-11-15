import React, { Component } from 'react';
import {
    Image,
    Text,
    View,
    ActivityIndicator,
} from 'react-native';
import { toJson } from 'unsplash-js/native'
import { unsplash } from '../../config/settings.js'
import Faves from './Faves';

class FavesContainer extends Component {
    static route = {
        navigationBar: {
            title: 'Faves',
        }
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
                <Faves />
            )
        }
    }
}

export default FavesContainer;