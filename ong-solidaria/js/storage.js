const STORAGE_KEY = "ong-voluntarios";


export function getVoluntarios() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
      return [];
    }

    const parsed = JSON.parse(data);

    return Array.isArray(parsed)
      ? parsed
      : [];
  } catch (error) {
    console.error(
      "Erro ao recuperar voluntários:",
      error
    );

    return [];
  }
}


function saveVoluntarios(voluntarios) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(voluntarios)
  );
}


export function addVoluntario(data) {
  const voluntarios = getVoluntarios();

  const voluntario = {
    id:
      crypto.randomUUID?.() ??
      `${Date.now()}-${Math.random()}`,

    ...data,

    criadoEm: new Date().toISOString()
  };

  voluntarios.push(voluntario);

  saveVoluntarios(voluntarios);

  return voluntario;
}


export function removeVoluntario(id) {
  const voluntarios =
    getVoluntarios().filter(
      (voluntario) =>
        voluntario.id !== id
    );

  saveVoluntarios(voluntarios);
}