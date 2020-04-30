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
    this.get('#/articles/sea', controllers.articles.get.sea);
    this.get('#/articles/legacy', controllers.articles.get.legacy);

    //Tuirism101sides
    this.get('#/tourist101sites/tourist101sites', controllers.tourist101sides.get.sites);
    this.get('#/tourist101sites/tourist101sites2', controllers.tourist101sides.get.sites2);
    this.get('#/tourist101sites/tourist101sites3', controllers.tourist101sides.get.sites3);
    this.get('#/tourist101sites/tourist101sites4', controllers.tourist101sides.get.sites4);
    this.get('#/tourist101sites/tourist101sites5', controllers.tourist101sides.get.sites5);

    //User
    this.get('#/user/login', controllers.user.get.login);
    this.get('#/user/register', controllers.user.get.register);
    this.get('#/user/logout', controllers.user.get.logout);

    this.post('#/user/login', controllers.user.post.login);
    this.post('#/user/register', controllers.user.post.register);

    //destinations dashboard
    this.get('#/destinations/dashboard', controllers.destinations.get.dashboard);

    ////create destinations
    this.get('#/destinations/create', controllers.destinations.get.create);
    this.post('#/destinations/create', controllers.destinations.post.create);

    this.get('#/destinations/create101sites', controllers.destinations.get.create101sites);
    this.post('#/destinations/create101sites', controllers.destinations.post.create);

    this.get('#/destinations/details/:destinationId', controllers.destinations.get.details);
    this.get('#/destinations/close/:destinationId', controllers.destinations.del.close);
});

(() => {
    app.run('#/home');
})();