import { Experience } from "./types";

export const techStackItems = {
        JS:{name:"JavaScript / TypeScript",slug:"javascript-typescript"},
        HTML_CSS:{name:"HTML / CSS",slug:"html-css"},
        Git:{name:"Git",slug:"git"},
        Nx:{name:"Nx",slug:"nx"},
        Webpack_Module_Federation:{name:"Webpack Module Federation",slug:"webpack-module-federation"},
        Micro_Frontends:{name:"Micro Frontends",slug:"micro-frontends"},
        Playwright:{name:"Playwright",slug:"playwright"},
        MSW:{name:"MSW",slug:"msw"},
        Tailwind:{name:"Tailwind",slug:"tailwind"},
        REST:{name:"REST",slug:"rest"},
        GraphQL:{name:"GraphQL",slug:"graphql"},
        Strapi:{name:"Strapi",slug:"strapi"},
        Mobx:{name:"Mobx",slug:"mobx"},
        React:{name:"React",slug:"react"},
        Next_js:{name:"Next.js",slug:"next-js"},
        Node_js:{name:"Node.js",slug:"node-js"},
        Nest_js:{name:"Nest.js",slug:"nest-js"},
        SQL:{name:"SQL",slug:"sql"},
        GCP:{name:"GCP",slug:"gcp"},
        Github:{name:"Github",slug:"github"},
} 

export const experienceItems: { [key: string]: Experience } = {
        "GPC":{
            "link":"https://www.gpcglobal.com",
            "position":"Software Engineer",
            "company":"GPC Global Technology Center",
            "description":"Responsible for developing and maintaining web applications using modern technologies.",
            "achivements":[
              "Built unified check-in system with customer/vehicle matching and duplicate detection across microfrontends",
          "Designed cross-MFE event orchestration architecture; authored 3 ADRs for team adoption",
          "Developed end-to-end payment flow: cash, card, split tender with receipt generation and PDF export",
          "Created OpenAPI type generation tooling used across 6+ micro-frontends",
          "Established E2E testing infrastructure with Playwright and MSW mocking patterns",],
            "city":"Kraków",
            "startDate":"February 2025",
            "endDate":"April 2025"
        },
        "Geeknauts":{
            "link":"https://www.geeknauts.com",
            "position":"Software Developer",
            "company":"Geeknauts",
            "description":"Worked on a variety of projects, including e-commerce platforms, internal tools, and client websites.",
            "achivements":[
              "Developed and tested web and mobile applications for various clients using modern JavaScript stack",
              "Assessed costs related to software dependencies and third-party integrations",
              "Mentored junior team members and consulted on project decisions",
              "Worked in Scrum teams delivering features based on provided documentation"],
            "city":"Remote",
            "startDate":"February 2022",
            "endDate":"February 2025"
        },
        "Sofyne":{
            "link":"https://sofynetech.com/",
            "position":"Junior Software Consultant",
            "company":"Sofyne Active Technology",
            "description":"Worked on a variety of projects, including e-commerce platforms, internal tools, and client websites.",
            "achivements":[
              "Developed and tested web-based MES applications for manufacturing clients",
              "Collaborated directly with clients on requirements and implementation"],
            "city":"Remote",
            "startDate":"January 2021",
            "endDate":"February 2022"
        }
}
        
export const education = {
"degree":"Bachelor of Science",
"field":"Electronics and Telecommunications",
"institution":"AGH University of Science and Technology",
"city":"Kraków",
"startDate":"October 2016",
"endDate":"June 2020",
"link":"https://iet.agh.edu.pl/kierunek-elektronika-i-telekomunikacja-agh/"
} as const;
