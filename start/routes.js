
const Route = use('Route');

Route.post('/users', 'UserController.create').validator('User');
Route.post('/login', 'SessionController.create').validator('Session');

Route.group(() => {
  Route.resource('task', 'TaskController')
    .validator(new Map(
      [
        [
          ['task.store'],
          ['Task'],
        ], [
          ['task.update'],
          ['Task'],
        ],
      ],
    ))
    .apiOnly();
}).middleware(['auth']);
