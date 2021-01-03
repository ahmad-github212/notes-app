const fs = require('fs');
const chalk = require('chalk');
const notes = require('./notes.js');
const yargs = require('yargs');


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
            

            body: {
                describe: 'note body',
                demandOption: true,
                type: 'string'
            }

        },

        handler(argv) {

            notes.addNotes(argv.title, argv.body);

        }
    }
);

yargs.command({
    command:'remove',
    describe:'remove the note',

    builder:{
        title:{
            describe:'title to remove',
            demandOption:true,
            type:'string'
        }
    },

    handler(argv){
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command:'list',
    describe:'list of the note items',

    handler(){
        notes.listNotes();
    }
});

yargs.command({
    command: 'read',
    describe: 'Reading the notes',

    builder:{
        title:{
            describe:'title of the list to read',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title);
    }
});
yargs.parse();
