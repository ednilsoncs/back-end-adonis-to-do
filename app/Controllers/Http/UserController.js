
const User = use('App/Models/User');

const UserController = () => ({
  async create({ request }) {
    const data = request.only(['username', 'email', 'password']);

    const user = await User.create(data);

    return user;
  },
});

module.exports = UserController;
