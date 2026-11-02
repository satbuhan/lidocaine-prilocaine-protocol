/* =========================================================================
   Lidocaine vs Prilocaine-Containing Local Anaesthesia for Laceration
   Repair — content data.

   The algorithm (NODES: label / sub / dose) is transcribed, box for box,
   from Figure 3 of the authors' own systematic review manuscript
   ("Lidocaine versus prilocaine-containing local anesthesia for
   laceration repair: a systematic review with GRADE and minimal
   clinically important difference appraisal"). That figure's caption
   states it is "derived from the findings of this review" — so unlike
   this atlas's two no-manuscript tools, every box here has a direct,
   author-written evidentiary trail back into the review's own Results,
   Discussion ("Implications for practice") and 68-item reference list.

   Every reference below was re-resolved independently against its DOI
   (not copied on the manuscript's word alone) before inclusion. See the
   `kind` field on each for exactly what it supports and any honesty
   caveat. Unverifiable or author's-own-judgement details are flagged
   `needsAuthor: true` on the node rather than given an invented citation.
   ========================================================================= */

const REFERENCES = [
  {
    id: 1,
    kind: "Review article (not a trial) establishing that local anaesthesia underpins every step of wound care — supports the general framing of this tool, not any specific threshold.",
    text: "Singer AJ, Dagum AB. Current management of acute cutaneous wounds. N Engl J Med 2008;359:1037–46.",
    url: "https://doi.org/10.1056/NEJMra0707253"
  },
  {
    id: 2,
    kind: "Review of ED laceration management — supports the wound-assessment factors (site, length, depth, contamination, age, need for exploration) and the general principle that deep/contaminated/old wounds need more than a topical agent.",
    text: "Otterness K, Singer AJ. Updates in emergency department laceration management. Clin Exp Emerg Med 2019;6:97–105.",
    url: "https://doi.org/10.15441/ceem.18.018"
  },
  {
    id: 3,
    kind: "242-episode summary of local-anaesthetic methaemoglobinaemia — directly supports avoiding prilocaine in infants <6 months and in pregnancy, dose-reducing with oxidising drugs, and the oximetry/arterial-oxygen mismatch (present in 91.8% of episodes). The specific named oxidising drugs (dapsone, nitrates, sulfonamides) are the authored figure's own examples, not this paper's wording. This paper is also the reason G6PD deficiency is listed as a caution here: it states methylene blue — the usual antidote — is itself relatively contraindicated in G6PD deficiency (risk of haemolysis), not that G6PD deficiency makes prilocaine-induced methaemoglobinaemia worse. The exact 1–2 mg/kg methylene blue dose is standard antidote dosing rather than a figure stated in this paper.",
    text: "Guay J. Methemoglobinemia related to local anesthetics: a summary of 242 episodes. Anesth Analg 2009;108:837–45.",
    url: "https://doi.org/10.1213/ane.0b013e318187c4b1"
  },
  {
    id: 4,
    kind: "Review of true IgE-mediated amide-anaesthetic allergy — confirms it is rare but real, supporting the allergy-history item in the assessment box.",
    text: "Bhole MV, Manson AL, Seneviratne SL, Misbah SA. IgE-mediated allergy to local anaesthetics: separating fact from perception: a UK perspective. Br J Anaesth 2012;108:903–11.",
    url: "https://doi.org/10.1093/bja/aes162"
  },
  {
    id: 5,
    kind: "Prospective, propensity-matched (non-randomized) two-centre cohort in children — not blinded, and not facial/scalp-specific (wounds included limbs). Repair pain itself did not differ between groups; LET's real advantage was in pretreatment pain and in more reliably achieving adequate anaesthesia before repair, with similar procedure time, re-infiltration rate and infection. Supports LET as the more reliable needle-free option in children generally; does not itself establish facial/scalp wounds as the specific subgroup where LET is preferred.",
    text: "Königs I, Wenskus J, Boettcher J, Reinshagen K, Boettcher M. Lidocaine-Epinephrine-Tetracaine Gel Is More Efficient than Eutectic Mixture of Local Anesthetics and Mepivacaine Injection for Pain Control during Skin Repair in Children. Eur J Pediatr Surg 2020;30:512–6.",
    url: "https://doi.org/10.1055/s-0039-3400283"
  },
  {
    id: 6,
    kind: "Randomized trial, children — LET and EMLA (lidocaine–prilocaine) produced similar pain during the subsequent lidocaine infiltration itself (the primary outcome); LET's advantage was on a secondary endpoint, more often achieving adequate anaesthesia to needlestick without a top-up injection (73% vs 40%). A real but narrower finding than \"LET hurts less\" — it means LET more often avoids needing a second injection, not that repair itself is less painful with it.",
    text: "Singer AJ, Stark MJ. LET versus EMLA for pretreating lacerations: a randomized trial. Acad Emerg Med 2001;8:223–30.",
    url: "https://doi.org/10.1111/j.1553-2712.2001.tb01297.x"
  },
  {
    id: 7,
    kind: "Randomized, intra-individual comparison of the lidocaine–prilocaine eutectic mixture against 10% lidocaine cream (not EMLA alone) on normal forearm skin — EMLA reached acceptable anaesthesia depth in roughly 41 minutes in this experimental model, slightly faster than the authored 45–60 minute figure, which tracks standard product-label guidance more closely than this specific study's measured time. Broadly supportive, not a precise match.",
    text: "Junputipong N, Rojhirunsakool S, Deewongkij P, Kamanamool N, Udompataikul M. Comparison of the onset, depth, and duration of cutaneous anesthesia between topical 10% lidocaine and EMLA creams. J Dermatolog Treat 2022;33:3047–52.",
    url: "https://doi.org/10.1080/09546634.2022.2109566"
  },
  {
    id: 8,
    kind: "Small (n=100), non-randomized, unblinded comparative study in dermatosurgery. Its own reported numbers (intra-procedure pain 3.06 with cream vs 1.03 with infiltration) support citing it here for \"topical anaesthesia can be less complete than infiltration\" — but the paper's own stated conclusion claims the opposite, that topical anaesthesia was the better choice. Cited for its numbers, not its own interpretation of them.",
    text: "Pottipati P, Kathirvel GS, M SS, Kathirvel D. A comparative study to evaluate the efficacy of topical and infiltrative anesthesia for dermatosurgery through a subject-oriented approach. Cureus 2024;16:e57966.",
    url: "https://doi.org/10.7759/cureus.57966"
  },
  {
    id: 9,
    kind: "Mechanistic study — inflammation and local acidosis reduce the efficacy of amide local anaesthetics generally, supporting the point that an old or contaminated wound usually needs infiltration/block regardless of which agent is chosen (this is a general amide-anaesthetic finding, not specific to the lidocaine/prilocaine comparison).",
    text: "Ueno T, Tsuchiya H, Mizogami M, Takakura K. Local anesthetic failure associated with inflammation: verification of the acidosis mechanism. J Inflamm Res 2008;1:41–8.",
    url: "https://doi.org/10.2147/jir.s3982"
  },
  {
    id: 10,
    kind: "Narrative review of injection-pain-reduction techniques (buffering, fine needles, slow subdermal injection). The review itself does not compare these techniques against switching anaesthetic agent — that comparative framing (\"stronger evidence than switching agent\") is this manuscript's own synthesis across this paper plus refs 11–12, not a conclusion stated in this paper alone.",
    text: "Strazar AR, Leynes PG, Lalonde DH. Minimizing the pain of local anesthesia injection. Plast Reconstr Surg 2013;132:675–84.",
    url: "https://doi.org/10.1097/PRS.0b013e31829ad1e2"
  },
  {
    id: 11,
    kind: "Double-blind RCT — buffered lidocaine/epinephrine (3:1 bicarbonate ratio) is less painful on injection than a 9:1 ratio, supporting the buffering recommendation specifically (one trial, one buffering ratio, in dermatology patients — not laceration repair specifically).",
    text: "Vent A, Surber C, Graf Johansen NT, et al. Buffered lidocaine 1%/epinephrine 1:100,000 with sodium bicarbonate in a 3:1 ratio is less painful than a 9:1 ratio. J Am Acad Dermatol 2020;83:159–65.",
    url: "https://doi.org/10.1016/j.jaad.2019.09.088"
  },
  {
    id: 12,
    kind: "Systematic review/meta-analysis — warming local anaesthetic before injection reduces injection pain, supporting that specific technique.",
    text: "Hogan ME, vanderVaart S, Perampaladas K, Machado M, Einarson TR, Taddio A. Systematic review and meta-analysis of the effect of warming local anesthetics on injection pain. Ann Emerg Med 2011;58:86–98.e1.",
    url: "https://doi.org/10.1016/j.annemergmed.2010.12.001"
  },
  {
    id: 13,
    kind: "Double-blind crossover RCT, blepharoplasty — lidocaine with epinephrine caused less infiltration pain and better tissue tolerance than prilocaine with felypressin. The most direct head-to-head skin-infiltration evidence that injected prilocaine offers no advantage over lidocaine (indirect to laceration repair — eyelid skin, not a traumatic wound).",
    text: "Pool SMW, Struys MMRF, van der Lei B. A randomised double-blinded crossover study comparing pain during anaesthetising the eyelids in upper blepharoplasty: lidocaine versus prilocaine. J Plast Reconstr Aesthet Surg 2015;68:1242–7.",
    url: "https://doi.org/10.1016/j.bjps.2015.04.021"
  },
  {
    id: 14,
    kind: "Cochrane review covering 123 dental trials overall (19,223 participants); the specific RR 0.86 (95% CI 0.79–0.95) for 3% prilocaine+felypressin vs 2% lidocaine+epinephrine comes from pooling 2 of those 123 trials (907 participants), not the full review. Supports \"prilocaine offers no advantage\" for infiltration, but from dental anaesthesia rather than laceration repair, and from a small subset of the review — indirect on both counts, flagged as such.",
    text: "St George G, Morgan A, Meechan J, et al. Injectable local anaesthetic agents for dental anaesthesia. Cochrane Database Syst Rev 2018;7:CD006487.",
    url: "https://doi.org/10.1002/14651858.CD006487.pub2"
  },
  {
    id: 15,
    kind: "Cochrane review of 4 small trials (167 participants, all at high risk of bias) — found the evidence insufficient to confirm OR refute harm from adding adrenaline/epinephrine to lidocaine for digital nerve blocks; no adverse event (e.g. digital ischaemia) was reported in any arm. Supports that the old absolute \"never epinephrine in digits\" teaching lacks a strong evidence base, but does not itself prove safety — the authored figure's \"(safe in digits)\" reflects current clinical consensus beyond what this specific review formally establishes.",
    text: "Prabhakar H, Rath S, Kalaivani M, Bhanderi N. Adrenaline with lidocaine for digital nerve blocks. Cochrane Database Syst Rev 2015;3:CD010645.",
    url: "https://doi.org/10.1002/14651858.CD010645.pub2"
  },
  {
    id: 16,
    kind: "Open-label RCT, 2 EDs, France (132 adults randomized, 126 anticipated per the trial registration) — the manuscript's most directly applicable study: topical lidocaine–prilocaine cream vs lidocaine infiltration gave similar maximum pain. The exact pain values and the specific \"did not prolong ED stay\"/\"applied at triage\" framing could not be independently re-confirmed against the full published text (not openly accessible); the registered design and population match the manuscript's description exactly.",
    text: "Callahan J-C, Le Pottier M, Di Rollo M, Wintenberger B, Douillet D. Topical anesthetic cream vs. lidocaine infiltration for superficial laceration repair in the emergency department: a randomized clinical trial. Eur J Emerg Med 2026;33:264–71.",
    url: "https://doi.org/10.1097/MEJ.0000000000001342"
  },
  {
    id: 17,
    kind: "Mouse laceration model — applying the eutectic mixture into an open wound raised peak plasma lidocaine and prilocaine by 448.6% and 384% respectively (roughly 4- to 4.5-fold) compared with intact skin, in the same two- to four-fold range the manuscript describes. Animal pharmacokinetic data, not a human dosing trial — supports the \"absorption is higher in an open wound\" caution as mechanistic evidence, not a tested human dose limit.",
    text: "Al-Musawi A, Matar K, Kombian SB, Andersson L. A pharmacokinetic study of a topical anesthetic (EMLA®) in mouse soft tissue laceration. Dent Traumatol 2012;28:483–7.",
    url: "https://doi.org/10.1111/j.1600-9657.2012.01172.x"
  },
  {
    id: 18,
    kind: "Companion study to ref 17, same model — confirms raised blood concentrations of both agents when the eutectic mixture is applied to a lacerated wound rather than intact skin. Same animal-model caveat applies.",
    text: "Al-Musawi A, Matar K, Kombian S, Andersson L. Blood concentration of prilocaine and lidocaine after the use of topical anesthesia (Oraqix®) in lacerated wounds. Dent Traumatol 2016;32:502–6.",
    url: "https://doi.org/10.1111/edt.12294"
  },
  {
    id: 19,
    kind: "RCT comparing ropivacaine with prilocaine for intravenous regional anaesthesia (Bier block) — it does not compare prilocaine with lidocaine at all, so it does not itself establish a lidocaine-vs-prilocaine safety margin. Included only as supporting context on prilocaine's pharmacokinetics in IVRA; the actual comparative safety claim rests on ref 20.",
    text: "Niemi TT, Neuvonen PJ, Rosenberg PH. Comparison of ropivacaine 2 mg ml⁻¹ and prilocaine 5 mg ml⁻¹ for i.v. regional anaesthesia in outpatient surgery. Br J Anaesth 2006;96:640–4.",
    url: "https://doi.org/10.1093/bja/ael066"
  },
  {
    id: 20,
    kind: "Systematic review of IVRA (Bier block) complications — the manuscript's own basis for preferring prilocaine for IVRA is this complication record (seizures at lower lidocaine doses, cardiac arrests reported with lidocaine/bupivacaine but not prilocaine), not a head-to-head efficacy trial.",
    text: "Guay J. Adverse events associated with intravenous regional anesthesia (Bier block): a systematic review of complications. J Clin Anesth 2009;21:585–94.",
    url: "https://doi.org/10.1016/j.jclinane.2009.01.015"
  },
  {
    id: 21,
    kind: "RCT in 90 children aged 3–6 — prilocaine 5 mg/kg produced a higher mean peak methaemoglobin (3.55%) than lidocaine 2.5 mg/kg (1.63%), the direct comparative safety data behind the monitoring box.",
    text: "Gutenberg LL, Chen J-W, Trapp L. Methemoglobin levels in generally anesthetized pediatric dental patients receiving prilocaine versus lidocaine. Anesth Prog 2013;60:99–108.",
    url: "https://doi.org/10.2344/0003-3006-60.3.99"
  },
  {
    id: 22,
    kind: "Current ASRA practice advisory on local anaesthetic systemic toxicity (LAST) — the guideline basis for the LAST-recognition and lipid-emulsion-rescue instructions.",
    text: "Neal JM, Barrington MJ, Fettiplace MR, et al. The third American Society of Regional Anesthesia and Pain Medicine practice advisory on local anesthetic systemic toxicity: executive summary 2017. Reg Anesth Pain Med 2018;43:113–23.",
    url: "https://doi.org/10.1097/AAP.0000000000000720"
  },
  {
    id: 23,
    kind: "Review of maximum local-anaesthetic dosing as a multifactorial concept — supports individualising maximum dose by site, vascularity and patient factors rather than a single fixed number.",
    text: "Rosenberg PH, Veering BT, Urmey WF. Maximum recommended doses of local anesthetics: a multifactorial concept. Reg Anesth Pain Med 2004;29:564–75.",
    url: "https://doi.org/10.1016/j.rapm.2004.08.003"
  },
  {
    id: 24,
    kind: "RCT, 144 women with perineal tears — pain lower with cream than infiltration. This is the one open-label trial that drove essentially all the heterogeneity in the pooled meta-analysis (removing it took I² from 94% to 0%); its own measurement domain is at high risk of bias because patients cannot be blinded to a cream vs an injection.",
    text: "Abbas AM, Abdel Hafiz HA, Abdelhafez AM, Michael A, Ismail AM. Topical lidocaine-prilocaine cream versus lidocaine infiltration for pain relief during repair of perineal tears after vaginal delivery: randomized clinical trial. J Matern Fetal Neonatal Med 2019;32:2182–7.",
    url: "https://doi.org/10.1080/14767058.2018.1428304"
  },
  {
    id: 25,
    kind: "RCT, 98 women, episiotomy repair — no significant pain difference between cream and lidocaine injection.",
    text: "Moradi Z, Kokabi R, Ahrari F. Comparison of the effects of lidocaine-prilocaine cream and lidocaine injection on the reduction of perineal pain while doing and repairing episiotomy. Anesth Pain Med 2019;9:e90207.",
    url: "https://doi.org/10.5812/aapm.90207"
  },
  {
    id: 26,
    kind: "RCT, 124 women, second-degree perineal tears — no significant pain difference.",
    text: "Rahmawati Lotisna D, Abdullah N, Chalid MT, Tessy T. Lidocaine prilocaine cream versus lidocaine HCl injection for pain relief during second degree of perineal tear suturing after vaginal delivery. Indones J Obstet Gynecol 2018;6:228–31.",
    url: "https://doi.org/10.32771/inajog.v6i4.846"
  },
  {
    id: 27,
    kind: "Meta-analysis of four perineal-repair trials — found no significant pooled pain difference between cream and infiltration while satisfaction favoured the cream, independently corroborating the laceration-trial finding in a related (indirect) population.",
    text: "Abbas AM, Mohamed AA, Mattar OM, et al. Lidocaine-prilocaine cream versus local infiltration anesthesia in pain relief during repair of perineal trauma after vaginal delivery: a systematic review and meta-analysis. J Matern Fetal Neonatal Med 2020;33:1064–71.",
    url: "https://doi.org/10.1080/14767058.2018.1512576"
  },
  {
    id: 28,
    kind: "Review describing that comorbid conditions which already limit oxygen transport can turn otherwise low-grade methaemoglobinaemia symptomatic — cited for the anaemia/cardiopulmonary-disease caution, though the paper describes this as a general category rather than naming anaemia or cardiopulmonary disease individually.",
    text: "Skold A, Cosco DL, Klein R. Methemoglobinemia: pathogenesis, diagnosis, and management. South Med J 2011;104:757–61.",
    url: "https://doi.org/10.1097/SMJ.0b013e318232139f"
  },
  {
    id: 29,
    kind: "Classic experimental (canine) study showing pulse oximetry plateaus at a characteristic ~84–86% reading as methaemoglobin rises under hyperoxic conditions, becoming progressively insensitive to true oxygen saturation at high methaemoglobin levels. Animal data, extrapolated here to the human bedside teaching point — the best available source for the \"SpO2≈85%\" figure, but reasoning by analogy rather than a direct human measurement.",
    text: "Barker SJ, Tremper KK, Hyatt J. Effects of methemoglobinemia on pulse oximetry and mixed venous oximetry. Anesthesiology 1989;70:112–7.",
    url: "https://doi.org/10.1097/00000542-198901000-00021"
  }
];

