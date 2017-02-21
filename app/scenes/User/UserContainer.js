import React, { Component, PropTypes } from 'react';
import {
    ListView,
} from 'react-native';
import { toJson } from 'unsplash-js/native';
import { unsplash } from '../../config/settings';
import User from './User';
// import Router from '../../navigation/routes.js';
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

    constructor(props) {
        super(props);
        this._goBackRecent = this._goBackRecent.bind(this)

        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: this.ds,
            isLoading: true,
            user: {},
        }
    }
    componentWillMount() {
        const username = this.props.route.params.username;
        this.getUserProfile(username);
        this.getUserPhotos(username);


    }
    componentWillUpdate() {
        if (this.state.user && this.state.isLoading) {
            this.setState({ isLoading: false, });
        }
    }
        getUserProfile(username) {
        unsplash.users.profile(username)
            .then(toJson)
            .then(json => {
                this.setState({ user: json })
            })
            .catch(error => console.log(`Error fetching JSON: ${error}`));
    }
    getUserPhotos(username) {
        unsplash.users.photos(username, 1, 3, 'popular')
            .then(toJson)
            .then(results => {
                console.log("results", results)
                this.setState({
                    dataSource: this.ds.cloneWithRows(results)
                });
            })
            .catch(error => console.log(`Error fetching photo JSON: ${error}`));
    }
    _goBackRecent() {
        this.props.navigator.pop();
    }

    render() {
        if (this.state.isLoading) {
            return (
              <Loader />
            );
        } else {
            return (
              <User user={this.state.user} photos={this.state.dataSource} goToRecent={this._goBackRecent} />
            )
        }
    }



}

export default UserContainer;