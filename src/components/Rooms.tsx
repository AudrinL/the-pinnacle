"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { Cta, Eyebrow, ArrowRight } from "@/components/UI";

const rooms = [
  {
    name: "Angel's Nest",
    type: "The Pinnacle Suite",
    size: "187 m²",
    view: "Panoramic city view",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Rooms/SUITE-Standard-711.jpg",
  },
  {
    name: "Sunset Serenity",
    type: "Panoramic View Deluxe",
    size: "53 m²",
    view: "Panoramic view",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Rooms/SunsetSerenity/SUN-Standard-714.jpg",
  },
  {
    name: "Luna Lapis",
    type: "Panoramic View Deluxe",
    size: "53 m²",
    view: "Panoramic view",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Rooms/LunaLapis/LUNA-Standard-715.jpg",
  },
  {
    name: "Starlit Utopia",
    type: "Panoramic View Deluxe",
    size: "53 m²",
    view: "Panoramic view",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Rooms/StarlitUtopia/STAR-Standard-705-final.jpg",
  },
  {
    name: "Royal Respite",
    type: "Garden View Deluxe",
    size: "53 m²",
    view: "Garden view",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Rooms/RoyalRespite/ROYAL-Standard-721.jpg",
  },
  {
    name: "Golden Guild",
    type: "Garden View Deluxe",
    size: "53 m²",
    view: "Garden view",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Rooms/GoldenGuild/GOLDEN-Standard-715.jpg",
  },
  {
    name: "Jasper Jewel",
    type: "Garden View Deluxe",
    size: "53 m²",
    view: "Garden view",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Rooms/JasperJewel/JASPER-Standard-9517.jpg",
  },
  {
    name: "Pearl Pavilion",
    type: "Garden View Deluxe",
    size: "53 m²",
    view: "Garden view",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Rooms/PearlPevilion/PEARL-Standard-519.jpg",
  },
  {
    name: "Lavish Lair",
    type: "Garden View Deluxe",
    size: "53 m²",
    view: "Garden view",
    image:
      "https://spelman-dms.sfo3.cdn.digitaloceanspaces.com/tpk_website_images/Rooms/LavishLair/LAVISH-Standard-722.jpg",
  },
];

export default function Rooms() {
  const railRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  const onScroll = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    const el = railRef.current;
    if (!el || e.pointerType === "touch") return;
    drag.current = {
      active: true,
      startX: e.clientX,
      startScroll: el.scrollLeft,
      moved: false,
    };
    el.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const el = railRef.current;
    if (!el || !drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.startScroll - dx;
  };
  const endDrag = (e: React.PointerEvent) => {
    const el = railRef.current;
    if (el?.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
    drag.current.active = false;
  };
  const guardClick = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      drag.current.moved = false;
    }
  };

  const nudge = (dir: 1 | -1) => {
    railRef.current?.scrollBy({ left: dir * 440, behavior: "smooth" });
  };

  return (
    <section className="bg-ivory py-24 md:py-36 lg:py-44">
      <div className="shell">
        <Stagger className="mb-14 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <StaggerItem>
              <Eyebrow className="mb-5 block">The Stay</Eyebrow>
            </StaggerItem>
            <StaggerItem>
              <h2 className="display text-[clamp(2.1rem,4.8vw,4rem)]">
                Every room
                <br />
                with a <span className="italic text-bronze">view.</span>
              </h2>
            </StaggerItem>
          </div>
          <StaggerItem>
            <div className="flex items-end gap-8">
              <p className="prose-body max-w-xs text-[0.95rem]">
                One suite and eight rooms. In each, peace is within reach simply
                by looking outside.
              </p>
              <div className="hidden shrink-0 gap-2.5 md:flex">
                {([-1, 1] as const).map((d) => (
                  <button
                    key={d}
                    onClick={() => nudge(d)}
                    aria-label={d === -1 ? "Previous rooms" : "Next rooms"}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors duration-500 hover:bg-ink hover:text-ivory"
                  >
                    <ArrowRight className={d === -1 ? "rotate-180" : ""} />
                  </button>
                ))}
              </div>
            </div>
          </StaggerItem>
        </Stagger>
      </div>

      <Reveal y={24}>
        <div
          ref={railRef}
          onScroll={onScroll}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          className="no-scrollbar drag-cursor flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-[clamp(1.25rem,5vw,4.5rem)] pb-2"
        >
          {rooms.map((room, i) => (
            <Link
              key={room.name}
              href="/rooms"
              onClick={guardClick}
              className="group w-[78vw] shrink-0 snap-start sm:w-[360px] lg:w-[400px]"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[22px] bg-sand">
                <Image
                  src={room.image}
                  alt={`${room.name} — ${room.type} at The Pinnacle Kigali`}
                  fill
                  draggable={false}
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                  sizes="(max-width: 640px) 78vw, 400px"
                />
                <span className="absolute left-4 top-4 font-sans text-[10px] tracking-[0.2em] text-ivory/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <h3 className="font-display text-[1.4rem] text-ink">{room.name}</h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-[11px] uppercase tracking-[0.13em] text-mist">
                  <span>{room.type}</span>
                  <span className="h-px w-3 bg-mist/60" />
                  <span>{room.size}</span>
                  <span className="h-px w-3 bg-mist/60" />
                  <span>{room.view}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Reveal>

      <div className="shell mt-12 flex items-center justify-between gap-8">
        <div className="h-px flex-1 bg-ink/10">
          <div
            className="h-px bg-bronze transition-[width] duration-200"
            style={{ width: `${Math.max(progress * 100, 6)}%` }}
          />
        </div>
        <Cta href="/rooms" variant="outline">
          All rooms &amp; suites
        </Cta>
      </div>
    </section>
  );
}
