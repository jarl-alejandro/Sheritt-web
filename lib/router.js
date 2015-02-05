var views = require("../app/controllers/views");
var api = require("../app/controllers/api");

var Router = function(app, passport){

	//FACEBOOK
	app.get('/auth/facebook', passport.authenticate('facebook'));
	app.get('/auth/facebook/callback', passport.authenticate('facebook',
		{ successRedirect:'/home', failureRedirect:'/' }
	));

	app.get("/", views.login);
	app.get("/logout", views.logout)
	app.get("/home", views.home);
	app.get("/history/add", views.add);
	app.post("/history/save", views.save);


	//API REST
	app.get("/api/history", api.historys);
	app.get("/api/history/:data", api.history);
	app.post("/api/history/add", api.historyAdd);
	app.delete("/api/history/delete/:data", api.deleteHistory);
}
module.exports = Router;