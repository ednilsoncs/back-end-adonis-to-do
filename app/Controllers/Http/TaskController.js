const Task = use('App/Models/Task');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with tasks
 */
class TaskController {
  /**
   * Show a list of all tasks.
   * GET tasks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, auth }) {
    const task = Task.all();
    return task;
  }

  /**
   * Create/save a new task.
   * POST tasks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, auth }) {
    const data = request.only(['title', 'description']);
    const task = await Task.create({
      user_id: auth.user.id,
      title: data.title,
      description: data.description,
    });
    return task;
  }

  /**
   * Display a single task.
   * GET tasks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({
    params, response,
  }) {
    let task = {};
    try {
      task = await Task.findOrFail(params.id);
    } catch (e) {
      return response.notFound('item não encontrado');
    }

    return task;
  }

  /**
   * Update task details.
   * PUT or PATCH tasks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request }) {
    const { title, description } = request.all();
    const task = await Task.findOrFail(params.id);
    task.merge({ title, description });
    await task.save();
    return task;
  }

  /**
   * Delete a task with id.
   * DELETE tasks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params }) {
    let task = {};
    try {
      task = await Task.findOrFail(params.id);
    } catch (e) {
      console.log(e.menssagem);
    }
    await task.delete();
  }
}

module.exports = TaskController;
