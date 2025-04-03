'use client';

import { useFBX, useTexture } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

export default function Coin() {
  const model = useFBX('/static/models/coin.fbx');
  const ref = useRef<THREE.Group>(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  // Cargar texturas (adaptando los nombres)
  const textures = useTexture({
    aoMap: '/static/models/textures/curvature.jpg', // Posible oclusión ambiental
    roughnessMap: '/static/models/textures/noise.jpg', // Posible rugosidad
    map: '/static/models/textures/pattern.jpg', // Posible textura base
    normalMap: '/static/models/textures/thickness.jpg', // Posible normal map
  });

  // Efecto para verificar cuando el modelo esté cargado
  useEffect(() => {
    if (model) {
      console.log('Modelo cargado:', model);
      setIsModelLoaded(true);
    } else {
      console.error('No se pudo cargar el modelo FBX.');
    }
  }, [model]);

  // Aplicar materiales con texturas cuando el modelo esté cargado
  useEffect(() => {
    if (isModelLoaded && model && textures) {
      model.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          console.log('Aplicando material a:', child);
          child.material = new THREE.MeshStandardMaterial({
            aoMap: textures.aoMap,
            roughnessMap: textures.roughnessMap,
            map: textures.map,
            normalMap: textures.normalMap,
          });
        }
      });
    } else {
      if (!model) console.error('El modelo no está definido.');
      if (!textures) console.error('Las texturas no están definidas.');
    }
  }, [isModelLoaded, model, textures]);

  return <primitive ref={ref} object={model} />;
}
