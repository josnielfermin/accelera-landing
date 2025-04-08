import TitleAnimation from '@/components/Landing/TitleAnimation';
import LeftColumn from '@/components/Landing/LeftColumn';
import RightColumn from '@/components/Landing/RightColumn';
import Accelera from '@/components/Scene/Accelera';
import BackgroundDecorator from '@/components/Landing/BackgroundDecorator';

const Landing = () => {
  return (
    <main className="w-full h-full">
      <BackgroundDecorator />
      <div className="bg-[#151515]/60 w-full h-full absolute top-0 left-0 z-[-11]"></div>
      <section className="relative w-full lg:min-h-[calc(100vh-140px)] max-lg:h-[900px] max-md:h-[1020px] max-[380px]:h-[1100px] max-[280px]:h-[1150px] flex flex-col max-lg:items-center lg:pl-12 container">
        <div className="w-[1px] absolute top-0 left-0 h-[calc(110vh-42px)] bg-gradient-to-t from-pastel-green-400/50 to-white/20 bg-blend-overlay z-[-10] max-lg:hidden"></div>
        <TitleAnimation />
        <div className="flex items-start justify-between max-lg:flex-col lg:gap-8 h-[558px] lg:mt-10 max-lg:max-w-[90%] max-lg:w-full">
          <LeftColumn />
          <Accelera />
          <RightColumn />
        </div>
      </section>
    </main>
  );
};

export default Landing;
