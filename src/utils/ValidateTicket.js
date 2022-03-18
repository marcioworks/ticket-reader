async function ValidateTicket(ticket) {
    let isnum = /^\d+$/.test(ticket);
    if (isnum) {
        return true;
    }
    
}

module.exports = ValidateTicket;