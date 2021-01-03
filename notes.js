const fs = require('fs');
const chalk = require('chalk');

// adding the note
const addNotes = (title,body)=>{
    const notes = loadNotes();

    const duplicateNotes = notes.filter((note)=> note.title === title
    )
    
    if(duplicateNotes.length===0){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(notes);
        console.log(chalk.inverse.green('notes added successfully'));

    }
    else{
        console.log(chalk.inverse.red('notes title already exist!!! '));
    }
}

//reomve the note 

const removeNote = (title)=>{
    
    const notes = loadNotes();

    const noteTokeep = notes.filter((note)=> note.title!==title);

    if(notes.length===noteTokeep.length){
        console.log(chalk.inverse.red('No note found'));
    }else{
       console.log(chalk.inverse.green('new note removed'));
    }
    saveNotes(noteTokeep);
}

//list the notes

const listNotes = ()=>{
    console.log(chalk.inverse.blue('Your notes'));
    notes= loadNotes();
    
    notes.forEach((note)=>{
        console.log(note.title);
    });
};

// reading the note
const readNotes = (title)=>{
    notes = loadNotes();
    const note = notes.find((note)=>note.title===title);

    if(note){
        console.log(chalk.inverse(note.title)+'  '+note.body);
    }
    else{
        console.log(chalk.inverse.red('no note found'));
    }
};

//saving the note
const saveNotes= (notes)=>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);

};

//loading the note
const loadNotes = ()=>{
    try{
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    const data = JSON.parse(dataJSON);
        return data;
}
catch(e){
    return [];
}
    
    //this function will be error free if the notes.json file already existed with data  
    //but due to lack of the file the code will be errored to avoid that error we will use try catch

};

module.exports = {
    addNotes:addNotes,
    removeNote:removeNote,
    listNotes:listNotes,
    readNotes:readNotes
};

