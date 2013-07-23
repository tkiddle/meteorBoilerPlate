//Event handelers for the app

if(Meteor.isClient){

	//Events for the Header
	Template.header.events({
		'click a' : function (e) {
			e.preventDefault();
			var route = 	e.target.pathname;
			appRoutes.navigate(route, true);
		},
		'click input, click label, click form' : function (e) {
			// Fix input element click problem
			e.stopPropagation();
		}

	});

	//Events for the Content template
	Template.content.events({});
}