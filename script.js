// global variables
const tags = document.querySelector('#tags');
const textarea = document.querySelector('#textarea');

// puts the cursor into text area on page load
textarea.focus();

// takes input value passes to create tag function
// clears text area & runs randomSelect function on enter
textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);
    randomSelect();
  }
});

// sorts the input into an array
// creates a span for each element in the array and appends to #tags div
function createTags(input) {
  const tagsEl = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());

  tags.innerHTML = '';

  tagsEl.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tags.appendChild(tagEl);
  });
}

// add & remove highlight class randomly
// runs function pickRandomFunction that randomly picks out of choices
function randomSelect() {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      removeHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

// picks random choice from the amount of choices
function pickRandomTag() {
  const getTags = document.querySelectorAll('.tag');
  return getTags[Math.floor(Math.random() * getTags.length)];
}

// following functions add/remove highlight class
function highlightTag(tag) {
  tag.classList.add('highlight');
}

function removeHighlightTag(tag) {
  tag.classList.remove('highlight');
}
