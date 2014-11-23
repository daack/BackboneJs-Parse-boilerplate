define(function(require){
	"use strict";

	var Parse = require('parse');

	var Model = {};

	Model.object = Parse.Object.extend({
		className: 'name'
	});

	Model.objects = Parse.Collection.extend({
		model: Model.object,
	});

	return Model;
});