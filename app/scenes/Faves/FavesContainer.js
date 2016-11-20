import React, { Component, PropTypes } from 'react';
import {
    Image,
    Text,
    View,
    ActivityIndicator,
    ListView,
} from 'react-native';
import { toJson } from 'unsplash-js/native'
import { unsplash } from '../../config/settings.js'
import Faves from './Faves';
import Loader from '../../components/Loader';
import { getFavedPhotos } from '../../lib/databaseHelpers';
import { getFavedPhotoData } from '../../lib/splashHelpers';
import { Router } from '../../navigation/routes';


class FavesContainer extends Component {

    static propTypes = {
        route: PropTypes.object.isRequired,
        navigation: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired
    };

    static route = {
        navigationBar: {
            title: 'Faves',
        }
    }
    _goToPhotoBox(photo) {
        this.props.navigation.getNavigator('ferg')
            .push(Router.getRoute('photoBox', { photo }));
    }
    constructor(props) {
        super(props);
        this._goToPhotoBox = this._goToPhotoBox.bind(this)
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: this.ds,
            isLoading: true,
        }

    }

    componentDidMount() {
        //instead call method 
        console.log("componentDidMount")
        this.getFavedPhotoDataToJson();
    }
    componentDidUpdate() {
        console.log("comonentDidUpdate")
        if (this.state.dataSource && this.state.isLoading) {
            console.log("isloading: false")
            this.setState({ isLoading: false });
        }
    }


    render() {
        console.log("render faves container")
        if (this.state.isLoading) {
            return (
                <Loader />
            );
        } else {
            return (
                <Faves favedPhotos={this.state.dataSource} goToPhotoBox={this._goToPhotoBox}/>
            )
        }
    }
    getFavedPhotoDataToJson() {
        getFavedPhotoData(getFavedPhotos())
            .then(results => {
                console.log(results)
                this.setState({
                    dataSource: this.ds.cloneWithRows(results)
                });
            })
            .catch(error => console.log(`Error fetching photo JSON: ${error}`));
    }
}

export default FavesContainer;
