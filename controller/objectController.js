define(function(require){
"use strict";

    var View   = require('view/objectView'),
        Model  = require('model/objectModel');

    var Controller = {};

    Controller.show = function(option){
    };

    Controller.new = function() {
        var model = new Model.object();
        var form = new View.form({model: model});
        form.render();
    }

    Controller.edit = function(id){
        var model = new Model.Message({ id: id });
        model.fetch({
            success: function(obj){
                var form = new View.Form({ model: model });
                form.render();
            },
            error: function(error){
            }
        });
    };

    return Controller;
});
