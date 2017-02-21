import React, { PropTypes } from 'react';
import PhotoList from '../../components/PhotoList';

const Recent = (props) => {
    return (
      <PhotoList recentPhotos={props.recentPhotos} goToUser={props.goToUser} goToPhotoBox={props.goToPhotoBox} />
    )
}


Recent.propTypes = {
    recentPhotos: PropTypes.object.isRequired,
}

export default Recent;