var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function tictactoe()
{
    read.question("enter to start the game ",function()
    {
        utility.tictactoe(read);
    });
}
tictactoe();