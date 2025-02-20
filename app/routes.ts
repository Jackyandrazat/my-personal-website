import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),

    route("auth", "pages/auth.tsx"),
    route("pdf", "pages/pdf.tsx"),
    // layout("components/ProtectedRoute.tsx", [
    //     route("dashboard", "routes/dashboard.tsx"), 
    // ]),
] satisfies RouteConfig;
