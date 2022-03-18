
async function CalculateDV(ticket){
    console.log(ticket)
    const newTicket = ticket.split("").reverse().join("");
    var factors =[2,3,4,5,6,7,8,9];
    console.log(newTicket)
    var DV = 0;
    var sum = 0;
    var factorIndex = 0;
    for(var x = 0; x < newTicket.length;x++){
       
        sum += Number(newTicket.charAt(x)) * factors[factorIndex];
        // console.log("index: ", factorIndex)
        // console.log("fact: ", factors[factorIndex]);
        // console.log("tic: ", sum)
        factorIndex++;
        if(factorIndex == 8){
            factorIndex = 0;
        }
    }
    sum = sum % 11;
    console.log("sum: ", sum)
    DV = 11 - sum; 
    if(DV == 0 || DV == 10 || DV == 11){
        return 1;
    }
    return DV;
}

module.exports = CalculateDV;