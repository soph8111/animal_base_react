export default function Template(props) {
  const texts = props.fullname.split(" ");

  return (
    <>
      <tr>
        <td data-field="winner" data-winner="false"></td>
        <td data-field="star">☆</td>
        <td data-field="name">{texts[0]}</td>
        <td data-field="type">{texts[3]}</td>
        <td data-field="desc">{texts[2]}</td>
        <td data-field="age">{props.age}</td>
      </tr>
    </>
  );
}
