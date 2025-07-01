/** @type {import('./$types').LayoutLoad} */

const validUrls = ["/teams/", "/pokemons/", "/types/"];

function getParentPath(path) {
  const segments = path.split("/").filter(Boolean);
  segments.pop();
  return "/" + segments.join("/") + (segments.length ? "/" : "");
}

export function load({ url }) {
  const path = url.pathname;

  let backHref = "/";
  const from = url.searchParams.get("from");

  if (from && validUrls.some((prefix) => from.startsWith(prefix))) {
    backHref = from;
  } else if (validUrls.some((prefix) => path.startsWith(prefix))) {
    backHref = getParentPath(path);
  }

  //   else if (path.startsWith("/teams/")) backHref = "/teams";
  // else if (path.startsWith("/pokemons/")) backHref = "/pokemons";
  // else if (path.startsWith("/types/")) backHref = "/types";

  const showBack = path !== "/";

  return { backHref, showBack };
}
