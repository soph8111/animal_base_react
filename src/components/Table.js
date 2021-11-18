import Thead from "./Thead";
import Template from "./Template";

export default function Table(props) {
  const animals = props.animals.map((animal) => <Template key={animal.fullname} {...animal} />);

  return (
    <table id="list">
      <Thead />
      <tbody>{animals}</tbody>
    </table>
  );
}
