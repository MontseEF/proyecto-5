export async function fetchGenre() {
  const res = await fetch("https://binaryjazz.us/wp-json/genrenator/v1/genre/");
  if (!res.ok) throw new Error("No se pudo obtener el género");
  const data = await res.json();
  // La API suele devolver un string. Aseguramos un string por si cambia el formato.
  if (typeof data === "string") return data;
  if (Array.isArray(data) && data.length > 0) return String(data[0]);
  return JSON.stringify(data);
}
