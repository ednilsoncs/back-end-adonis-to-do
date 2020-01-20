
const Route = use('Route');

Route.post('/users', 'UserController.create').validator('User');
Route.post('/login', 'SessionController.create').validator('Session');
Route.get('/task', 'TaskController.index').middleware(['auth']);
Route.post('/task', 'TaskController.store').middleware(['auth']).validator('Task');
Route.get('/task/:id', 'TaskController.show').middleware(['auth']);
Route.put('/task/:id', 'TaskController.update').middleware(['auth']).validator('Task');
Route.delete('/task/:id', 'TaskController.destroy').middleware(['auth']);
