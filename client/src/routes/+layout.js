/** @type {import('./$types').LayoutLoad} */
export function load({ url }) {
  const path = url.pathname;

  // Logique de backHref ici
  let backHref = "/";
  if (path.startsWith("/teams/")) backHref = "/teams";
  else if (path.startsWith("/pokemons/")) backHref = "/pokemons";

  const showBack = path !== "/";

  return { backHref, showBack };
}
