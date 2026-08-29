// "The Story of Bjørkåsen" — the short history at the foot of The Lodge.
//
// The client replaced his own first draft on 2026-08-29 ("I made shorter
// history of THE LODGE, FR and EN"), sending both languages himself, so this
// text is not routed through lib/content/copy.fr.ts: it has no counterpart in
// the translation spreadsheet and never passed through t().
//
// Sources: "The Story of Bjørkåsen EN.docx" and "Histoire du chalet FR.docx".
// Used verbatim.

import type { Locale } from "@/lib/i18n";

export type HistoryContent = {
  eyebrow: string;
  title: string;
  lead: string;
  paragraphs: readonly string[];
  closing: string;
};

const EN: HistoryContent = {
  eyebrow: "Since 1900",
  title: "The Story of Bjørkåsen",
  lead: "Bjørkåsen has more than a century of history.",
  paragraphs: [
    "In the early 1900s, industrialist Georg von Krogh fell in love with these mountains, where he came to hunt and fish. He built an elegant Swiss-style hunting lodge here — remote enough to feel immersed in nature, yet connected to the outside world. To continue running his business between the United States and Europe, he even had a telephone line installed all the way from the village to the lodge.",
    "Von Krogh spent much of the year at Bjørkåsen, surrounded by a small household, and often welcomed industrialists from abroad. Local game was served at dinner, and the main building soon became known as “the Castle.”",
    "After his death in the late 1940s, Bjørkåsen changed hands. From 1959, it became a place for important meetings and gatherings, welcoming senior figures and heads of state from several countries.",
    "Since 2013, Bjørkåsen has once again been privately owned.",
  ],
  closing:
    "More than a century after it was built, the spirit of the place remains: a secluded lodge in the mountains, made for days outdoors, evenings around the table, and the simple pleasure of slowing down.",
};

const FR: HistoryContent = {
  eyebrow: "Depuis 1900",
  title: "L’histoire de Bjørkåsen",
  lead: "Bjørkåsen a plus d’un siècle d’histoire.",
  paragraphs: [
    "Au début des années 1900, l’industriel Georg von Krogh tombe amoureux de ces montagnes, où il vient chasser et pêcher. Il y fait construire un élégant pavillon de chasse de style suisse, suffisamment isolé pour vivre au cœur de la nature, mais déjà relié au monde : pour continuer à diriger ses affaires entre les États-Unis et l’Europe, il fait installer une ligne téléphonique depuis le village jusqu’au chalet.",
    "Von Krogh y passe une grande partie de l’année, entouré de quelques employés, et y reçoit des industriels venus de l’étranger. On y sert le gibier de la région et le bâtiment principal gagne bientôt son surnom : « le château ».",
    "Après sa disparition à la fin des années 1940, Bjørkåsen change de mains. À partir de 1959, il devient pendant plusieurs décennies un lieu de rencontres et de réunions, accueillant notamment des dirigeants et des chefs d’État étrangers.",
    "Depuis 2013, Bjørkåsen est redevenu une propriété privée.",
  ],
  closing:
    "Plus d’un siècle après sa construction, l’esprit du lieu est toujours là : un chalet isolé dans les montagnes, fait pour vivre dehors, se retrouver autour de la table et profiter simplement du temps qui passe.",
};

export function historyContent(locale: Locale): HistoryContent {
  return locale === "fr" ? FR : EN;
}
