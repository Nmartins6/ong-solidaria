const validRoutes = new Set([
  "home",
  "projetos",
  "cadastro",
  "voluntarios"
]);

let routeHandler = null;


export function getCurrentRoute() {
  const route =
    window.location.hash
      .replace("#", "")
      .trim();

  if (!route) {
    return "home";
  }

  return validRoutes.has(route)
    ? route
    : "404";
}


function notifyRouteChange() {
  if (routeHandler) {
    routeHandler(
      getCurrentRoute()
    );
  }
}


export function navigate(route) {
  const target =
    validRoutes.has(route)
      ? route
      : "home";

  const newHash = `#${target}`;

  if (
    window.location.hash !== newHash
  ) {
    history.pushState(
      null,
      "",
      newHash
    );
  }

  notifyRouteChange();
}


export function initRouter(handler) {
  routeHandler = handler;


  document.addEventListener(
    "click",
    (event) => {
      const link =
        event.target.closest(
          "[data-route]"
        );

      if (!link) {
        return;
      }

      event.preventDefault();

      const route =
        link.dataset.route;

      navigate(route);
    }
  );


  window.addEventListener(
    "popstate",
    notifyRouteChange
  );


  notifyRouteChange();
}