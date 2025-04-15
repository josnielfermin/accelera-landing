import { SOCIALS } from '@/components/Landing/Data';

export default function SocialSidebar() {
  return (
    <div className="lg:absolute lg:-right-[72px] xl2:-top-[228px] lg:-top-[168px] flex flex-col max-lg:flex-row max-lg:items-center max-lg:justify-center gap-4 z-10 max-2xl:bg-woodsmoke-950 py-6 xl2:px-4 px-5">
      {SOCIALS.map(({ href, iconClass }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#353535] rounded-full flex items-center justify-center xl2:h-10 xl2:w-10 w-8 h-8 group hover:bg-pastel-green-400 transition-all"
        >
          <span
            className={`${iconClass} text-white xl2:text-lg text-base group-hover:text-woodsmoke-950`}
          />
        </a>
      ))}
    </div>
  );
}
