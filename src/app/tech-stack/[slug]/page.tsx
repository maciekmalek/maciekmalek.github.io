import { TechStackLinks } from "@/components/TechStackLinks/TechStackLinks";
import { techStackItems } from "@/const";
type Props = {
  slug: string;
};
export async function generateStaticParams() {
  return Object.entries(techStackItems).map(([key, item]) => ({
    slug: item.slug,
  }));
}
export default async function CV({ params }: PageProps<"/tech-stack/[slug]">) {
  const { slug } = await params;
  return (
    <div>
      <h1>Skills / Tech stack</h1>
      <h2>{slug}</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        <TechStackLinks />
      </div>
    </div>
  );
}
