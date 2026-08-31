"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "@/components/UI";

const BOOKING_URL = "https://www.thepinnaclekigali.com/";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex min-w-0 flex-1 flex-col gap-1 px-5 py-3.5">
      <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-mist">
        {label}
      </span>
      {children}
    </label>
  );
}

export default function BookingBar() {
  const [today, setToday] = useState("");
  const [arrive, setArrive] = useState("");
  const [depart, setDepart] = useState("");
  const [guests, setGuests] = useState("2");

  useEffect(() => {
    setToday(new Date().toISOString().slice(0, 10));
  }, []);

  const inputCls =
    "w-full bg-transparent font-display text-[1.05rem] text-ink outline-none [color-scheme:light] placeholder:text-mist";

  return (
    <div className="shell relative z-30 -mt-11 md:-mt-14">
      <div className="mx-auto flex max-w-[1000px] flex-col overflow-hidden rounded-[26px] border border-ink/5 bg-ivory/95 shadow-[0_30px_80px_-30px_rgba(34,26,19,0.35)] backdrop-blur-xl md:flex-row md:items-stretch md:rounded-full">
        <div className="flex flex-1 divide-y divide-ink/8 md:divide-x md:divide-y-0">
          <Field label="Arrive">
            <input
              type="date"
              min={today}
              value={arrive}
              onChange={(e) => setArrive(e.target.value)}
              className={inputCls}
            />
          </Field>
          <Field label="Depart">
            <input
              type="date"
              min={arrive || today}
              value={depart}
              onChange={(e) => setDepart(e.target.value)}
              className={inputCls}
            />
          </Field>
          <Field label="Guests">
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className={`${inputCls} appearance-none`}
            >
              {["1", "2", "3", "4", "5+"].map((g) => (
                <option key={g} value={g}>
                  {g} {g === "1" ? "guest" : "guests"}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-3 bg-ink px-8 py-5 font-sans text-[11px] uppercase tracking-[0.16em] text-ivory transition-colors duration-500 hover:bg-bronze md:m-1.5 md:rounded-full md:px-9"
        >
          Check availability
          <ArrowRight className="transition-transform duration-500 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}
