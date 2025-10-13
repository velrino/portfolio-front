import React, { useEffect, useRef } from "react";

interface ParticleSpeed {
  x: number;
  y: number;
}

class Particle {
  x: number;
  y: number;
  speed: ParticleSpeed;
  color: string;
  ang: number = 0;
  mag: number = 0;
  trail: { x: number; y: number }[] = [];
  maxTrailLength: number;

  constructor(
    x: number,
    y: number,
    speed: ParticleSpeed,
    color: string,
    maxTrailLength: number = 20
  ) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.color = color;
    this.maxTrailLength = maxTrailLength;
  }

  update(ctx: CanvasRenderingContext2D): void {
    // Add current position to trail
    this.trail.push({ x: this.x, y: this.y });
    if (this.trail.length > this.maxTrailLength) {
      this.trail.shift();
    }

    // Draw trail with fading opacity
    for (let i = 0; i < this.trail.length - 1; i++) {
      const opacity = (i / this.trail.length) * 0.8;
      ctx.strokeStyle = this.color.replace(/[\d.]+\)$/, `${opacity})`);
      ctx.lineWidth = 1;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(this.trail[i].x, this.trail[i].y);
      ctx.lineTo(this.trail[i + 1].x, this.trail[i + 1].y);
      ctx.stroke();
    }

    // Draw current segment
    if (this.trail.length > 0) {
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 1;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(
        this.trail[this.trail.length - 1].x,
        this.trail[this.trail.length - 1].y
      );
      ctx.lineTo(this.x, this.y);
      ctx.stroke();
    }

    this.x += this.speed.x;
    this.y += this.speed.y;

    this.ang = Math.atan2(this.speed.y, this.speed.x);
    this.mag = Math.sqrt(this.speed.x ** 2 + this.speed.y ** 2);

    const options = [this.ang + Math.PI / 4, this.ang - Math.PI / 4];
    const choice = Math.floor(Math.random() * options.length);

    if (Math.random() < 0.05) {
      this.speed.x = Math.cos(options[choice]) * this.mag;
      this.speed.y = Math.sin(options[choice]) * this.mag;
    }
  }
}

interface CircuitProps {
  particleSpeed?: number;
  pulsePeriod?: number;
  particlesPerPulse?: number;
  trailLength?: number;
}

export const CircuitPulse: React.FC<CircuitProps> = ({
  particleSpeed = 2,
  pulsePeriod = 1000,
  particlesPerPulse = 56,
  trailLength = 20,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const pulseTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const isVisibleRef = useRef<boolean>(true);
  const frameCount = useRef<number>(0);
  const maxParticles = 200; // Limite máximo de partículas

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const rect = parent.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;

        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        canvas.style.width = rect.width + "px";
        canvas.style.height = rect.height + "px";

        ctx.scale(dpr, dpr);
      }
    };
    updateCanvasSize();

    // Clear function
    const clear = () => {
      const parentElement = canvas.parentElement;
      if (!parentElement) return;
      const rect = parentElement.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
    };

    // Pulse function
    const pulse = () => {
      // Só cria novas partículas se estiver visível e abaixo do limite
      if (!isVisibleRef.current || particlesRef.current.length > maxParticles) {
        pulseTimeoutRef.current = setTimeout(pulse, pulsePeriod);
        return;
      }

      const lightColors = [
        "rgba(255, 255, 255, 1)",
        "rgba(240, 240, 240, 1)",
        "rgba(224, 224, 224, 1)",
        "rgba(208, 208, 208, 1)",
        "rgba(192, 192, 192, 1)",
      ];
      const randomColor =
        lightColors[Math.floor(Math.random() * lightColors.length)];
      const parent = canvas.parentElement;
      const rect = parent
        ? parent.getBoundingClientRect()
        : { width: canvas.width, height: canvas.height };
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      for (let i = 0; i < particlesPerPulse; i++) {
        const angle = (i / 8) * 2 * Math.PI;
        const particle = new Particle(
          centerX,
          centerY,
          {
            x: Math.cos(angle) * particleSpeed,
            y: Math.sin(angle) * particleSpeed,
          },
          randomColor,
          trailLength
        );
        particlesRef.current.push(particle);
      }

      pulseTimeoutRef.current = setTimeout(pulse, pulsePeriod);
    };

    // Animation loop com throttling
    const animate = () => {
      // Pula frames se não estiver visível
      if (!isVisibleRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      // Throttle para 30fps em vez de 60fps
      frameCount.current++;
      if (frameCount.current % 2 !== 0) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      clear();

      // Update and filter particles
      const parent = canvas.parentElement;
      const rect = parent
        ? parent.getBoundingClientRect()
        : { width: canvas.width, height: canvas.height };

      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.update(ctx);
        return (
          particle.x >= -50 &&
          particle.x <= rect.width + 50 &&
          particle.y >= -50 &&
          particle.y <= rect.height + 50
        );
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      updateCanvasSize();
    };

    // Handle visibility change
    const handleVisibilityChange = () => {
      isVisibleRef.current = !document.hidden;
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Intersection Observer para pausar quando não visível
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );

    if (canvas) {
      observer.observe(canvas);
    }

    // Start animation
    pulse();
    animate();

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (pulseTimeoutRef.current) {
        clearTimeout(pulseTimeoutRef.current);
      }
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (canvas) {
        observer.unobserve(canvas);
      }
      particlesRef.current = [];
    };
  }, [particleSpeed, pulsePeriod, particlesPerPulse, trailLength]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        opacity: 0.3,
        pointerEvents: "none",
      }}
    />
  );
};
