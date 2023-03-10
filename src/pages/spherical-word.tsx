import dynamic from 'next/dynamic';
import type { CustomNextPage } from '../models/common';

const SphericalWord = dynamic(
  () => import('../components/canvas/spherical-word'),
  { ssr: false }
);

const Page: CustomNextPage = () => {
  return <div></div>;
};

Page.Canvas = () => <SphericalWord />;

export async function getStaticProps() {
  return {
    props: {
      title: 'Sherical word',
      canvas: {
        camera: { position: [0, 0, 35], fov: 90 },
        dpr: [1, 2]
      }
    }
  };
}

export default Page;
