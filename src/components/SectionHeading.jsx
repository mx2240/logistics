import siteConfig from "../config/siteConfig";

export default function SectionHeading({ eyebrow, title, subtitle, center = true, light = false }) {
  const c = siteConfig.primaryColor;
  return (
    <div className={`mb-12 md:mb-16 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span
          className="inline-block mb-3 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
          style={{ color: c, background: `${c}14` }}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-tight ${light ? "text-white" : "text-slate-900"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${light ? "text-white/70" : "text-slate-500"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
