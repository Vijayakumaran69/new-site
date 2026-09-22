import * as THREE from "three";

// 1. Energy Shield Shader (Cybersecurity defensive barrier)
export const ShieldShader = {
  uniforms: {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color("#00F0FF") },
    uScanColor: { value: new THREE.Color("#38BDF8") },
    uPulseSpeed: { value: 2.0 },
    uOpacity: { value: 0.6 },
  },
  vertexShader: `
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec2 vUv;

    void main() {
      vNormal = normalize(normalMatrix * normal);
      vPosition = position;
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor;
    uniform vec3 uScanColor;
    uniform float uPulseSpeed;
    uniform float uOpacity;

    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec2 vUv;

    void main() {
      // Fresnel rim lighting
      vec3 viewDir = normalize(-vPosition);
      float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), 2.5);

      // Scanning wave line along height
      float scanLine = sin(vPosition.y * 8.0 - uTime * uPulseSpeed) * 0.5 + 0.5;
      scanLine = pow(scanLine, 4.0);

      // Grid pattern
      vec2 gridUv = fract(vUv * 20.0);
      float grid = (step(0.04, gridUv.x) * step(0.04, gridUv.y));
      float gridPattern = 1.0 - grid;

      vec3 finalColor = mix(uColor, uScanColor, scanLine) + fresnel * uScanColor + gridPattern * uColor * 0.4;
      float alpha = (fresnel * 0.8 + scanLine * 0.4 + gridPattern * 0.2) * uOpacity;

      gl_FragColor = vec4(finalColor, clamp(alpha, 0.0, 1.0));
    }
  `,
};

// 2. Data Flow Shader (Technology & Cyber Range pipeline vector streams)
export const FlowShader = {
  uniforms: {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color("#00F0FF") },
    uSpeed: { value: 1.5 },
  },
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vPosition;
    void main() {
      vUv = uv;
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor;
    uniform float uSpeed;

    varying vec2 vUv;
    varying vec3 vPosition;

    void main() {
      float pulse = sin((vUv.x - uTime * uSpeed) * 12.0) * 0.5 + 0.5;
      pulse = pow(pulse, 3.0);

      float glow = 1.0 - abs(vUv.y - 0.5) * 2.0;
      glow = pow(glow, 2.0);

      vec3 col = uColor * (0.4 + pulse * 1.6);
      float alpha = (pulse * 0.7 + 0.3) * glow;

      gl_FragColor = vec4(col, alpha);
    }
  `,
};

// 3. Dissolve / Rebuild Shader (Insights & Contact page fragment aggregation)
export const DissolveShader = {
  uniforms: {
    uTime: { value: 0 },
    uProgress: { value: 0.0 },
    uColor: { value: new THREE.Color("#38BDF8") },
    uEdgeColor: { value: new THREE.Color("#00F0FF") },
  },
  vertexShader: `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    void main() {
      vPosition = position;
      vNormal = normal;
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform float uProgress;
    uniform vec3 uColor;
    uniform vec3 uEdgeColor;

    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;

    // Simplex noise approximation
    float noise(vec3 p) {
      return sin(p.x * 4.0 + uTime) * cos(p.y * 4.0 + uTime) * sin(p.z * 4.0);
    }

    void main() {
      float n = noise(vPosition) * 0.5 + 0.5;
      if (n < uProgress) discard;

      float edge = smoothstep(uProgress, uProgress + 0.15, n);
      vec3 finalCol = mix(uEdgeColor * 3.0, uColor, edge);

      gl_FragColor = vec4(finalCol, 1.0);
    }
  `,
};
