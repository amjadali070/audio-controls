import React, { useEffect } from 'react';

const HuntingWorldComponent = () => {
  useEffect(() => {
    const ul = document.querySelector('ul');
    const firstLi = ul.querySelector('li');
    const listItems = ul.children;
    const middleLi = ul.querySelector('li:nth-child(2)');
    const heading = document.querySelector('h1');

    // Change the background color of the first li in the ul
    firstLi.style.backgroundColor = 'yellow';

    // Iterate through all children elements of the list and change text color to orange
    for (let i = 0; i < listItems.length; i++) {
      listItems[i].style.color = 'orange';
    }

    // Remove the middle li (Tiger) from the list without using index of child element/node
    middleLi.remove();

    // Add a general event on the list: when a user clicks on an li, it should alert the text of the li
    ul.addEventListener('click', event => {
      if (event.target.tagName === 'LI') {
        alert(event.target.textContent);
      }
    });

    // Apply a green border of 3px on the heading "Hunting World"
    heading.style.border = '3px solid green';
  }, []);

  return (
    <>
      <h1>Hunting World</h1>
      <p>The world's top hunting <strong>strong animals</strong> related information.</p>
      <h2>List of Animals</h2>
      <ul>
        <li>Lion</li>
        <li>Leopard</li>
      </ul>
    </>
  );
};

export default HuntingWorldComponent;

// 1. Select the unordered list with a tag name
const ul = document.querySelector('ul');

// 2. Change the background color of the first li in the ul
const firstLi = ul.querySelector('li');
firstLi.style.backgroundColor = 'yellow';

// 3. Iterate through all children elements of the list and change text color to orange
const listItems = ul.children;
for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.color = 'orange';
}

// 4. Remove the middle li (Tiger) from the list without using index of child element/node
const middleLi = ul.querySelector('li:nth-child(2)');
middleLi.remove();

// 5. Add a general event on the list: when a user clicks on an li, it should alert the text of the li
ul.addEventListener('click', event => {
  if (event.target.tagName === 'LI') {
    alert(event.target.textContent);
  }
});

// 6. Apply a green border of 3px on the heading "Hunting World"
const heading = document.querySelector('h1');
heading.style.border = '3px solid green';
