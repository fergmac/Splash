import Realm from '../config/models';

export const faved = () => {


}

export const saveFave = (faved, favId) => {
    realm.write(() => {
        // let isStared = faves.filtered('id == $0',  favId);
        if (faved) {
            // photo is already faved then delete 
            let photo = realm.objects('Fave').filtered('id == $0',  favId)
            realm.delete(faves); 
        } else {
            //otherwise add faved photo to database
            realm.create('Fave', {id: 1, faved_on: new Date() });
        }
    })
}