import React from 'react';

// Placeholder for an SVG icon or an emoji. For a real project, you'd use an actual SVG.
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent w-6 h-6 flex-shrink-0 mt-1">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

const courseTopics = [
  { id: 1, text: "Como funciona o equipamento (controladora, cabos, software)" },
  { id: 2, text: "O que é compasso e por que ele é a alma da mixagem" },
  { id: 3, text: "Como fazer transições suaves e impactantes" },
  { id: 4, text: "Técnicas de loop, hot cue e FX" },
  { id: 5, text: "Como montar seu primeiro repertório com segurança" },
  { id: 6, text: "Como criar seu primeiro set profissional" },
  { id: 7, text: "Como conquistar o público com postura e presença" },
  { id: 8, text: "E muito mais, com exercícios práticos e explicações passo a passo" },
];

interface AboutCourseSectionProps {
  id: string;
}

const AboutCourseSection: React.FC<AboutCourseSectionProps> = ({ id }) => {
  return (
    <section id={id} className="w-full bg-darkText text-lightText py-16 px-8 md:px-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          O Que Você Vai <span className="text-secondary">Dominar</span> no Curso A Arte do Set?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {
            courseTopics.map((topic) => (
              <div key={topic.id} className="flex items-start space-x-3 p-4 bg-primary rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <CheckIcon />
                <p className="text-lg">{topic.text}</p>
              </div>
            ))
          }
        </div>
        <p className="text-center text-xl mt-12">
          Tudo isso com <span className="text-secondary font-semibold">exercícios práticos</span> e explicações <span className="text-accent font-semibold">passo a passo</span> para você não se perder em nenhum momento.
        </p>
      </div>
    </section>
  );
};

export default AboutCourseSection;

