export interface EpicImageMeta {
  image: string;
  date: string;
}

export async function fetchEpicImage(): Promise<{ url: string; date: string }> {
  const res = await fetch("https://epic.gsfc.nasa.gov/api/natural");
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  
  const data: EpicImageMeta[] = await res.json();
  if (!data.length) throw new Error("No images available");

  const latest = data[0];
  const date = new Date(latest.date);
  const formattedDate = `${date.getUTCFullYear()}/${String(date.getUTCMonth() + 1).padStart(2, "0")}/${String(date.getUTCDate()).padStart(2, "0")}`;
  
  const url = `https://epic.gsfc.nasa.gov/archive/natural/${formattedDate}/png/${latest.image}.png`;
  
  return { url, date: latest.date };
}