"use client";

import { useEffect, useState } from "react";
import { ShellMark } from "./shell-mark";

export function PalmGate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add("intro-locked");

    return () => document.body.classList.remove("intro-locked");
  }, []);

  function enter() {
    setOpen(true);
    window.sessionStorage.setItem("yemanja-entered", "1");
    document.body.classList.remove("intro-locked");
  }

  function replay() {
    setOpen(false);
    window.sessionStorage.removeItem("yemanja-entered");
    document.body.classList.add("intro-locked");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <div className={`palm-gate ${open ? "is-open" : ""}`}>
        <div className="palm-panel palm-panel-left" aria-hidden="true">
          <span className="gate-photo" />
        </div>
        <div className="palm-panel palm-panel-right" aria-hidden="true">
          <span className="gate-photo" />
        </div>

        <button
          aria-label="Entrer sur le site Yemanjā by Sweet Coffee"
          className="gate-enter"
          onClick={enter}
          type="button"
        >
          <ShellMark />
          <span className="gate-name">YEMANJĀ</span>
          <span className="gate-byline">BY SWEET COFFEE</span>
          <i>
            <b>Entrer</b>
            <span aria-hidden="true">↓</span>
          </i>
        </button>
      </div>

      {open && (
        <button className="replay-gate" type="button" onClick={replay}>
          Rejouer l&apos;entrée
        </button>
      )}
    </>
  );
}
