import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/invitations/page.tsx"),
    route("albums","routes/albums/page.tsx"),
    route("moments","routes/moments/page.tsx"),
    route("profile","routes/profile/page.tsx"),
    route("settings","routes/settings/page.tsx")
    

] satisfies RouteConfig;
