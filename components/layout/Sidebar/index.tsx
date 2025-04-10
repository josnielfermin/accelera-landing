import { SOCIALS } from '@/components/Landing/Data';

export default function SocialSidebar() {
  return (
    <div className="lg:absolute lg:-right-[72px] lg:-top-[228px] flex flex-col max-lg:flex-row max-lg:items-center max-lg:justify-center gap-4 z-10 max-[1720px]:bg-woodsmoke-950 py-6 px-4">
      {SOCIALS.map(({ href, iconClass }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#353535] rounded-full flex items-center justify-center h-10 w-10 group hover:bg-pastel-green-400 transition-all"
        >
          <span
            className={`${iconClass} text-white text-lg group-hover:text-woodsmoke-950`}
          />
        </a>
      ))}
    </div>
  );
}
