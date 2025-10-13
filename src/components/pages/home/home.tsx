"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaTrophy,
  FaAward,
  FaRocket,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaExternalLinkAlt,
  FaPlay,
  FaChevronRight,
  FaCheckCircle,
  FaBriefcase,
  FaCode,
  FaMicrophone,
  FaUsers,
  FaBrain,
  FaCreditCard,
  FaComments,
  FaServer,
  FaCloud,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiOpenai,
  SiStripe,
  SiTwilio,
  SiRedis,
  SiAmazon,
  SiGooglecloud,
  SiMongodb,
  SiPostgresql,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiPython,
  SiGo,
  SiFlutter,
  SiDocker,
  SiKubernetes,
  SiGraphql,
} from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import VideoBackground from "@/components/VideoBackground";
import { NestedOrbitSystem } from "@/components/nested-orbit-system/nested-orbit-system";
import { SignalzAnimation } from "@/components/animate/circuit";
import { TypewriterWelcome } from "@/components/typewelcome/typewriter-welcome";
import { CircuitPulse } from "@/components/animate/circuit-pulse";

// ==================== ENUMS ====================
enum SocialPlatform {
  LINKEDIN = "linkedin",
  GITHUB = "github",
  INSTAGRAM = "instagram",
}

enum AwardType {
  SUMMIT = "summit",
  HACKATHON = "hackathon",
}

// ==================== MAIN COMPONENT ====================
export default function HomeComponent() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <ExperienceSection />
      <AwardsSection />
      <TalksSection />
      <ContactSection />
    </>
  );
}

// ==================== HERO SECTION ====================
export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div id="hero" className="relative min-h-screen w-full overflow-hidden">
      <VideoBackground />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-8 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            {t("home.welcome")}
          </h1>
          <div className="text-base md:text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            <TypewriterWelcome />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <a
              href="#awards"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              {t("home.cta.primary")}
              <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ==================== ABOUT SECTION ====================
