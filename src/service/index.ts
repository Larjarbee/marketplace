export const baseUrl = "http://localhost:3030";

export const fetchAPI = async (query: string) => {
  const res = await fetch(`${baseUrl}${query}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
