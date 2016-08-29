module.exports = app => {

	const Task = app.db.models.tasks;

	app.get("/tasks", (req, res) => {

		Task.findAll({}).then(task => {
			res.json({tasks: tasks});
		});

	});
	
};