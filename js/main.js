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

		template: _.template($('#personTemplate').html()),

		initialize: function(){
			this.render();
		},

		render: function(){
			this.$el.html( this.template(this.model.toJSON()));
			return this;
		}
	});

	// calls from console

	// var person = new Person;  // a person object created...
	// var personView = new PersonView({ model: person });
	// personView.el   // ---->; You can call this method and it will display the view..
	//$(document.body).html(personView.el);  //  --->; This will add output to the dom. This is not ideal but good enough for demo.