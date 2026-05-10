import { ExperienceCard } from "@/components/ExperienceCard/ExperienceCard";
import { TechStackLinks } from "@/components/TechStackLinks/TechStackLinks";
import { ExperienceItems } from "@/const";
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
      {Object.values(ExperienceItems).map((experience) => (
        <ExperienceCard key={experience.link} {...experience} />
      ))}
    </div>
  );
}
