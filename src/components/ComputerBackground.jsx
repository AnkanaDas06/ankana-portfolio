import React from 'react';
import Background3D from './Background3D';

export default function ComputerBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black" aria-hidden="true">
      {/* 1. Deep Pure Black Base */}
      <div className="absolute inset-0 bg-[#000000]" />

      {/* 2. Computer Workstation Coordinate Grid */}
      <div className="absolute inset-0 bg-computer-grid opacity-70" />

      {/* 3. Subtle Ambient Workstation Radial Monitors Glow */}
      <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px]" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px]" />
      <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px]" />

      {/* 4. Subtle Watermark Computer Code Streams */}
      <div className="absolute inset-0 select-none opacity-[0.035] font-mono text-[10px] leading-tight text-cyan-400 p-8 overflow-hidden pointer-events-none flex flex-col justify-between">
        <div>
          <p># Adamas University CSE (AI/ML) Research Cluster Node #01</p>
          <p>import torch, torchvision, faiss, numpy as np</p>
          <p>from transformers import AutoTokenizer, CodeBERTForSequenceClassification</p>
          <p>def parse_ast_semantic_tokens(source_code: str) -&gt; torch.Tensor:</p>
          <p>    tree = libcst.parse_module(source_code)</p>
          <p>    return CodeBERT.encode(tree.semantic_graph)</p>
        </div>
        <div>
          <p>// High-Performance C++20 Memory Allocation Layer</p>
          <p>template &lt;typename T, std::size_t BlockSize&gt;</p>
          <p>class CustomFixedMemoryPool : public std::pmr::memory_resource &#123;</p>
          <p>    alignas(64) std::byte pool_storage[BlockSize * sizeof(T)];</p>
          <p>    std::atomic&lt;std::size_t&gt; alloc_offset&#123;0&#125;;</p>
          <p>&#125;;</p>
        </div>
        <div>
          <p>// CAAQMS Multi-Station Atmospheric Photochemical Regimes</p>
          <p>SELECT station_id, timestamp, NO2, O3, PM25, Temp, RH FROM caaqms_stream</p>
          <p>WHERE timestamp BETWEEN '2025-08-01' AND '2026-03-31'</p>
          <p>APPLY knn_impute(k=5, metric='euclidean') |&gt; hampel_filter(window=7, n_sigmas=3);</p>
        </div>
      </div>

      {/* 5. 3D WebGL Particle Constellation */}
      <Background3D />

      {/* 6. Subtle CRT Scanline Mesh Overlay */}
      <div className="absolute inset-0 scanline-overlay opacity-20" />
    </div>
  );
}
