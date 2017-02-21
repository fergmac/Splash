import React, { Component, PropTypes } from 'react';
import {
    ListView,
} from 'react-native';
import { toJson } from 'unsplash-js/native'
import { unsplash } from '../../config/settings'
import Recent from './Recent';
import Loader from '../../components/Loader';
import { getFullPhotoData } from '../../lib/splashHelpers';
import { Router } from '../../navigation/routes';

// import styles from './styles';

class RecentContainer extends Component {
    //alternate way of setting proptypes es2016 
    static propTypes = {
        route: PropTypes.object.isRequired,
        navigation: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired
    };

    static route = {
        navigationBar: {
            title: 'Recent',
        }
    }

    constructor(props) {
        super(props);
        this._goToUser = this._goToUser.bind(this)
        this._goToPhotoBox = this._goToPhotoBox.bind(this)
        //this.ds for the list view
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: this.ds,
            isLoading: true,
            recentPhoto: {},
        }

    }
    componentWillMount() {
        this.getRecentPhotosJson();
    }
    componentWillUpdate() {
        if (this.state.dataSource && this.state.isLoading) {
            this.setState({ isLoading: false });
        }
    }
        getRecentPhotosJson() {
        unsplash.photos.listPhotos(1, 2, 'latest')
            //changes json data into array of object literals
            .then(toJson)
            .then(json => {
                // Your code
                //returns full photo data blob
                return getFullPhotoData(json);
            })
            .then(results => {
                this.setState({
                    dataSource: this.ds.cloneWithRows(results)
                });
            })
            .catch(error => console.log(`Error fetching photo JSON: ${error}`));
    }
    _goToUser(username) {
        this.props.navigator.push(Router.getRoute('user', { username }));
    }
    _goToPhotoBox(photo) {
        this.props.navigation.getNavigator('ferg')
        .push(Router.getRoute('photoBox', { photo }));
    }

    render() {
        if (this.state.isLoading) {
            return (
              <Loader />
            );
        } else {

            return (
              <Recent recentPhotos={this.state.dataSource} goToUser={this._goToUser} goToPhotoBox={this._goToPhotoBox} />
            );
        }
    }



}

export default RecentContainer;