export const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("about.title")}
          </h2>
          <p className="text-xl md:text-2xl text-purple-400 font-semibold mb-4">
            {t("about.headline")}
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            {t("about.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Intro & Journey with Photo */}
          <div className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
            {/* Photo Float Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="float-right ml-6 mb-6 w-full md:w-[350px]"
            >
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  src="/images/me.jpeg"
                  alt="Denis Magalhães no MongoDB 2024"
                  width={350}
                  height={467}
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-semibold text-xs leading-relaxed">
                    {t("about.photo.caption")}
                  </p>
                </div>
              </div>
            </motion.div>

            <p className="text-lg text-white/90 leading-relaxed mb-6">
              {t("about.intro")}
            </p>

            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <FaRocket className="text-purple-400" />
              {t("about.journey.title")}
            </h3>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>{t("about.journey.p1")}</p>
              <p>{t("about.journey.p2")}</p>
              <p>{t("about.journey.p3")}</p>
            </div>

            {/* Clear float */}
            <div className="clear-both"></div>
          </div>

          <div className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <FaCode className="text-purple-400" />
              {t("about.integrations.title")}
            </h3>
            <p className="text-white/80 mb-8">
              {t("about.integrations.description")}
            </p>

            <div className="space-y-6">
              {/* AI & Machine Learning */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <FaBrain className="text-3xl text-purple-400 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-bold text-white">
                    {t("about.integrations.categories.ai").split(":")[0]}
                  </h4>
                </div>
                <p className="text-white/80 text-sm mb-3 ml-12">
                  {t("about.integrations.categories.ai").split("—")[1]}
                </p>
                <div className="flex flex-wrap gap-3 ml-12">
                  {[
                    { icon: SiOpenai, name: "OpenAI", color: "#10a37f" },
                    { icon: SiOpenai, name: "ChatGPT", color: "#10a37f" },
                    { icon: SiOpenai, name: "Dall-E", color: "#10a37f" },
                    { icon: FaBrain, name: "LLM", color: "#a855f7" },
                  ].map((tech, idx) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={idx}
                        className="group/tech flex items-center gap-2 bg-black/30 backdrop-blur border border-white/10 rounded-lg px-3 py-2 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                      >
                        <Icon
                          className="text-xl group-hover/tech:scale-110 transition-transform"
                          style={{ color: tech.color }}
                        />
                        <span className="text-xs text-white/90 font-medium">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Payments */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <FaCreditCard className="text-3xl text-green-400 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-bold text-white">
                    {t("about.integrations.categories.payments").split(":")[0]}
                  </h4>
                </div>
                <p className="text-white/80 text-sm mb-3 ml-12">
                  {t("about.integrations.categories.payments").split("—")[1]}
                </p>
                <div className="flex flex-wrap gap-3 ml-12">
                  {[
                    { icon: SiStripe, name: "Stripe", color: "#635bff" },
                    { icon: FaCreditCard, name: "Cryptomus", color: "#f59e0b" },
                    { icon: FaCreditCard, name: "NoxPay", color: "#10b981" },
                    { icon: FaCreditCard, name: "Apple Store", color: "#000" },
                  ].map((tech, idx) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={idx}
                        className="group/tech flex items-center gap-2 bg-black/30 backdrop-blur border border-white/10 rounded-lg px-3 py-2 hover:border-green-500/50 transition-all duration-300 hover:scale-105"
                      >
                        <Icon
                          className="text-xl group-hover/tech:scale-110 transition-transform"
                          style={{ color: tech.color }}
                        />
                        <span className="text-xs text-white/90 font-medium">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Communication */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <FaComments className="text-3xl text-blue-400 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-bold text-white">
                    {
                      t("about.integrations.categories.communication").split(
                        ":"
                      )[0]
                    }
                  </h4>
                </div>
                <p className="text-white/80 text-sm mb-3 ml-12">
                  {
                    t("about.integrations.categories.communication").split(
                      "—"
                    )[1]
                  }
                </p>
                <div className="flex flex-wrap gap-3 ml-12">
                  {[
                    { icon: SiTwilio, name: "Twilio", color: "#f22f46" },
                    { icon: FaComments, name: "WhatsApp", color: "#25d366" },
                    { icon: FaComments, name: "SES", color: "#ff9900" },
                    { icon: FaComments, name: "SendGrid", color: "#1a82e2" },
                  ].map((tech, idx) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={idx}
                        className="group/tech flex items-center gap-2 bg-black/30 backdrop-blur border border-white/10 rounded-lg px-3 py-2 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                      >
                        <Icon
                          className="text-xl group-hover/tech:scale-110 transition-transform"
                          style={{ color: tech.color }}
                        />
                        <span className="text-xs text-white/90 font-medium">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Infrastructure */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <FaServer className="text-3xl text-orange-400 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-bold text-white">
                    {
                      t("about.integrations.categories.infrastructure").split(
                        ":"
                      )[0]
                    }
                  </h4>
                </div>
                <p className="text-white/80 text-sm mb-3 ml-12">
                  {
                    t("about.integrations.categories.infrastructure").split(
                      "—"
                    )[1]
                  }
                </p>
                <div className="flex flex-wrap gap-3 ml-12">
                  {[
                    { icon: SiRedis, name: "Redis", color: "#dc382d" },
                    { icon: FaServer, name: "RabbitMQ", color: "#ff6600" },
                    { icon: FaServer, name: "SQS", color: "#ff9900" },
                    { icon: FaServer, name: "SNS", color: "#ff9900" },
                    { icon: FaServer, name: "ElasticSearch", color: "#005571" },
                  ].map((tech, idx) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={idx}
                        className="group/tech flex items-center gap-2 bg-black/30 backdrop-blur border border-white/10 rounded-lg px-3 py-2 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
                      >
                        <Icon
                          className="text-xl group-hover/tech:scale-110 transition-transform"
                          style={{ color: tech.color }}
                        />
                        <span className="text-xs text-white/90 font-medium">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Cloud */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <FaCloud className="text-3xl text-cyan-400 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-bold text-white">
                    {t("about.integrations.categories.cloud").split(":")[0]}
                  </h4>
                </div>
                <p className="text-white/80 text-sm mb-3 ml-12">
                  {t("about.integrations.categories.cloud").split("—")[1]}
                </p>
                <div className="flex flex-wrap gap-3 ml-12">
                  {[
                    { icon: SiAmazon, name: "AWS", color: "#ff9900" },
                    { icon: SiGooglecloud, name: "GCP", color: "#4285f4" },
                    { icon: FaCloud, name: "Heroku", color: "#430098" },
                    { icon: FaCloud, name: "S3", color: "#569a31" },
                    { icon: FaCloud, name: "Firebase", color: "#ffca28" },
                  ].map((tech, idx) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={idx}
                        className="group/tech flex items-center gap-2 bg-black/30 backdrop-blur border border-white/10 rounded-lg px-3 py-2 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                      >
                        <Icon
                          className="text-xl group-hover/tech:scale-110 transition-transform"
                          style={{ color: tech.color }}
                        />
                        <span className="text-xs text-white/90 font-medium">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Monitoring */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <FaChartLine className="text-3xl text-pink-400 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-bold text-white">
                    {
                      t("about.integrations.categories.monitoring").split(
                        ":"
                      )[0]
                    }
                  </h4>
                </div>
                <p className="text-white/80 text-sm mb-3 ml-12">
                  {t("about.integrations.categories.monitoring").split("—")[1]}
                </p>
                <div className="flex flex-wrap gap-3 ml-12">
                  {[
                    { icon: FaChartLine, name: "New Relic", color: "#008c99" },
                    { icon: FaChartLine, name: "DataDog", color: "#632ca6" },
                    { icon: FaChartLine, name: "Grafana", color: "#f46800" },
                  ].map((tech, idx) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={idx}
                        className="group/tech flex items-center gap-2 bg-black/30 backdrop-blur border border-white/10 rounded-lg px-3 py-2 hover:border-pink-500/50 transition-all duration-300 hover:scale-105"
                      >
                        <Icon
                          className="text-xl group-hover/tech:scale-110 transition-transform"
                          style={{ color: tech.color }}
                        />
                        <span className="text-xs text-white/90 font-medium">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Security */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <FaShieldAlt className="text-3xl text-red-400 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-bold text-white">
                    {t("about.integrations.categories.security").split(":")[0]}
                  </h4>
                </div>
                <p className="text-white/80 text-sm mb-3 ml-12">
                  {t("about.integrations.categories.security").split("—")[1]}
                </p>
                <div className="flex flex-wrap gap-3 ml-12">
                  {[
                    {
                      icon: FaShieldAlt,
                      name: "HaveIBeenPwned",
                      color: "#ef4444",
                    },
                    { icon: FaShieldAlt, name: "Leakcheck", color: "#f59e0b" },
                    { icon: FaShieldAlt, name: "Dehashed", color: "#dc2626" },
                  ].map((tech, idx) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={idx}
                        className="group/tech flex items-center gap-2 bg-black/30 backdrop-blur border border-white/10 rounded-lg px-3 py-2 hover:border-red-500/50 transition-all duration-300 hover:scale-105"
                      >
                        <Icon
                          className="text-xl group-hover/tech:scale-110 transition-transform"
                          style={{ color: tech.color }}
                        />
                        <span className="text-xs text-white/90 font-medium">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Community & Workshops Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <FaUsers className="text-purple-400" />
              {t("about.community.title")}
            </h3>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              {t("about.community.description")}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl"
              >
                <Image
                  src="/images/meetup-1.jpg"
                  alt="Workshop na Beetech"
                  width={600}
                  height={280}
                  className="w-full h-[280px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-4">
                  <div>
                    <p className="text-white font-bold text-sm mb-1">
                      {t("about.community.workshops.beetech.title")}
                    </p>
                    <p className="text-white/80 text-xs">
                      {t("about.community.workshops.beetech.description")}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl"
              >
                <Image
                  src="/images/meetup-2.jpg"
                  alt="Workshop no SENAI"
                  width={600}
                  height={280}
                  className="w-full h-[280px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-4">
                  <div>
                    <p className="text-white font-bold text-sm mb-1">
                      {t("about.community.workshops.senai.title")}
                    </p>
                    <p className="text-white/80 text-xs">
                      {t("about.community.workshops.senai.description")}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl"
              >
                <Image
                  src="/images/meetup-3.jpg"
                  alt="Workshop Mobile no Itaú"
                  width={600}
                  height={280}
                  className="w-full h-[280px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-4">
                  <div>
                    <p className="text-white font-bold text-sm mb-1">
                      {t("about.community.workshops.itau.title")}
                    </p>
                    <p className="text-white/80 text-xs">
                      {t("about.community.workshops.itau.description")}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl"
              >
                <Image
                  src="/images/meetup-4.jpeg"
                  alt="Apresentação na FATEC Zona Sul"
                  width={600}
                  height={280}
                  className="w-full h-[280px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-4">
                  <div>
                    <p className="text-white font-bold text-sm mb-1">
                      {t("about.community.workshops.fatec.title")}
                    </p>
                    <p className="text-white/80 text-xs">
                      {t("about.community.workshops.fatec.description")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <p className="text-white/70 text-sm italic mt-6 text-center">
              {t("about.community.passion")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-8"
          >
            <p className="text-lg text-white/90 leading-relaxed mb-4">
              {t("about.pride")}
            </p>
            <p className="text-xl font-semibold text-white mb-4">
              {t("about.philosophy")}
            </p>
            <p className="text-lg text-white/90 font-medium">
              {t("about.cta")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ==================== EXPERIENCE SECTION ====================
// Helper function to extract and render tech stack with icons
const getTechIcons = (stackString: string) => {
  const techMap: Record<string, { icon: React.ElementType; color: string }> = {
    NestJS: { icon: SiNodedotjs, color: "#e0234e" },
    "Node.js": { icon: SiNodedotjs, color: "#339933" },
    PostgreSQL: { icon: SiPostgresql, color: "#336791" },
    Redis: { icon: SiRedis, color: "#dc382d" },
    Docker: { icon: SiDocker, color: "#2496ed" },
    Kubernetes: { icon: SiKubernetes, color: "#326ce5" },
    React: { icon: SiReact, color: "#61dafb" },
    TypeScript: { icon: SiTypescript, color: "#3178c6" },
    Angular: { icon: SiReact, color: "#dd0031" },
    Java: { icon: FaCode, color: "#007396" },
    "Spring Boot": { icon: FaCode, color: "#6db33f" },
    Python: { icon: SiPython, color: "#3776ab" },
    Golang: { icon: SiGo, color: "#00add8" },
    Flutter: { icon: SiFlutter, color: "#02569b" },
    MongoDB: { icon: SiMongodb, color: "#47a248" },
    AWS: { icon: SiAmazon, color: "#ff9900" },
    GCP: { icon: SiGooglecloud, color: "#4285f4" },
    GraphQL: { icon: SiGraphql, color: "#e10098" },
  };

  // Extract tech names from "Stack: Tech1, Tech2, Tech3" format
  const stackMatch = stackString.match(/Stack:\s*(.+)$/i);
  if (!stackMatch) return [];

  const techNames = stackMatch[1]
    .split(",")
    .map((t) => t.trim())
    .slice(0, 6); // Limit to 6 icons

  return techNames
    .map((name) => {
      // Find matching tech in map (case insensitive)
      const techKey = Object.keys(techMap).find((key) =>
        name.toLowerCase().includes(key.toLowerCase())
      );
      if (techKey) {
        return { name, ...techMap[techKey] };
      }
      return null;
    })
    .filter(
      (
        item
      ): item is { name: string; icon: React.ElementType; color: string } =>
        item !== null
    );
};

export const ExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="experience"
      className="py-20 px-4 md:px-20 relative overflow-hidden"
    >
      <SignalzAnimation />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("experience.title")}
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {t("experience.subtitle")}
          </p>
        </motion.div>

        {/* Current Position - Highlighted */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-black/20 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-8">
            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
              <div>
                <div className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-300 text-sm font-semibold mb-3">
                  {t("experience.current.period")}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {t("experience.current.title")}
                </h3>
                <p className="text-lg text-purple-300 font-semibold">
                  {t("experience.current.company")}
                </p>
                <p className="text-sm text-white/60">
                  {t("experience.current.location")}
                </p>
              </div>
              <FaBriefcase className="text-4xl text-purple-400" />
            </div>

            <p className="text-white/90 mb-6 leading-relaxed">
              {t("experience.current.description")}
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <FaCheckCircle className="text-purple-400" />
                {t("experience.current.highlights.0") && "Key Highlights:"}
              </h4>
              <ul className="space-y-2">
                {Array.isArray(t("experience.current.highlights")) &&
                  (
                    t("experience.current.highlights") as unknown as string[]
                  ).map((highlight: string, index: number) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-white/80"
                    >
                      <span className="text-purple-400 mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Tech Stack with Icons */}
            <div className="pt-6 border-t border-white/10">
              <h4 className="text-sm font-semibold text-white/60 mb-4">
                Tech Stack:
              </h4>
              <div className="space-y-4">
                {/* Backend & Infrastructure */}
                <div>
                  <p className="text-xs text-white/50 mb-2">
                    Backend & Infrastructure:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { icon: SiNodedotjs, name: "NestJS", color: "#e0234e" },
                      { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
                      { icon: SiMongodb, name: "MongoDB", color: "#47a248" },
                      { icon: SiRedis, name: "Redis", color: "#dc382d" },
                      { icon: FaServer, name: "Pusher", color: "#a855f7" },
                      { icon: SiDocker, name: "Docker", color: "#2496ed" },
                    ].map((tech, idx) => {
                      const Icon = tech.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 bg-black/30 backdrop-blur border border-white/10 rounded-md px-2.5 py-1.5 hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
                        >
                          <Icon
                            className="text-base"
                            style={{ color: tech.color }}
                          />
                          <span className="text-xs text-white/80 font-medium">
                            {tech.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Frontend */}
                <div>
                  <p className="text-xs text-white/50 mb-2">Frontend:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { icon: SiReact, name: "React", color: "#61dafb" },
                      { icon: SiReact, name: "Next.js", color: "#000000" },
                      {
                        icon: SiTypescript,
                        name: "TypeScript",
                        color: "#3178c6",
                      },
                      { icon: FaCode, name: "Tailwind", color: "#06b6d4" },
                    ].map((tech, idx) => {
                      const Icon = tech.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 bg-black/30 backdrop-blur border border-white/10 rounded-md px-2.5 py-1.5 hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
                        >
                          <Icon
                            className="text-base"
                            style={{ color: tech.color }}
                          />
                          <span className="text-xs text-white/80 font-medium">
                            {tech.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Integrations */}
                <div>
                  <p className="text-xs text-white/50 mb-2">Integrations:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { icon: SiStripe, name: "Stripe", color: "#635bff" },
                      {
                        icon: FaCreditCard,
                        name: "Apple Store",
                        color: "#000",
                      },
                      {
                        icon: FaCreditCard,
                        name: "Cryptomus",
                        color: "#f59e0b",
                      },
                      {
                        icon: FaShieldAlt,
                        name: "Security APIs",
                        color: "#ef4444",
                      },
                    ].map((tech, idx) => {
                      const Icon = tech.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 bg-black/30 backdrop-blur border border-white/10 rounded-md px-2.5 py-1.5 hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
                        >
                          <Icon
                            className="text-base"
                            style={{ color: tech.color }}
                          />
                          <span className="text-xs text-white/80 font-medium">
                            {tech.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Infrastructure */}
                <div>
                  <p className="text-xs text-white/50 mb-2">Infrastructure:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { icon: SiAmazon, name: "AWS ECS", color: "#ff9900" },
                      { icon: SiAmazon, name: "AWS Cognito", color: "#ff9900" },
                      {
                        icon: FaChartLine,
                        name: "New Relic",
                        color: "#008c99",
                      },
                      { icon: SiDocker, name: "Docker", color: "#2496ed" },
                      {
                        icon: FaCode,
                        name: "GitHub Actions",
                        color: "#2088ff",
                      },
                    ].map((tech, idx) => {
                      const Icon = tech.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 bg-black/30 backdrop-blur border border-white/10 rounded-md px-2.5 py-1.5 hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
                        >
                          <Icon
                            className="text-base"
                            style={{ color: tech.color }}
                          />
                          <span className="text-xs text-white/80 font-medium">
                            {tech.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline of Previous Positions */}
        <VerticalTimeline lineColor="rgba(168, 85, 247, 0.2)" animate={true}>
          {Array.isArray(t("experience.positions")) &&
            (
              t("experience.positions") as unknown as Array<{
                title: string;
                company: string;
                period: string;
                location: string;
                description: string;
                achievements: string[];
              }>
            )
              // .slice(0, 5)
              .map((position, index: number) => (
                <VerticalTimelineElement
                  key={index}
                  position={index % 2 === 0 ? "left" : "right"}
                  contentStyle={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(168, 85, 247, 0.2)",
                    borderRadius: "16px",
                    color: "#fff",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid rgba(168, 85, 247, 0.2)",
                  }}
                  iconStyle={{
                    background: "rgba(168, 85, 247, 0.2)",
                    backdropFilter: "blur(12px)",
                    border: "2px solid rgba(168, 85, 247, 0.3)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  icon={<FaBriefcase />}
                >
                  <h3 className="text-xl font-bold text-white mb-2">
                    {position.title}
                  </h3>
                  <h4 className="text-lg text-purple-300 font-semibold mb-1">
                    {position.company}
                  </h4>
                  <p className="text-sm text-white/60 mb-1">
                    {position.period}
                  </p>
                  <p className="text-sm text-white/60 mb-4">
                    {position.location}
                  </p>
                  <p className="text-white/90 mb-4 leading-relaxed">
                    {position.description}
                  </p>

                  {position.achievements &&
                    position.achievements.length > 0 && (
                      <>
                        <ul className="space-y-2">
                          {position.achievements
                            .slice(0, 4)
                            .map((achievement: string, achIndex: number) => (
                              <li
                                key={achIndex}
                                className="flex items-start gap-2 text-sm text-white/80"
                              >
                                <FaCheckCircle
                                  className="text-purple-400 mt-1 flex-shrink-0"
                                  size={12}
                                />
                                <span>{achievement}</span>
                              </li>
                            ))}
                        </ul>

                        {/* Tech Stack Icons */}
                        {(() => {
                          const lastAchievement =
                            position.achievements[
                              position.achievements.length - 1
                            ];
                          const techIcons = getTechIcons(lastAchievement);

                          if (techIcons.length > 0) {
                            return (
                              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                                {techIcons.map((tech, idx: number) => {
                                  const Icon = tech.icon;
                                  return (
                                    <div
                                      key={idx}
                                      className="flex items-center gap-1.5 bg-black/30 backdrop-blur border border-white/10 rounded-md px-2 py-1 hover:border-purple-500/30 transition-all duration-300 hover:scale-105"
                                      title={tech.name}
                                    >
                                      <Icon
                                        className="text-base"
                                        style={{ color: tech.color }}
                                      />
                                      <span className="text-xs text-white/70">
                                        {tech.name}
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>
                            );
                          }
                          return null;
                        })()}
                      </>
                    )}
                </VerticalTimelineElement>
              ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

// ==================== AWARDS SECTION ====================
export const AwardsSection = () => {
  const { t } = useTranslation();

  const awards = [
    {
      type: AwardType.SUMMIT,
      icon: FaTrophy,
      color: "purple",
    },
    {
      type: AwardType.HACKATHON,
      icon: FaAward,
      color: "purple",
    },
  ];

  return (
    <section id="awards" className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <FaTrophy className="text-purple-400" />
            {t("awards.title")}
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {t("awards.subtitle")}
          </p>
        </motion.div>

        {/* Featured Awards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={award.type}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col h-full transition-all duration-300"
              >
                <Image
                  src={`/images/adapta-${award.type}.jpg`}
                  alt={t(`awards.featured.${award.type}.title`)}
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover rounded-t-2xl"
                />
                <div className="flex-1 p-8 bg-black/20 backdrop-blur-lg border border-purple-500/20 rounded-b-2xl hover:border-purple-500/40 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="text-4xl text-purple-400" />
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {t(`awards.featured.${award.type}.title`)}
                      </h3>
                      <p className="text-purple-400 font-semibold text-lg">
                        {t(`awards.featured.${award.type}.award`)}
                      </p>
                    </div>
                  </div>
                  <p className="text-white/90 mb-4 leading-relaxed flex-1">
                    {t(`awards.featured.${award.type}.description`)}
                  </p>
                  <div className="bg-black/20 rounded-lg p-4 border border-purple-500/20 mt-auto">
                    <p className="text-sm text-white/80">
                      <strong className="text-purple-400">
                        {t("awards.featured.summit.impact") && "Impacto:"}
                      </strong>{" "}
                      {t(`awards.featured.${award.type}.impact`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Adapta Mídia Project Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="/videos/feature_people_detected.mp4"
              type="video/mp4"
            />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/75" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                {t("awards.project.title")}
              </h3>
              <p className="text-xl text-purple-300 font-semibold mb-4">
                {t("awards.project.tagline")}
              </p>
              <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
                {t("awards.project.description")}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-12 max-w-4xl mx-auto">
              {Array.isArray(t("awards.project.features")) &&
                (t("awards.project.features") as unknown as string[]).map(
                  (feature: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-black/40 backdrop-blur-md rounded-lg p-4 border border-white/20"
                    >
                      <FaCheckCircle className="text-purple-400 flex-shrink-0" />
                      <span className="text-white/90">{feature}</span>
                    </div>
                  )
                )}
            </div>

            {/* Demo CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href={`https://${t("awards.project.website")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg flex items-center gap-2"
              >
                <FaExternalLinkAlt />
                {t("awards.project.website")}
                <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a href="https://www.adaptamidia.com/demo" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
                <FaPlay />
                {t("awards.project.demo.cta")}
              </a>
            </div>

            <div className="text-center">
              <p className="text-sm text-white/60 italic">
                {t("awards.project.award_photo.caption")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ==================== TALKS SECTION ====================
export const TalksSection = () => {
  const { t } = useTranslation();

  return (
    <section id="talks" className="py-20  ">
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <FaMicrophone className="text-purple-400" />
            {t("talks.title")}
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {t("talks.subtitle")}
          </p>
        </motion.div>

        {/* Featured Talk: ChatGPT + WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-screen flex items-center justify-center overflow-hidden mb-12"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/talk.png)" }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/80" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-8">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  {t("talks.featured.chatgpt_whatsapp.title")}
                </h3>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  {t("talks.featured.chatgpt_whatsapp.description")}
                </p>
              </div>
              <div className="bg-purple-600/20 p-4 rounded-xl border border-purple-500/30 backdrop-blur-sm">
                <FaMicrophone className="text-3xl md:text-4xl text-purple-400" />
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg md:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <FaCheckCircle className="text-purple-400" />
                {t("talks.featured.chatgpt_whatsapp.topics.0") &&
                  "Tópicos Abordados:"}
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {Array.isArray(t("talks.featured.chatgpt_whatsapp.topics")) &&
                  (
                    t(
                      "talks.featured.chatgpt_whatsapp.topics"
                    ) as unknown as string[]
                  ).map((topic: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 bg-black/40 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-white/20 hover:border-purple-500/50 transition-all duration-300"
                    >
                      <span className="text-purple-400 mt-1 flex-shrink-0">
                        ▸
                      </span>
                      <span className="text-white/90 text-sm md:text-base">
                        {topic}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20 mb-8">
              <p className="text-sm md:text-base text-white/70 mb-2 font-semibold">
                Tech Stack:
              </p>
              <p className="text-white/90 font-mono text-xs md:text-sm break-words">
                {t("talks.featured.chatgpt_whatsapp.tech_stack")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={t("talks.featured.chatgpt_whatsapp.slides_url")}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <FaExternalLinkAlt />
                {t("talks.featured.chatgpt_whatsapp.cta.slides")}
                <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ==================== SKILLS SECTION ====================
export const SkillsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="min-h-screen py-20">
      <div className="text-center mb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("skills.title")}
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </motion.div>
      </div>

      <NestedOrbitSystem />
    </section>
  );
};

// ==================== CONTACT/FOOTER SECTION ====================
export const ContactSection = () => {
  const { t } = useTranslation();

  const socialLinks: Array<{
    platform: SocialPlatform;
    icon: typeof FaLinkedin;
    color: string;
  }> = [
    {
      platform: SocialPlatform.LINKEDIN,
      icon: FaLinkedin,
      color: "hover:text-purple-400",
    },
    {
      platform: SocialPlatform.GITHUB,
      icon: FaGithub,
      color: "hover:text-purple-400",
    },
    {
      platform: SocialPlatform.INSTAGRAM,
      icon: FaInstagram,
      color: "hover:text-purple-400",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-4 relative"
    >
      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-xl text-white/80 mb-6">{t("contact.subtitle")}</p>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            {t("contact.description")}
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex gap-6 justify-center mb-12"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.platform}
                href={`https://${t(`contact.social.${social.platform}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-4 rounded-xl hover:border-purple-500/50 transition-all duration-300 ${social.color}`}
                aria-label={social.platform}
              >
                <Icon
                  size={75}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
            );
          })}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-white/60 text-sm mb-2">{t("footer.tagline")}</p>
          <p className="text-white/40 text-xs">{t("footer.copyright")}</p>
        </motion.div>
      </div>
      <CircuitPulse />
    </section>
  );
};
