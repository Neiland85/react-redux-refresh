import React, { useEffect, useState } from "react";

interface Tapa {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
}

const Tapas = () => {
  const [tapas, setTapas] = useState<Tapa[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/tapas")
      .then((res) => res.json())
      .then((data: Tapa[]) => setTapas(data))
      .catch((error) => console.error("Error al cargar las tapas:", error));
  }, []);

  const votar = (id: number) => {
    const user = localStorage.getItem("user");

    if (!user) {
      alert("Debes iniciar sesión para votar.");
      return;
    }

    fetch("http://localhost:4000/votar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) alert(`Voto registrado para la tapa ID: ${id}`);
        else alert("Error al registrar el voto. Inténtalo de nuevo.");
      })
      .catch(() => alert("Hubo un error. Inténtalo más tarde."));
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
