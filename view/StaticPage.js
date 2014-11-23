define(function(require){
	"use strict";

	var Backbone   = require('Backbone'),
		Handlebars = require('Handlebars'),
		html       = require('text!template/page.html'),
		$		   = require('jquery');

	var StaticPage = {};
	
	StaticPage.page = new(Backbone.View.extend({
		template: Handlebars.compile(html),
		events: {
			'click a[data-internal]': 'route'
		},
		route: function(e){
	    	e.preventDefault();
	    	var path = $(e.target).closest('a')[0].pathname;
	    	this.router.navigate(path, {trigger: true});
	    },
		render: function(){
			this.$el.html(this.template());
		}

	}))({ el: document.body });

	return StaticPage;

});