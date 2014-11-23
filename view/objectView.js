define(function(require){
	"use strict";

	var $ 		   = require('jquery'),
		Backbone   = require('backbone'),
		Handlebars = require('handlebars'),
		html	   = require('text!template/message/object.html'),
		form       = require('text!template/message/form.html');        
		Parse	   = require('parse');

	var View = {};
	
	View.object = Backbone.View.extend({
		template: Handlebars.compile(html),
		initialize: function() {
			this.model.on('destroy', this.remove, this);
			this.model.on('remove', this.remove, this);
			this.model.on('change', this.render, this);
		},
		events: {
			'click .edit': 'edit',
			'click .destroy': 'destroy',
		},
		edit: function(){
			// -> To Edit controller
		},
		destroy: function(){
			this.model.destroy();
		},
		render: function(){
			var html = this.template(this.model.attributes);
			this.$el.html(html);
		}
	});

	View.form = Backbone.View.extend({
		template: Handlebars.compile(form),
		events: {
			submit: 'save',
		},
		save: function(e){
			e.preventDefault();
			this.model.set('value', newvalue);
			this.model.save({
				success: function(obj){	
				},
				error: function(error){
				}
			});
			//this.remove();
		},
		render: function(){
			this.$el.html(this.template(this.model.attributes));
		}
	});

	View.objects = Backbone.View.extend({
		initialize: function(){
			this.collection.on('reset', this.render, this);
			this.collection.on('add', this.addOne, this);
		},
		render: function(){
			if (this.collection.length > 0) this.collection.forEach(this.addOne, this);
		},
		addOne: function(model){
			var object = new View.object({ model: model });
			object.render();
			this.$el.append(object.el);
		}
	});
	
	return View;
});