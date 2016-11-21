import React, { Component, PropTypes } from 'react';
import { unsplash } from '../../config/settings.js'
import { toJson } from 'unsplash-js/native'

// import { randomStyles } from './styles.js'
import Random from './Random';
import Loader from '../../components/Loader';
import { Router } from '../../navigation/routes';

class RandomContainer extends Component {

    static propTypes = {
        route: PropTypes.object.isRequired,
        navigation: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired
    };
    static route = {
        navigationBar: {
            title: 'Random',
        }
    }

    constructor(props) {
        super(props);
        this._goToPhotoBox = this._goToPhotoBox.bind(this)

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
    componentWillUpdate() {
        if (this.state.randomPhoto && this.state.isLoading) {
            this.setState({ isLoading: false, });
        }
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
              <Random randomPhoto={this.state.randomPhoto} goToPhotoBox={this._goToPhotoBox} />
            )
        }
    }
}

export default RandomContainer;