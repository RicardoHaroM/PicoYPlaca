class ConsoleManager{

    
    static getAnswerFromConsole = async(question)=>{
        return new Promise ( resolve =>{
            const readline = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            });
    
            readline.question(`${question}: `,(inputData)=>{
                readline.close();
                resolve(inputData.trim().toUpperCase());
            });
        });
    }
}

module.exports=ConsoleManager;