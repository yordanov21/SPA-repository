import extend from '../utils/context.js';

export default {
    get: {
        sites(context) {

            extend(context).then(function() {
                this.partial('../views/tourist101sites/tourist101sites.hbs');
            })
        },
        sites2(context) {

            extend(context).then(function() {
                this.partial('../views/tourist101sites/tourist101sites2.hbs');
            })
        },
        sites3(context) {

            extend(context).then(function() {
                this.partial('../views/tourist101sites/tourist101sites3.hbs');
            })
        },
        sites4(context) {

            extend(context).then(function() {
                this.partial('../views/tourist101sites/tourist101sites4.hbs');
            })
        },
        sites5(context) {

            extend(context).then(function() {
                this.partial('../views/tourist101sites/tourist101sites5.hbs');
            })
        },
    }
}