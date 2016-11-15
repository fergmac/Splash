import Unsplash, { toJson } from 'unsplash-js/native';
import { unsplash } from '../config/settings';

// pass through photojson from initial call then each photo object has ID property
// we use those ID's to get the /photos an array of promises the full photo data object
export const getFullPhotoData = (photosJson) => {
    return Promise.all(photosJson.map(photo => {
        return unsplash.photos.getPhoto(photo.id)
            .then(toJson)
            .then(json => {
                return json;
            })
            .catch(error => console.log(`Error fetching photo JSON: ${error}`));
    }));
}