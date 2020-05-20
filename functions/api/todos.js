const { db } = require('../utils/admin');

exports.getAllTodos = (req, res) => {
  db
    .collection('todos')
    .orderBy('createdAt', 'desc')
    .get()
    .then(data => {
      let todos = [];
			data.forEach((doc) => {
				todos.push({
          todoId: doc.id,
          title: doc.data().title,
					body: doc.data().body,
					createdAt: doc.data().createdAt,
				});
      });

      return res.json(todos);
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ err: err.code })
    })
}

exports.postOneTodo = (req, res) => {
  console.log('req.body without body-parser', req.body);

  if (req.body.body.trim() === '') {
		return res.status(400).json({ body: 'Must not be empty' });
  }

  if (req.body.title.trim() === '') {
    return res.status(400).json({ title: 'Must not be empty' });
  }

  const newTodoItem = {
    title: req.body.title,
    body: req.body.body,
    createdAt: new Date().toISOString(),
  };

  db
    .collection('todos')
    .add(newTodoItem)
    .then(doc => {
      const responseTodoItem = newTodoItem;
      responseTodoItem.id = doc.id;
      return res.json(responseTodoItem);
    })
    .catch(err => {
      console.err(err);
      return res.status(400).json({ err: 'Something went wrong' });
    })
}