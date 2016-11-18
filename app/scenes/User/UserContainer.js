import React, { Component, PropTypes } from 'react';
import {
    Text,
    View,
    ListView,
    ActivityIndicator,
} from 'react-native';
import { toJson } from 'unsplash-js/native';
import { unsplash } from '../../config/settings.js';
import User from './User';
import Router from '../../navigation/routes.js';
import Loader from '../../components/Loader';

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
    _goBackRecent() {
        props.navigator.pop();
    }
    constructor(props) {
        super(props);
        this._goBackRecent = this._goBackRecent.bind(this)

        this.state = {
            isLoading: true,
            user: {}
        }
    }
    componentWillMount() {
        //
        unsplash.users.profile(this.props.route.params.username)
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
                <Loader />
            );
        } else {
            return (
                <User user={this.state.user} goToRecent={this._goBackRecent} />
            )
        }
    }
}

export default UserContainer;