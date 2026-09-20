import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { cvData } from '../data/cvData';

export default function Photo3D() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [imageError, setImageError] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0, rotX: 0, rotY: 0 });

  // 1. Ambient WebGL Particle Constellation in 3D Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.parentElement.clientWidth || 380;
    const height = canvas.parentElement.clientHeight || 480;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 4.5;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particle field
    const particleCount = 60;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 6;
      pos[i + 1] = (Math.random() - 0.5) * 6;
      pos[i + 2] = (Math.random() - 0.5) * 4;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
      color: 0x06b6d4,
      size: 0.04,
      transparent: true,
      opacity: 0.65
    });
    const points = new THREE.Points(geo, mat);
    scene.add(points);

    // Orbit Ring
    const ringGeo = new THREE.RingGeometry(1.9, 1.92, 48);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x0ea5e9, side: THREE.DoubleSide, transparent: true, opacity: 0.3 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.8;
    scene.add(ring);

    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      points.rotation.y = elapsed * 0.08;
      points.rotation.x = Math.sin(elapsed * 0.05) * 0.1;
      ring.rotation.z = -elapsed * 0.12;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!canvas.parentElement) return;
      const w = canvas.parentElement.clientWidth;
      const h = canvas.parentElement.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  // 2. Idle 3D floating animation
  useEffect(() => {
    if (!isAutoRotate || isDragging) return;
    let animId;
    let t = 0;
    const loop = () => {
      t += 0.03;
      setRotate({
        x: Math.sin(t * 0.7) * 8,
        y: Math.cos(t * 0.5) * 14
      });
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isAutoRotate, isDragging]);

  // 3. Mouse Tilt & Drag Handler
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (isDragging) {
      const deltaX = e.clientX - dragStartRef.current.x;
      const deltaY = e.clientY - dragStartRef.current.y;
      setRotate({
        x: Math.max(-30, Math.min(30, dragStartRef.current.rotX - deltaY * 0.2)),
        y: Math.max(-45, Math.min(45, dragStartRef.current.rotY + deltaX * 0.25))
      });
    } else if (!isAutoRotate) {
      const normX = (x / rect.width) * 2 - 1;
      const normY = (y / rect.height) * 2 - 1;
      setRotate({
        x: -normY * 16,
        y: normX * 22
      });
    }

    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25
    });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsAutoRotate(false);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      rotX: rotate.x,
      rotY: rotate.y
    };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setGlare({ ...glare, opacity: 0 });
    if (!isAutoRotate) {
      setRotate({ x: 0, y: 0 });
    }
  };

  const photoSource = imageError ? './ankana-photo.jpg' : (cvData.personal.photo || './ankana-photo.jpg');

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      className="relative w-full rounded-sm bg-black border border-cyan-500/40 shadow-2xl shadow-cyan-950/60 overflow-hidden select-none cursor-grab active:cursor-grabbing group"
      style={{ perspective: '1200px' }}
    >
      {/* Background WebGL Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Top Workstation Header */}
      <div className="relative z-10 flex items-center justify-between px-3 py-2 bg-stone-950/90 border-b border-stone-800 text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
          <span className="text-cyan-300 font-bold tracking-wider">3D_HOLOGRAPHIC_PORTRAIT.SYS</span>
        </div>
        <div className="flex items-center gap-2 text-stone-400 text-[10px]">
          <span className="text-emerald-400">ROT_X: {Math.round(rotate.x)}°</span>
          <span>|</span>
          <span className="text-cyan-400">ROT_Y: {Math.round(rotate.y)}°</span>
        </div>
      </div>

      {/* 3D Card Stage */}
      <div className="relative z-10 p-4 sm:p-5 flex items-center justify-center min-h-[400px] sm:min-h-[440px]">
        
        {/* The 3D Interactive Tilting Slab */}
        <div
          className="relative w-full max-w-[280px] sm:max-w-[320px] rounded-lg overflow-hidden border-2 border-cyan-500/60 shadow-2xl transition-transform duration-100 ease-out"
          style={{
            transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.02, 1.02, 1.02)`,
            transformStyle: 'preserve-3d',
            boxShadow: `${-rotate.y * 0.8}px ${rotate.x * 0.8}px 35px rgba(6, 182, 212, 0.25), 0 20px 40px rgba(0,0,0,0.8)`
          }}
        >
          {/* Real Photo Element (100% Guaranteed to Load) */}
          <div className="relative overflow-hidden bg-stone-950" style={{ transform: 'translateZ(20px)' }}>
            <img
              src={photoSource}
              alt="Ankana Das - Lead Student Researcher, Adamas University"
              onError={() => setImageError(true)}
              className="w-full h-80 sm:h-96 object-cover object-top filter contrast-[1.03] transition-transform duration-500"
            />

            {/* Specular Glare Layer */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.3) 0%, rgba(6,182,212,0.15) 35%, transparent 70%)`,
                opacity: glare.opacity
              }}
            />

            {/* Scanline CRT overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-40" />

            {/* Biometric Laser Reticle (3D Pop Layer) */}
            <div
              className="absolute top-4 right-4 px-2 py-0.5 rounded bg-black/80 border border-cyan-400 text-[10px] font-mono text-cyan-300 pointer-events-none shadow-lg"
              style={{ transform: 'translateZ(40px)' }}
            >
              ● BIOMETRIC_LOCKED
            </div>

            {/* 3D Corner Reticles */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400 pointer-events-none" style={{ transform: 'translateZ(30px)' }} />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400 pointer-events-none" style={{ transform: 'translateZ(30px)' }} />
            <div className="absolute bottom-16 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400 pointer-events-none" style={{ transform: 'translateZ(30px)' }} />
            <div className="absolute bottom-16 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400 pointer-events-none" style={{ transform: 'translateZ(30px)' }} />

            {/* Bottom 3D Info Overlay */}
            <div
              className="absolute bottom-0 inset-x-0 p-3 bg-black/90 backdrop-blur-md border-t border-cyan-500/30 text-xs font-mono"
              style={{ transform: 'translateZ(35px)' }}
            >
              <div className="flex items-center justify-between">
                <span className="text-white font-bold font-serif text-sm">Ankana Das</span>
                <span className="text-cyan-400 text-[11px]">ankanadas.com</span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-stone-300 pt-0.5 border-t border-stone-800/80 mt-1">
                <span className="text-stone-400">Adamas University</span>
                <span className="text-emerald-400 font-semibold">B.Tech CSE (AI/ML)</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Controls Strip */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 px-3 py-2.5 bg-stone-950/95 border-t border-stone-800 text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAutoRotate(!isAutoRotate)}
            className={`px-2.5 py-1 rounded text-[10px] font-semibold transition-colors ${
              isAutoRotate
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'bg-stone-800 text-stone-400 border border-stone-700 hover:text-white'
            }`}
          >
            {isAutoRotate ? 'Auto-Rotate: ON' : 'Auto-Rotate: PAUSED'}
          </button>
          <button
            onClick={() => { setRotate({ x: 0, y: 0 }); setIsAutoRotate(false); }}
            className="px-2.5 py-1 rounded text-[10px] bg-stone-900 border border-stone-700 text-stone-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
          >
            Reset Angle
          </button>
        </div>

        <div className="text-[10px] text-stone-400 flex items-center gap-1.5">
          <span className="text-cyan-300">🖱️ Drag to rotate 3D</span>
          <span>·</span>
          <span className="text-emerald-400">DEPTH: Z-3D</span>
        </div>
      </div>
    </div>
  );
}
