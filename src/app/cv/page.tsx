import { DateSpan } from "@/components/DateSpan/DateSpan";
import { ExperienceCard } from "@/components/ExperienceCard/ExperienceCard";
import { TechStackLinks } from "@/components/TechStackLinks/TechStackLinks";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { education, experienceItems } from "@/const";
import { Link } from "lucide-react";
export default function CV() {
  return (
    <div>
      Here you can learn more about my experience and skills. You can also
      download my CV as a PDF file by clicking the link down below.
      <h1>Who am I?</h1>
      I'm a software developer with a passion for creating efficient and
      scalable applications. I have experience working with a variety of
      technologies, and I'm always eager to learn new things and take on new
      challenges. My main expertise lies in frontend development, but I also
      have experience with backend technologies and cloud platforms. I enjoy
      working in collaborative environments and believe that teamwork is
      essential for delivering high-quality software. Specialized in integrating
      payment systems, I have successfully implemented solutions that enhance
      user experience and streamline payment processes. My goal is to continue
      growing as a developer and contribute to impactful projects that make a
      difference. During my career I've had a chance to be involved in every
      stage of software development, from gathering requirements and designing
      solutions to implementing features and maintaining applications. I take
      pride in writing clean, maintainable code and always strive to follow best
      practices in software development.
      <h1>Skills / Tech stack</h1>
      <div className="flex flex-wrap gap-2 mb-4">
        <TechStackLinks />
      </div>
      <h1>Experience</h1>
      {Object.values(experienceItems).map((experience) => (
        <ExperienceCard key={experience.link} {...experience} />
      ))}
      <h1>Education</h1>
      <Card>
        <CardHeader>
          <CardTitle>{education.institution}</CardTitle>
          <CardDescription>
            <div className="flex justify-between">
              <p>{`${education.degree} in ${education.field}, ${education.institution}, ${education.city}`}</p>
              <DateSpan
                startDate={education.startDate}
                endDate={education.endDate}
              />
            </div>
          </CardDescription>
        </CardHeader>

        <CardFooter>
          <Link
            href={education.link}
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            {education.institution}
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
