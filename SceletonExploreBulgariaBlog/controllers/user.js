import models from '../models/index.js';
import extend from '../utils/context.js';
import notifications from './notification.js'
export default {
    //създаваме си два обекта get и пост
    get: {
        //context се подава defaut от Sammy
        login(context) {

            extend(context).then(function() {
                this.partial("../views/user/login.hbs")
            });
        },
        register(context) {

            extend(context).then(function() {
                this.partial("../views/user/register.hbs")
            });
        },
        logout(context) {
            models.user.logout().then((response) => {

                context.redirect('#/home')
            })

        }
    },
    post: {

        login(context) {
            notifications.loading();

            const { username, password } = context.params;
            models.user.login(username, password)
                .then((response) => {
                    context.user = response;
                    context.username = response.email;
                    context.isLoggedIn = true;
                    context.redirect('#/home');

                    notifications.succsessNotofocation('Login Successful!');

                })
                .catch((e) => console.error(e));
        },
        register(context) {

            const { username, password, repeatPassword } = context.params;
            if (password === repeatPassword) {

                models.user.register(username, password)
                    .then((response) => {
                        context.redirect('#/user/login');
                    })
                    .catch((e) => console.error(e))

            }

        }
    }
};