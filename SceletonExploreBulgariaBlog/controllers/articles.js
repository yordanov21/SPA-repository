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
        }
    }

}