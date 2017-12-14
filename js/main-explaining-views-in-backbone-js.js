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

	   initialize: function(){
		 this.render();
	   },

	   render: function(){
		 this.$el.html( this.model.get('name') + ' (' + this.model.get('age') + ') - ' + this.model.get('occupation') );
	  }
	});

	// calls from console
	// var personView = new PersonView({ model: person });
	// lets create a new person and display that person in view..
	//var person = new Person({name: "Mohit Jain", age: 25, occupation: "Software Developer"})
	//var personView = new PersonView({ model: person });
	//personView.el;
	//$(document.body).html(personView.el);  // this is not ideal but good enough for demo.