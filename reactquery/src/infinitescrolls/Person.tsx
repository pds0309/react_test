import { People } from "../Models/type";

const Person = ({ name, hairColor, eyeColor }: People): JSX.Element => {
  return (
    <li>
      {name}
      <ul>
        <li>hair: {hairColor}</li>
        <li>eyes: {eyeColor}</li>
      </ul>
    </li>
  );
};

export default Person;
