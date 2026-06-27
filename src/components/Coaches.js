import React from "react";
import { motion } from "framer-motion";
import { Trophy, ChevronRight, Target, Zap } from "lucide-react";
import trophyImg from "../assets/images/coaches-trophy2.jpg";

function Coaches() {
  const handleScrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="coaches" className="py-24 bg-cricket-dark relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cricket-emerald/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cricket-gold/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Trophy className="w-5 h-5 text-cricket-gold" />
            <span className="text-sm font-outfit font-black tracking-widest text-cricket-gold uppercase">
              Expert Mentorship
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-outfit font-black text-3xl sm:text-5xl text-white mb-5 tracking-tight"
          >
            MEET OUR HEAD COACHES
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-1 w-24 bg-gradient-to-r from-cricket-gold to-cricket-golddark mx-auto rounded-full mb-5"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-sm max-w-lg mx-auto font-sans font-medium"
          >
            Learn from the founders and championship-winning coaches of MR Firstgen
            Cricket Academy, Hyderabad.
          </motion.p>
        </div>

        {/* ── SINGLE GROUP PHOTO with name overlays ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border border-cricket-gold/25 shadow-[0_12px_50px_rgba(0,0,0,0.6)] group mb-10"
        >
          {/* Full photo — full quality, show top (faces) */}
          <img
            src={trophyImg}
            alt="Battula Revanth Kumar and Vallepu Murthy - Co-Founders MR Firstgen Cricket Academy"
            className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
            style={{
              objectFit: "cover",
              objectPosition: "center top",
              maxHeight: "560px",
              width: "100%",
              display: "block",
            }}
          />

          {/* Gradient overlays — strong bottom, subtle top */}
          <div className="absolute inset-0 bg-gradient-to-t from-cricket-dark via-transparent to-black/20" />

          {/* Top center badge */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-cricket-gold/40 shadow-lg">
            <Trophy className="w-4 h-4 text-cricket-gold" />
            <span className="text-[10px] font-outfit font-black tracking-widest text-cricket-gold uppercase whitespace-nowrap">
              Championship Winners
            </span>
          </div>

          {/* Bottom name labels — left and right */}
          <div className="absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between p-5 sm:p-8">
            {/* Revanth — left person */}
            <div className="flex items-end gap-3">
              <div className="w-1.5 h-14 rounded-full bg-cricket-gold flex-shrink-0" />
              <div>
                <span className="text-[8px] font-bold tracking-widest text-cricket-gold/80 uppercase block">
                  Co-Founder &amp; Coach
                </span>
                <h3 className="font-outfit font-black text-lg sm:text-2xl text-white leading-tight drop-shadow-lg">
                  Battula Revanth Kumar
                </h3>
                <div className="flex items-center gap-1.5 mt-1">
                  <Zap className="w-3 h-3 text-cricket-vibrant" />
                  <span className="text-[10px] font-bold text-cricket-vibrant uppercase tracking-wide">
                    Bowling Specialist
                  </span>
                </div>
              </div>
            </div>

            {/* Murthy — right person */}
            <div className="flex items-end gap-3 text-right">
              <div>
                <span className="text-[8px] font-bold tracking-widest text-cricket-gold/80 uppercase block">
                  Co-Founder &amp; Coach
                </span>
                <h3 className="font-outfit font-black text-lg sm:text-2xl text-white leading-tight drop-shadow-lg">
                  Vallepu Murthy
                </h3>
                <div className="flex items-center gap-1.5 mt-1 justify-end">
                  <Target className="w-3 h-3 text-cricket-gold" />
                  <span className="text-[10px] font-bold text-cricket-gold uppercase tracking-wide">
                    Batting Specialist
                  </span>
                </div>
              </div>
              <div className="w-1.5 h-14 rounded-full bg-cricket-gold flex-shrink-0" />
            </div>
          </div>
        </motion.div>

        {/* ── Individual Info Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Revanth Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="p-6 sm:p-7 rounded-3xl glass-card border border-cricket-gold/20 hover:border-cricket-gold/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              {/* Initials avatar */}
              <div className="w-14 h-14 rounded-full border-2 border-cricket-gold bg-gradient-to-br from-cricket-emerald to-cricket-dark flex items-center justify-center flex-shrink-0 shadow-[0_0_14px_rgba(212,175,55,0.25)]">
                <span className="font-outfit font-black text-lg text-cricket-gold">BR</span>
              </div>
              <div>
                <h3 className="font-outfit font-black text-xl text-white leading-tight">
                  Battula Revanth Kumar
                </h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <Zap className="w-3.5 h-3.5 text-cricket-vibrant" />
                  <span className="text-[10px] font-black text-cricket-vibrant uppercase tracking-widest">
                    Bowling Specialist
                  </span>
                </div>
              </div>
            </div>

            <hr className="border-white/5 mb-4" />

            <p className="text-sm text-gray-300 leading-relaxed mb-4 font-sans">
              A dedicated bowling specialist, Coach Revanth masters pace, seam,
              swing, and line-and-length precision. He trains players from basic
              run-up mechanics to advanced delivery variations and match
              strategy under pressure.
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {["Pace Bowling", "Swing & Seam", "Line & Length", "Spin Bowling", "Yorkers"].map((s) => (
                <span key={s} className="px-3 py-1 rounded-full bg-cricket-gold/8 border border-cricket-gold/20 text-[10px] font-bold text-cricket-gold uppercase tracking-wide">
                  {s}
                </span>
              ))}
            </div>

            <button
              onClick={() => handleScrollTo("#contact")}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-cricket-gold/30 hover:bg-cricket-gold hover:text-black text-white hover:border-cricket-gold font-outfit font-bold text-xs tracking-wider uppercase transition-all duration-300 group"
            >
              Book Session with Coach Revanth
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Murthy Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="p-6 sm:p-7 rounded-3xl glass-card border border-cricket-vibrant/20 hover:border-cricket-vibrant/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              {/* Initials avatar */}
              <div className="w-14 h-14 rounded-full border-2 border-cricket-vibrant bg-gradient-to-br from-cricket-emerald to-cricket-dark flex items-center justify-center flex-shrink-0 shadow-[0_0_14px_rgba(26,177,85,0.25)]">
                <span className="font-outfit font-black text-lg text-cricket-vibrant">VM</span>
              </div>
              <div>
                <h3 className="font-outfit font-black text-xl text-white leading-tight">
                  Vallepu Murthy
                </h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <Target className="w-3.5 h-3.5 text-cricket-gold" />
                  <span className="text-[10px] font-black text-cricket-gold uppercase tracking-widest">
                    Batting Specialist
                  </span>
                </div>
              </div>
            </div>

            <hr className="border-white/5 mb-4" />

            <p className="text-sm text-gray-300 leading-relaxed mb-4 font-sans">
              A passionate batting specialist, Coach Murthy focuses on
              developing proper stance, footwork, shot selection, and mental
              toughness. He trains players to handle pace, spin, and match
              pressure with technique and confidence.
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {["Batting Stance", "Footwork", "Shot Selection", "Spin Handling", "Match Batting"].map((s) => (
                <span key={s} className="px-3 py-1 rounded-full bg-cricket-vibrant/8 border border-cricket-vibrant/20 text-[10px] font-bold text-cricket-vibrant uppercase tracking-wide">
                  {s}
                </span>
              ))}
            </div>

            <button
              onClick={() => handleScrollTo("#contact")}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-cricket-vibrant/30 hover:bg-cricket-vibrant hover:text-black text-white hover:border-cricket-vibrant font-outfit font-bold text-xs tracking-wider uppercase transition-all duration-300 group"
            >
              Book Session with Coach Murthy
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Coaches;