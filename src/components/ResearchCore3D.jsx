import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ResearchCore3D() {
  const mountRef = useRef(null);
  const [wireframeMode, setWireframeMode] = useState(false);
  const wireframeRef = useRef(wireframeMode);
  wireframeRef.current = wireframeMode;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6.8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Core Icosahedron
    const coreGeom = new THREE.IcosahedronGeometry(1.6, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x071120,
      metalness: 0.8,
      roughness: 0.25,
      emissive: 0x002b4a,
      emissiveIntensity: 0.4
    });
    const coreMesh = new THREE.Mesh(coreGeom, coreMat);
    rootGroup.add(coreMesh);

    // 2. Wireframe Overlay
    const wireGeom = new THREE.IcosahedronGeometry(1.62, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    const wireMesh = new THREE.Mesh(wireGeom, wireMat);
    rootGroup.add(wireMesh);

    // 3. Central glowing point
    const centerGeom = new THREE.SphereGeometry(0.85, 24, 24);
    const centerMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.5
    });
    const centerMesh = new THREE.Mesh(centerGeom, centerMat);
    rootGroup.add(centerMesh);

    // 4. Orbital Gimbal Rings
    const ring1Geom = new THREE.TorusGeometry(2.3, 0.02, 16, 90);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0x00f2fe, transparent: true, opacity: 0.65 });
    const ring1 = new THREE.Mesh(ring1Geom, ring1Mat);
    rootGroup.add(ring1);

    const ring2Geom = new THREE.TorusGeometry(2.65, 0.015, 16, 90);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.5 });
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2.rotation.x = Math.PI / 3;
    ring2.rotation.y = Math.PI / 4;
    rootGroup.add(ring2);

    const ring3Geom = new THREE.TorusGeometry(2.95, 0.012, 16, 90);
    const ring3Mat = new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.45 });
    const ring3 = new THREE.Mesh(ring3Geom, ring3Mat);
    ring3.rotation.x = -Math.PI / 4;
    ring3.rotation.z = Math.PI / 6;
    rootGroup.add(ring3);

    // 5. Orbiting sensor nodes
    const satCount = 5;
    const satellites = [];
    const satGeom = new THREE.SphereGeometry(0.09, 12, 12);
    const satMat = new THREE.MeshBasicMaterial({ color: 0x00f2fe });

    for (let i = 0; i < satCount; i++) {
      const mesh = new THREE.Mesh(satGeom, satMat);
      rootGroup.add(mesh);
      satellites.push({
        mesh,
        radius: 2.2 + (i % 2) * 0.5,
        speed: 0.012 + i * 0.004,
        angle: (i * Math.PI * 2) / satCount
      });
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00f2fe, 3.5, 12);
    cyanLight.position.set(3, 3, 3);
    scene.add(cyanLight);

    const blueLight = new THREE.PointLight(0x1d4ed8, 3, 12);
    blueLight.position.set(-3, -2, -2);
    scene.add(blueLight);

    // Mouse drag rotation
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let velocity = { x: 0.002, y: 0.004 };

    const onMouseDown = (e) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const dx = e.clientX - prevMouse.x;
      const dy = e.clientY - prevMouse.y;
      velocity.y = dx * 0.005;
      velocity.x = dy * 0.005;
      rootGroup.rotation.y += velocity.y;
      rootGroup.rotation.x += velocity.x;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    let animationId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      if (!isDragging) {
        rootGroup.rotation.y += velocity.y;
        rootGroup.rotation.x += velocity.x;
        velocity.x += (0.0015 - velocity.x) * 0.04;
        velocity.y += (0.003 - velocity.y) * 0.04;
      }

      ring1.rotation.z += 0.008;
      ring2.rotation.x += 0.006;
      ring3.rotation.y -= 0.005;

      centerMesh.scale.setScalar(1 + Math.sin(t * 2) * 0.06);

      satellites.forEach((s) => {
        s.angle += s.speed;
        s.mesh.position.x = Math.cos(s.angle) * s.radius;
        s.mesh.position.y = Math.sin(s.angle * 1.5) * (s.radius * 0.4);
        s.mesh.position.z = Math.sin(s.angle) * s.radius;
      });

      coreMat.wireframe = wireframeRef.current;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      dom.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      coreGeom.dispose();
      coreMat.dispose();
      wireGeom.dispose();
      wireMat.dispose();
      centerGeom.dispose();
      centerMat.dispose();
      ring1Geom.dispose();
      ring1Mat.dispose();
      ring2Geom.dispose();
      ring2Mat.dispose();
      ring3Geom.dispose();
      ring3Mat.dispose();
      satGeom.dispose();
      satMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[320px] sm:h-[380px] flex items-center justify-center">
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center"
      />

      <div className="absolute top-2 left-2 px-2.5 py-1 rounded bg-dark-900/90 border border-cyan-500/30 text-[11px] font-mono text-cyan-400 flex items-center gap-1.5 shadow pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        <span>3D NEURAL CORE · WEBLOGIC v2.4</span>
      </div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded bg-dark-900/90 border border-stone-800 text-[11px] font-mono text-stone-400 pointer-events-none">
        Drag to inspect 3D geometry
      </div>

      <button
        onClick={() => setWireframeMode(!wireframeMode)}
        className="absolute top-2 right-2 px-2.5 py-1 rounded bg-dark-900/90 hover:bg-dark-800 border border-stone-800 hover:border-cyan-500/40 text-[11px] font-mono text-stone-300 hover:text-cyan-400 transition-colors"
      >
        {wireframeMode ? 'Mode: Solid' : 'Mode: Wireframe'}
      </button>
    </div>
  );
}
