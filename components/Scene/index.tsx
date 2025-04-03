'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'; // Asegúrate de que el loader esté importado

export default function Coin() {
  const mountRef = useRef<HTMLDivElement>(null);
  const coinRef = useRef<THREE.Group | null>(null); // Referencia para el modelo
  // const [isHovered, setIsHovered] = useState(false); // Estado para saber si el mouse está sobre el modelo

  useEffect(() => {
    if (mountRef.current) {
      // Crear la escena y la cámara
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      // Crear el renderer
      const renderer = new THREE.WebGLRenderer({ alpha: true }); // Habilitar transparencia
      renderer.setSize(window.innerWidth, window.innerHeight);
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
          // Solo rotar si el mouse no está sobre el modelo
          coinRef.current.rotation.y += 0.005; // Rota en el eje Y si no se está interactuando
          // coinRef.current.sh;
          // if (!isHovered) {
          // }
        }

        // Renderizar la escena
        renderer.render(scene, camera);
      };

      animate();

      // // Función para manejar la entrada del mouse (hover)
      // const onMouseEnter = () => {
      //   // Solo cambiar el estado si no está ya en el estado "hover"
      //   if (!isHovered) {
      //     setIsHovered(true); // Detener la rotación al pasar el mouse sobre el modelo
      //   }
      // };

      // // Función para manejar la salida del mouse
      // const onMouseLeave = () => {
      //   // Solo cambiar el estado si no está ya en el estado "no hover"
      //   if (isHovered) {
      //     setIsHovered(false); // Reanudar la rotación al sacar el mouse
      //   }
      // };

      // Escuchar eventos de mouse
      // mountRef.current.addEventListener('mouseenter', onMouseEnter);
      // mountRef.current.addEventListener('mouseleave', onMouseLeave);

      // Limpiar cuando el componente se desmonte
      return () => {
        mountRef.current?.removeChild(renderer.domElement);
        // mountRef.current?.removeEventListener('mouseenter', onMouseEnter);
        // mountRef.current?.removeEventListener('mouseleave', onMouseLeave);
      };
    }
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: '100%', height: '100%' }}
      className="absolute top-0 left-0 w-full h-full !bg-transparent"
    />
  );
}
