'use strict'

class Task {
  get rules () {
    return {
      email: 'required|email',
      description: 'required|string'
    }
  }
}

module.exports = Task
