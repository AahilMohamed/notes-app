const fs = require('fs')
const chalk = require('chalk')

//saving all current notes
const saveNotes = (notes) => {
    notesJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesJSON)
}

//fetch all current notes
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return []
    }
}


//Add a new note
const addNote = (title, content) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            content: content
        })
        saveNotes(notes)
        console.log(chalk.bgGreenBright('New note added successfully...'))
    } else {
        console.log(chalk.bgRedBright('Title already taken. Please use another title...'))
    }
}

//Remove an existing note
const removeNote = (title) => {
    const notes = loadNotes()
    if (notes.length > 0) {
        const notesToKeep = notes.filter((note) => note.title !== title)
        if (notesToKeep.length === notes.length) {
            console.log(chalk.redBright.inverse(`"${title}" note not found...`))
        } else {
            saveNotes(notesToKeep)
            console.log(chalk.greenBright.inverse(`"${title}" note removed successfully...`))
        }
    } else {
        console.log("There are no notes saved yet...")
    }
}

const listNotes = () => {
    const notes = loadNotes();
    if (notes.length > 0) {
        console.log(chalk.blueBright.inverse("Your notes:"));
        notes.forEach((note) => {
            console.log(note.title);
        })
    } else {
        console.log(chalk.redBright.inverse("You do not have any notes..."))
    }
    
}

//Print out contents of a note
const readNote = (title) => {
    const notes = loadNotes();
    target = notes.find((note) => note.title === title)
    if (target) {
        console.log(chalk.bold.italic(target.title))
        console.log(target.content)
    } else {
        console.log(chalk.redBright.inverse(`"${title}" note does not exist...`))
    }
}

module.exports = {
    addNote: addNote,
    loadNotes: loadNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}