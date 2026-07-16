import { GithubRepoCard } from "@/components/GithubRepoCard/GithubRepoCard";

export default function Github() {
  return (
    <div>
      Here you can find my github profile:{" "}
      <a
        href="https://github.com/maciekmalek"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <div className="gap-4 mt-4 flex flex-col">
        In my off time I've be working on some personal projects. Here are some
        of them:
        <GithubRepoCard
          link="https://github.com/maciekmalek/maciekmalek.github.io"
          name="This page"
          description="My personal website"
        />
        <GithubRepoCard
          link="https://github.com/maciekmalek/job-hunter"
          name="Job Hunter"
          description="Parses your personal gmail to look for job processes and evalute at which stage they are"
        />
        <GithubRepoCard
          link="https://github.com/maciekmalek/mfe-architecture-showcase"
          name="Micro Frontend Showcase"
          description="A showcase of micro frontend architecture - stale, it was an idea but never fully realized"
        />
      </div>
    </div>
  );
}
