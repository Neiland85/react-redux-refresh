import React, { useEffect, useState } from "react";

interface Tapa {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
}

const Tapas = () => {
  const [tapas, setTapas] = useState<Tapa[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/tapas")
      .then((res) => res.json())
      .then((data: Tapa[]) => setTapas(data));
  }, []);

  const votar = (id: string) => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const votosGuardados = JSON.parse(localStorage.getItem("votos") || "{}");

    if (!user) {
      alert("Debes iniciar sesión para votar.");
      return;
    }

    if (votosGuardados[user.username]?.includes(id)) {
      alert("Ya has votado por esta tapa.");
      return;
    }

    // Registrar el voto
    const nuevosVotos = {
      ...votosGuardados,
      [user.username]: [...(votosGuardados[user.username] || []), id],
    };

    localStorage.setItem("votos", JSON.stringify(nuevosVotos));
    alert(`Voto registrado para la tapa con ID: ${id}`);
  };

  return (
    <div>
      <h1>Tapas Participantes</h1>
      <ul>
        {tapas.map((tapa) => (
          <li key={tapa.id}>
            <h2>{tapa.nombre}</h2>
            <p>{tapa.descripcion}</p>
            <img src={tapa.imagen} alt={tapa.nombre} />
            <button onClick={() => votar(tapa.id)}>Votar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tapas;

