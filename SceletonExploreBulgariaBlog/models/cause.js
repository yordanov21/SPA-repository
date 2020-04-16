let db = firebase.firestore();
export default {
    create(data) {

        return db.collection('sites').add(data)
    },

    getAll() {
        //return array of all causes 
        return db.collection('sites').get();
    },

    get(id) {
        return db.collection('sites').doc(id).get();
    },
    close(id) {
        return db.collection('sites').doc(id).delete();
    },
    donate(id, data) {
        return db.collection('sites').doc(id).update(data)
    }
};