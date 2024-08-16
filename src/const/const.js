export const studies = [
  {
    title: "Técnico en desarrollo de software",
    corporation: "SENA - Montería (Córdoba) ",
    date: "02/2019 – 12/2019",
  },
  {
    title: "Desarrollador Front-end React Js",
    corporation: "Alura Latam - Remoto",
    date: "04/2023 – 09/2023",
  },
  {
    title: "Curso profesional de React Js",
    corporation: "Código facilito - Remoto",
    date: "04/2023 – 04/2023",
  },
];

export const IconKeys = {
  html: "html",
  css: "css",
  javaScript: "javaScript",
  react: "react",
  astro: "astro",
  materialUi: "materialUi",
  nextjs: "nextjs",
  redux: "redux",
  styled: "styled",
  tailwind: "tailwind",
  radix: "radix",
  reactQuery: "reactQuery",
  typeScript: "typeScript",
  zustand: "zustand",
  git: "git",
  github: "github",
  stripe: "stripe",
  shadcn: "shadcn",
  nodejs: "nodejs",
  mongodb: "mongodb",
  vite: "vite",
  // here add more icon keys
};

export const skills = [
  {
    title: "Html",
    icon: IconKeys.html,
  },
  {
    title: "Kubernetes",
    icon: IconKeys.Kubernetes,
  },
  {
    title: "Css",
    icon: IconKeys.css,
  },
  {
    title: "JavaScript",
    icon: IconKeys.javaScript,
  },
  {
    title: "Astro",
    icon: IconKeys.astro,
  },
  {
    title: "Tailwindcss",
    icon: IconKeys.tailwind,
  },
  {
    title: "React Js",
    icon: IconKeys.react,
  },
  {
    title: "Next Js",
    icon: IconKeys.nextjs,
  },
  {
    title: "Git",
    icon: IconKeys.git,
  },

  {
    title: "Github",
    icon: IconKeys.github,
  },
  {
    title: "Material UI",
    icon: IconKeys.materialUi,
  },

  {
    title: "Redux Js",
    icon: IconKeys.redux,
  },
  {
    title: "Styled Components",
    icon: IconKeys.styled,
  },
  {
    title: "Node Js",
    icon: IconKeys.nodejs,
  },
  {
    title: "TypeScript",
    icon: IconKeys.typeScript,
  },
  {
    title: "Radix UI",
    icon: IconKeys.radix,
  },

  {
    title: "React Query",
    icon: IconKeys.reactQuery,
  },
  {
    title: "Vite",
    icon: IconKeys.vite,
  },
  {
    title: "Zustand",
    icon: IconKeys.zustand,
  },

  {
    title: "Shadcn UI",
    icon: IconKeys.shadcn,
  },
  {
    title: "Mongo Db",
    icon: IconKeys.mongodb,
  },
];

export const projects = [
  {
    img: "../../../img/tasks-manager.webp",
    title: "Tasks Manager",
    link: "https://task-manager-ecru-chi.vercel.app/dashboard",
    description: `Administrador de tareas con drag and drop autenticación con Clerk , shadcn.  "En Desarrollo "`,
    technologies: [
      {
        icon: IconKeys.typeScript,
      },
      {
        icon: IconKeys.nextjs,
      },
      {
        icon: IconKeys.tailwind,
      },
      {
        icon: IconKeys.zustand,
      },
      {
        icon: IconKeys.shadcn,
      },
    ],
  },
  {
    img: "../../../img/ecommerce-stripe-2.webp",
    title: "Ecommerce Stripe",
    link: "https://ecommerce-stripe-763m.vercel.app/",
    description: `Proyecto FullStack de un ecommerce con pasarela de pagos stripe integrada, destalles de el product etc.  `,
    technologies: [
      {
        icon: IconKeys.typeScript,
      },
      {
        icon: IconKeys.nextjs,
      },
      {
        icon: IconKeys.tailwind,
      },
      {
        icon: IconKeys.mongodb,
      },
      {
        icon: IconKeys.stripe,
      },
    ],
  },
  {
    img: "../../../img/nexanime.webp",
    title: "NexAnime",
    link: "https://nexanime.vercel.app",
    description: `plataforma de anime para ver los animes en tendencia , más valorados , estadísticas.`,
    technologies: [
      {
        icon: IconKeys.typeScript,
      },
      {
        icon: IconKeys.nextjs,
      },
      {
        icon: IconKeys.tailwind,
      },
    ],
  },
];
