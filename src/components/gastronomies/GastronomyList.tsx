import { useEffect, useState } from "react";
import { getGastronomies } from "../../api/gastronomies.api";
import { Gastronomy } from "./gastronomy.interfaces";
import { GastronomyForm } from "./GastronomyForm";
import { GastronomyListItem } from "./GastronomyListItem";
import '../../styles/Table.css'

export const GastronomyList = () => {
  const [gastronomies, setGastronomies] = useState<Gastronomy[]>([]);
  const [showForm, setShowForm] = useState(false);

  const fetchGastronomies = async () => {
    const gastronomies = await getGastronomies();
    setGastronomies(gastronomies);
  };

  useEffect(() => {
    fetchGastronomies();
  }, []);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  // if (gastronomies.length === 0) {
  //   return <h2>No hay eventos sobre gasgtronomia</h2>;
  // }

  return (
    <div>
      {showForm && (
        <GastronomyForm setShowForm={setShowForm} fetchGastronomies={fetchGastronomies} />
      )}

      <div className="containerT">
        <h1 className="containerT-title">Eventos relacionados a la gastronomía</h1>
        <table className="containerT--table">
          <thead className="containerT--table-head">
            <tr>
              <th scope="">Nombre</th>
              <th scope="">Descripción</th>
              <th scope="">Organizador</th>
              <th scope="">Lugar</th>
              <th scope="">Fecha</th>
              <th scope="">Hora</th>
              <th>
                <button onClick={handleClick}>Agregar</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {gastronomies.map((gastronomy) => (
              <GastronomyListItem key={gastronomy.id} {...gastronomy} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
