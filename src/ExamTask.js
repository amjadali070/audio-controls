import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomUserComponent = ({ n }) => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const getRandomUsers = async () => {
      try {
        const response = await axios.get(`https://randomuser.me/api/?results=${n}`);
        const data = response.data.results;
        setPeople(data);
      } catch (error) {
        console.error('Error retrieving random users:', error);
      }
    };
    getRandomUsers();
  }, [n]);

  const filterPeopleByAge = age => {
    const filteredPeople = people.filter(person => person.dob.age >= age);
    const firstNames = filteredPeople.map(person => person.name.first);
    console.log(firstNames);
  };

  const concatenateNames = () => {
    const fullNames = people.map(person => `${person.name.title} ${person.name.first} ${person.name.last}`);
    console.log(fullNames);
  };

  const groupPeopleByCity = () => {
    const groupedPeople = {};

    people.forEach(person => {
      if (groupedPeople.hasOwnProperty(person.location.city)) {
        groupedPeople[person.location.city].push(person);
      } else {
        groupedPeople[person.location.city] = [person];
      }
    });

    console.log(groupedPeople);
  };

  return (
    <div>
      <button onClick={() => filterPeopleByAge(18)}>Filter by Age</button>
      <button onClick={concatenateNames}>Concatenate Names</button>
      <button onClick={groupPeopleByCity}>Group by City</button>

      <div>
        <h2>Filtered First Names:</h2>
        <ul>
          {people.map(person => (
            <li key={person.login.uuid}>{person.name.first}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Concatenated Names:</h2>
        <ul>
          {people.map(person => (
            <li key={person.login.uuid}>{`${person.name.title} ${person.name.first} ${person.name.last}`}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Grouped People by City:</h2>
        <ul>
          {Object.entries(groupPeopleByCity).map(([city, people]) => (
            <li key={city}>
              {city}:
              <ul>
                {people.map(person => (
                  <li key={person.login.uuid}>{person.name.first}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RandomUserComponent;



// const axios = require('axios');

// async function getRandomUsers(n) {
//   try {
//     const response = await axios.get(`https://randomuser.me/api/?results=${n}`);
//     const people = response.data.results;

//     return people;
//   } catch (error) {
//     console.error('Error retrieving random users:', error);
//     return null;
//   }
// }

// async function filterPeopleByAge(people, age) {
//   const filteredPeople = people.filter(person => person.dob.age >= age);
//   const firstNames = filteredPeople.map(person => person.name.first);
//   console.log(firstNames);
// }

// async function concatenateNames(people) {
//   const fullNames = people.map(person => `${person.name.title} ${person.name.first} ${person.name.last}`);
//   console.log(fullNames);
// }

// async function groupPeopleByCity(people) {
//   const groupedPeople = {};

//   people.forEach(person => {
//     if (groupedPeople.hasOwnProperty(person.location.city)) {
//       groupedPeople[person.location.city].push(person);
//     } else {
//       groupedPeople[person.location.city] = [person];
//     }
//   });

//   console.log(groupedPeople);
// }

// // Usage example:
// const n = 10; // Number of random users to retrieve

// getRandomUsers(n)
//   .then(people => {
//     filterPeopleByAge(people, 18);
//     concatenateNames(people);
//     groupPeopleByCity(people);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
