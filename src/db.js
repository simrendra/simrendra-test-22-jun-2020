export function updateRecords(key, newValue) {
  try {
    sessionStorage.setItem(key, JSON.stringify(newValue));
  } catch (ex) {
    console.log(ex);
  }
}

export function getRecords(key) {
  try {
    return JSON.parse(sessionStorage.getItem(key));
  } catch {
    return null;
  }
}
