
function get(key, value) {
  const result = window.localStorage.getItem(key);
  return result || value;
}

function set(key, value) {
  window.localStorage.setItem(key, value);
}

export { get, set }