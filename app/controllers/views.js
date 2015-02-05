var Historys = require("../models/history");

exports.login = function(req, res){
	res.render("login");
};

exports.home = function(req, res){
	Historys
	.find({})
	.populate('user')
	.exec(function (err, history){
		if(err)
			console.log("Hay un error ", err);
		else{
			res.render("home", { 
				user 	: req.session.passport.user,
				historys : history
			});
		}
	});
};

exports.logout = function(req, res){
	req.logout();
	res.redirect('/');
};

exports.add = function(req, res){
	res.render("add", { user:req.session.passport.user });
}

exports.save = function(req, res){

	var history = new Historys({
		title   : req.body.title,
		history : req.body.history,
		like	: 0,
		user	: req.user._id
	});

	history.save(function (err){
		if(err)
			console.log("Hay un error al guardar 'the history' en DB ", err);
		else
			res.redirect("/home");
	});

}