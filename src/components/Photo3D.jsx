import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { cvData } from '../data/cvData';

export default function Photo3D() {
  const mountRef = useRef(null);
  const [isRotating, setIsRotating] = useState(true);
  const [wireframeMode, setWireframeMode] = useState(false);
  const [rotationData, setRotationData] = useState({ x: 0, y: 0 });
  const [textureLoaded, setTextureLoaded] = useState(false);

  // References for animation loop
  const sceneRef = useRef(null);
  const cardGroupRef = useRef(null);
  const frameRef = useRef(null);
  const isDraggingRef = useRef(false);
  const prevMouseRef = useRef({ x: 0, y: 0 });
  const mouseParallaxRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const autoRotateRef = useRef(true);

  useEffect(() => {
    autoRotateRef.current = isRotating;
  }, [isRotating]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 380;
    const height = container.clientHeight || 460;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5.2);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const cyanPoint = new THREE.PointLight(0x06b6d4, 3.5, 20);
    cyanPoint.position.set(-3, 3, 4);
    scene.add(cyanPoint);

    const emeraldPoint = new THREE.PointLight(0x10b981, 2.5, 20);
    emeraldPoint.position.set(3, -3, 3);
    scene.add(emeraldPoint);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.8);
    rimLight.position.set(0, 5, -4);
    scene.add(rimLight);

    // 4. Main 3D Card Group
    const cardGroup = new THREE.Group();
    scene.add(cardGroup);
    cardGroupRef.current = cardGroup;

    // Dimensions of 3D Photo Card (3:4 portrait aspect ratio)
    const cardW = 2.4;
    const cardH = 3.2;
    const cardD = 0.08;

    // 5. Texture Loader
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      cvData.personal.photo,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.generateMipmaps = true;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        setTextureLoaded(true);

        // Front Face Material with Photo
        const frontMaterial = new THREE.MeshStandardMaterial({
          map: texture,
          roughness: 0.25,
          metalness: 0.1,
          bumpScale: 0.02
        });

        // Dark Technical Backplate Material
        const backCanvas = document.createElement('canvas');
        backCanvas.width = 512;
        backCanvas.height = 680;
        const ctx = backCanvas.getContext('2d');
        ctx.fillStyle = '#060913';
        ctx.fillRect(0, 0, 512, 680);
        ctx.strokeStyle = '#06b6d4';
        ctx.lineWidth = 2;
        ctx.strokeRect(20, 20, 472, 640);
        ctx.fillStyle = '#22d3ee';
        ctx.font = 'bold 24px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('ANKANA DAS', 256, 120);
        ctx.font = '16px monospace';
        ctx.fillStyle = '#94a3b8';
        ctx.fillText('ADAMAS UNIVERSITY // KOLKATA', 256, 160);
        ctx.fillText('B.TECH CSE (AI & ML)', 256, 190);
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let i = 240; i < 580; i += 24) {
          ctx.moveTo(40, i);
          ctx.lineTo(472, i);
        }
        ctx.stroke();
        ctx.fillStyle = '#10b981';
        ctx.font = '14px monospace';
        ctx.fillText('RESEARCH NODE: CAAQMS / SE / CV', 256, 610);
        ctx.fillText('ankanadas.com', 256, 634);

        const backTexture = new THREE.CanvasTexture(backCanvas);
        const backMaterial = new THREE.MeshStandardMaterial({
          map: backTexture,
          roughness: 0.4,
          metalness: 0.5
        });

        // Sleek Metallic Cyber Rim
        const rimMaterial = new THREE.MeshStandardMaterial({
          color: 0x0e1726,
          metalness: 0.9,
          roughness: 0.2
        });

        // Mesh Face Materials Array [right, left, top, bottom, front, back]
        const materials = [
          rimMaterial,
          rimMaterial,
          rimMaterial,
          rimMaterial,
          frontMaterial,
          backMaterial
        ];

        const cardGeo = new THREE.BoxGeometry(cardW, cardH, cardD);
        const cardMesh = new THREE.Mesh(cardGeo, materials);
        cardGroup.add(cardMesh);
      },
      undefined,
      (err) => {
        console.error('Error loading photo texture:', err);
      }
    );

    // 6. Glowing 3D Bezel Wireframe Frame
    const frameGeo = new THREE.BoxGeometry(cardW + 0.08, cardH + 0.08, cardD + 0.02);
    const frameMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const frameMesh = new THREE.Mesh(frameGeo, frameMat);
    cardGroup.add(frameMesh);
    frameRef.current = frameMesh;

    // 7. 3D Orbital Rings around the Photo
    const ringGeo1 = new THREE.RingGeometry(2.1, 2.13, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.45
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 2.6;
    cardGroup.add(ring1);

    const ringGeo2 = new THREE.RingGeometry(2.35, 2.37, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 3.2;
    cardGroup.add(ring2);

    // 8. 3D Hologram Orbiting Dust Particles
    const particleCount = 45;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const theta = Math.random() * Math.PI * 2;
      const radius = 1.8 + Math.random() * 0.9;
      pPos[i] = Math.cos(theta) * radius;
      pPos[i + 1] = (Math.random() - 0.5) * 3.4;
      pPos[i + 2] = Math.sin(theta) * radius;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.045,
      transparent: true,
      opacity: 0.75
    });
    const particles = new THREE.Points(pGeo, pMat);
    cardGroup.add(particles);

    // 9. Mouse / Drag Interaction
    const handleMouseDown = (e) => {
      isDraggingRef.current = true;
      prevMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      mouseParallaxRef.current.targetX = normX * 0.35;
      mouseParallaxRef.current.targetY = normY * 0.25;

      if (isDraggingRef.current && cardGroupRef.current) {
        const deltaX = e.clientX - prevMouseRef.current.x;
        const deltaY = e.clientY - prevMouseRef.current.y;

        cardGroupRef.current.rotation.y += deltaX * 0.012;
        cardGroupRef.current.rotation.x += deltaY * 0.012;

        prevMouseRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    // Touch support for mobile
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        prevMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e) => {
      if (isDraggingRef.current && e.touches.length === 1 && cardGroupRef.current) {
        const deltaX = e.touches[0].clientX - prevMouseRef.current.x;
        const deltaY = e.touches[0].clientY - prevMouseRef.current.y;

        cardGroupRef.current.rotation.y += deltaX * 0.015;
        cardGroupRef.current.rotation.x += deltaY * 0.015;

        prevMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
    };

    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // 10. Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse parallax lerp
      mouseParallaxRef.current.x += (mouseParallaxRef.current.targetX - mouseParallaxRef.current.x) * 0.05;
      mouseParallaxRef.current.y += (mouseParallaxRef.current.targetY - mouseParallaxRef.current.y) * 0.05;

      if (cardGroupRef.current) {
        if (!isDraggingRef.current) {
          if (autoRotateRef.current) {
            // Gentle continuous 3D idle float
            cardGroupRef.current.rotation.y += 0.008;
            cardGroupRef.current.rotation.x = THREE.MathUtils.lerp(
              cardGroupRef.current.rotation.x,
              Math.sin(elapsedTime * 1.2) * 0.12 + mouseParallaxRef.current.y,
              0.05
            );
          } else {
            // Spring to parallax orientation
            cardGroupRef.current.rotation.y = THREE.MathUtils.lerp(
              cardGroupRef.current.rotation.y,
              mouseParallaxRef.current.x,
              0.05
            );
            cardGroupRef.current.rotation.x = THREE.MathUtils.lerp(
              cardGroupRef.current.rotation.x,
              mouseParallaxRef.current.y,
              0.05
            );
          }
          // Slight levitation floating bobbing
          cardGroupRef.current.position.y = Math.sin(elapsedTime * 1.8) * 0.06;
        }

        // Rotate subtle rings and particles
        ring1.rotation.z += 0.005;
        ring2.rotation.z -= 0.004;
        particles.rotation.y += 0.006;

        // Telemetry state update for UI
        const degX = Math.round(cardGroupRef.current.rotation.x * (180 / Math.PI));
        const degY = Math.round(cardGroupRef.current.rotation.y * (180 / Math.PI)) % 360;
        setRotationData({ x: degX, y: degY });
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      renderer.dispose();
    };
  }, []);

  const handleReset = () => {
    if (cardGroupRef.current) {
      cardGroupRef.current.rotation.set(0, 0, 0);
      mouseParallaxRef.current = { x: 0, y: 0, targetX: 0, targetY: 0 };
    }
  };

  const toggleWireframe = () => {
    setWireframeMode((prev) => {
      const next = !prev;
      if (frameRef.current) {
        frameRef.current.material.opacity = next ? 1.0 : 0.6;
        frameRef.current.scale.set(next ? 1.06 : 1.0, next ? 1.06 : 1.0, next ? 1.06 : 1.0);
      }
      return next;
    });
  };

  return (
    <div className="relative w-full rounded-sm bg-black border border-cyan-500/40 shadow-2xl shadow-cyan-950/60 overflow-hidden select-none">
      
      {/* Top Workstation Monitor Header */}
      <div className="flex items-center justify-between px-3 py-2 bg-stone-950/90 border-b border-stone-800 text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping inline-block" />
          <span className="text-cyan-300 font-bold tracking-wider">3D_HOLOGRAPHIC_PORTRAIT.OBJ</span>
        </div>
        <div className="flex items-center gap-2 text-stone-400 text-[10px]">
          <span className="text-emerald-400">ROT_X: {rotationData.x}°</span>
          <span>|</span>
          <span className="text-cyan-400">ROT_Y: {rotationData.y}°</span>
        </div>
      </div>

      {/* 3D Canvas Mount */}
      <div
        ref={mountRef}
        className="w-full h-[380px] sm:h-[440px] cursor-grab active:cursor-grabbing relative z-0 flex items-center justify-center bg-radial-gradient"
      >
        {/* Fallback & Loading Shimmer */}
        {!textureLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-10 text-xs font-mono text-cyan-400 space-y-2">
            <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
            <span>INITIALIZING 3D PHOTO TEXTURE...</span>
          </div>
        )}

        {/* 3D Hologram Corner HUD Brackets */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400/70 pointer-events-none" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400/70 pointer-events-none" />
        <div className="absolute bottom-12 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400/70 pointer-events-none" />
        <div className="absolute bottom-12 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400/70 pointer-events-none" />

        {/* Floating Instruction Banner */}
        <div className="absolute top-4 inset-x-0 mx-auto w-fit px-3 py-1 bg-black/80 backdrop-blur-sm border border-cyan-500/30 rounded text-[10px] font-mono text-stone-300 pointer-events-none shadow-lg">
          🖱️ Click & drag to spin photo 360° in 3D · Hover for parallax
        </div>
      </div>

      {/* Bottom Interactive 3D Control Strip */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2.5 bg-stone-950/95 border-t border-stone-800 text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className={`px-2.5 py-1 rounded text-[10px] font-semibold transition-colors ${
              isRotating
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'bg-stone-800 text-stone-400 border border-stone-700 hover:text-white'
            }`}
          >
            {isRotating ? 'Auto-Rotate: ON' : 'Auto-Rotate: PAUSED'}
          </button>
          <button
            onClick={handleReset}
            className="px-2.5 py-1 rounded text-[10px] bg-stone-900 border border-stone-700 text-stone-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
          >
            Reset Angle
          </button>
          <button
            onClick={toggleWireframe}
            className={`px-2.5 py-1 rounded text-[10px] transition-colors ${
              wireframeMode
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-stone-900 border border-stone-700 text-stone-400 hover:text-white'
            }`}
          >
            {wireframeMode ? 'Wireframe: ON' : 'Wireframe: OFF'}
          </button>
        </div>

        <div className="text-[10px] text-stone-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>WEBGL_DEPTH: 3D_SHADER</span>
        </div>
      </div>

      {/* Lower Identity Watermark */}
      <div className="px-3.5 py-2 bg-black border-t border-stone-900 flex items-center justify-between text-xs font-mono">
        <div>
          <span className="text-white font-bold font-serif">Ankana Das</span>
          <span className="text-stone-500 text-[11px] ml-2">Adamas University</span>
        </div>
        <span className="text-cyan-400 font-semibold text-[11px]">ankanadas.com</span>
      </div>

    </div>
  );
}
