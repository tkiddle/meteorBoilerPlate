//Routing configuration for the application

 if (Meteor.isClient) {
	
	var AppRouter = Backbone.Router.extend({

		//Define routes 
		routes: {
			'about' : 'aboutRoute',
			'contact' : 'contactRoute',
			'*path' : 'defaultRoute'
		}

	});

	//Instantiate AppRouter
	var appRoutes = new AppRouter;	

	//About page route
	appRoutes.on('route:aboutRoute', function() {  
		Session.set('page_id', 'about');
	});

	//Contact page route
	appRoutes.on('route:contactRoute', function() {
		Session.set('page_id', 'contact');
	});

	//Default route for unknow urls
	appRoutes.on('route:defaultRoute', function() { 
		Session.set('page_id', 'home');
	});

	
	//Start the history API
	Backbone.history.start({pushState: true});

}	

