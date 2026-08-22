import React from 'react';
import { SiteShell } from '@/components/layout/SiteShell';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Container } from '@/components/ui/Container';
import { SITE_NAV_ITEMS } from '@/lib/siteNav';
import { HEADER_LOGO_V4 } from '@/lib/logoV4';

export const metadata = {
  title: 'Terms & Conditions | REFUGE61',
};

export default function TermsPage() {
  return (
    <SiteShell
      navItems={SITE_NAV_ITEMS}
      officialLogo={HEADER_LOGO_V4}
      alwaysSolid
      footer={<SiteFooter />}
    >
      <div className="bg-snow pt-32 pb-24">
        <Container>
          <div className="max-w-3xl mx-auto text-body-m text-charcoal/80 space-y-space-3">
            <h1 className="font-display text-display-m lg:text-display-l text-charcoal mb-space-8">TERMS AND CONDITIONS OF TRAVEL</h1>
            <p className="text-eyebrow uppercase tracking-[0.12em] text-forest">REFUGE61°</p>
            <p className="text-eyebrow uppercase tracking-[0.12em] text-forest mb-space-4">Back to Basics</p>
            <h2 className="text-heading-s text-charcoal mt-space-12 mb-space-4">1. About REFUGE61</h2>
            <p dangerouslySetInnerHTML={{ __html: "REFUGE61 is a one-week winter experience in the Norwegian mountains, centred around cross-country skiing, nature, simplicity, community and life in a mountain lodge." }} />
            <p dangerouslySetInnerHTML={{ __html: "The stay runs from Saturday to Saturday." }} />
            <p dangerouslySetInnerHTML={{ __html: "REFUGE61 is neither a traditional hotel stay nor a classic guided ski holiday with a fixed daily programme. Guests and hosts live together at the lodge, share meals, cook together and spend their days cross-country skiing and enjoying the winter landscape." }} />
            <p dangerouslySetInnerHTML={{ __html: "Guests are free to choose their own pace and activities. The hosts provide the framework for the week, advise on routes and possibilities, share practical tips on cross-country skiing and join selected outings.The week also includes the opportunity to take part in an optional mini-expedition, with one overnight stay in the winter mountains, subject to weather, snow and safety conditions." }} />
            <h3 className="text-eyebrow uppercase tracking-[0.12em] text-forest mt-space-8 mb-space-3">Organiser</h3>
            <div className="pt-4 space-y-2">
              <p>REFUGE61°</p>
              <p>[Legal company name to be inserted once incorporated]</p>
              <p>CVR no.: [to be inserted]</p>
              <p>Address: Porskærvej 28, 8420 Knebel, Denmark</p>
              <p>Email: [to be inserted]</p>
              <p>Telephone: +45 20 87 03 42</p>
            </div>
            <h2 className="text-heading-s text-charcoal mt-space-12 mb-space-4">2. Duration and Accommodation</h2>
            <p dangerouslySetInnerHTML={{ __html: "The specific dates are stated in the individual booking." }} />
            <p dangerouslySetInnerHTML={{ __html: "The lodge has seven double rooms and accommodates up to 14 guests." }} />
            <p dangerouslySetInnerHTML={{ __html: "Accommodation is normally based on two guests sharing a room." }} />
            <p dangerouslySetInnerHTML={{ __html: "Solo travellers booking shared accommodation may be paired with another solo traveller. The applicable room arrangement will be made clear to the guest before the booking becomes binding." }} />
            <p dangerouslySetInnerHTML={{ __html: "A private room may be booked for an additional charge, subject to availability." }} />
            <h2 className="text-heading-s text-charcoal mt-space-12 mb-space-4">3. What Is Included</h2>
            <p dangerouslySetInnerHTML={{ __html: "The price includes:" }} />
            <p dangerouslySetInnerHTML={{ __html: "accommodation at the lodge" }} />
            <p dangerouslySetInnerHTML={{ __html: "breakfast, lunch and dinner" }} />
            <p dangerouslySetInnerHTML={{ __html: "transport from Vinstra station to the lodge on arrival" }} />
            <p dangerouslySetInnerHTML={{ __html: "transport from the lodge to Vinstra station on departure" }} />
            <p dangerouslySetInnerHTML={{ __html: "nordic cross-country skis" }} />
            <p dangerouslySetInnerHTML={{ __html: "ski boots" }} />
            <p dangerouslySetInnerHTML={{ __html: "ski poles" }} />
            <p dangerouslySetInnerHTML={{ __html: "relevant shared equipment for the mini-expedition" }} />
            <p dangerouslySetInnerHTML={{ __html: "activities during the stay" }} />
            <p dangerouslySetInnerHTML={{ __html: "mini-expedition with one overnight stay" }} />
            <p dangerouslySetInnerHTML={{ __html: "bed linen" }} />
            <p dangerouslySetInnerHTML={{ __html: "towels" }} />
            <p dangerouslySetInnerHTML={{ __html: "bathrobe." }} />
            <p dangerouslySetInnerHTML={{ __html: "Transport to and from Vinstra is not included." }} />
            <p dangerouslySetInnerHTML={{ __html: "Guests must bring their own winter and ski clothing, ordinary clothing and footwear, personal medication and snacks." }} />
            <p dangerouslySetInnerHTML={{ __html: "Beer, wine and other alcoholic beverages are not included. Guests may bring their own alcohol for moderate personal consumption." }} />
            <h2 className="text-heading-s text-charcoal mt-space-12 mb-space-4">4. Arrival and Departure</h2>
            <p dangerouslySetInnerHTML={{ __html: "Guests are responsible for arranging their own transport to and from Vinstra." }} />
            <p dangerouslySetInnerHTML={{ __html: "Before the trip, REFUGE61 will provide a recommended arrival time at Vinstra station. The shared transfer to the lodge is organised on the basis of this time." }} />
            <p dangerouslySetInnerHTML={{ __html: "If a guest cannot arrive at the recommended time, alternative arrangements must be agreed with REFUGE61 in advance." }} />
            <p dangerouslySetInnerHTML={{ __html: "The same principle applies on departure. REFUGE61 will provide a recommended departure time and arrange transport from the lodge to Vinstra station." }} />
            <p dangerouslySetInnerHTML={{ __html: "Individual arrangements may be possible where practical." }} />
            <h2 className="text-heading-s text-charcoal mt-space-12 mb-space-4">5. Meals and Shared Life</h2>
            <p dangerouslySetInnerHTML={{ __html: "Breakfast, lunch and dinner are included." }} />
            <p dangerouslySetInnerHTML={{ __html: "REFUGE61 is a shared experience rather than a traditional hotel stay. Preparing food, eating together and taking part in everyday life at the lodge are part of the concept." }} />
            <p dangerouslySetInnerHTML={{ __html: "Guests are divided into small cooking teams of approximately three people. As a general rule, each team prepares one dinner and one breakfast during the week." }} />
            <p dangerouslySetInnerHTML={{ __html: "We provide varied food and aim to offer sufficient choice for everyone to eat well." }} />
            <p dangerouslySetInnerHTML={{ __html: "REFUGE61 does not normally prepare individual meals or separate menus tailored to specific dietary preferences or diets." }} />
            <p dangerouslySetInnerHTML={{ __html: "Guests must inform REFUGE61 before the stay of any food allergy or dietary requirement that is important for us to know about. Guests with particular dietary needs are encouraged to contact us before booking so that the practical possibilities can be clarified." }} />
            <h2 className="text-heading-s text-charcoal mt-space-12 mb-space-4">6. Booking and Payment</h2>
            <p dangerouslySetInnerHTML={{ __html: "A deposit of 25% of the total price is payable at the time of booking." }} />
            <p dangerouslySetInnerHTML={{ __html: "The remaining 75% must be paid no later than 60 days before the start of the trip." }} />
            <p dangerouslySetInnerHTML={{ __html: "If the trip is booked less than 60 days before departure, the full price is payable at the time of booking." }} />
            <p dangerouslySetInnerHTML={{ __html: "The booking becomes binding once REFUGE61 has received the required payment and the guest has received a booking confirmation." }} />
            <p dangerouslySetInnerHTML={{ __html: "By booking, the guest accepts these Terms and Conditions of Travel." }} />
            <h2 className="text-heading-s text-charcoal mt-space-12 mb-space-4">7. Cancellation by the Guest</h2>
            <p dangerouslySetInnerHTML={{ __html: "The guest may cancel the trip at any time before departure." }} />
            <p dangerouslySetInnerHTML={{ __html: "The following standard cancellation fees apply:" }} />
            <p dangerouslySetInnerHTML={{ __html: "More than 90 days before departureNo cancellation fee. All amounts paid are refunded." }} />
            <p dangerouslySetInnerHTML={{ __html: "90 to 61 days before departureCancellation fee: 25% of the total price." }} />
            <p dangerouslySetInnerHTML={{ __html: "60 to 15 days before departureCancellation fee: 50% of the total price." }} />
            <p dangerouslySetInnerHTML={{ __html: "14 days or less before departureCancellation fee: 100% of the total price." }} />
            <p dangerouslySetInnerHTML={{ __html: "If the guest has paid more than the applicable cancellation fee, REFUGE61 will refund the difference." }} />
            <p dangerouslySetInnerHTML={{ __html: "Any refund will be made without undue delay and no later than 14 days after cancellation." }} />
            <p dangerouslySetInnerHTML={{ __html: "Cancellation must be notified to REFUGE61 in writing." }} />
            <p dangerouslySetInnerHTML={{ __html: "The standard cancellation fees are subject to mandatory package travel legislation. If mandatory law gives the guest a greater right to reimbursement, the statutory rules take precedence." }} />
            <h2 className="text-heading-s text-charcoal mt-space-12 mb-space-4">8. Illness and Personal Circumstances</h2>
            <p dangerouslySetInnerHTML={{ __html: "Illness, injury, changes in employment circumstances or other personal circumstances affecting the guest do not in themselves alter the ordinary cancellation terms." }} />
            <p dangerouslySetInnerHTML={{ __html: "REFUGE61 therefore strongly recommends appropriate cancellation insurance." }} />
            <h2 className="text-heading-s text-charcoal mt-space-12 mb-space-4">9. Transfer of the Trip</h2>
            <p dangerouslySetInnerHTML={{ __html: "If a guest is unable to participate, the trip may be transferred to another person who fulfils the conditions for participation, in accordance with the Danish Package Travel Act." }} />
            <p dangerouslySetInnerHTML={{ __html: "REFUGE61 must be informed on a durable medium as early as possible before departure." }} />
            <p dangerouslySetInnerHTML={{ __html: "Notification received no later than seven days before the start of the trip is considered to have been given within a reasonable time under the Danish Package Travel Act." }} />
            <p dangerouslySetInnerHTML={{ __html: "REFUGE61 may charge the actual, documented and reasonable costs arising directly from the transfer." }} />
            <p dangerouslySetInnerHTML={{ __html: "The original guest and the person taking over the trip remain responsible for outstanding payments and transfer-related costs to the extent provided by law." }} />
            <h2 className="text-heading-s text-charcoal mt-space-12 mb-space-4">10. Insurance</h2>
            <p dangerouslySetInnerHTML={{ __html: "It is a condition of participation in REFUGE61 that the guest has relevant and adequate insurance throughout the journey and stay." }} />
            <p dangerouslySetInnerHTML={{ __html: "As a minimum, the insurance must cover:" }} />
            <p dangerouslySetInnerHTML={{ __html: "illness" }} />
            <p dangerouslySetInnerHTML={{ __html: "accident" }} />
            <p dangerouslySetInnerHTML={{ __html: "necessary medical treatment and repatriation" }} />
            <p dangerouslySetInnerHTML={{ __html: "the winter, skiing and outdoor activities in which the guest intends to participate." }} />
            <p dangerouslySetInnerHTML={{ __html: "The guest is responsible for ensuring that the insurance applies to the activities included in the stay, including cross-country skiing and the mini-expedition with an overnight stay in the winter mountains." }} />
            <p dangerouslySetInnerHTML={{ __html: "As part of the booking process, the guest will be asked to confirm that they understand and accept this insurance requirement and that adequate insurance will be in place before departure." }} />
            <p dangerouslySetInnerHTML={{ __html: "REFUGE61 recommends that the guest&apos;s insurance also includes cancellation cover." }} />
            <p dangerouslySetInnerHTML={{ __html: "REFUGE61 maintains relevant business and liability insurance for its own activities." }} />
            <h2 className="text-heading-s text-charcoal mt-space-12 mb-space-4">11. Cross-Country Skiing and Activities</h2>
            <p dangerouslySetInnerHTML={{ __html: "REFUGE61 does not provide formal cross-country skiing instruction." }} />
            <p dangerouslySetInnerHTML={{ __html: "The hosts share experience and practical tips, advise on routes and conditions and join selected outings." }} />
            <p dangerouslySetInnerHTML={{ __html: "Guests decide for themselves which activities and outings they wish to take part in. There is no expectation that everyone follows the same programme or pace." }} />
            <p dangerouslySetInnerHTML={{ __html: "Previous cross-country skiing experience is not required, but guests should be in normal physical condition and are responsible for assessing whether a chosen activity is appropriate for their own physical and technical ability." }} />
            <h2 className="text-heading-s text-charcoal mt-space-12 mb-space-4">12. Independent Outings and Safety</h2>
            <p dangerouslySetInnerHTML={{ __html: "Guests are generally free to organise their own days and may go on ski outings without the hosts." }} />
            <p dangerouslySetInnerHTML={{ __html: "For safety reasons, guests going out independently are strongly encouraged to inform the hosts or another person at the lodge of their planned route and expected return time." }} />
            <p dangerouslySetInnerHTML={{ __html: "Each guest is responsible for choosing an outing appropriate to their own ability and the conditions on the day." }} />
            <p dangerouslySetInnerHTML={{ __html: "REFUGE61 may recommend or advise against particular routes or activities based on weather, snow conditions, safety or other relevant circumstances." }} />
            <p dangerouslySetInnerHTML={{ __html: "Cross-country skiing and travel in the winter mountains involve inherent risks. These inherent risks do not in themselves constitute a lack of conformity in the package." }} />
            <p dangerouslySetInnerHTML={{ __html: "REFUGE61 remains responsible for the performance of the agreed travel services and for injury or loss to the extent required by applicable law." }} />
            <p dangerouslySetInnerHTML={{ __html: "Nothing in these terms excludes or limits any liability or right that cannot legally be excluded or restricted to the detriment of the guest." }} />
            <h2 className="text-heading-s text-charcoal mt-space-12 mb-space-4">13. The Mini-Expedition</h2>
            <p dangerouslySetInnerHTML={{ __html: "During the week, guests are offered a mini-expedition with one overnight stay in the winter mountains." }} />
            <p dangerouslySetInnerHTML={{ __html: "Participation is voluntary." }} />
            <p dangerouslySetInnerHTML={{ __html: "The mini-expedition takes place together with the hosts and is facilitated by REFUGE61. Relevant shared expedition equipment is provided." }} />
            <p dangerouslySetInnerHTML={{ __html: "The route, timing, overnight location and final format depend on the prevailing weather, temperature, snow and safety conditions." }} />
            <p dangerouslySetInnerHTML={{ __html: "The hosts may therefore change the route, timing or activity or, where necessary, decide that the mini-expedition cannot take place as originally planned." }} />
            <h2 className="text-heading-s text-charcoal mt-space-12 mb-space-4">14. Weather and Changes to the Programme</h2>
            <p dangerouslySetInnerHTML={{ __html: "REFUGE61 takes place in the winter mountains, where changing weather and snow conditions are part of the experience." }} />
            <p dangerouslySetInnerHTML={{ __html: "Specific routes, snow conditions or activities on particular days therefore cannot be guaranteed." }} />
            <p dangerouslySetInnerHTML={{ __html: "Minor changes to routes, activities and the practical programme may be made where circumstances require, particularly for reasons of weather, snow conditions or safety." }} />
            <p dangerouslySetInnerHTML={{ __html: "If a change constitutes a significant change to an agreed travel service or a lack of conformity in the package, the traveller&apos;s rights under applicable package travel legislation apply." }} />
            <h2 className="text-heading-s text-charcoal mt-space-12 mb-space-4">15. Age and Conduct</h2>
            <p dangerouslySetInnerHTML={{ __html: "Guests must normally be at least 18 years old to participate independently." }} />
            <p dangerouslySetInnerHTML={{ __html: "Young people aged 16 or over may participate when accompanied by a responsible adult." }} />
            <p dangerouslySetInnerHTML={{ __html: "REFUGE61 is based on community, freedom, trust and mutual respect. Guests are expected to behave responsibly and considerately towards other guests, the hosts, the lodge and nature." }} />
            <p dangerouslySetInnerHTML={{ __html: "The lodge and surrounding area are smoke-free." }} />
            <p dangerouslySetInnerHTML={{ __html: "Alcohol may be consumed in moderation and with due consideration for the community, safety and planned activities." }} />
            <h2 className="text-heading-s text-charcoal mt-space-12 mb-space-4">16. Equipment</h2>
            <p dangerouslySetInnerHTML={{ __html: "Included ski and expedition equipment is made available to guests during the stay." }} />
            <p dangerouslySetInnerHTML={{ __html: "Guests are expected to treat the equipment responsibly and follow reasonable instructions concerning its use." }} />
            <p dangerouslySetInnerHTML={{ __html: "Ordinary wear and tear and accidental damage do not in themselves give rise to a compensation claim against the guest." }} />
            <p dangerouslySetInnerHTML={{ __html: "In cases of intentional damage or damage caused by grossly irresponsible treatment, the guest may be held liable for the documented loss in accordance with applicable law." }} />
            <h2 className="text-heading-s text-charcoal mt-space-12 mb-space-4">17. Cancellation by REFUGE61</h2>
            <p dangerouslySetInnerHTML={{ __html: "REFUGE61 operates the trip regardless of the number of guests booked. There is no minimum participant requirement." }} />
            <p dangerouslySetInnerHTML={{ __html: "If REFUGE61 cancels the entire trip, all amounts paid by the guest to REFUGE61 will be refunded without undue delay and no later than 14 days after cancellation." }} />
            <p dangerouslySetInnerHTML={{ __html: "The guest&apos;s remaining rights are governed by applicable package travel legislation." }} />
            <p dangerouslySetInnerHTML={{ __html: "Illness or absence of one of the hosts does not in itself result in cancellation if the stay can still be carried out safely and properly with the other host." }} />
            <h2 className="text-heading-s text-charcoal mt-space-12 mb-space-4">18. Unavoidable and Extraordinary Circumstances</h2>
            <p dangerouslySetInnerHTML={{ __html: "The rules of the Danish Package Travel Act apply in the event of unavoidable and extraordinary circumstances." }} />
            <p dangerouslySetInnerHTML={{ __html: "If such circumstances at the destination or in its immediate vicinity significantly affect the performance of the package or the transport of passengers to the destination, the guest has the cancellation, refund and other rights provided by applicable law." }} />
            <h2 className="text-heading-s text-charcoal mt-space-12 mb-space-4">19. Travel Guarantee Fund, Travel Documents and Problems During the Stay</h2>
            <p dangerouslySetInnerHTML={{ __html: "Before selling and operating trips for which registration is required, REFUGE61 will be registered with the Danish Travel Guarantee Fund (Rejsegarantifonden)." }} />
            <p dangerouslySetInnerHTML={{ __html: "Once registration is complete, the relevant registration details will be inserted here." }} />
            <p dangerouslySetInnerHTML={{ __html: "Guests are responsible for holding a valid passport and any other necessary travel documents." }} />
            <p dangerouslySetInnerHTML={{ __html: "Before the contract is concluded, REFUGE61 will provide any passport, visa and health information that the organiser is legally required to provide." }} />
            <p dangerouslySetInnerHTML={{ __html: "If a problem arises during the stay, the guest must contact REFUGE61 or the hosts as soon as reasonably possible so that REFUGE61 has the opportunity to investigate and, where possible, remedy the problem." }} />
            <p dangerouslySetInnerHTML={{ __html: "The guest&apos;s statutory rights remain unaffected." }} />
            <h2 className="text-heading-s text-charcoal mt-space-12 mb-space-4">20. Governing Law and Contact</h2>
            <p dangerouslySetInnerHTML={{ __html: "The trip is organised by a Danish company and is governed by Danish law." }} />
            <p dangerouslySetInnerHTML={{ __html: "Where the trip is subject to the Danish Act on Package Travel and Linked Travel Arrangements, its mandatory provisions apply regardless of the wording of these terms." }} />
            <p dangerouslySetInnerHTML={{ __html: "The choice of Danish law does not limit any protection available to a consumer under mandatory rules applicable to the contract." }} />
            <div className="pt-4 space-y-2">
              <p>REFUGE61°</p>
              <p>[Legal company name to be inserted once incorporated]</p>
              <p>CVR no.: [to be inserted]</p>
              <p>Address: Porskærvej 28, 8420 Knebel, Denmark</p>
              <p>Email: [to be inserted]</p>
              <p>Telephone: +45 20 87 03 42</p>
            </div>
            <p dangerouslySetInnerHTML={{ __html: "Version: 18 August 2026" }} />
          </div>
        </Container>
      </div>
    </SiteShell>
  );
}
