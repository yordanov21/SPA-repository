export default function(context) {

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            context.isLoggedIn = true;
            context.userId = user.uid // идва от fb
                //get email for username
            context.username = user.email;

            //set to logal storage
            localStorage.setItem('userId', user.uid)
            localStorage.setItem('userEmail', user.email)

            // ...
        } else {
            // User is signed out.
            //set isLoggedIn to false
            context.isLoggedIn = false;
            //set userId to null
            context.userId = null;
            context.username = null;
            localStorage.removeItem('userId');
            localStorage.removeItem('userEmail');

            // ...
        }
    });

    //да не забравим return :)
    return context.loadPartials({
        header: '../views/common/header.hbs',
        footer: '../views/common/footer.hbs'
    })
}