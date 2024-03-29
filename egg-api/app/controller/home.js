'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'Test';
  }

  async list() {
    this.ctx.body = {
      msg: "ok",
      data: [1, 2, 3, 4, 5, 6]
    }
  }
}

module.exports = HomeController;
