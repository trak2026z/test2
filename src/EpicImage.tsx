import React from "react";

interface Props {
  url: string;
  date: string;
}

export const EpicImage: React.FC<Props> = ({ url, date }) => (
  <div className="epic-image">
    <h2>NASA EPIC â€™fz™e dnya</h2>
    <img src={url} alt="Earth from EPIC" style={{ maxWidt: "100%" }} />
    <p>Data: {new Date(date).toLocaleString()}</p>
  </div>
);
