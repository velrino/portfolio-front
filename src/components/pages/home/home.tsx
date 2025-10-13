"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaEye,
  FaChartBar,
  FaCog,
  FaChartLine,
  FaBrain,
  FaLock,
  FaMap,
  FaBolt,
  FaBuilding,
  FaChartPie,
  FaMoneyBillWave,
  FaRocket,
  FaUsers,
  FaCode,
  FaShieldAlt,
  FaNewspaper,
  FaHandshake,
  FaGraduationCap,
  FaCrown,
  FaAward,
  FaGlobe,
  FaTrophy,
  FaCheckCircle,
  FaArrowRight,
  FaPlay,
  FaLinkedin,
  FaCamera,
  FaDatabase,
  FaServer,
  FaCloud,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import VideoBackground from "@/components/VideoBackground";
import { NestedOrbitSystem } from "@/components/nested-orbit-system/nested-orbit-system";
import { SignalzAnimation } from "@/components/animate/circuit";

export default function HomeComponent() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <Footer />
    </>
  );
}

export const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <div id="hero" className="relative min-h-screen w-full overflow-hidden">
      <VideoBackground />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-8 text-center w-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white max-w-4xl">
          {t("home.welcome")}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
          {t("home.subtitle")}
        </p>

        <nav className="flex flex-col sm:flex-row gap-4 w-full max-w-md px-4">
          <Link
            href="/"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-center"
          >
            {t("navigation.home")}
          </Link>
          <Link
            href="/cv"
            className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity text-center"
          >
            {t("navigation.cv")}
          </Link>
          <Link
            href="/cv"
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-center shadow-lg"
          >
            {t("navigation.cv")}
          </Link>
        </nav>
      </div>
    </div>
  );
};

export const AboutSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: FaEye,
      title: t("features.f1.title") || "Visão Computacional",
      description:
        t("features.f1.desc") || "Análise avançada de imagens e vídeos",
      color: "blue",
      video: "/videos/feature_people_detected.mp4",
    },
    {
      icon: FaChartBar,
      title: t("features.f2.title") || "Analytics Avançado",
      description:
        t("features.f2.desc") || "Relatórios detalhados em tempo real",
      color: "purple",
      video: "/videos/feature_insights.mp4",
    },
    {
      icon: FaCog,
      title: t("features.f3.title") || "Automação Inteligente",
      description: t("features.f3.desc") || "Processos automatizados com IA",
      color: "orange",
    },
    {
      icon: FaChartLine,
      title: t("features.f4.title") || "Otimização de Performance",
      description: t("features.f4.desc") || "Melhoria contínua de resultados",
      color: "green",
    },
    {
      icon: FaBrain,
      title: t("features.f5.title") || "Inteligência Artificial",
      description: t("features.f5.desc") || "Machine Learning aplicado",
      color: "indigo",
    },
    {
      icon: FaLock,
      title: t("features.f6.title") || "Segurança Avançada",
      description: t("features.f6.desc") || "Proteção de dados garantida",
      color: "pink",
    },
    {
      icon: FaMap,
      title: t("features.f7.title") || "Mapeamento Inteligente",
      description: t("features.f7.desc") || "Análise geoespacial precisa",
      color: "cyan",
    },
    {
      icon: FaBolt,
      title: t("features.f8.title") || "Performance Otimizada",
      description: t("features.f8.desc") || "Velocidade e eficiência máximas",
      color: "yellow",
    },
  ];

  return (
    <section id="features" className={`py-40 relative overflow-hidden`}>
      <div className="container mx-auto px-4 md:px-20 relative z-10 overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Nossa Tecnologia em <span className="outlined-text">Ação</span>
          </h2>
          <p className="text-white/80 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            {t("features.subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden">
          <div className="w-full overflow-hidden">
            <VerticalTimeline
              lineColor="rgba(255, 255, 255, 0.3)"
              animate={true}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 50,
                    scale: 0.9,
                    x: index % 2 === 0 ? -50 : 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    x: 0,
                    transition: {
                      duration: 0.4,
                      delay: index * 0.05,
                      ease: "easeOut",
                    },
                  }}
                  viewport={{ once: false, margin: "-50px" }}
                >
                  <VerticalTimelineElement
                    position={index % 2 === 0 ? "left" : "right"}
                    className="vertical-timeline-element--work p-0"
                    contentStyle={{
                      background: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "16px",
                      color: "#fff",
                      padding: 0,
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid rgba(255, 255, 255, 0.1)",
                    }}
                    iconStyle={{
                      background: "rgba(255, 255, 255, 0.2)",
                      backdropFilter: "blur(12px)",
                      border: "2px solid rgba(255, 255, 255, 0.3)",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                    }}
                    icon={<feature.icon />}
                  >
                    {feature.video && (
                      <div className="overflow-hidden rounded-lg">
                        <video
                          src={feature.video}
                          autoPlay={true}
                          muted
                          loop
                          playsInline
                          disablePictureInPicture
                          controlsList="nodownload nofullscreen noremoteplayback"
                          className="w-full h-full object-cover"
                          style={{ display: "block" }}
                        />
                      </div>
                    )}
                    <motion.div
                      className="p-4"
                      initial={{ opacity: 0 }}
                      whileInView={{
                        opacity: 1,
                        transition: {
                          duration: 0.3,
                          delay: 0.1 + index * 0.03,
                        },
                      }}
                      viewport={{ once: false }}
                    >
                      <motion.h3
                        className="text-lg font-semibold text-white mb-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                          transition: {
                            duration: 0.3,
                            delay: 0.15 + index * 0.03,
                          },
                        }}
                        viewport={{ once: false }}
                      >
                        {feature.title}
                      </motion.h3>
                      <motion.p
                        className="text-white/90 text-sm leading-relaxed"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                          transition: {
                            duration: 0.3,
                            delay: 0.2 + index * 0.03,
                          },
                        }}
                        viewport={{ once: false }}
                      >
                        {feature.description}
                      </motion.p>
                    </motion.div>
                  </VerticalTimelineElement>
                </motion.div>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
      <SignalzAnimation />
    </section>
  );
};

export const SkillsSection = () => {
  return (
    <div className="min-h-screen">
      <div className="text-center py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Minhas <span className="outlined-text">Habilidades</span>
        </h2>
        <p className="text-white/80 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Algumas dos meus conhecimentos/Habilidades recorrentes
        </p>
      </div>
      <NestedOrbitSystem />
    </div>
  );
};

export const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/velrino/",
      icon: FaLinkedin,
      color: "hover:text-[#0A66C2]",
    },
    {
      name: "GitHub",
      url: "https://github.com/velrino",
      icon: FaGithub,
      color: "hover:text-[#333333]",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/velrino",
      icon: FaInstagram,
      color: "hover:text-[#E4405F]",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
          Contact
        </h2>
        <div className="flex gap-8 justify-center items-center">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white transition-colors duration-300 ${social.color}`}
              aria-label={social.name}
            >
              <social.icon size={48} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
