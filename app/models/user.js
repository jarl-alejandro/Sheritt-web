var models = require("./models"),
	Schema = models.Schema;

var UserSchema = Schema({
	name 		: String,
	provider_id : { type:String, unique:true },
	photo 		: String,
	createTime 	: { type:Date, default:Date.now }
});

var User = models.model('User', UserSchema);
module.exports = User;