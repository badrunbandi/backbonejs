	var MainPerson = function(config){
	  this.name = config.name;
	  this.age = config.age;
	  this.occupation = config.occupation;
	};

	MainPerson.prototype.work = function(){
		return this.name + 'is working.';
	};
	
	var Person = Backbone.Model.extend({
		
		defaults: {
			name: 'Guest User',
			age: 23,
			occupation: 'worker'
		},

		validate: function(attributes, options){
			if ( attributes.age < 0 ){
				return 'Age must be positive.';
			}

			if ( !attributes.name ){
				return 'Every person must have a name.';
			}
		},

		work: function(){
			return this.get('name') + ' is working.';
		}
		
	});

	var PersonView = Backbone.View.extend({
		tagName: 'li',

		my_template: _.template("<strong><%= name %></strong> (<%= age %>) - <%= occupation %>"),

		initialize: function(){
			this.render();
		},

		render: function(){
			this.$el.html( this.my_template(this.model.toJSON()));
		}
	});

	// calls from console

	// var person = new Person;
	// var personView = new PersonView({ model: person });
	//$(document.body).html(personView.el);  // this is not ideal but good enough for demo.