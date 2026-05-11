import { Badge } from "@/components/ui/badge";
import { techStackItems } from "@/const";
import Link from "next/link";
import { FC } from "react";
import { TechKey } from "../../types";
type Props = {
  items?: Array<TechKey>;
};
export const TechStackLinks: FC<Props> = ({ items }) => {
  return (
    <>
      {Object.entries(techStackItems)
        .filter(([key]) => !items || items.includes(key as TechKey))
        .map(([key, item]) => (
          <Link key={key} href={`/tech-stack/${item.slug}`}>
            <Badge
              variant={"secondary"}
              className="hover:bg-primary hover:text-white cursor-pointer transition-colors"
            >
              {item.name}
            </Badge>
          </Link>
        ))}
    </>
  );
};
