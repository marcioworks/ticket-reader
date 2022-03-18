const {Router}= require('express');

const TicketController= require('./controllers/TicketController')

const routes = new Router();

routes.get("/boleto/:ticketNumber", TicketController.index);

module.exports = routes;