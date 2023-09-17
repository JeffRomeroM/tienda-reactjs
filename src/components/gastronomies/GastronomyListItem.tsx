import '../../styles/Table.css'

interface GastronomyListItemProps {
  id: string;
  name: string;
  description: string;
  planner: string;
  place: string;
  date: string;
  time: string;
}

export const GastronomyListItem = ({
  id,
  name,
  description,
  planner,
  place,
  date,
  time,
}: GastronomyListItemProps) => {
 
  
  return (
    <tr key={id} className="color-row">
      <td scope="row">{name}</td>
      <td>{description}</td>
      <td>{planner}</td>
      <td>{place}</td>
      <td>{date}</td>
      <td>{time}</td>
      <td>
        <button >Editar</button>
        <button >Eliminar</button>
      </td>
    </tr>
  );
};
