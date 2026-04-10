import Image from "next/image";
import {ReactNode} from "react";

type ProductCardProps = {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  media?: ReactNode;
  details?: string;
  className?: string;
};

export function ProductCard({
  title,
  description,
  image,
  imageAlt,
  media,
  details,
  className = "",
}: ProductCardProps) {
  return (
    <article
      className={`group h-full rounded-3xl border border-border/70 bg-card/85 py-0 shadow-[0_16px_40px_-30px_color-mix(in_oklab,var(--foreground)_40%,transparent)] transition-all duration-300 will-change-transform hover:scale-[1.02] hover:shadow-[0_24px_60px_-28px_color-mix(in_oklab,var(--foreground)_45%,transparent)] ${className}`}
    >
      <div className="px-6 pt-6">
        <h3 className="text-2xl tracking-tight transition-colors duration-300 group-hover:text-foreground/90">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>

      <div className="px-6 pb-6">
        {media ? <div className="mt-4 mb-4">{media}</div> : null}
        {!media && image ? (
          <div className="mt-4 mb-4 overflow-hidden rounded-2xl border border-border/60">
            <Image
              src={image}
              alt={imageAlt ?? title}
              width={900}
              height={650}
              className="h-44 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ) : null}
        {details ? <p className="text-sm leading-relaxed text-muted-foreground">{details}</p> : null}
      </div>
    </article>
  );
}
