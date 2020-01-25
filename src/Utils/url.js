export function getSlug(url = window.location.pathname) {
  const firstPathFragment = url.split("/")[1];
  if (!firstPathFragment) return null;
  return firstPathFragment;
}
