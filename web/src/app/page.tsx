import { PalmGate } from "@/components/palm-gate";
import { ShellMark } from "@/components/shell-mark";
import { MenuExplorer } from "@/components/menu-explorer";

const whatsappMessage = encodeURIComponent(
  "Bonjour Yemanjā, je souhaite réserver une table.\n\nDate :\nHeure :\nNombre de personnes :\nNom :\n\nMerci.",
);
const whatsappUrl = `https://wa.me/221776356515?text=${whatsappMessage}`;

const navItems = [
  ["L'expérience", "#experience"],
  ["La carte", "#menu"],
  ["L'atmosphère", "#atmosphere"],
  ["Réserver", "#reservation"],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <header className="site-header">
          <a className="brand-lockup" href="#top" aria-label="Yemanjā, accueil">
            <ShellMark />
            <span>
              <strong>YEMANJĀ</strong>
              <small>BY SWEET COFFEE</small>
            </span>
          </a>

          <nav aria-label="Navigation principale">
            {navItems.map(([label, href]) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>

          <a className="header-book" href="#reservation">
            Réserver
          </a>
        </header>

        <div className="hero-copy">
          <p className="eyebrow">DAKAR · FACE À L&apos;ATLANTIQUE</p>
          <h1>
            Là où le goût
            <br />
            rencontre <em>l&apos;océan.</em>
          </h1>
          <p className="hero-intro">
            Une table entre ciel et mer. Une cuisine voyageuse, des cocktails
            solaires et des soirées qui suivent le rythme des vagues.
          </p>
          <div className="hero-actions">
            <a className="primary-cta" href="#reservation">
              Réserver une table
              <span aria-hidden="true">↗</span>
            </a>
            <a className="text-cta" href="#experience">
              Découvrir Yemanjā
            </a>
          </div>
        </div>

        <div className="hero-meta">
          <span>Food</span>
          <i />
          <span>Drinks</span>
          <i />
          <span>Music &amp; Art</span>
          <i />
          <span>By the sea</span>
        </div>

        <PalmGate />
      </section>

      <section className="story-section" id="experience">
        <div className="section-number">01</div>
        <div className="story-mark" aria-hidden="true">
          <ShellMark />
        </div>
        <div className="story-copy">
          <p className="eyebrow">UNE INVITATION AU VOYAGE</p>
          <h2>
            Inspirée par la déesse des océans, Yemanjā célèbre la douceur des
            vagues et <em>l&apos;élégance naturelle du littoral.</em>
          </h2>
          <div className="story-columns">
            <p>
              Entre raffinement et simplicité, chaque détail compose une
              expérience où le goût, la lumière et l&apos;émotion se rencontrent.
            </p>
            <p>
              Du premier verre au dernier rayon du soleil, le temps ralentit.
              Dakar reste proche. Le reste du monde paraît loin.
            </p>
          </div>
        </div>
      </section>

      <section className="menu-section" id="menu">
        <div className="menu-heading">
          <div>
            <p className="eyebrow">LA CARTE · ENTRE TERRE ET MER</p>
            <h2>Des assiettes faites pour voyager.</h2>
          </div>
          <p>
            La Méditerranée, Beyrouth, les tropiques et les produits de la mer
            se retrouvent dans une carte généreuse pensée pour le partage.
          </p>
        </div>

        <MenuExplorer />
      </section>

      <section className="atmosphere-section" id="atmosphere">
        <div className="atmosphere-glow" aria-hidden="true" />
        <p className="eyebrow">DU GOLDEN HOUR À LA NUIT</p>
        <h2>
          Le soleil descend.
          <br />
          <em>L&apos;énergie monte.</em>
        </h2>
        <p>
          Dîners au bord de l&apos;eau, musique choisie, rencontres artistiques et
          soirées pensées comme des parenthèses.
        </p>
        <div className="atmosphere-tags" aria-label="Ambiance Yemanjā">
          <span>Sunset dinners</span>
          <span>Live sessions</span>
          <span>Art by the sea</span>
        </div>
      </section>

      <section className="visit-section" id="reservation">
        <div className="visit-copy">
          <p className="eyebrow">VOTRE TABLE VOUS ATTEND</p>
          <h2>Rejoignez-nous au bord de la mer.</h2>
          <p>
            Ouvert le soir · 17h — 00h
            <br />
            Réservation recommandée
          </p>
        </div>
        <div className="reservation-actions">
          <a
            className="reservation-option whatsapp-option"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span>MESSAGE</span>
            <strong>WhatsApp</strong>
            <i aria-hidden="true">↗</i>
          </a>
          <a className="reservation-option call-option" href="tel:+221776356515">
            <span>APPELER</span>
            <strong>+221 77 635 65 15</strong>
            <i aria-hidden="true">↗</i>
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <ShellMark />
          <span>YEMANJĀ</span>
        </div>
        <p>Food. Drinks. Music &amp; Art by the sea.</p>
        <div className="footer-links">
          <a href="https://www.instagram.com/yemanja.dkr/">Instagram</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            Réserver
          </a>
          <a href="#top">Retour en haut ↑</a>
        </div>
      </footer>
    </main>
  );
}
