const STORAGE_KEY = "amorDeQuatroPatas.cadastros";

export function loadVolunteers() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; } catch { return []; }
}

export function saveVolunteer(volunteer) {
  const volunteers = loadVolunteers();
  volunteers.push({ ...volunteer, id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(), createdAt: new Date().toISOString() });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(volunteers));
  return volunteers;
}
