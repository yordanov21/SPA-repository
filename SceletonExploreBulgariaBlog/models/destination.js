let db = firebase.firestore();
export default {
    create(data) {
        return db.collection('destinations').add(data)
    },

    getAll() {
        //return array of all causes 
        return db.collection('destinations').get();
    },

    get(id) {
        return db.collection('destinations').doc(id).get();
    },
    close(id) {
        return db.collection('destinations').doc(id).delete();
    },
    donate(id, data) {
        return db.collection('destinations').doc(id).update(data)
    }
};