import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "hammad",
  initials: "HM",
  url: "https://dillion.io",
  location: "Karachi, PK",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Linkedin.",
  summary:
    "At the end of 2023, I started my job as a software developer to dive deep into different technologies. During this journey I started building and scaling my own SaaS businesses as well. In the past, [I am currently pursuing my degree in computer science.](/#education), [I have successfully delivered 20+ projects for different client's & companies](/#projects), and [I got certified from from Indiana University Bloomington.](/#education). Till now, this has been an exciting journey—from getting hired as an intern to being promoted to Team Lead of a department within one year, all while still being an undergraduate.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "TailwindCSS",
    "MaterialUI",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "MySQL",
    "MongoDB",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hammadamir966@gmail.com",
    tel: "+923181226301",
    social: {
      "GitHub Personal": {
        name: "GitHub",
        url: "https://github.com/Hammadulhaq123",
        icon: Icons.github,
        img: "/me.jpeg",

        navbar: true,
      },
      "GitHub Organization": {
        name: "GitHub",
        url: "https://github.com/JackAnderson01",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/hammad-ul-haq-personal",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Hollliday",
      href: "https://app.hollliday.com",
      badges: [],
      location: "Onsite",
      title: "Founder, CEO",
      logoUrl: "https://app.hollliday.com/mini-logo.png",
      start: "Oct 2024",
      end: "Present",
      description:
        "I founded Hollliday, a project management tool designed to enhance organizational productivity and help agencies achieve their goals efficiently. With Hollliday, users no longer need to worry about managing client payments or tracking and showcasing project progress—our platform handles it all. I developed the entire tool independently while collaborating with some brilliant minds in the tech industry. Currently, I am focused on further developing and enhancing the tool..",
    },
    {
      company: "Launchbox Paskitan",
      href: "https://launchbox.pk",
      badges: [],
      location: "Onsite",
      title: "Web Development Team Lead",
      logoUrl: "/launchbox.webp",
      start: "Nov 2023",
      end: "Present",
      description:
        "I joined Launchbox as an intern and, within a year, demonstrated my capabilities as a web developer. I consistently delivered projects within tight deadlines of 17-20 days, which led to my promotion to Mid-Level Web Developer within just one month. After my first promotion, I continued to work diligently, completing over 15 projects within a year. This dedication resulted in another promotion, and I now hold a leadership role where I am pushing boundaries and leading an entire department of web development.",
    },
    {
      company: "Gaditek",
      badges: [],
      href: "https://gaditek.com",
      location: "Remote",
      title: "Frontend Developer",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb6Puhz3jh3xnKw5dSL1-IqZSSwKE1YsENqg&s",
      start: "Aug 2024",
      end: "Present",
      description:
        "I joined Gaditek on a contractual basis as a Frontend Developer. Although it was a part-time role, my passion for technology keeps me energized, so after completing my full-time shift at Launchbox, I dedicate my time to working with Gaditek. In this role, I have successfully delivered numerous websites for the company.",
    },
    {
      company: "Paskitan Air Force",
      href: "https://paf.gov.pk/",
      badges: [],
      location: "Onsite",
      title: "Technician",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvhHwpy3ntkfqirST7Q-xBa29QfhIz9vVMKA&s",
      start: "Feb 2023",
      end: "Sept 2023",
      description:
        "I worked as a trainee computer operator at Pakistan Air Force, initially joining the organization to build my independence and gain experience. However, I soon realized that the role was not aligned with my field of study and was making it challenging to focus on my graduation. As a result, I made the decision to leave and prioritize my academic and career goals.",
    },
  ],
  education: [
    {
      school: "University Of Karachi",
      href: "https://uok.edu.pk",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgd9D61zMCXLW-Fmut8bDQZ1fitFZoBfGdPg&s",
      start: "2021",
      end: "Present",
    },

    {
      school: "Indiana University Bloomington",
      href: "https://bloomington.iu.edu/index.html",
      degree: "Certification in Web Development",
      logoUrl: "https://assets.iu.edu/brand/3.3.x/trident-large.png",
      start: "2021",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Rentibles",
      href: "https://rentibles.com",
      dates: "Nov 2024 - Jan 2025",
      active: true,
      description:
        "Rentibles is an innovative rental e-commerce platform designed for business owners and users to rent out important or underutilized assets. This ensures that assets are optimally used while providing financial benefits to both lenders and renters. The platform facilitates seamless transactions, real-time booking management, and legally binding agreements to maintain accountability and security.",
      technologies: [
        "React.js",
        "Javascript",
        "NodeJS",
        "TailwindCSS",
        "Stripe",
        "Material UI",
        "axios",
      ],
      links: [
        {
          type: "Website",
          href: "https://rentibles.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/rentibles.png",
      video: "",
    },
    {
      title: "Bennu AI",
      href: "https://bennuai.org/",
      dates: "Dec 2025 - Feb 2025",
      active: true,
      description:
        "Bennu is a cutting-edge recruitment platform designed to bridge the gap between talented professionals and forward-thinking employers. With intelligent job-matching technology, intuitive tools, and a commitment to inclusivity, Bennu streamlines the hiring process for both recruiters and job seekers. The platform’s mission is to create meaningful professional connections that foster growth and success.",
      technologies: [
        "Node.js",
        "Javascript",
        "TailwindCSS",
        "Shadcn UI",
        "axios",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://bennuai.org/",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/dillionverma/llm.report",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/bennu.png",
      video: "",
    },

    {
      title: "Perfectboat",
      href: "https://theperfectboat.com",
      dates: "Feb 2025 - Present",
      active: true,
      description:
        "PerfectBoat is a digital platform designed to help boat owners manage maintenance tasks, inspections, and upkeep effortlessly. By providing reminders, maintenance logs, and a structured approach to boat care, the app enhances the boating experience while ensuring vessel longevity. The platform allows users to customize their maintenance schedules, store records with photos, and stay informed about the best maintenance practices.",
      technologies: ["React.js", "Node.js", "Javascript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://theperfectboat.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/perfectboat.png",
      video: "",
    },

    {
      title: "FareShare",
      href: "https://faresharellc.com",
      dates: "June 2024 - Nov-2024",
      active: true,
      description:
        "FareShare is a transportation platform designed to provide seamless and reliable ride-sharing services for a variety of needs, including medical appointments, daily commutes, and leisure travel. With a strong focus on safety, convenience, and customer satisfaction, FareShare aims to revolutionize the way people move by offering a trustworthy and efficient ride-hailing experience.",
      technologies: [
        "React.js",
        "Javascript",
        "NodeJS",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://faresharellc.com",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/fareshare.png",
      video: "",
    },
    {
      title: "Home Hero",
      href: "https://myhomehero.co",
      dates: "Feb 2025 - Present",
      active: true,
      description:
        "HomeHero is a user-friendly mobile and web application designed to streamline the process of outsourcing everyday household tasks. From cleaning and handyman services to yard work and laundry, HomeHero connects users with trusted service providers, offering a seamless experience to browse, book, and complete tasks effortlessly. The platform caters to busy professionals, homeowners, and gig workers looking for flexible job opportunities.",
      technologies: ["React.js", "Node.js", "Javascript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://myhomehero.co",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/homehero.png",
      video: "",
    },
    {
      title: "Buzzhub",
      href: "https://www.buzzhubapp.com/",
      dates: "Nov 2024 - Jan 2025",
      active: true,
      description:
        "Buzzhub is a comprehensive marketplace for cannabis users, designed to streamline the process of finding and purchasing cannabis products from top-rated dispensaries. The platform eliminates the hassle of searching for the best prices, strains, or effects by providing a centralized, user-friendly experience that connects consumers with verified dispensaries.",
      technologies: [
        "React.js",
        "Javascript",
        "NodeJS",
        "TailwindCSS",
        "Stripe",
        "Material UI",
        "axios",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.buzzhubapp.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/buzzhub.png",
      video: "",
    },
  ],
  startups: [
    {
      title: "Hollliday Project Management",
      dates: "November 2024 - Present",
      location: "Global Software",
      description:
        "Developed a project management tool that enables businesses to track progress, enhance client visibility, and streamline freelancer collaboration.",
      image: "https://app.hollliday.com/mini-logo.png",
      mlh: "https://app.hollliday.com/mini-logo.png",
      links: [
        {
          type: "Website",
          href: "https://app.hollliday.com",
          icon: <Icons.globe className="size-3" />,
          title: "View Progress",
        },
      ],
    },
    {
      title: "Onboarrd AI",
      dates: "July 2024 - Present",
      location: "Global Software",
      description:
        "Developed a job application portal that allows recruiters to hire new talent seamlessly while managing applications efficiently.",
      image: "https://www.onboarrd.com/assets/logo_white-8OzhhFNw.png",
      mlh: "https://www.onboarrd.com/assets/logo_white-8OzhhFNw.png",
      links: [
        {
          type: "Website",
          href: "https://onboarrd.com",
          icon: <Icons.globe className="size-3" />,
          title: "View Progress",
        },
      ],
    },
  ],
} as const;
