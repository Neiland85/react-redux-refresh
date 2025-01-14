import React, { useEffect, useState } from "react";

interface Tapa {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  votos: number;
}

const Tapas = () => {
  const [tapas, setTapas] = useState<Tapa[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/tapas")
      .then((res) => res.json())
      .then((data: Tapa[]) => setTapas(data))
      .catch((error) => console.error("Error al cargar las tapas:", error));
  }, []);

  const votar = (id: string) => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const votosGuardados = JSON.parse(localStorage.getItem("votos") || "{}");

    if (!user) {
      alert("Debes iniciar sesión para votar.");
      return;
    }

    // Enviar el voto al backend
    fetch("http://localhost:4000/votar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Voto registrado") {
          setTapas(data.tapas); // Actualizar la lista de tapas con los nuevos votos
          alert("¡Voto registrado con éxito!");
        } else {
          alert("Error al registrar el voto. Intenta nuevamente.");
        }
      })
      .catch((error) => {
        console.error("Error al registrar el voto:", error);
        alert("Hubo un error al registrar tu voto. Inténtalo más tarde.");
      });
  };

  return (
    <div>
      <h1>Tapas Participantes</h1>
      <ul>
        {tapas.map((tapa) => (
          <li key={tapa.id}>
            <h2>{tapa.nombre}</h2>
            <p>Votos: {tapa.votos}</p>
            <img src={tapa.imagen} alt={tapa.nombre} />
            <button onClick={() => votar(tapa.id)}>Votar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tapas;

