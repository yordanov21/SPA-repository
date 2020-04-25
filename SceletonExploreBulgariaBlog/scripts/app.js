import controllers from '../controllers/index.js';

const app = Sammy('#root', function() {

    this.use('Handlebars', 'hbs');
    //!!!Kogato natiskame buton izpulnqvame get!!!!

    //Home
    this.get('#/home', controllers.home.get.home);
    //About
    this.get('#/about', controllers.home.get.about);

    //Articles
    this.get('#/articles/mountains', controllers.articles.get.mountain);
    this.get('#/articles/cities', controllers.articles.get.city);
    //tuirism101sides
    this.get('#/tourist101sites/tourist101sites', controllers.tourist101sides.get.sites);

    //User
    this.get('#/user/login', controllers.user.get.login);
    this.get('#/user/register', controllers.user.get.register);

    this.post('#/user/login', controllers.user.post.login);
    this.post('#/user/register', controllers.user.post.register);
    this.get('#/user/logout', controllers.user.get.logout);

    //Cause
    this.get('#/cause/dashboard', controllers.cause.get.dashboard);

    ////create
    this.get('#/cause/create', controllers.cause.get.create);
    this.post('#/cause/create', controllers.cause.post.create);

    this.get('#/cause/create101sites', controllers.cause.get.create101sites);
    this.post('#/cause/create101sites', controllers.cause.post.create);

    this.get('#/cause/details/:causeId', controllers.cause.get.details);


    this.get('#/cause/close/:causeId', controllers.cause.del.close);
    this.post('#/cause/donate/:causeId', controllers.cause.put.donate);

});

(() => {
    app.run('#/home');
})();