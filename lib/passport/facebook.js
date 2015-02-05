var User = require("../../app/models/user");
var FacebookStrategy = require("passport-facebook").Strategy;

module.exports = function(passport){
	console.log("Facebook is load");

	passport.use(new FacebookStrategy({
		clientID: "1379337272379534",
		clientSecret: "168bd60056e46807c444b86f290b5be1",
		callbackURL: '/auth/facebook/callback',
		profileFields: ['id', 'displayName', 'photos']
	
	}, function (accessToken, refresToken, profile, done){
		User.findOne({ provider_id:profile.id }, function (err, user){
			if(err)
				console.log("Hay un error con facebook ", err);
			if(!err && user !== null)
				return done(null, user);

			var userFacebook = new User({
				provider_id	: profile.id,
				name 		: profile.displayName,
				photo 		: profile.photos[0].value
			});

			userFacebook.save(function (err){
				if(err)
					console.log("Hay un erro al guardar el user ", err);
				done(null, user);
			});
		});
	}));
};