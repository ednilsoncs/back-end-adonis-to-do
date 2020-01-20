
const Route = use('Route');

Route.post('/users', 'UserController.create').validator('User');
Route.post('/login', 'SessionController.create');
Route.get('/task', 'TaskController.index').middleware(['auth']);
Route.post('/task', 'TaskController.store').middleware(['auth']);
Route.get('/task/:id', 'TaskController.show').middleware(['auth']);
Route.put('/task/:id', 'TaskController.update').middleware(['auth']);
Route.delete('/task/:id', 'TaskController.destroy').middleware(['auth']).validator('Task');
