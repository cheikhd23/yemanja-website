"use client";

import { useState } from "react";
import { drinkMenu, foodMenu } from "@/data/full-menu";
import { ShellMark } from "./shell-mark";

type MenuMode = "cuisine" | "bar";

export function MenuExplorer() {
  const [mode, setMode] = useState<MenuMode>("cuisine");
  const categories = mode === "cuisine" ? foodMenu : drinkMenu;

  return (
    <div className="menu-explorer">
      <div className="menu-controls">
        <div className="menu-mode" role="group" aria-label="Choisir la carte">
          <button
            className={mode === "cuisine" ? "is-active" : ""}
            onClick={() => setMode("cuisine")}
            type="button"
          >
            La cuisine
          </button>
          <button
            className={mode === "bar" ? "is-active" : ""}
            onClick={() => setMode("bar")}
            type="button"
          >
            Le bar &amp; la cave
          </button>
        </div>

        <p>Tous les prix sont indiqués en FCFA</p>
      </div>

      <nav className="menu-index" aria-label="Sections de la carte">
        {categories.map((category, index) => (
          <a href={`#menu-${category.id}`} key={category.id}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {category.label}
          </a>
        ))}
      </nav>

      <div className="menu-book" key={mode}>
        {categories.map((category, categoryIndex) => (
          <section
            className="menu-chapter"
            id={`menu-${category.id}`}
            key={category.id}
          >
            <header className="menu-chapter-heading">
              <div>
                <span>{String(categoryIndex + 1).padStart(2, "0")}</span>
                <p>YEMANJĀ · DAKAR</p>
              </div>
              <h3>{category.label}</h3>
              {category.note && <em>{category.note}</em>}
              <ShellMark />
            </header>

            <div className="menu-chapter-items">
              {category.items.map((item) => (
                <article
                  className="menu-entry"
                  key={`${category.id}-${item.name}`}
                >
                  <div>
                    <h4>{item.name}</h4>
                    {item.description && <p>{item.description}</p>}
                  </div>
                  {item.price && <strong>{item.price}</strong>}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className="menu-note">
        <ShellMark />
        <p>
          Certains plats nécessitent un temps de préparation plus long.
          N&apos;hésitez pas à signaler vos allergies à notre équipe.
        </p>
      </footer>
    </div>
  );
}
