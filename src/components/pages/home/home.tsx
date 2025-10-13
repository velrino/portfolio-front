"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import { motion } from "framer-motion";
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
  FaGraduationCap,
  FaCode,
  FaMicrophone,
  FaCalendarAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import VideoBackground from "@/components/VideoBackground";
import { NestedOrbitSystem } from "@/components/nested-orbit-system/nested-orbit-system";
import { SignalzAnimation } from "@/components/animate/circuit";

// ==================== ENUMS ====================
enum SocialPlatform {
  LINKEDIN = "linkedin",
  GITHUB = "github",
  INSTAGRAM = "instagram",
}

enum ContactMethod {
  EMAIL = "email",
  LOCATION = "location",
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
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 max-w-3xl mx-auto">
            {t("home.subtitle")}
          </p>
          <p className="text-base md:text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            {t("home.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <a
              href="#awards"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              {t("home.cta.primary")}
              <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            {/* <a
              href="/Denis-Magalhaes-Velrino-Silva.pdf"
              download
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 w-full sm:w-auto text-center"
            >
              {t("home.cta.secondary")}
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto text-center"
            >
              {t("home.cta.contact")}
            </a> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ==================== ABOUT SECTION ====================
export const AboutSection = () => {
  const { t } = useTranslation();

  const integrationCategories = [
    "ai",
    "payments",
    "communication",
    "infrastructure",
    "cloud",
    "monitoring",
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
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
          <div className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
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
          </div>

          <div className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <FaCode className="text-purple-400" />
              {t("about.integrations.title")}
            </h3>
            <p className="text-white/80 mb-6">
              {t("about.integrations.description")}
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {integrationCategories.map((category) => (
                <div
                  key={category}
                  className="bg-black/20 rounded-lg p-4 border border-white/10"
                >
                  <p className="text-sm text-white/90">
                    {t(`about.integrations.categories.${category}` as any)}
                  </p>
                </div>
              ))}
            </div>
          </div>

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
                {Array.isArray(t("experience.current.highlights" as any)) &&
                  (t("experience.current.highlights" as any) as string[]).map(
                    (highlight: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-white/80"
                      >
                        <span className="text-purple-400 mt-1">▸</span>
                        <span>{highlight}</span>
                      </li>
                    )
                  )}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4 pt-6 border-t border-white/10">
              <div>
                <p className="text-sm text-white/60 mb-2">
                  Backend & Infrastructure:
                </p>
                <p className="text-sm text-white/90">
                  {t("experience.current.stack.backend")}
                </p>
              </div>
              <div>
                <p className="text-sm text-white/60 mb-2">Frontend:</p>
                <p className="text-sm text-white/90">
                  {t("experience.current.stack.frontend")}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline of Previous Positions */}
        <VerticalTimeline lineColor="rgba(168, 85, 247, 0.2)" animate={true}>
          {Array.isArray(t("experience.positions" as any)) &&
            (t("experience.positions" as any) as any[])
              .slice(0, 5)
              .map((position: any, index: number) => (
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
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={award.type}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-black/20 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300"
              >
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
                <p className="text-white/90 mb-4 leading-relaxed">
                  {t(`awards.featured.${award.type}.description`)}
                </p>
                <div className="bg-black/20 rounded-lg p-4 border border-purple-500/20">
                  <p className="text-sm text-white/80">
                    <strong className="text-purple-400">
                      {t("awards.featured.summit.impact") && "Impacto:"}
                    </strong>{" "}
                    {t(`awards.featured.${award.type}.impact`)}
                  </p>
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
          className="bg-black/20 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
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
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {Array.isArray(t("awards.project.features" as any)) &&
              (t("awards.project.features" as any) as string[]).map(
                (feature: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-black/20 rounded-lg p-4 border border-white/10"
                  >
                    <FaCheckCircle className="text-purple-400 flex-shrink-0" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                )
              )}
          </div>

          {/* Demo CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

            <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
              <FaPlay />
              {t("awards.project.demo.cta")}
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-white/60 italic">
              {t("awards.project.award_photo.caption")}
            </p>
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
    <section id="talks" className="py-20 px-4 md:px-8 ">
      <div className="max-w-6xl mx-auto">
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
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-black/20 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-8 md:p-12 mb-12"
        >
          <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {t("talks.featured.chatgpt_whatsapp.title")}
              </h3>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                {t("talks.featured.chatgpt_whatsapp.description")}
              </p>
            </div>
            <div className="bg-purple-600/20 p-4 rounded-xl border border-purple-500/30">
              <FaMicrophone className="text-3xl text-purple-400" />
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <FaCheckCircle className="text-purple-400" />
              {t("talks.featured.chatgpt_whatsapp.topics.0") &&
                "Tópicos Abordados:"}
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              {Array.isArray(
                t("talks.featured.chatgpt_whatsapp.topics" as any)
              ) &&
                (
                  t("talks.featured.chatgpt_whatsapp.topics" as any) as string[]
                ).map((topic: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 bg-black/20 rounded-lg p-3 border border-white/10"
                  >
                    <span className="text-purple-400 mt-1">▸</span>
                    <span className="text-white/90 text-sm">{topic}</span>
                  </div>
                ))}
            </div>
          </div>

          <div className="bg-black/20 rounded-lg p-4 border border-white/10 mb-6">
            <p className="text-sm text-white/70 mb-1">Tech Stack:</p>
            <p className="text-white/90 font-mono text-sm">
              {t("talks.featured.chatgpt_whatsapp.tech_stack")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={t("talks.featured.chatgpt_whatsapp.slides_url")}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              <FaExternalLinkAlt />
              {t("talks.featured.chatgpt_whatsapp.cta.slides")}
              <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
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

      {/* AWS Certification */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-20 px-4"
      >
        <div className="bg-black/20 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-8 text-center">
          <FaAward className="text-5xl text-purple-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">
            {t("skills.certifications.aws.title")}
          </h3>
          <p className="text-white/80 mb-4 leading-relaxed max-w-2xl mx-auto">
            {t("skills.certifications.aws.description")}
          </p>
        </div>
      </motion.div>
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

  const contactInfo: Array<{
    method: ContactMethod;
    icon: typeof FaEnvelope;
  }> = [
    {
      method: ContactMethod.EMAIL,
      icon: FaEnvelope,
    },
    {
      method: ContactMethod.LOCATION,
      icon: FaMapMarkerAlt,
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-4xl mx-auto w-full">
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
                href={`https://${t(
                  `contact.social.${social.platform}` as any
                )}`}
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
    </section>
  );
};
