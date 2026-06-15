import { createRouter, createRootRoute, createRoute } from "@tanstack/react-router";
import App from "./routes/__root";
import Index from "./routes/index";

const rootRoute = createRootRoute({
  component: App,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
});

const routeTree = rootRoute.addChildren([indexRoute]);

export function getRouter() {
  return createRouter({ routeTree });
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
