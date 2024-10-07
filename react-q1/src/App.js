import { people } from './data-q1.js';
import { getImageUrl } from './utils-q1.js';

export default function List() {
  const Chemists = people.map(person => {
    if (person.profession === 'chemist') {
      return (
        <li key={person.id}>
          <img
            src={getImageUrl(person)}
            alt={person.name}
          />
          <p>
            <b>{person.name}:</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
          </p>
        </li>
      );
    }
    return null;
  });
  const NotChemists = people.map(person => {
    if (person.profession !== 'chemist') {
      return (
        <li key={person.id}>
          <img
            src={getImageUrl(person)}
            alt={person.name}
          />
          <p>
            <b>{person.name}:</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
          </p>
        </li>
      );
    }
    return null;
  });
  return (
    <article>
      <h1>Scientists</h1>
      <h1>Chemists</h1>
      <ul>{Chemists}</ul>
      <h1>Everyone else</h1>
      <ul>{NotChemists}</ul>
    </article>
  );
}