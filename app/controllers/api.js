var Historys = require("../models/history");


exports.historys = function(req, res){
	Historys
	.find({})
	.populate('user')
	.exec(function (err, historys){
		if(err)
			console.log('Hay un error con DB', err);
		else
			res.json(historys);
	});
};

exports.history = function(req, res){
	var data = req.params.data;
	console.log(data);

	Historys
	.find({ _id:data })
	.populate('user')
	.exec(function (err, history){
		if(err)
			console.log('Hay un error con DB', err);
		else
			res.json(history)
	});
};


exports.historyAdd = function(req, res){
	var history = new Historys({
		title	: req.body.title,
		history	: req.body.history,
		like	: 0,
		user	: req.user._id
	});

	history.save(function (err){
		if(err)
			console.log("No se ha podido guardar en DB ", err);
		else
			console.log("Se ha guardado con exito");
		res.json(history);
	});
};

exports.deleteHistory = function(req, res){
	var data = req.params.data;

	Historys.findById(data, function (err, history){
		history.remove(function (err){
			if(err)
				console.log("Hay un erro al eliminar a DB", err);
			else
				console.log("Se ha eliminado con exito");
		});
	});
};

exports.updateHistory = function(req, res){
	console.log("PUT");

	var data = req.params.data;
	console.log("data ", data);

	Historys.findById(data, function (err, history){
		history.title	= req.body.title;
		history.history	= req.body.history;
		history.like	= req.body.like;

		history.save(function (err){
			if(err)
				console.log("Hay un error al actualizar " + err);
			else
				console.log("Se ha actualizado con exito");
			res.json(history);
		});


	});
};