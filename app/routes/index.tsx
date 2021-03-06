import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";

type IndexData = {
  resources: Array<{ name: string; url: string }>;
  demos: Array<{ name: string; to: string }>;
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = () => {
  let data: IndexData = {
    resources: [
      {
        name: "Remix Docs",
        url: "https://remix.run/docs"
      },
      {
        name: "React Router Docs",
        url: "https://reactrouter.com/docs"
      },
      {
        name: "Remix Discord",
        url: "https://discord.gg/VBePs6d"
      }
    ],
    demos: [
      {
        to: "demos/actions",
        name: "Actions"
      },
      {
        to: "demos/about",
        name: "Nested Routes, CSS loading/unloading"
      },
      {
        to: "demos/params",
        name: "URL Params and Error Boundaries"
      }
    ]
  };

  // https://remix.run/api/remix#json
  return json(data);
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Visnu Ghosh",
    description: "Visnu Ghosh Experience Designer"
  };
};

const projects = [
  {
    img: '/projects/mio.png',
    title: "My Inspirational Oval (MIO) | A playful way to engage in wellness",
  },
  {
    img: '/projects/bridgecare.png',
    title: 'BridgeCare | Fostering trust between families and childcare providers',
  },
  {
    img: '/projects/chicagoNews.png',
    title: 'ABC7 Chicago News | How news can inspire and empower',
  },
]

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData<IndexData>();

  return (
    <div className="remix__page" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="row" style={{ display: 'flex' }}>
        <div>
          <h2>People, puzzles, and problem solving excite me. I???m delighted to have found my place in UX. </h2>
          <h4>Hi there, I???m Visnu!</h4>
          <p>I???m an experience designer with a background in data analysis and business strategy. My passion is solving complex problems and helping people accomplish what is important to them.</p>
          <p>I love UX because it encompasses many of the things that I???m passionate about and experienced with such as product strategy, data analysis, user research, psychology, and storytelling. I know how to leverage data to create simple and effective designs. I keep business needs in mind while being an advocate for the humans that I???m designing for. Accessibility and inclusion are always top of mind in my design approach.</p>
          <p>Outside of UX, I am obsessed with dogs, plants, and travel. On a rainy day, you will find me crafting or learning to DJ.</p>
        </div>
        <img
          alt="Visnu Ghosh standing in front of Bay Bridge with dog, Bryn"
          className="profilePicture"
          src="/me_profile.png"
        />
      </div>
      <div className="projects" style={{ display: 'flex', justifyContent: "space-around" }}>
        {projects.map(project => (
          <div className="project" key={project.title} style={{ display: 'flex', flexDirection: 'column', border: '1px solid black', alignItems: 'center', marginRight: 20, width: 376, padding: 15 }}>
            <img
              alt={project.title}
              className="projectPreviewImage"
              src={project.img}
              style={{ width: '22rem' }}
            />
            <span>{project.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
