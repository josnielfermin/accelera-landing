'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

export default function Scene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const coinRef = useRef<THREE.Group | null>(null); // Referencia para el modelo

  useEffect(() => {
    if (mountRef.current) {
      // Crear la escena y la cámara
      const scene = new THREE.Scene();
      const container = mountRef.current;
      const width = container.clientWidth;
      const height = container.clientHeight;
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

      // Crear el renderer
      const renderer = new THREE.WebGLRenderer({ alpha: true }); // Habilitar transparencia
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0); // Color negro con opacidad 0 (transparente)
      mountRef.current.appendChild(renderer.domElement);

      // Agregar luces
      const ambientLight = new THREE.AmbientLight(0x404040); // luz ambiental
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 5, 5);
      scene.add(ambientLight);
      scene.add(directionalLight);

      // Cargar el modelo FBX
      const loader = new FBXLoader();
      loader.load('/static/models/coin.fbx', (object: THREE.Group) => {
        scene.add(object);

        // Ajustar escala, rotación, etc.
        object.scale.set(0.5, 0.5, 0.5); // Escala del modelo
        object.position.set(0, 0, 0); // Posición del modelo

        coinRef.current = object; // Guardar la referencia al modelo
      });

      // Configurar la cámara
      camera.position.z = 8;

      // Función de animación
      const animate = () => {
        requestAnimationFrame(animate);

        if (coinRef.current) {
          coinRef.current.rotation.x += 0.005; // Rota en el eje Y
        }

        // Renderizar la escena
        renderer.render(scene, camera);
      };

      animate();

      // Limpiar cuando el componente se desmonte
      return () => {
        mountRef.current?.removeChild(renderer.domElement);
      };
    }
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full aspect-square max-w-[340px] !bg-transparent"
    />
  );
}
