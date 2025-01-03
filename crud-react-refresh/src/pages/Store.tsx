import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setShoes, setFilter, clearFilters } from "../redux/slices/shoeSlice";

const Store: React.FC = () => {
  const dispatch = useDispatch();
  const { shoes, filters } = useSelector((state: RootState) => state.shoes);

  useEffect(() => {
    // Simula una llamada a API para obtener zapatos
    fetch("/shoes.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setShoes(data));
      });
  }, [dispatch]);

  const filteredShoes = shoes.filter((shoe) => {
    return (
      (!filters.size || shoe.size === filters.size) &&
      (!filters.category || shoe.category === filters.category)
    );
  });

  return (
    <div>
      <h1>Tienda de Zapatos</h1>
      <div>
        <label>
          Filtrar por talla:
          <input
            type="number"
            onChange={(e) => dispatch(setFilter({ size: Number(e.target.value) }))}
          />
        </label>
        <label>
          Filtrar por categoría:
          <select onChange={(e) => dispatch(setFilter({ category: e.target.value }))}>
            <option value="">Todas</option>
            <option value="Deportivo">Deportivo</option>
            <option value="Casual">Casual</option>
          </select>
        </label>
        <button onClick={() => dispatch(clearFilters())}>Borrar Filtros</button>
      </div>
      <div>
        {filteredShoes.map((shoe) => (
          <div key={shoe.id}>
            <img src={shoe.image} alt={shoe.name} />
            <h2>{shoe.name}</h2>
            <p>{shoe.description}</p>
            <p>Precio: ${shoe.price}</p>
            <p>Stock: {shoe.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;

