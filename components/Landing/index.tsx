import TitleAnimation from '@/components/Landing/TitleAnimation';
import LeftColumn from '@/components/Landing/LeftColumn';
import RightColumn from '@/components/Landing/RightColumn';
import Accelera from '@/components/Scene/Accelera';
import BackgroundDecorator from '@/components/Landing/BackgroundDecorator';

const Landing = () => {
  return (
    <main className="w-full h-full [zoom:0.9]">
      <BackgroundDecorator />

      <section className="relative w-full lg:min-h-[calc(100vh-148px)] max-lg:h-[900px] max-md:h-[1020px] max-[380px]:h-[1130px] max-[280px]:h-[1220px] flex flex-col max-lg:items-center lg:pl-12 container ">
        <div className="w-[1px] absolute top-0 left-0 h-[calc(110vh-42px)] bg-white/50 bg-blend-overlay z-[-9] max-lg:hidden max-[1865px]:ml-[72px] overflow-hidden">
          <div className="w-[100vw] h-[100vh] rounded-full blur-sm [background:radial-gradient(circle,_rgba(92,_222,_102,_1)_20%,_rgba(92,_222,_102,_0.23)_70%)] absolute top-1/2 -translate-y-1/2  max-lg:hidden left-1/2 -translate-x-1/2 animate-vertical-light z-[100] bg-blend-overlay"></div>
        </div>
        <TitleAnimation />
        <div className="flex items-start justify-between max-lg:flex-col lg:gap-8 h-[66vh] min-h-[508px] !max-h-[600px] xl2:mt-[100px] lg:mt-[40px] max-lg:max-w-[90%] max-lg:w-full lg:relative">
          <LeftColumn />
          <Accelera />
          <RightColumn />
        </div>
      </section>
    </main>
  );
};

export default Landing;
