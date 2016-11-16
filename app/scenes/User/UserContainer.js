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
import User from './User';

class UserContainer extends Component {

    static propTypes = {
        route: PropTypes.object.isRequired,
        navigation: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired
    };
    static route = {
        navigationBar: {
            title: 'User',
        }
    }
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            user: {}
        }
    }
    componentWillMount() {
        unsplash.currentUser.profile()
            .then(toJson)
            .then(json => {
                this.setState({ user: json })
            })
            .catch(error => console.log(`Error fetching JSON: ${error}`));
    }
    componentDidUpdate() {
        if (this.state.user && this.state.isLoading) {
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
                <User user={this.state.user} />
            )
        }
    }
}

export default UserContainer;