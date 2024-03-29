import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import fragmentShader from '../../shaders/shader-pattern/fragment.glsl';
import vertexShader from '../../shaders/shader-pattern/vertex.glsl';

const ShaderPattern: React.FC = () => {
  return (
    <>
      <mesh>
        <planeGeometry args={[2, 2, 32, 32]} />
        <shaderMaterial
          side={THREE.DoubleSide}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </mesh>
      <OrbitControls />
    </>
  );
};

export default ShaderPattern;
