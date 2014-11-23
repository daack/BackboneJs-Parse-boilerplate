define(function (require) {
    "use strict";
 
	var Backbone = require('backbone'),
        Static   = require('view/StaticPage');

    //Controllers
    var Controller = require('controller/objectController');

    var Router = new (Backbone.Router.extend({
    	//Filters
        checkUser: function() {

        },
        start: function(){
    		Backbone.history.start({ pushState: true });
            Static.page.render();
            Static.page.router = this;
            this.navigate('index/page', {trigger: true});
    	}
    }));

    Router.route('show(:param)', function(param){ Controller.show(param); });

    Router.route('new(:param)', function(param){ Controller.show(param); });

    Router.route('edit(:param)', function(param){ Controller.show(param); });

    return Router;
});