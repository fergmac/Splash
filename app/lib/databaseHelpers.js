import realm from '../config/models';

// photoId: string
// checks to see if photo has been faved
// returns boolean
export const faved = (photoId) => {
    const isChecked = realm.objects('Fave').filtered('id == $0',  photoId)
    return isChecked[0]
}

// faved: boolean
// photoId: string
// saves photo as a fave in the db
export const saveFave = (faved, photoId) => {
    console.log(photoId)
    realm.write(() => {
        // let isStared = faves.filtered('id == $0',  favId);
        if (faved) {
            // photo is already faved then delete 
            let photo = realm.objects('Fave').filtered('id == $0',  photoId)
            realm.delete(faved); 
        } else {
            //otherwise add faved photo to database
            realm.create('Fave', {id: photoId, faved_on: new Date()});
        }
    })
}