import React, { useEffect, useState } from "react";
import { fetchEpicImage } from "./api";
import { EpicImage } from "./EpicImage";

export default function App () {
  const [ imageData, setImageData ] = useState<{ url: string; date: string } | null>(null);
  const [ error, setError ] = useState<string>("");

  useEffect(() => {
    fetchEpicImage()
      .then(setImageData)
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p style={{ color: "red" }}>Błąd: {error}</p>;

  if (!imageData) return <p>Ładowanie...</p>;

  return <EpicImage url={imageData.url} date={imageData.date} />;
}