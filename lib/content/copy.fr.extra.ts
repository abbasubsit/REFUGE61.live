// Hand-written companions to the generated lib/content/copy.fr.ts.
//
// Every English string in the client's spreadsheet was extracted from the
// *rendered* page, so a handful do not match the source verbatim and cannot
// be picked up by a lookup on the English text alone. Three causes:
//
//   1. CSS uppercasing. "Move" is stored title-case in lib/pillarsV4.ts and
//      rendered MOVE by `uppercase`, so the spreadsheet recorded MOVE. The
//      French here is likewise given in natural case and uppercased by the
//      same CSS -- storing "BOUGER" would break the day someone drops the
//      `uppercase` class.
//
//   2. Sentences split by inline markup. T123 wraps a <Link> around "Terms
//      & Conditions", so the paragraph reaches the DOM as one string but
//      exists in the source as three. It is translated here in three parts
//      that concatenate to the client's approved sentence.
//
//   3. Escapes the DOM resolves but the source does not: &apos; in Contact,
//      and the literal \n\n paragraph breaks inside letsTalk.ts answers.
//
// Keys must match the source text exactly. Anything added here is merged
// into FR_BY_ENGLISH by lib/content/copy.fr.ts's consumer in lib/i18n.ts.

export const FR_EXTRA: Readonly<Record<string, string>> = {
  // --- CSS-uppercased labels (T006, T008, T011, T014, T018) ---------------
  "Winter, Bjørkåsen": "Hiver, Bjørkåsen",
  Move: "Bouger",
  Gather: "Se retrouver",
  Reset: "Se ressourcer",
  "Go further": "Aller plus loin",
  "Who Is Refuge61 For?": "À qui s'adresse REFUGE61 ?",
  "Phone / WhatsApp": "Téléphone / WhatsApp",
  "how active would you like your stay to be?":
    "quel niveau d'activité souhaitez-vous pour votre séjour ?",
  "WHAT ATTRACTS YOU MOST TO REFUGE61?":
    "QU'EST-CE QUI VOUS ATTIRE LE PLUS À REFUGE61 ?",

  // --- T022: the source writes the apostrophe as &apos; -------------------
  "Write to us, and we'll reply personally.":
    "Écrivez-nous, nous vous répondrons personnellement.",

  // --- T123: one sentence, three source nodes, a <Link> between them ------
  "Full details will be available in our":
    "Tous les détails figurent dans nos",
  "Terms & Conditions": "Conditions générales",
  "and provided before any stay is confirmed.":
    "et vous seront communiqués avant toute confirmation de séjour.",

  // --- T128: the arrow lives in its own <span> ---------------------------
  "START A CONVERSATION": "COMMENCER UNE CONVERSATION",

  // --- T209: literal \n\n paragraph breaks in the FAQ answer -------------
  "If you regularly practise cross-country skiing, we recommend bringing your own skis, boots and poles. You will probably be more comfortable using equipment you already know.\n\nIf you don’t have your own equipment, Nordic skis, boots and poles will be available at REFUGE61 for the duration of the week.":
    "Si vous pratiquez régulièrement le ski de fond, nous vous conseillons d'apporter vos propres skis, chaussures et bâtons. Vous serez sans doute plus à l'aise avec un matériel que vous connaissez déjà.\n\nSi vous n'avez pas votre propre équipement, des skis nordiques, des chaussures et des bâtons seront disponibles à REFUGE61 pendant toute la semaine.",
  // --- Practical Information section eyebrows -----------------------------
  // Stored title-case in the source, rendered uppercase by CSS, so the
  // spreadsheet recorded them uppercase. French given in the client's own
  // casing; the same `uppercase` class renders it.
  "The Weeks": "Les semaines",
  "Getting There": "Comment venir",
  Meals: "Les repas",
  // The client rewrote this eyebrow into a full sentence (T082).
  "Ski From The Door": "On chausse les skis à la porte du chalet",
  "A Typical Day": "Une journée type",
  "The Expedition": "L'expédition",
  "Fitness & Experience": "Forme & expérience",
  "What To Bring": "Quoi emporter",
  "The Price": "Le prix",
  Insurance: "Assurance",
  Cancellation: "Annulation",

  // --- Screen-reader-only landmark headings on the homepage ---------------
  "The Experience": "L'expérience",
  // --- Let's Talk form field labels ---------------------------------------
  // The required-field asterisk is appended in the JSX, so the spreadsheet
  // recorded "FIRST NAME *" while the source holds only "First name".
  "First name": "Prénom",
  "Last name": "Nom",
  Email: "E-mail",
  Country: "Pays",
  Age: "Âge",
  // --- Let's Talk form states -------------------------------------------
  // Added with the form's send route on 2026-08-29. These have no T-id: they
  // are new UI, not part of the client's translation spreadsheet.
  "Sending…": "Envoi…",
  "The form is not able to send messages yet. Please write to us directly and we will reply.":
    "Le formulaire ne peut pas encore envoyer de messages. Écrivez-nous directement et nous vous répondrons.",
  "Your message could not be sent. Please try again, or write to us directly.":
    "Votre message n'a pas pu être envoyé. Réessayez ou écrivez-nous directement.",
  "Your message could not be sent. Please check your connection and try again.":
    "Votre message n'a pas pu être envoyé. Vérifiez votre connexion et réessayez.",
  // --- Price lines, added 2026-09-05 -------------------------------------
  // "We want to show our price a little more." Three placements the client
  // marked on screenshots: the homepage contact block, The Weeks on Practical
  // Information, and the foot of "Everything we need" on The Lodge. French is
  // his own wording. No T-id -- these postdate the translation spreadsheet.
  //
  // French typography: a narrow no-break space inside the figure and before
  // the euro sign, so "1 800 €" can never break across two lines.
  "A different kind of week. €1,800 per person.":
    "Une semaine différente. 1 800 € par personne.",
  "And it all starts with a conversation.":
    "Et tout commence par une conversation.",
  "€1,800 per person — one week in the heart of the Norwegian winter.":
    "1 800 € par personne — une semaine au cœur de l’hiver norvégien.",
  "€1,800 per person": "1 800 € par personne",
  "A week at the lodge, with meals, skis and activities included.":
    "Une semaine au lodge, repas, skis et activités compris.",
};
