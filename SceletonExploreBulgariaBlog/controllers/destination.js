import extend from '../utils/context.js';
import models from '../models/index.js';
import docModifier from '../utils/doc-modifier.js';

export default {
    //get object
    get: {
        //function dashboard
        dashboard(context) {
            models.destination.getAll().then((response) => {

                const destinations = response.docs
                    .map(docModifier)
                    .filter(x => x.creator === localStorage.getItem('userEmail')).sort((a, b) => a.number - b.number);

                //to show destination on the screen :)
                context.destinations = destinations;

                extend(context).then(function() {
                    this.partial('../views/destinations/dashboard.hbs')
                })
            })
        },

        create(context) {
            extend(context).then(function() {
                this.partial('../views/destinations/create.hbs')
            })
        },

        create101sites(context) {
            extend(context).then(function() {
                this.partial('../views/destinations/create101.hbs')
            })
        },

        details(context) {
            const { destinationId } = context.params;

            models.destination.get(destinationId).then((response) => {

                const destination = docModifier(response);
                //console.log(destination);

                //залепяме всички пропъртита от дестинацията на най-външно ниво
                Object.keys(destination).forEach((key) => {
                    context[key] = destination[key];
                });
                // context.canDonate = destination.uId !== localStorage.getItem('userId');
                extend(context).then(function() {
                    this.partial('../views/destinations/details.hbs')
                })
            }).catch((e) => console.error(e));
        }
    },

    //post object handle-ва post заявките с дестинациите
    post: {
        //context-a идва от sammy
        create(context) {
            //...context.params за да трансвормираме от sammy object, и след това го записваме в fb
            // params e обекта(sammy object), който се пълни с подадената информация от формата
            const data = {
                ...context.params,
                uId: localStorage.getItem('userId'),
                creator: localStorage.getItem('userEmail'),
                number: context.params.title.split('.')[0] == !Number ? context.params.title.split('.')[0] : 102
            };

            models.destination.create(data).then((response) => {
                console.log(response);
                context.redirect('#/destinations/dashboard')
            }).catch((e) => console.error(e));
        }
    },
    //delete destination
    del: {
        close(context) {
            const { destinationId } = context.params;
            //console.log(destinationId);

            models.destination.close(destinationId).then((response) => {
                context.redirect('#/destinations/dashboard');
            })
        }
    }
};