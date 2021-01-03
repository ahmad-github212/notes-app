//const  fs = require('fs');  // importing nodejs module

//fs.writeFileSync('notes.txt','how are you');

//fs.appendFileSync('notes.txt','i am fine');

// const Add = require('./utilities.js');
// const sum = Add(2,3)
// console.log(sum);

const mynotes = require('./notes.js');

const notes = mynotes();

//console.log(notes);

// we have to use npm package for validation cmd for that [npm install validator]
//the above cmd will install the needed package and for using the package we have to 
//require it in our project

const validator = require('validator');

const checkEmail = validator.isEmail("name@example.com");
const checkUrl = validator.isURL("http://mead.io")
//console.log(checkEmail);
//console.log(checkUrl) 

// Note:  node_module is the folder that contains the files which mentioned in 
//package.json or package-lock.json. if its gets deleted anyhow then we can 
// reinstall it by simply typing [npm install] in the terminal. the command simply 
//look into the package.json and package-lock.json and install all the required files
//in the node_module folder


// chalk package is installed by command [npm install chalk]
//this package is used for colors application like if want text color red or anyother
//than the default black color

const chalk = require('chalk');

// there are several methods that chalk library provides 
// like for [red] color [chalk.red('string')] , [green] color [chalk.green('string')]
//etc

const greenMsg = chalk.green('success!');
const boldMsg = chalk.bold('i am bold');
const underlineMsg = chalk.underline('a s d');
console.log('');
const inverseMsg = chalk.inverse('i am inversed');

const combinedMsg = chalk.blue.bold.inverse('i am all in one');

/*console.log(greenMsg);
console.log(boldMsg);
console.log(underlineMsg);
console.log(inverseMsg);
console.log(combinedMsg);
*/

// Note: there are many more properties and api of [chalk] package which we can use 
//in our projects. npm documentation shows all of them we can refer it.

// Nodemon package will run the script automatically when u save the script 
// u need not to always run cmd [node file_name] for output

// As there are window and document on the browser which js uses
//similarly in nodejs there are global and process which contains many methods and 
//properties. 
//we can provide extra arguments with [node file_name] in the console that will 
//be considered as user info here. those extra arguments can be dumped to the
//console by  [process.args] script line. this gives the array of what we give 
//extra in the console.

//const extraInfo = process.argv;

//console.log(extraInfo);

/* Result of above  first two always come .
'C:\\Program Files\\nodejs\\node.exe', 
'C:\\Users\\abc\\Desktop\\nodejsCourse\\nodeApp\\app.js',
'shadab'*/

/*const firstName = process.argv[2];  // array indexing 
const lastName = process.argv[3];

const fullName = firstName + ' '+lastName ;
//console.log(fullName);

const command = process.argv[4];

if(command =='add'){
    //console.log('adding note');
}else if(command=='remove'){
    //console.log('removing note');
}
*/

// nodejs does not provide arguement parsing efficiently like in above case 
// we have to manually parse through args
//thus there comes in hand [yargs] which we install through [npm i yargs] command

const yargs = require('yargs');

//console.log(process.argv);
//console.log(yargs.argv);

// we can use yargs.command() to set the command and attach handler to it.we can also
//describe it. following code uses the concept

yargs.command(
    {
        command: 'add',
        describe: 'add a note',

        //we define builder for options we want to have with our command
        builder: {
            title: {
                // are properties we want our title to have
                describe: 'note title',
                demandOption: true,
                type: 'string'

            },
            sex: {
                describe: 'gender',
                demandOption: true,
                type: 'string'
            },

            body: {
                describe: 'note body',
                demandOption: true,
                type: 'string'
            }

        },

        handler: function (argv) {
            console.log('adding a note ');
            console.log(argv.title);
            console.log(argv.sex);
            console.log(argv.body);
        }
    }
)

/*
add command need title and body of the note.
remove command need title and body of the note remove
similarly other commands need them

for  options builder object is needed 
we define title object in the builder for title option
for body  we define body object in builder etc in the same way
both things are done in above code

*/

yargs.command(
    {
        command: 'remove',
        describe: 'rwmove a note',
        handler: function () {
            console.log('removing a note');
        }
    }
)

yargs.command({
    command: 'list',
    describe: 'list ur notes',
    handler: function () {
        console.log('listing out all notes ');
    }
})

yargs.command({
    command: 'read',
    describe: 'read ur notes',
    handler: function () {
        console.log('reading all notes ');
    }
})

//console.log(yargs.argv);
yargs.parse();
