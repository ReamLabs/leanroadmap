'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import * as THREE from 'three';
import { Line } from '@react-three/drei';

function Beams(props: any) {
  const linesRef = useRef<THREE.Group>(null);
  const beamRefs = useRef<any[]>([]);

  // Create beams as line segments
  const count = 1000;

  // Use useMemo to create the geometry only once
  const beams = useMemo(() => {
    const beamData = [];
    const radius = 1.5;

    for (let i = 0; i < count; i++) {
      // Random position for the beam
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * Math.cbrt(Math.random());

      // Start point of the beam
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      // Vary beam length - some short, some long
      const beamLength = 0.03 + Math.random() * 0.12; // Between 0.03 and 0.15

      // Create points for the beam
      const points = [new THREE.Vector3(x, y, z), new THREE.Vector3(x + beamLength, y, z)];

      // Color
      const intensity = 0.1 + Math.random() * 0.2;
      const color = new THREE.Color(0.5 * intensity, 0.8 * intensity, 1.0 * intensity);

      // Random thickness for each beam
      const thickness = 0.5 + Math.random() * 1.5; // Between 1 and 2

      beamData.push({
        points,
        color,
        length: beamLength,
        thickness,
        originalPosition: new THREE.Vector3(x, y, z),
      });
    }

    return beamData;
  }, [count]);

  useFrame((state, delta) => {
    if (linesRef.current && beamRefs.current.length === count) {
      beams.forEach((beam, i) => {
        const line = beamRefs.current[i];
        if (!line) return;

        // Calculate speed inversely proportional to beam length
        // Shorter beams move faster, longer beams move slower
        const baseSpeed = 0.4;
        const lengthFactor = 0.1 / beam.length;
        const thicknessFactor = 2 / beam.thickness;
        const speed = baseSpeed * lengthFactor * thicknessFactor;

        // Move the beam to the left
        line.position.x -= delta * speed;

        // If a beam moves too far left, reset it to the right side
        if (line.position.x < -2) {
          const resetAmount = 4; // Move from -2 to +2
          line.position.x += resetAmount;

          // Randomize y and z slightly when resetting
          const yOffset = Math.random() * 0.2 - 0.1;
          const zOffset = Math.random() * 0.2 - 0.1;
          line.position.y = beam.originalPosition.y + yOffset;
          line.position.z = beam.originalPosition.z + zOffset;
        }
      });
    }
  });

  return (
    <group ref={linesRef}>
      {beams.map((beam, i) => (
        <Line
          key={i}
          ref={(el) => {
            if (el) beamRefs.current[i] = el;
          }}
          points={beam.points}
          color={beam.color}
          lineWidth={beam.thickness} // Randomized thickness for each beam
          transparent
          opacity={0.1} // Reduced by 60% from 0.25
        />
      ))}
    </group>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Beams />
      </Canvas>
    </div>
  );
}
