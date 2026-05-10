import { TechStackLinks } from "@/components/TechStackLinks/TechStackLinks";
export default function CV() {
  return (
    <div>
      <h1>Skills / Tech stack</h1>
      <div className="flex flex-wrap gap-2 mb-4">
        <TechStackLinks />
      </div>
    </div>
  );
}
