const CalculateDv = require('../utils/CalculateDV')

class GenerateTicket {
   

    async generate(ticket){
        const bank = ticket.substring(0,3);
        const currency = ticket.substring(3,4);
        const DV = await CalculateDv(ticket.substring(0,4).concat(ticket.substring(5,45)));
        const dueFactor = ticket.substring(6,9);
        const value = ticket.substring(10,19);
        const free = ticket.substring(19,ticket.length-1);
        const barcode = "".concat(bank).concat(currency).concat(DV)
    
        return {
            bank,
            currency,
            DV,
            dueFactor,
            value,
            free,
             barcode
        }
    }
   
}



module.exports = new GenerateTicket();