// Hand-written companions to the generated lib/content/copy.da.ts.
//
// The Danish mirror of copy.fr.extra.ts, and it exists for the same reasons:
// the client's spreadsheet recorded each string as the *rendered* page shows
// it, so a handful do not match the source verbatim.
//
//   1. CSS uppercasing. "Move" is stored title-case in lib/pillarsV4.ts and
//      rendered MOVE, so the sheet recorded MOVE and its Danish as BEVÆGELSE.
//      The Danish is given here in sentence case and uppercased by the same
//      CSS -- storing "BEVÆGELSE" would break the day someone drops the
//      `uppercase` class. Danish does not capitalise common nouns, so
//      lowering these is safe; REFUGE61 and WhatsApp keep their own casing.
//
//   2. Sentences split by inline markup. T123 wraps a <Link> around the terms
//      link, so it exists as three source strings; the three Danish parts
//      below concatenate to the sheet's single sentence.
//
//   3. Escapes the DOM resolves but the source does not: &apos; in Contact,
//      and the literal \n\n paragraph breaks in the FAQ answers.
//
// Every value here is transcribed from the client's Danish column, not
// translated by us -- except the four form-state messages at the end, which
// are new UI with no counterpart in his sheet. Those four are ours and should
// be checked by a Danish speaker along with the rest.

export const DA_EXTRA: Readonly<Record<string, string>> = {
  // --- CSS-uppercased labels ---------------------------------------------
  "Winter, Bjørkåsen": "Vinter, Bjørkåsen",
  Move: "Bevægelse",
  Gather: "Samvær",
  Reset: "Ro",
  // Bjørn rewrote this one in his PDF: "Gå videre" -> "Ud på ski".
  "Go further": "Ud på ski",
  "Who Is Refuge61 For?": "Hvem er REFUGE61 for?",
  "Phone / WhatsApp": "Telefon / WhatsApp",
  "how active would you like your stay to be?":
    "hvor aktivt ønsker du, at dit ophold skal være?",
  "WHAT ATTRACTS YOU MOST TO REFUGE61?":
    "HVAD TILTRÆKKER DIG MEST VED REFUGE61?",

  // --- The source writes the apostrophe as &apos; -------------------------
  "Write to us, and we'll reply personally.":
    "Skriv til os, så svarer vi personligt.",

  // --- One sentence, three source nodes, a <Link> between them ------------
  "Full details will be available in our": "Alle detaljer findes i vores",
  "Terms & Conditions": "Vilkår og betingelser",
  "and provided before any stay is confirmed.":
    "og udleveres, før et ophold bekræftes.",

  // --- The arrow lives in its own <span> ---------------------------------
  "START A CONVERSATION": "START EN SAMTALE",

  // --- Literal \n\n paragraph breaks in the FAQ answer -------------------
  "If you regularly practise cross-country skiing, we recommend bringing your own skis, boots and poles. You will probably be more comfortable using equipment you already know.\n\nIf you don’t have your own equipment, Nordic skis, boots and poles will be available at REFUGE61 for the duration of the week.":
    "Hvis du jævnligt står på langrend, anbefaler vi, at du tager dine egne ski, støvler og stave med. Du vil sandsynligvis være mere tilpas med udstyr, du allerede kender.\n\nHar du ikke dit eget udstyr, står langrendsski, støvler og stave til rådighed på REFUGE61 i hele ugen.",

  // --- Practical Information section eyebrows -----------------------------
  "The Weeks": "Ugerne",
  "Getting There": "Sådan kommer du hertil",
  Meals: "Måltiderne",
  "Ski From The Door": "På ski fra døren",
  "A Typical Day": "En typisk dag",
  "The Expedition": "Ekspeditionen",
  "Fitness & Experience": "Form & erfaring",
  "What To Bring": "Hvad du skal medbringe",
  "The Price": "Prisen",
  Insurance: "Forsikring",
  Cancellation: "Afbestilling",

  // --- Screen-reader-only landmark heading on the homepage ---------------
  "The Experience": "Oplevelsen",

  // --- Let's Talk form field labels ---------------------------------------
  // The required-field asterisk is appended in the JSX, so the sheet recorded
  // "FORNAVN *" while the source holds only "First name".
  "First name": "Fornavn",
  "Last name": "Efternavn",
  Email: "E-mail",
  Country: "Land",
  Age: "Alder",

  // --- Form states: ours, not the client's --------------------------------
  // Added with the send route on 2026-08-29. No T-id, so these are our own
  // Danish and need a native check.
  "Sending…": "Sender…",
  "The form is not able to send messages yet. Please write to us directly and we will reply.":
    "Formularen kan endnu ikke sende beskeder. Skriv til os direkte, så svarer vi.",
  "Your message could not be sent. Please try again, or write to us directly.":
    "Din besked kunne ikke sendes. Prøv igen, eller skriv til os direkte.",
  "Your message could not be sent. Please check your connection and try again.":
    "Din besked kunne ikke sendes. Tjek din forbindelse, og prøv igen.",
  // --- The Weeks headline, reworded 2026-09-05 ---------------------------
  "Four weeks. Maximum 14 guests.": "Fire uger. Maks. 14 gæster.",

  // --- Price lines: Bjørn's Danish, sent 2026-09-05 ----------------------
  // Danish writes the thousands separator as a full stop, so "€1.800" is
  // correct here and is his own wording.
  "A different kind of week. €1,800 per person.":
    "En anderledes uge. €1.800 pr. person.",
  "And it all starts with a conversation.":
    "Og det hele begynder med en samtale.",
  "€1,800 per person — one week in the heart of the Norwegian winter.":
    "€1.800 pr. person — én uge i det norske vinterlandskab.",
  "€1,800 per person": "€1.800 pr. person",
  // "logden" is his spelling. The rest of the site's Danish uses "lodgen"
  // (see T024, T223), so this may be a slip -- flagged with the client rather
  // than corrected here, because it is his copy to change.
  "A week at the lodge, with meals, skis and activities included.":
    "En uge på logden med måltider, ski og aktiviteter inkluderet.",
};
