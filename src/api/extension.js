export const fetchExtensions = async () => {
  const response = await fetch("../../data.json");
  if (!response.ok) throw new Error("Erreur lors du chargement des données");

  const data = await response.json();

  return data;
};

export const toggleExtension = async ({ id, newValue }) => {
  return { id, isActive: newValue };
};
