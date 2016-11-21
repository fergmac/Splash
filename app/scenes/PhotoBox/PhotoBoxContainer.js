import React, { Component, PropTypes } from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import PhotoBox from './PhotoBox';
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

    constructor(props) {
        super(props);
        this._goBackRecent = this._goBackRecent.bind(this)

        this.state = {
            isFaved: false,
        }

    }
    componentWillMount() {
        if(this.props.phot)
        this.setState({ isFaved: faved(this.props.photo.id)})
    }

    _goBackRecent() {
        this.props.navigator.pop();
    }

    _callSaveFave() {
        saveFave(faved(this.props.photo.id), this.props.photo.id)
        this.setState({
            isFaved: faved(this.props.photo.id)
        })
    }

    _starRenderer(faved, iconName) {
        const color = faved ? 'yellow' : color.mediumGrey
        return <Icon name={iconName} size={24} color={color} />
    }

    render() {
        console.log("photos", this.props)

        return (
          <PhotoBox
            photo={this.props.photo}
            goToRecent={this._goBackRecent}
            callSaveFave={this._callSaveFave.bind(this)}
            starRenderer={this._starRenderer.bind(this)}
            isFaved={this.state.isFaved}
          />
        )
    }
}


export default PhotoBoxContainer;