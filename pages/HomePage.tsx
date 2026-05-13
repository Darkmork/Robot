
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import CircularText from '../components/shared/CircularText';
import '../components/shared/CircularText.css'; // Import CSS for CircularText

// import FeaturedThemes from '../components/home/FeaturedThemes'; // Future component
// import Testimonials from '../components/home/Testimonials'; // Future component

const HomePage: React.FC = () => {
  return (
    <div className="relative"> {/* Added relative for positioning context if needed for other elements */}
      <HeroSection />
      {/* 
      <div className="container mx-auto py-12 px-4">
        <FeaturedThemes />
        <Testimonials />
      </div>
      */}
       <section className="py-16 bg-white dark:bg-main-dark">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-orbitron font-bold mb-4 text-slate-800 dark:text-slate-100">¿Qué puedes esperar?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
            RobotCode Arena está diseñado para llevar tus habilidades de programación al siguiente nivel a través de desafíos estimulantes y aprendizaje interactivo.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-100 dark:bg-secondary-dark p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-orbitron font-semibold mb-3 text-accent-sky">Desafíos Progresivos</h3>
              <p className="text-slate-700 dark:text-slate-300">Problemas categorizados por tema y dificultad, desde conceptos básicos hasta algoritmos complejos.</p>
            </div>
            <div className="bg-slate-100 dark:bg-secondary-dark p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-orbitron font-semibold mb-3 text-accent-yellow">Feedback Instantáneo</h3>
              <p className="text-slate-700 dark:text-slate-300">Valida tus soluciones contra múltiples casos de prueba y obtén resultados al momento.</p>
            </div>
            <div className="bg-slate-100 dark:bg-secondary-dark p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-orbitron font-semibold mb-3 text-accent-green">Gamificación Atractiva</h3>
              <p className="text-slate-700 dark:text-slate-300">Gana puntos, sube de nivel y colecciona insignias por tus logros.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Text Element */}
      <div className="fixed top-8 right-8 z-50"> {/* Higher z-index to ensure visibility */}
        <CircularText
          text="JORGEGANGALE<JGdev/>*"
          spinDuration={25} // Slightly slower spin
          onHover="speedUp"
          baseRadius={70} // Adjusted for the longer text
        />
      </div>
    </div>
  );
};

export default HomePage;