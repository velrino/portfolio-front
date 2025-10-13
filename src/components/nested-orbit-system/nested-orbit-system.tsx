import React, { useState, useEffect, useMemo } from "react";

interface Company {
  name: string;
  angle: number;
  size: number;
  image: string;
  bgColor: string;
  url: string;
}

export const NestedOrbitSystem = () => {
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 480) {
        setScale(0.65);
        setIsMobile(true);
      } else if (width <= 768) {
        setScale(0.8);
        setIsMobile(true);
      } else if (width <= 1024) {
        setScale(0.85);
        setIsMobile(false);
      } else {
        setScale(1);
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Configuração das órbitas com múltiplas empresas
  const baseOrbits = [
    {
      name: "Outer",
      size: 575,
      speed: 40,
      companies: [
        {
          name: "Google Cloud Startups",
          angle: 250,
          size: 70,
          image: "/companies/google-cloud-logo.png",
          bgColor: "bg-white",
          url: "https://cloud.google.com/startup",
        },
      ],
    },
    {
      name: "Middle",
      size: 420,
      speed: 30,
      companies: [
        {
          name: "Nivida Inception Startups",
          angle: 90,
          size: 50,
          image: "/companies/nvidia-logo.png",
          bgColor: "bg-white",
          url: "https://www.nvidia.com/en-us/startups/",
        },
        {
          name: "MongoDB Startups",
          angle: 0,
          size: 50,
          image: "/companies/mongodb-logo.png",
          bgColor: "bg-white",
          url: "https://www.mongodb.com/solutions/startups",
        },
      ],
    },
    {
      name: "Inner",
      size: 300,
      speed: 20,
      companies: [
        {
          name: "BitCoffee",
          angle: 30,
          size: 50,
          image: "/companies/bitcoffe.png",
          bgColor: "bg-[#583c2a]",
          url: "https://bitcoffee.com.br/",
        },
      ],
    },
  ];

  // Aplicar escala às órbitas
  const orbits = baseOrbits.map((orbit) => ({
    ...orbit,
    size: orbit.size * scale,
    companies: orbit.companies.map((company) => ({
      ...company,
      size: company.size * scale,
    })),
  }));

  const baseCenterLogo = {
    size: 140,
    name: "CORE",
    image: "/logo/icon-bg-white.png",
    bgColor: "bg-white",
  };

  const centerLogo = {
    ...baseCenterLogo,
    size: baseCenterLogo.size * scale,
  };

  // Renderizar empresas em uma órbita
  const renderCompanies = (
    companies: Company[],
    orbitSize: number,
    orbitSpeed: number
  ) => {
    return companies.map((company, index) => {
      const radius = orbitSize / 2;
      const angleRad = (company.angle * Math.PI) / 180;
      const x = Math.cos(angleRad) * radius;
      const y = Math.sin(angleRad) * radius;

      return (
        <div
          key={`${company.name}-${index}`}
          className="absolute"
          onClick={() => handleCompanyClick(company.url, company.name)}
          style={{
            left: "50%",
            top: "50%",
            transform: `translate(${x - company.size / 2}px, ${
              y - company.size / 2
            }px)`,
            width: `${company.size}px`,
            height: `${company.size}px`,
          }}
        >
          <div
            className={`${company.bgColor} rounded-full shadow-lg border border-white/30 hover:scale-110 hover:shadow-xl hover:border-purple-400 transition-all duration-300 cursor-pointer flex items-center justify-center overflow-hidden animate-counter-spin`}
            style={{
              animationDuration: `${orbitSpeed}s`,
            }}
          >
            <img
              src={company.image}
              alt={company.name}
              className="w-full h-full object-contain p-0.5"
            />
          </div>
        </div>
      );
    });
  };

  // Renderizar órbitas
  const renderOrbits = () => {
    return orbits.map((orbit, index) => (
      <div
        key={orbit.name}
        className="absolute flex items-center justify-center border border-white/20 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] animate-spin-orbit"
        style={{
          width: `${orbit.size}px`,
          height: `${orbit.size}px`,
          animationDuration: `${orbit.speed}s`,
          zIndex: orbits.length - index,
        }}
      >
        {renderCompanies(orbit.companies, orbit.size, orbit.speed)}
      </div>
    ));
  };

  // Gerar estrelas com posições aleatórias
  const stars = useMemo(() => {
    const starsArray = [];
    const starCount = isMobile ? 80 : 120;

    for (let i = 0; i < starCount; i++) {
      // Gerar valores aleatórios reais
      const size = Math.random() * 3 + 1; // 1-4px
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const animationDelay = Math.random() * 4; // 0-4s delay
      const animationDuration = Math.random() * 3 + 2; // 2-5s duration

      starsArray.push(
        <div
          key={i}
          className="star"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            top: `${top}%`,
            animationDelay: `${animationDelay}s`,
            animationDuration: `${animationDuration}s`,
          }}
        />
      );
    }

    return starsArray;
  }, [isMobile]);

  // Função para lidar com clique nas empresas
  const handleCompanyClick = (url: string, name: string) => {
    console.log(`Clicando em ${name}: ${url}`);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <style jsx global>{`
        @keyframes spin-orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes counter-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 40px rgba(139, 92, 246, 0.4),
              0 0 80px rgba(139, 92, 246, 0.2);
          }
          50% {
            box-shadow: 0 0 60px rgba(139, 92, 246, 0.6),
              0 0 100px rgba(139, 92, 246, 0.3);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes drift {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-20px);
          }
        }

        .animate-spin-orbit {
          animation: spin-orbit linear infinite;
        }

        .animate-counter-spin {
          animation: counter-spin linear infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .star {
          position: absolute;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(139, 92, 246, 0.4) 50%,
            transparent 100%
          );
          border-radius: 50%;
          animation: twinkle ease-in-out infinite;
        }

        .star::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.6),
            transparent
          );
          transform: translate(-50%, -50%);
        }

        .star::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 1px;
          height: 100%;
          background: linear-gradient(
            0deg,
            transparent,
            rgba(255, 255, 255, 0.6),
            transparent
          );
          transform: translate(-50%, -50%);
        }

        .stars-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }
      `}</style>

      <div className="w-full h-full min-h-screen bg-transparent flex justify-center items-center p-2 md:p-5 box-border overflow-hidden relative">
        {/* Container de estrelas */}
        <div className="stars-container">{stars}</div>

        <div
          className="aspect-square flex items-center justify-center relative"
          style={{
            width: isMobile ? "95vw" : "100%",
            maxWidth: isMobile ? "95vw" : "650px",
            height: isMobile ? "95vw" : "auto",
          }}
        >
          {/* Órbitas com empresas */}
          {renderOrbits()}

          {/* Logo central */}
          <div
            className={`absolute bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full shadow-[0_0_40px_rgba(79,70,229,0.4),0_0_80px_rgba(126,35,161,0.2)] ${
              isMobile ? "border-2" : "border-4"
            } border-purple-400/40 z-10 flex items-center justify-center overflow-hidden animate-pulse-glow`}
            style={{
              width: `${centerLogo.size}px`,
              height: `${centerLogo.size}px`,
            }}
          >
            <img
              src="/logo-white.png"
              alt={centerLogo.name}
              className={`w-full h-full object-contain ${
                isMobile ? "p-2" : "p-4"
              }`}
            />
          </div>
        </div>
      </div>
    </>
  );
};
