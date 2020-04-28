import extend from '../utils/context.js';

export default {
    get: {
        mountain(context) {

            extend(context).then(function() {
                this.partial('../views/articles/mountains.hbs');
            })
        },
        city(context) {

            extend(context).then(function() {
                this.partial('../views/articles/cities.hbs');
            })
        },
        sea(context) {

            extend(context).then(function() {
                this.partial('../views/articles/sea.hbs');
            })
        },
        legacy(context) {

            extend(context).then(function() {
                this.partial('../views/articles/legacy.hbs');
            })
        }
    }

}