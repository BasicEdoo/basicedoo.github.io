import { type RouteConfig } from "@react-router/dev/routes";

// Define the routes using file paths relative to the 'app' directory
export default [
  { path: "/", file: "components/Home.tsx" }, // Index route points to Home component file
  { path: "/projects", file: "components/Projects.tsx" }, // Projects route file
  { path: "/contact", file: "components/Contact.tsx" }, // Contact route file
] satisfies RouteConfig;

