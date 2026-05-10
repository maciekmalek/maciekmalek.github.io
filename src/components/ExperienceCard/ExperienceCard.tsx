import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Experience } from "@/types";
import Link from "next/link";
import { FC } from "react";
import { TechStackLinks } from "../TechStackLinks/TechStackLinks";

export const ExperienceCard: FC<Experience> = ({
  link,
  position,
  company,
  description,
  achivements,
  city,
  startDate,
  endDate,
  technologies,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{position}</CardTitle>
        <CardDescription>
          <div className="flex justify-between">
            <p>{`${company}, ${city}`}</p>
            <p>
              <span>
                {new Date(startDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </span>
              -
              <span>
                {endDate
                  ? new Date(endDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                    })
                  : "Present"}
              </span>
            </p>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        {description}
        {achivements.length > 0 && (
          <ul className="list-disc list-inside mt-2">
            {achivements.map((achivement, index) => (
              <li key={index}>{achivement}</li>
            ))}
          </ul>
        )}
        {technologies && (
          <div className="mt-2">
            <TechStackLinks items={technologies} />
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {company}
        </Link>
      </CardFooter>
    </Card>
  );
};
