import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/albums/page.tsx"),
    route("moments","routes/moments/page.tsx")
    

] satisfies RouteConfig;
