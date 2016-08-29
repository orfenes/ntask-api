module.exports = app => {
	app.get("/tasks", (req, res) => {
		res.json({
			tasks: [
				{title: 'Fazer Compras'},
				{title: 'Consertar p pc'},
			]
		})
	});
};