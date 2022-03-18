const ValidateTicket = require('../utils/ValidateTicket');
const GenerateTicket = require('../models/GenerateTicket');
class TicketController {
    async index(req,res){

        const {ticketNumber} =req.params;
        const  validTicket = await ValidateTicket(ticketNumber);
        if(!validTicket){
            return res.status(400).json({error:"Invalid Ticket"})
        }
        console.log(ticketNumber)
        const ticket = await GenerateTicket.generate(ticketNumber);
        return res.json(ticket);
    }   

   
}

module.exports= new TicketController();