import { type Locale, t } from "@/lib/i18n";

export function letsTalkContent(locale: Locale) {
  return {
  hero: {
    eyebrow: t(locale, "LET’S TALK"),
    headline: t(locale, "Every stay at REFUGE61° begins with a conversation."),
    paragraphs: [
      t(locale, "REFUGE61 is a small, shared experience. There is no online booking and no automatic confirmation. Before you decide to come, we would simply like to meet you — and give you the opportunity to meet us."),
    ],
  },
  hosts: {
    bjorn: {
      name: t(locale, "BJØRN JACOB HAUGUM"),
      bio: [
        t(locale, "I’m Bjørn Jacob Haugum – an outdoor guide, ultrarunner and entrepreneur with a passion for creating adventures and experiences for others."),
        t(locale, "Through Bjørnen i bjergene and REFUGE61°, I create outdoor experiences that bring people closer to nature, to each other and to themselves. I have spent my whole life exploring the outdoors across the Nordic countries and feel particularly at home in winter landscapes."),
        t(locale, "I’m driven by creating the setting for truly memorable experiences in nature – and making them accessible to others."),
      ],
    },
    mathieu: {
      name: t(locale, "MATHIEU BONNIER"),
      bio: [
        t(locale, "I’m Mathieu Bonnier – an entrepreneur and lifelong outdoor enthusiast, with a particular love for winter, snow and remote places."),
        t(locale, "For me, adventure is not about performance or going further than anyone else. It is about being outdoors, discovering new places, living simply and sharing good moments with the people around me.That is the spirit I hope to bring to REFUGE61°."),
      ],
    },
    together: {
      name: t(locale, "TOGETHER"),
      bio: [
        t(locale, "We come from different backgrounds and generations, but we share the same idea of what makes an adventure memorable: nature, simplicity, freedom and people."),
        t(locale, "REFUGE61° grew from that shared vision."),
        "It is not about following a programme or ticking boxes. It is about living together for a few days in a special place, getting outside, sharing meals and experiences, and enjoying the rhythm of winter in the Norwegian mountains.",
        t(locale, "With REFUGE61°, we want to create the kind of week we would personally love to experience: simple, active and authentic, with time outdoors, good food, shared moments and the freedom to enjoy the mountains at your own pace."),
        t(locale, "Back to Basics."),
      ],
    },
  },
  beforeQuestionnaire: {
    headline: t(locale, "IT’S ABOUT THE RIGHT FIT."),
    paragraphs: [
      t(locale, "The people matter as much as the place."),
      t(locale, "REFUGE61 is for people who enjoy being active outdoors, but who also enjoy coming back, cooking together and sharing the evening."),
      t(locale, "It is neither a training camp nor a retreat spent entirely by the fire."),
      t(locale, "There is no perfect profile. We simply want to make sure that what you are looking for matches what we have created."),
    ],
  },
  form: {
    headline: t(locale, "TELL US A LITTLE ABOUT YOURSELF."),
    groups: {
      aboutYou: {
        title: t(locale, "ABOUT YOU"),
        fields: {
          firstName: t(locale, "First name"),
          lastName: t(locale, "Last name"),
          email: t(locale, "Email"),
          phone: t(locale, "Phone / WhatsApp"),
          country: t(locale, "Country"),
        },
      },
      age: {
        title: t(locale, "Age"),
        options: [t(locale, "Under 50"), t(locale, "50–59"), t(locale, "60–69"), t(locale, "70+")],
      },
      week: {
        title: t(locale, "WHICH WEEK ARE YOU INTERESTED IN?"),
        options: [
          t(locale, "Week 8 — 20–27 February 2027"),
          t(locale, "Week 9 — 27 February–6 March 2027"),
          t(locale, "Week 10 — 6–13 March 2027"),
          t(locale, "Week 11 — 13–20 March 2027"),
          t(locale, "I’m flexible"),
          t(locale, "I’m just exploring for now"),
        ],
      },
      comingWith: {
        title: t(locale, "WHO WOULD YOU BE COMING WITH?"),
        options: [t(locale, "On my own"), t(locale, "As a couple"), t(locale, "With a friend"), t(locale, "Other")],
      },
      attracts: {
        title: t(locale, "WHAT ATTRACTS YOU MOST TO REFUGE61?"),
        helpText: t(locale, "Tell us in a few words what made you want to contact us."),
      },
      days: {
        title: t(locale, "HOW DO YOU IMAGINE YOUR DAYS AT REFUGE61?"),
        helpText: t(locale, "Select anything that feels right to you."),
        options: [
          t(locale, "Cross-country skiing"),
          t(locale, "Walking / snowshoeing"),
          t(locale, "Longer days or expeditions outside"),
          t(locale, "Cooking and sharing meals"),
          t(locale, "Quiet time / reading / relaxing"),
          t(locale, "A balance between time together and time on my own"),
          t(locale, "Other"),
        ],
      },
      active: {
        title: t(locale, "how active would you like your stay to be?"),
        options: [
          t(locale, "Gentle — a few hours outside each day"),
          t(locale, "Active — I enjoy being outdoors for much of the day"),
          t(locale, "Very active — long and physically demanding days are what I’m looking for"),
        ],
      },
      sharing: {
        title: "WHAT DOES SHARING A HOUSE WITH A SMALL GROUP MEAN TO YOU?",
      },
      anythingElse: {
        title: t(locale, "ANYTHING ELSE YOU WOULD LIKE US TO KNOW?"),
        helpText: t(locale, "Interests, expectations, dietary requirements, questions, etc."),
      },
    },
    privacy: {
      checkboxLabel: t(locale, "I agree that REFUGE61 may use the information provided in this form to respond to my enquiry and contact me about a possible stay. I have read the Privacy Policy."),
    },
    submit: {
      button: t(locale, "REQUEST A CONVERSATION"),
      note: t(locale, "This is not a booking request. Bjorn or Mathieu will contact you personally to arrange a conversation."),
    },
    successMessage: "Thank you. We have received your message and will be in touch shortly.",
  },
  whatHappensNext: {
    steps: [
      {
        number: "1",
        title: t(locale, "YOU TELL US A LITTLE ABOUT YOURSELF."),
        description: t(locale, "Complete the short form."),
      },
      {
        number: "2",
        title: t(locale, "WE TALK."),
        description: t(locale, "Bjorn or Mathieu will contact you to arrange a video or phone conversation."),
      },
      {
        number: "3",
        title: t(locale, "WE DECIDE TOGETHER."),
        description: t(locale, "If REFUGE61 feels right for everyone, we’ll explain how to confirm your stay."),
      },
    ],
  },
  faq: [
    {
      question: t(locale, "Who is REFUGE61 for?"),
      answer: t(locale, "REFUGE61 is primarily designed for active adults over 50 who enjoy nature, movement and shared experiences. You don’t need to be an athlete — curiosity, independence and the right mindset matter much more than performance."),
    },
    {
      question: t(locale, "Do I need to be a good skier?"),
      answer: t(locale, "No. You should enjoy being active outdoors, but REFUGE61 is not a training camp. Everyone is free to find their own rhythm, sometimes with the group and sometimes alone."),
    },
    {
      question: t(locale, "Do I need to bring my own skis?"),
      answer: t(locale, "If you regularly practise cross-country skiing, we recommend bringing your own skis, boots and poles. You will probably be more comfortable using equipment you already know.\n\nIf you don’t have your own equipment, Nordic skis, boots and poles will be available at REFUGE61 for the duration of the week."),
    },
    {
      question: t(locale, "Do we have to do everything together?"),
      answer: t(locale, "No. We live together, but that doesn’t mean doing everything together. You are free to join the group or spend time on your own."),
    },
    {
      question: t(locale, "Where can we ski?"),
      answer: t(locale, "A groomed cross-country ski trail passes just 20 metres from the lodge, prepared for both classic and skating. It connects directly to a network of around 650 kilometres of trails. You can simply put on your skis and go."),
    },
    {
      question: t(locale, "Do I have to join the mini-expedition?"),
      answer: t(locale, "No. The expedition is entirely optional. When conditions allow, we may organise a longer journey into the mountains, possibly including a night away. Those who prefer to stay at the lodge or do something different are completely free to do so."),
    },
    {
      question: t(locale, "Do guests participate in preparing meals?"),
      answer: t(locale, "Yes. We prepare, cook and eat together, with small teams naturally taking turns in the kitchen. Participation is part of the experience."),
    },
    {
      question: t(locale, "What are the bedrooms like?"),
      answer: t(locale, "Bedrooms are for two people. Toilets are available on every floor. Showers and the sauna are in a separate building just a few metres away. Bed linen and towels are provided."),
    },
    {
      question: t(locale, "How do I get to REFUGE61?"),
      answer: t(locale, "Fly to Oslo Airport (Gardermoen). The railway station is directly inside the airport. Direct trains run north to Vinstra, in less than 3 hours, where we will meet our guests and take them the rest of the way to REFUGE61."),
    },
    {
      question: t(locale, "What does a stay cost?"),
      answer: t(locale, "€1,800 per person for seven nights, including accommodation, meals at the lodge, bed linen and towels, and Nordic skiing equipment for the week."),
    },
    {
      question: t(locale, "How do I reserve a place?"),
      answer: t(locale, "There is no online booking. Complete the LET’S TALK questionnaire and Bjorn or Mathieu will contact you personally. If REFUGE61 feels right for everyone, we will then explain how to confirm your place."),
    },
  ],
  };
}

/**
 * English content. /lets-talk-2 predates the locale switch and consumes this
 * directly, so it is kept as a named export rather than being folded into
 * letsTalkContent's callers.
 */
export const LETS_TALK_CONTENT = letsTalkContent("en");
