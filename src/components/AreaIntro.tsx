// src/components/AreaIntro.tsx
import Image from "next/image";
import * as React from "react";

type Fact = { label: string; value: React.ReactNode };

interface AreaIntroProps {
  title?: string;
  image: { src: string; alt: string; width?: number; height?: number };
  /** Facts column next to the image (e.g., Design Project, Location, Date, About) */
  facts?: Fact[];
  /** Optional body text shown under the image */
  children?: React.ReactNode;
  /** If true, puts the facts on the right and the image on the left */
  reverse?: boolean;
}

export default function AreaIntro({
  title,
  image,
  facts = [],
  children,
  reverse = false,
}: AreaIntroProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      {title ? (
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">{title}</h2>
      ) : null}

      <div
        className={`grid grid-cols-1 gap-8 md:grid-cols-12 ${
          reverse ? "" : ""
        }`}
      >
        {/* Facts column */}
        <aside
          className={`md:col-span-4 ${
            reverse ? "md:order-2" : "md:order-1"
          }`}
        >
          {facts.length > 0 && (
            <dl className="space-y-4">
              {facts.map((f, i) => (
                <div key={i} className="border-l-2 pl-4">
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                    {f.label}
                  </dt>
                  <dd className="text-sm leading-relaxed">{f.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </aside>

        {/* Main image */}
        <div
          className={`md:col-span-8 ${
            reverse ? "md:order-1" : "md:order-2"
          }`}
        >
          <div className="overflow-hidden rounded-lg border">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width ?? 1800}
              height={image.height ?? 1200}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Optional description under image */}
      {children ? (
        <div className="prose mt-6 max-w-none text-sm leading-relaxed">
          {children}
        </div>
      ) : null}
    </section>
  );
}
