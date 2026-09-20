import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, Eye, Compass } from 'lucide-react';

export default function Hero3D() {
  const mountRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [wireframeMode, setWireframeMode] = useState(false);
  const wireframeRef = useRef(wireframeMode);
  wireframeRef.current = wireframeMode;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 480;
    const height = container.clientHeight || 480;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for all core elements
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Inner Core: Icosahedron
    const coreGeom = new THREE.IcosahedronGeometry(1.6, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x050c1e,
      roughness: 0.2,
      metalness: 0.85,
      wireframe: false,
      emissive: 0x002244,
      emissiveIntensity: 0.5
    });
    const coreMesh = new THREE.Mesh(coreGeom, coreMat);
    coreGroup.add(coreMesh);

    // 2. Wireframe Overlay
    const wireGeom = new THREE.IcosahedronGeometry(1.64, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.85
    });
    const wireMesh = new THREE.Mesh(wireGeom, wireMat);
    coreGroup.add(wireMesh);

    // 3. Inner Glowing Sphere (AI Core)
    const glowGeom = new THREE.SphereGeometry(1.0, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x8a2be2,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const glowMesh = new THREE.Mesh(glowGeom, glowMat);
    coreGroup.add(glowMesh);

    // 4. Outer Holographic Rings (Gimbal / Orbiters)
    const ring1Geom = new THREE.TorusGeometry(2.3, 0.025, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0x00f2fe, transparent: true, opacity: 0.7 });
    const ring1 = new THREE.Mesh(ring11Geom(ring1Geom), ring1Mat);
    function ring11Geom(g) { return g; }
    coreGroup.add(ring1);

    const ring2Geom = new THREE.TorusGeometry(2.7, 0.02, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xec4899, transparent: true, opacity: 0.6 });
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2.rotation.x = Math.PI / 3;
    ring2.rotation.y = Math.PI / 4;
    coreGroup.add(ring2);

    const ring3Geom = new THREE.TorusGeometry(3.1, 0.015, 16, 100);
    const ring3Mat = new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.5 });
    const ring3 = new THREE.Mesh(ring3Geom, ring3Mat);
    ring3.rotation.x = -Math.PI / 4;
    ring3.rotation.z = Math.PI / 6;
    coreGroup.add(ring3);

    // 5. Satellite Neural Nodes (Orbiting Spheres)
    const satellites = [];
    const satCount = 6;
    const satGeom = new THREE.SphereGeometry(0.12, 16, 16);
    const satMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });

    for (let i = 0; i < satCount; i++) {
      const satMesh = new THREE.Mesh(satGeom, satMat);
      coreGroup.add(satMesh);
      satellites.push({
        mesh: satMesh,
        orbitRadius: 2.2 + (i % 3) * 0.45,
        speed: 0.015 + (i * 0.005),
        angle: (i * Math.PI * 2) / satCount,
        inclination: (i * Math.PI) / 4
      });
    }

    // 6. Floating Sparks / Point Cloud
    const sparkCount = 120;
    const sparkGeom = new THREE.BufferGeometry();
    const sparkPos = new Float32Array(sparkCount * 3);
    for (let i = 0; i < sparkCount * 3; i += 3) {
      const radius = 2.5 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      sparkPos[i] = radius * Math.sin(phi) * Math.cos(theta);
      sparkPos[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      sparkPos[i + 2] = radius * Math.cos(phi);
    }
    sparkGeom.setAttribute('position', new THREE.BufferAttribute(sparkPos, 3));
    const sparkMat = new THREE.PointsMaterial({
      size: 0.08,
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    const sparks = new THREE.Points(sparkGeom, sparkMat);
    coreGroup.add(sparks);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLightCyan = new THREE.PointLight(0x00f2fe, 4, 15);
    pointLightCyan.position.set(4, 3, 4);
    scene.add(pointLightCyan);

    const pointLightPurple = new THREE.PointLight(0xa855f7, 3.5, 15);
    pointLightPurple.position.set(-4, -3, -2);
    scene.add(pointLightPurple);

    // Mouse Dragging & Inertia
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotationVelocity = { x: 0.003, y: 0.005 };

    const onMouseDown = (e) => {
      isDragging = true;
      setIsInteracting(true);
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      rotationVelocity.y = deltaX * 0.005;
      rotationVelocity.x = deltaY * 0.005;

      coreGroup.rotation.y += rotationVelocity.y;
      coreGroup.rotation.x += rotationVelocity.x;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
      setTimeout(() => setIsInteracting(false), 800);
    };

    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        setIsInteracting(true);
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;

      rotationVelocity.y = deltaX * 0.006;
      rotationVelocity.x = deltaY * 0.006;

      coreGroup.rotation.y += rotationVelocity.y;
      coreGroup.rotation.x += rotationVelocity.x;

      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    domElement.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onMouseUp);

    // Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Dynamic rotation with inertia
      if (!isDragging) {
        coreGroup.rotation.y += rotationVelocity.y;
        coreGroup.rotation.x += rotationVelocity.x;

        // Slow down back to baseline idle spin
        rotationVelocity.x += (0.002 - rotationVelocity.x) * 0.03;
        rotationVelocity.y += (0.004 - rotationVelocity.y) * 0.03;
      }

      // Individual ring animations
      ring1.rotation.z += 0.01;
      ring2.rotation.x += 0.008;
      ring3.rotation.y -= 0.007;

      // Glow pulsation
      glowMesh.scale.setScalar(1 + Math.sin(elapsedTime * 2) * 0.08);

      // Satellite node orbits
      satellites.forEach((sat) => {
        sat.angle += sat.speed;
        sat.mesh.position.x = Math.cos(sat.angle) * sat.orbitRadius;
        sat.mesh.position.y = Math.sin(sat.angle * 1.5) * (sat.orbitRadius * 0.5);
        sat.mesh.position.z = Math.sin(sat.angle) * sat.orbitRadius;
      });

      // Sparks slow spin
      sparks.rotation.y -= 0.002;

      // Wireframe toggle update
      coreMat.wireframe = wireframeRef.current;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElement.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseUp);
      window.removeEventListener('resize', handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      coreGeom.dispose();
      coreMat.dispose();
      wireGeom.dispose();
      wireMat.dispose();
      glowGeom.dispose();
      glowMat.dispose();
      ring1Geom.dispose();
      ring1Mat.dispose();
      ring2Geom.dispose();
      ring2Mat.dispose();
      ring3Geom.dispose();
      ring3Mat.dispose();
      satGeom.dispose();
      satMat.dispose();
      sparkGeom.dispose();
      sparkMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center">
      {/* 3D WebGL Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center relative"
      />

      {/* Floating 3D HUD Badges */}
      <div className="absolute top-4 left-4 sm:left-8 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 text-xs font-mono text-cyan-300 flex items-center gap-2 shadow-lg shadow-cyan-950/40 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
        <span>AI NEURAL CORE v2.4</span>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-slate-900/85 backdrop-blur-md border border-slate-700/60 text-xs text-slate-300 flex items-center gap-2 shadow-xl shadow-black/50 select-none pointer-events-none">
        <Compass className={`w-4 h-4 text-cyan-400 ${isInteracting ? 'animate-spin' : ''}`} />
        <span>Click & drag to rotate in 3D</span>
      </div>

      {/* Wireframe toggle control */}
      <button
        onClick={() => setWireframeMode(!wireframeMode)}
        className="absolute top-4 right-4 sm:right-8 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/60 hover:border-cyan-400/50 text-slate-300 hover:text-cyan-300 transition-all text-xs flex items-center gap-1.5 shadow-lg group"
        title="Toggle Wireframe Shading"
      >
        <Eye className="w-3.5 h-3.5 group-hover:scale-110 transition-transform text-cyan-400" />
        <span className="font-mono text-[11px] hidden sm:inline">
          {wireframeMode ? "Solid Mode" : "Wireframe"}
        </span>
      </button>
    </div>
  );
}
