import extend from '../utils/context.js';
import models from '../models/index.js';
import docModifier from '../utils/doc-modifier.js';
export default {
    //get object
    get: {
        //function dashboard
        dashboard(context) {

            models.cause.getAll().then((response) => {

                //da se doberem do kolekciata ot causes
                // const causes = response.docs.map((d) => d.data());

                const ideas = response.docs.map(docModifier);

                //за да излязат каузите на екрана:)
                context.ideas = ideas;

                extend(context).then(function() {
                    this.partial('../views/cause/dashboard.hbs')
                })
            })


        },
        create(context) {
            extend(context).then(function() {
                this.partial('../views/cause/create.hbs')
            })
        },

        details(context) {
            const { causeId } = context.params;

            models.cause.get(causeId).then((response) => {

                const cause = docModifier(response);
                //console.log(cause);

                //залепяме всички пропъртита от каузата на най-външно ниво
                Object.keys(cause).forEach((key) => {
                    context[key] = cause[key];
                });
                context.canDonate = cause.uId !== localStorage.getItem('userId');
                extend(context).then(function() {
                    this.partial('../views/cause/details.hbs')
                })


            }).catch((e) => console.error(e))

        }
    },

    //post object handle-ва post заявките с  каузите
    post: {
        //context-a идва от sammy
        create(context) {
            //...context.params за да трансвормираме от sammy object, и след това го записваме в fb
            // params e обекта(sammy object), който се пълни с подадената информация от формата
            const data = {
                ...context.params,
                uId: localStorage.getItem('userId'),
                creator: localStorage.getItem('userEmail'),
                isVisit: false,
                likes: 0,
                comments: []
            };

            models.cause.create(data).then((response) => {
                console.log(response);
                context.redirect('#/cause/dashboard')
            }).catch((e) => console.error(e));
        }
    },
    del: {
        close(context) {
            const { causeId } = context.params;
            //console.log(causeId);

            models.cause.close(causeId).then((response) => {
                context.redirect('#/cause/dashboard');
            })
        }
    },
    put: {
        donate(context) {
            const { causeId, like } = context.params;
            // console.log(causeId);
            // console.log(likes);
            models.cause.get(causeId).then((response) => {
                    const cause = docModifier(response);
                    cause.likes += Number(like);
                    //cause.likes.push(localStorage.getItem('userEmail'));
                    return models.cause.donate(causeId, cause);
                })
                .then((response) => {
                    context.redirect('#/cause/dashboard');
                })


        }
    }
};