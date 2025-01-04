import React, { useEffect, useState } from "react";

interface Restaurant {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  rating: number;
}

const Restaurant: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [filters, setFilters] = useState<{ category?: string; rating?: number }>({
    category: undefined,
    rating: undefined,
  });

  useEffect(() => {
    // Simula una llamada a API para obtener restaurantes
    fetch("/restaurants.json")
      .then((res) => res.json())
      .then((data) => {
        setRestaurants(data);
      });
  }, []);

  const handleFilterChange = (key: keyof typeof filters, value: string | number) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value || undefined,
    }));
  };

  const clearFilters = () => {
    setFilters({});
  };

  const filteredRestaurants = restaurants.filter((restaurant) => {
    return (
      (!filters.category || restaurant.category === filters.category) &&
      (!filters.rating || restaurant.rating >= filters.rating)
    );
  });

  return (
    <div>
      <h1>Restaurantes</h1>
      <div>
        <label>
          Filtrar por categoría:
          <select onChange={(e) => handleFilterChange("category", e.target.value)}>
            <option value="">Todas</option>
            <option value="Italiano">Italiano</option>
            <option value="Chino">Chino</option>
            <option value="Mexicano">Mexicano</option>
          </select>
        </label>
        <label>
          Filtrar por valoración mínima:
          <input
            type="number"
            min="1"
            max="5"
            onChange={(e) => handleFilterChange("rating", Number(e.target.value))}
          />
        </label>
        <button onClick={clearFilters}>Borrar Filtros</button>
      </div>
      <div>
        {filteredRestaurants.map((restaurant) => (
          <div key={restaurant.id}>
            <img src={restaurant.image} alt={restaurant.name} />
            <h2>{restaurant.name}</h2>
            <p>{restaurant.description}</p>
            <p>Categoría: {restaurant.category}</p>
            <p>Valoración: {restaurant.rating} estrellas</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;

