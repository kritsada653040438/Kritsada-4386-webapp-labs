import inquries from 'inquirer';

function add(a, b) {
    let result = parseFloat(a) + parseFloat(b);
    return result;
}

function subtract(a, b) {
    let result = parseFloat(a) - parseFloat(b);
    return result;
}

const args = process.argv.slice(2);
if (isNaN(args[0]) || isNaN(args[1])) {
    console.log('Please enter two numbers');
    process.exit(1);
}
if (args.length === 2) {
    inquries.prompt([
        {
            type: 'input',
            name: 'operation',
            message: 'add | subtract : ',
        }
    ]).then(answers => {
        if (answers.operation === 'add') {
            console.log(add(args[0], args[1]));
        } else if (answers.operation === 'subtract'){
            console.log(subtract(args[0], args[1]));
        } else {
            console.log('Unknown operator');
            process.exit(1);
        }
    });
} else {
    if (args.length !== 2) {
        console.log('Invalid number of arguments');
        process.exit(1);
    }
}