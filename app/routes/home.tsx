import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Personal Web Jacky Andrazat" },
    { name: "description", content: "Jacky Andrazat Content" },
  ];
}

export default function Home() {
  return <Welcome />;
}
