var env 		= process.env.NODE_ENV || 'production'
	express 	= require("express"),
	swig 		= require("swig"),
	session 	= require("express-session"),
	passport 	= require("passport"),
	bodyParser 	= require("body-parser");
	//RedisStore	= require("connect-redis")(session);

var Express = function(config){
	config = config || {};

	this.app = express();

	//Configure
	this.app.engine("html", swig.renderFile);
	this.app.set("view engine", "html");
	this.app.set("views", "./app/views");

	//MIDELWARE
	this.app.use(session({
		//store : new RedisStore({}),
		secret : "lol"
	}));

	this.app.use(passport.initialize());
	this.app.use(passport.session());

	this.app.use(bodyParser.json());
	this.app.use(bodyParser.urlencoded({ extended:false }));

	//PASSPORT
	require('./passport/passport')(passport);

	//DEVELOPMENT
	if(env == 'desarrollo'){
		console.log("DEVELOPMENT")

		this.app.set("view cache", false);
	}

	//ROUTER
	require("./router")(this.app, passport);
};

module.exports = Express;