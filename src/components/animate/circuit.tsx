import React, { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
}

export const SignalzAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const signalzRef = useRef<Signalz | null>(null);

  // Classe Line
  class Line {
    location: Point;
    width: number;
    color: string;

    constructor(x: number, y: number) {
      this.location = { x, y };
      this.width = Math.random() * 1 + 0.25;
      this.color = `rgba(255, 255, 255, 1)`; // Branco com opacidade variável
    }
  }

  // Classe Signalz
  class Signalz {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    center: Point;
    drawNo: number;
    linesNo: number;
    linesSize: number;
    lines: Line[];

    constructor(canvas: HTMLCanvasElement) {
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d")!;
      this.center = { x: 0, y: 0 };
      this.drawNo = 0;
      this.linesNo = 50;
      this.linesSize = 20;
      this.lines = [];

      this.init();
    }

    init() {
      this.setup();

      // criar linhas
      for (let i = 0; i < this.linesNo; i++) {
        this.lines.push(new Line(this.center.x, this.center.y));
      }
    }

    setup() {
      // obter tamanho real do container
      const parentElement = this.canvas.parentElement;
      if (!parentElement) return;

      const rect = parentElement.getBoundingClientRect();
      const devicePixelRatio = window.devicePixelRatio || 1;

      // definir canvas para tamanho real do container com device pixel ratio
      this.canvas.width = rect.width * devicePixelRatio;
      this.canvas.height = rect.height * devicePixelRatio;

      // ajustar escala do contexto para device pixel ratio
      this.ctx.scale(devicePixelRatio, devicePixelRatio);

      // calcular centro baseado no tamanho real
      this.center.x = Math.round(rect.width / 2);
      this.center.y = Math.round(rect.height / 2);
    }

    onScreenResize() {
      // obter tamanho real do container
      const parentElement = this.canvas.parentElement;
      if (!parentElement) return;

      const rect = parentElement.getBoundingClientRect();
      const devicePixelRatio = window.devicePixelRatio || 1;

      // redefinir canvas para tamanho real do container com device pixel ratio
      this.canvas.width = rect.width * devicePixelRatio;
      this.canvas.height = rect.height * devicePixelRatio;

      // ajustar escala do contexto para device pixel ratio
      this.ctx.scale(devicePixelRatio, devicePixelRatio);

      // recalcular centro baseado no tamanho real
      this.center.x = Math.round(rect.width / 2);
      this.center.y = Math.round(rect.height / 2);

      // recentrar linhas
      this.lines.forEach((line: Line) => {
        line.location.x = this.center.x;
        line.location.y = this.center.y;
      });
    }

    draw() {
      // obter dimensões reais do container
      const parentElement = this.canvas.parentElement;
      if (!parentElement) return;

      const rect = parentElement.getBoundingClientRect();

      // limpar canvas com trail effect sutil
      this.ctx.globalAlpha = 0.95; // Efeito trail mantendo 95% do frame anterior
      this.ctx.globalCompositeOperation = "destination-out";
      this.ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
      this.ctx.fillRect(0, 0, rect.width, rect.height);
      this.ctx.globalCompositeOperation = "source-over";
      this.ctx.globalAlpha = 1;

      // atualizar número do desenho
      this.drawNo++;
      if (this.drawNo % 2 === 1) {
        return;
      }

      // desenhar e atualizar linhas
      for (let idx = 0; idx < this.lines.length; idx++) {
        const line = this.lines[idx];
        const lineSize = this.linesSize;

        // direção aleatória
        let dir = ~~(Math.random() * 3) * 90;
        if (idx % 4 === dir / 90) {
          dir = 270;
        }

        // começar caminho da linha
        this.ctx.lineWidth = line.width;
        this.ctx.strokeStyle = line.color;
        this.ctx.beginPath();
        this.ctx.moveTo(line.location.x, line.location.y);

        // mudar direção
        switch (dir) {
          case 0:
            line.location.y -= lineSize;
            break;
          case 90:
            line.location.x += lineSize;
            break;
          case 180:
            line.location.y += lineSize;
            break;
          case 270:
            line.location.x -= lineSize;
            break;
          default:
            break;
        }

        // mover linha para
        this.ctx.lineTo(line.location.x, line.location.y);

        // resetar localização da linha se fora da tela
        if (
          line.location.x < 0 ||
          line.location.x > rect.width ||
          line.location.y < 0 ||
          line.location.y > rect.height
        ) {
          line.location.x = this.center.x;
          line.location.y = this.center.y;
        }

        // desenhar linha
        this.ctx.stroke();
      }
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Inicializar Signalz
    signalzRef.current = new Signalz(canvas);

    // Função de animação
    const animate = () => {
      if (signalzRef.current) {
        signalzRef.current.draw();
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    // Iniciar animação
    animate();

    // Handler de resize
    const handleResize = () => {
      if (signalzRef.current) {
        signalzRef.current.onScreenResize();
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: "0.5",
        overflow: "hidden",
        pointerEvents: "none", // Permite clicks passarem através
        zIndex: 0, // Atrás do conteúdo
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          imageRendering: "pixelated", // Mantém qualidade em dispositivos de alta densidade
        }}
      />


      <style jsx>{`
        @keyframes borderColor {
          0% {
            border-color: rgba(255, 255, 255, 1);
          }
          20% {
            border-color: rgba(255, 255, 255, 0.9);
          }
          40% {
            border-color: rgba(255, 255, 255, 0.8);
          }
          60% {
            border-color: rgba(255, 255, 255, 0.7);
          }
          80% {
            border-color: rgba(255, 255, 255, 0.85);
          }
          100% {
            border-color: rgba(255, 255, 255, 0.95);
          }
        }
      `}</style>
    </div>
  );
};
