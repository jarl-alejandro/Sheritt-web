var models = require('./models'),
	Schema = models.Schema;

var HistorySchema = Schema({
	title: String,
	history: String,
	like : { type:Number, default:0 },
	user : {
		type : Schema.ObjectId,
		ref : 'User'
	}
});

var Historys = models.model("History", HistorySchema);
module.exports = Historys;