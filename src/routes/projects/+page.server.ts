import headers from '../../data/headers.json';
import projects from '../../data/projects.json';


export async function load() {
  const topics = Array.from(new Set(projects.map(p => p.topic)));

  return {
    hero: headers.projects,
    projects,
    topics
  };
}
