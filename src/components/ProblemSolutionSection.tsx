import React from 'react';

const ProblemSolutionSection = () => {
  return (
    <section className="w-full bg-primary text-lightText py-16 px-8 md:px-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Você sonha em ser DJ, mas se sente <span className="text-secondary">travado(a)</span>?
        </h2>
        <div className="max-w-3xl mx-auto text-lg md:text-xl space-y-6 mb-10">
          <p>
            Você já ficou paralisado(a) diante de uma controladora sem saber o que fazer? Sentiu que tem talento, mas os termos técnicos parecem um bicho de sete cabeças? Tentou aprender sozinho(a) pelo YouTube, mas só encontrou vídeos soltos, confusos e sem uma direção clara?
          </p>
          <p className="font-semibold text-secondary">
            Chega disso.
          </p>
          <p>
            Eu criei o curso <span className="text-accent font-bold">A Arte do Set</span> justamente para te oferecer um caminho <span className="text-secondary">simples, direto e prático</span> para você finalmente decolar na sua jornada como DJ.
          </p>
        </div>
        {/* Optional: Add an icon or a small visual element here */}
      </div>
    </section>
  );
};

export default ProblemSolutionSection;

