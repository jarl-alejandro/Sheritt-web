var Facebook = require('./facebook');

module.exports = function(passport){
	console.log('passport is load')

	passport.serializeUser(function (user, done){
		done(null, user);
	});

	passport.deserializeUser(function (obj, done){
		done(null, obj)
	});

	//Load facebook
	Facebook(passport);
}