const NODES = [
  {
    id: "trigger",
    type: "terminal",
    label: "Laceration requiring local anaesthesia for repair",
    meaning:
      "The entry point for this tool: a traumatic wound that needs to be numbed before it can be explored, irrigated and closed. Everything downstream is about choosing and delivering that anaesthesia, not about wound closure technique itself.",
    rationale:
      "Local anaesthesia underpins every step of wound care, and the injection itself is often reported as the most painful part of the whole encounter — which is why so much of this algorithm is about reducing that pain, not just achieving numbness.",
    refs: [1]
  },
  {
    id: "assess",
    type: "process",
    label: "Assess the wound and the patient",
    sub:
      "Wound: site, length, depth, contamination, age of wound, need for deep exploration\nPatient: age and weight (maximum dose), pregnancy, anaemia, cardiopulmonary disease, G6PD deficiency or methaemoglobinaemia, oxidising drugs (dapsone, nitrates, sulfonamides), amide allergy",
    meaning:
      "Before choosing an agent, two separate sets of factors matter: what the wound itself needs (a deep, contaminated or several-hours-old wound behaves differently under anaesthesia than a clean, fresh, superficial one) and what the patient can safely tolerate (age/weight for dosing, and specifically the list of features that make prilocaine a worse choice).",
    rationale:
      "Inflammation and local acidosis reduce the efficacy of amide local anaesthetics generally, so an old, deep or contaminated wound is already working against anaesthesia before the choice of agent even comes into play. Age/weight-based maximum dosing and a history of amide allergy are standard safety checks before any local anaesthetic is given.",
    refs: [2, 9, 4]
  },
  {
    id: "d1",
    type: "decision",
    label: "Contraindication or high-risk feature for prilocaine?",
    sub:
      "Young infant (<6 months), pregnancy, methaemoglobinaemia or G6PD deficiency, oxidising drugs, significant anaemia or cardiopulmonary disease",
    meaning:
      "Prilocaine's distinctive risk is methaemoglobinaemia: its hepatic metabolite o-toluidine oxidises haemoglobin so it can no longer carry oxygen. This question screens for the patients in whom that risk is least acceptable — before the next question (wound suitability) is even asked.",
    rationale:
      "A 242-episode summary of local-anaesthetic methaemoglobinaemia recommends avoiding prilocaine in infants younger than 6 months and in pregnancy, and dose-reducing with oxidising drugs such as dapsone, nitrates and sulfonamides. That same summary is also why G6PD deficiency belongs on this list: it is a relative contraindication to methylene blue, the usual antidote, because methylene blue's own mechanism depends on an NADPH-generating pathway that G6PD-deficient red cells cannot run properly — so a patient who develops prilocaine-induced methaemoglobinaemia and happens to be G6PD-deficient is harder to treat safely, not necessarily more likely to develop it in the first place. Significant anaemia or cardiopulmonary disease is supported more generally: conditions that already limit oxygen transport can turn an otherwise low-grade methaemoglobinaemia symptomatic. Neither point rests on a prilocaine-specific primary study, so it is flagged rather than over-cited.",
    needsAuthor: true,
    refs: [3, 28]
  },
  {
    id: "avoid_prilocaine",
    type: "branch",
    tone: "alarm",
    label: "Avoid prilocaine",
    sub:
      "Use lidocaine-based anaesthesia:\n• LET gel for small facial or scalp wounds (children)\n• Lidocaine infiltration otherwise",
    meaning:
      "When any contraindication is present, the pathway simplifies to lidocaine: LET (lidocaine–epinephrine–tetracaine) gel for small facial or scalp wounds in children, where it out-performs the eutectic cream, and lidocaine infiltration for everything else.",
    rationale:
      "Two studies in children found LET gel more reliably produced adequate wound anaesthesia without needing a top-up injection, with similar repair pain, procedure time and complication rates to the lidocaine–prilocaine cream — the basis for preferring LET generally in children. Neither study specifically isolated facial or scalp wounds as the subgroup where LET's advantage is clearest; narrowing the recommendation to that particular context is the review's own clinical synthesis, preserved here as authored rather than independently re-confirmed.",
    needsAuthor: true,
    refs: [5, 6]
  },
  {
    id: "d2",
    type: "decision",
    label: "Small, superficial, clean wound AND 45–60 min available before repair?",
    meaning:
      "This is the practical gate on using a topical agent at all: the eutectic cream needs real time to work, and it only performs comparably to infiltration in exactly the kind of wound it was tested in — small, superficial and clean. A deep, contaminated or time-critical wound skips straight to infiltration.",
    rationale:
      "The eutectic lidocaine–prilocaine mixture needs 45–60 minutes under an occlusive dressing to reach adequate onset and depth of anaesthesia. Deeper dermatologic procedures have shown the cream giving less complete anaesthesia than infiltration, and inflammation/acidosis in an older or contaminated wound further undermines any topical agent — both reasons topical treatment is reserved for superficial, clean wounds with time to spare.",
    refs: [7, 8, 2, 9]
  },
  {
    id: "lidocaine_infiltration",
    type: "process",
    tone: "key",
    label: "Lidocaine infiltration (default)",
    sub:
      "• Lidocaine 1% or 2%, with adrenaline where appropriate (safe in digits)\n• Reduce injection pain: buffer, warm, 27–30 G needle, slow subdermal injection through wound edges\n• Consider a regional or digital nerve block\n• Injected prilocaine offers no advantage for wound infiltration",
    meaning:
      "This is the evidence-based default across the whole algorithm: no randomized trial in two decades has found injected prilocaine to beat injected lidocaine for wound infiltration, and in the one direct comparison available, lidocaine was actually better tolerated.",
    rationale:
      "No adverse event was reported in the small trials that have tested adding adrenaline/epinephrine to lidocaine for digital nerve blocks, which is why many clinicians now consider it acceptable — though that evidence base is thin enough that it disproves the old absolute contraindication more than it positively proves safety. Buffering, warming, a fine needle and slow subdermal injection through the wound edges each have their own supporting trial; the review's own synthesis judges this body of technique evidence stronger than the evidence for switching anaesthetic agent, since no trial of agent-switching for laceration infiltration exists at all. In the one direct skin-infiltration comparison identified, lidocaine with epinephrine caused less pain and was better tolerated than prilocaine with felypressin; a dental Cochrane review's pooled analysis of 2 of its 123 trials similarly found prilocaine-felypressin modestly less effective than lidocaine-epinephrine for achieving anaesthetic success — indirect evidence, from different tissues, but pointing the same way.",
    refs: [15, 10, 11, 12, 13, 14]
  },
  {
    id: "topical_cream",
    type: "process",
    label: "Topical lidocaine–prilocaine cream",
    sub:
      "• Apply at triage under an occlusive dressing for 45–60 min\n• Keep the total dose conservative: absorption is higher in an open wound\n• Where LET is available, prefer LET for paediatric wounds",
    meaning:
      "For the small, clean, superficial wound where time allows, the needle-free eutectic cream is a reasonable alternative to infiltration — applying it as early as triage turns otherwise-dead waiting time into anaesthesia time.",
    rationale:
      "In the most directly applicable randomized trial, applying the cream at triage in the emergency department did not prolong length of stay, and gave procedural pain statistically similar to lidocaine infiltration. Because an open wound absorbs the agents two- to four-fold more than intact skin in animal pharmacokinetic studies, the total applied dose should stay conservative, particularly in large wounds, small children and patients on oxidising drugs. Where LET is stocked, it remains preferred for paediatric facial/scalp wounds specifically (see \"Avoid prilocaine\" above) even outside the contraindication pathway.",
    refs: [7, 16, 17, 18, 3, 5, 6]
  },
  {
    id: "hand_forearm_note",
    type: "process",
    tone: "note",
    label: "Extensive hand or forearm injury?",
    sub:
      "Intravenous regional anaesthesia (Bier block) with prilocaine 0.5% is preferred in many centres because of its wider systemic safety margin",
    meaning:
      "A single, specific exception to the lidocaine-first pattern: for a Bier block covering an extensive hand or forearm injury, prilocaine's safety margin is why many centres choose it over lidocaine for this particular technique — not because it anaesthetises any better.",
    rationale:
      "A systematic review of Bier block complications (ref 20) found seizures reported at lower cumulative lidocaine doses than prilocaine, and cardiac arrests during IVRA reported with lidocaine and bupivacaine but not with prilocaine — the actual basis for this recommendation. A second trial (ref 19) is included only as supporting context on prilocaine's pharmacokinetics in this technique, since it compares prilocaine with ropivacaine, not lidocaine. Either way, this is a safety margin, not an efficacy advantage, which is why this note sits beside wound infiltration rather than replacing it.",
    refs: [20, 19]
  },
  {
    id: "d3",
    type: "decision",
    label: "Adequate anaesthesia on testing the wound edges?",
    meaning:
      "Before exploring or closing, the wound edge is tested rather than assumed numb — topical anaesthesia in particular can be patchy or incomplete, so this check is what decides whether infiltration needs to be added before proceeding.",
    rationale:
      "This is a bedside verification step rather than a result drawn from a specific study in this review; no primary source for the testing technique itself was identified, so it is flagged rather than attached to a citation that doesn't actually support it.",
    needsAuthor: true,
    refs: []
  },
  {
    id: "supplement",
    type: "process",
    label: "Supplement with lidocaine",
    sub: "Infiltrate through the anaesthetised wound edges",
    meaning:
      "When the topical cream hasn't fully numbed the wound, lidocaine is infiltrated through the already-anaesthetised edges — using the partial numbness the cream achieved to reduce the pain of the top-up injection itself.",
    rationale:
      "Topical lidocaine–prilocaine has been shown to give less complete anaesthesia than infiltration in deeper dermatologic procedures, so a supplementary injection is the expected fallback rather than a sign the topical step failed; injecting through already-numbed tissue is one of the specific technique points shown to reduce injection pain.",
    refs: [8, 10]
  },
  {
    id: "explore_close",
    type: "terminal",
    label: "Explore, irrigate and close the wound",
    meaning:
      "The convergence point: whichever route got the patient here — avoiding prilocaine entirely, infiltrating by default, or using (and if needed supplementing) the topical cream — wound exploration, irrigation and closure proceed the same way from here.",
    rationale:
      "Local anaesthesia is a means to this end, not the end itself; every pathway above exists only to get the wound safely and adequately numb for this step.",
    refs: [1]
  },
  {
    id: "monitor",
    type: "process",
    tone: "key",
    label: "Monitor during and after anaesthesia",
    sub:
      "After prilocaine: cyanosis or SpO2≈85% not improving with oxygen → suspect methaemoglobinaemia → confirm by co-oximetry → methylene blue 1–2 mg/kg IV\nEither agent: perioral numbness, tinnitus, agitation, seizures or arrhythmia → suspect local anaesthetic systemic toxicity → stop injection, secure airway, give 20% lipid emulsion",
    meaning:
      "Two distinct toxicities to watch for, with different triggers and different antidotes: methaemoglobinaemia is specific to prilocaine (and worsens with dose and the risk factors screened for earlier), while local anaesthetic systemic toxicity (LAST) can occur with either agent, usually from inadvertent intravascular injection or an excessive dose.",
    rationale:
      "Methaemoglobinaemia is dose-related and predictable; pulse oximetry is unreliable because it reads a blend of oxy- and methaemoglobin rather than true oxygen saturation, and a 242-episode case summary found an oximetry/arterial-oxygen mismatch in 91.8% of episodes. Co-oximetry is the diagnostic test, and methylene blue is the specific antidote — unless the patient is G6PD-deficient, in which case methylene blue itself becomes relatively contraindicated (see the contraindication-screening box) and alternatives such as exchange transfusion or ascorbic acid, with specialist input, become the fallback. Current ASRA guidance is the standard for recognising and managing LAST, including early use of 20% lipid emulsion. The specific \"SpO2≈85%\" figure traces to a classic experimental (canine) study showing pulse oximetry plateauing at a characteristic ~84–86% reading as methaemoglobin rises — an animal finding extrapolated here to the bedside teaching point, not a direct human measurement, so the exact number is flagged rather than treated as independently confirmed in people.",
    needsAuthor: true,
    cautions: [
      "If the patient is known to be G6PD-deficient, avoid or use extreme caution with methylene blue for suspected methaemoglobinaemia — it can precipitate haemolysis instead of correcting the methaemoglobin, and alternative treatment should be discussed with a toxicologist or haematologist."
    ],
    refs: [3, 21, 22, 23, 29]
  },
  {
    id: "evidence_note",
    type: "process",
    tone: "note",
    label: "Evidence base (GRADE low to very low)",
    sub:
      "Topical lidocaine–prilocaine vs lidocaine infiltration gave similar procedural pain, below the MCID (d≈0.5; 1.3/10), and abolished the pain of anaesthetic delivery; no trial since 2006 has compared injected prilocaine with lidocaine in traumatic lacerations.",
    meaning:
      "A plain-language summary of how strong the evidence behind this whole algorithm actually is: good enough to support the topical-cream option for small clean wounds, but built on a small, heterogeneous evidence base — not the kind of certainty a fixed drug-dosing table would carry.",
    rationale:
      "Pooling the four eligible randomized trials (one ED laceration trial, three perineal-repair trials; n=492) gave Hedges' g −0.31 (95% CI −1.03 to 0.40) with considerable heterogeneity (I²=94%) driven by one open-label trial; excluding it removed the heterogeneity and gave g 0.06 (95% CI −0.15 to 0.27) — both estimates fall below the minimal clinically important difference (MCID). No randomized trial published between 2006 and 2026 has compared injected prilocaine with injected lidocaine for traumatic lacerations, which is why every recommendation above about injected prilocaine rests on indirect evidence (dental, oculoplastic, regional-anaesthesia studies) rather than a laceration-specific trial.",
    refs: [16, 24, 25, 26, 27]
  }
];

