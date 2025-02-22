// Get elements
let notesContainer = document.getElementById("notes-container");
let noteInput = document.getElementById("note-input");

// Load saved notes
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Display notes
function displayNotes() {
    notesContainer.innerHTML = "";
    notes.forEach((note, index) => {
        let noteDiv = document.createElement("div");
        noteDiv.classList.add("note");

        noteDiv.innerHTML = `
            <p>${note}</p>
            <button class="delete" onclick="deleteNote(${index})">Delete</button>
        `;

        notesContainer.appendChild(noteDiv);
    });
}

// Add a new note
function addNote() {
    let noteText = noteInput.value.trim();
    if (noteText) {
        notes.push(noteText);
        noteInput.value = "";
        updateLocalStorage();
        displayNotes();
    }
}

// Delete a note
function deleteNote(index) {
    notes.splice(index, 1);
    updateLocalStorage();
    displayNotes();
}

// Update local storage
function updateLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Initial display of notes
displayNotes();