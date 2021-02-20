const addButton = document.querySelector(".btn");

addButton.addEventListener("click", () => {
  const noteBlock = document.querySelector(".note");
  const addNote = `
        <div class="card">
            <div class="note-header">
            </div>
            <div class="text-area">
            <textarea class="text"></textarea>
            </div>
        </div>
    `;
  noteBlock.innerHTML += addNote;
});
