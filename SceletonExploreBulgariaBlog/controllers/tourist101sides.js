import extend from '../utils/context.js';

export default {
    get: {
        sites(context) {

            extend(context).then(function() {
                this.partial('../views/tourist101sites/tourist101sites.hbs');
            })
        }
    }
}