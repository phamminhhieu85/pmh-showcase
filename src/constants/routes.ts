export const routes: Route[] = [
  {
    name: 'Spherical Word',
    path: '/spherical-word',
    img: '/images/spherical-word.webp'
  },
  {
    name: 'Hi-key Bubbles',
    path: '/hi-key-bubbles',
    img: '/images/hi-key-bubbles.webp'
  },
  {
    name: 'Ballpit',
    path: '/ballpit',
    img: '/images/ballpit.webp'
  },
  {
    name: 'Shader Images',
    path: '/shader-images',
    img: '/images/dao-1.jpeg'
  },
  {
    name: 'Instanced Vertex Color',
    path: '/instanced-vertex-color',
    img: '/images/instanced-vertex-color.webp'
  }
];

export type Route = { name: string; path: string; img: string };