const GLOSSARY = [
  {
    match: "eutectic mixture",
    full: "eutectic mixture of local anaesthetics",
    def: "A 1:1 combination of lidocaine 2.5% and prilocaine 2.5% (brand name EMLA) that melts into an oil at room temperature, allowing both drugs to penetrate intact or wounded skin from a cream rather than an injection."
  },
  {
    match: "LET",
    full: "lidocaine–epinephrine–tetracaine gel",
    def: "A topical anaesthetic gel used mainly in children's facial and scalp lacerations; in several trials it anaesthetises small wounds better than the lidocaine–prilocaine eutectic mixture."
  },
  {
    match: "methaemoglobinaemia",
    def: "A state in which haemoglobin is oxidised to a form (methaemoglobin) that cannot carry oxygen. Prilocaine's liver metabolite, o-toluidine, is a potent oxidiser of haemoglobin, making this prilocaine's signature toxicity."
  },
  {
    match: "G6PD deficiency",
    full: "glucose-6-phosphate dehydrogenase deficiency",
    def: "An inherited enzyme deficiency that limits a red cell's ability to regenerate the antioxidant glutathione, leaving it less able to defend against oxidative stressors — including the methaemoglobin-forming effect of prilocaine."
  },
  {
    match: "co-oximetry",
    def: "Multi-wavelength blood-gas analysis that can distinguish methaemoglobin from normal oxyhaemoglobin, unlike standard two-wavelength pulse oximetry — the test that actually confirms methaemoglobinaemia."
  },
  {
    match: "felypressin",
    def: "A synthetic vasoconstrictor (an analogue of vasopressin) used instead of epinephrine in some prilocaine dental cartridges, chosen for patients in whom epinephrine's cardiac effects are unwanted."
  },
  {
    match: "Hedges' g",
    def: "A standardized effect size, similar to Cohen's d but adjusted for small-study bias, used here to compare pain scores measured on different scales across different trials."
  },
  {
    match: "MCID",
    full: "minimal clinically important difference",
    def: "The smallest change in an outcome (here, roughly 1.3 points on a 0–10 pain scale, or a standardized effect size of about 0.5) that a patient would consider meaningful — used to judge whether a statistically real difference actually matters clinically."
  },
  {
    match: "local anaesthetic systemic toxicity",
    full: "local anaesthetic systemic toxicity (LAST)",
    def: "A dose-related, potentially life-threatening toxicity from excessive local-anaesthetic blood levels (usually inadvertent intravascular injection or an excessive total dose), causing neurological symptoms progressing to seizures and, at the highest levels, cardiac arrhythmia or arrest."
  },
  {
    match: "lipid emulsion",
    def: "A 20% fat emulsion given intravenously as the specific rescue treatment for local anaesthetic systemic toxicity, thought to act partly by sequestering the lipophilic anaesthetic away from the heart and brain."
  },
  {
    match: "amide",
    def: "One structural class of local anaesthetics (lidocaine and prilocaine both belong to it, along with bupivacaine and ropivacaine), distinguished from the older ester class by how the drug is metabolised and by a much lower rate of true allergy."
  },
  {
    match: "transient neurological symptoms",
    full: "transient neurological symptoms (TNS)",
    def: "Short-lived back and leg pain occasionally seen after spinal anaesthesia; lidocaine causes it more often than prilocaine or other agents — a spinal-anaesthesia finding with no bearing on wound infiltration."
  },
  {
    match: "intravenous regional anaesthesia",
    full: "intravenous regional anaesthesia (Bier block)",
    def: "A technique for anaesthetising an entire limb by injecting local anaesthetic into a vein after applying a tourniquet, used for procedures on the hand or forearm."
  },
  {
    match: "Bier block",
    full: "intravenous regional anaesthesia (Bier block)",
    def: "A technique for anaesthetising an entire limb by injecting local anaesthetic into a vein after applying a tourniquet, used for procedures on the hand or forearm."
  }
];

// Clinical agent (drug) names to visually emphasise wherever they appear —
// in the diagram boxes themselves and in the readout panel's prose. This
// is a rendering-only concern (app.js wraps each match in a styled span at
// render time); it never touches label/sub, which stay byte-exact as
// authored. Matching is case-insensitive and whole-word, longest name
// first.
// Added at Dr. Özgür Karcıoğlu's request, 2026-11-02 — see METHODOLOGY.md.
const AGENTS = [
  "Lidocaine",
  "Prilocaine",
  "Adrenaline",
  "Epinephrine",
  "Methylene blue",
  "Ascorbic acid",
  "Bupivacaine",
  "Ropivacaine",
  "Dapsone",
  "Tetracaine"
];
