export default function CoreConcept(props) {
  return (
 <li>
    <h3>{props.title}</h3>
    <img src={props.img} alt={props.title} />
    <p>{props.description}</p>
 </li>
  );
}