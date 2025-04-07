import { SOCIALS } from '@/components/Landing/Data';

export default function SocialSidebar() {
  return (
    <div className="absolute -right-[72px] top-0 flex flex-col gap-4 z-10 bg-woodsmoke-950 py-6 px-4">
      <div className="w-[1px] absolute top-0 left-0 h-full bg-gradient-to-t from-white/10 to-white/0 bg-blend-overlay z-[-10]" />
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
