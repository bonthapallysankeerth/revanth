import React from "react";
import { Swords, Compass, Dumbbell, Trophy } from "lucide-react";
const programs = [
  { icon: Swords, title: "Batting Training" },
  { icon: Compass, title: "Bowling Training" },
  { icon: Dumbbell, title: "Fitness Training" },
  { icon: Trophy, title: "Match Practice" },
];
function Programs() {
  return (
    <section id="programs" className="py-20 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Programs
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {programs.map((p, i) => (
            <div key={i} className="p-6 bg-white/5 rounded-xl text-center">
              <p.icon className="mx-auto text-yellow-400 mb-3" />
              <h3>{p.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Programs;