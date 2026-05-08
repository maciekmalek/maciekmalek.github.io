import { FC } from "react";
type Props = {link: string, name: string, description: string};

export const GithubRepoCard:FC<Props> = ({link, name, description}) => {
  return (
    
            <div><a href={link} target="_blank" rel="noopener noreferrer">{name}</a>
            {description}
            </div>
    
  );
}
