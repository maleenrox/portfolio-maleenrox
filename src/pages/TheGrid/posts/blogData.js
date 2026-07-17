export const blogPosts = [
  {
    id: "iloveyou-virus",
    title: "ILOVEYOU: The Romantic Email That Caused $10 Billion in Damage",
    date: "2026-07-17",
    author: "ms-rox",
    category: "MALWARE HISTORY",
    image: "/blogs/iloveyou-virus.jpeg",
    excerpt: "How a simple VBScript written by a college student in the Philippines brought global corporate networks to their knees in the year 2000.",
    content: `
In May 2000, millions of people received an email with a simple subject line: "ILOVEYOU". Attached was a file named "LOVE-LETTER-FOR-YOU.TXT.vbs". Human curiosity—and the universal desire to be loved—did the rest. 

When users clicked the attachment, they didn't get a love letter. Instead, they executed a VBScript written by Onel de Guzman, a college student in the Philippines. The worm immediately overwrote random files (Office documents, images, audio files) and then hijacked Microsoft Outlook to email a copy of itself to every single contact in the victim's address book.

The speed of propagation was unprecedented. Within hours, major corporations, governments, and even the Pentagon had to shut down their email servers to stop the spread. It caused an estimated $10 billion in damages globally. The ILOVEYOU virus proved that you don't need a zero-day exploit to break into a secure facility; you just need to hack the human psyche.
    `
  },
  {
    id: "alphabay-takedown",
    title: "The Hunt for AlphaBay: How Cops Took Down the Dark Web's Biggest Giant",
    date: "2026-07-17",
    author: "ms-rox",
    category: "SHADOW MARKETS",
    image: "/blogs/alphabay-takedown.jpeg",
    excerpt: "AlphaBay was the Amazon of the dark web. Its takedown required a multinational operation, but the kingpin's ultimate downfall was a massive OPSEC failure.",
    content: `
Following the fall of Silk Road, a new behemoth emerged in the shadow markets: AlphaBay. At its peak, it hosted over 300,000 listings for illicit goods, weapons, and stolen data, handling hundreds of thousands of dollars in crypto transactions daily. It was the undisputed king of the dark web.

Law enforcement agencies across the globe—including the FBI, DEA, and Europol—launched "Operation Bayonet" to dismantle it. But tracking infrastructure routed through Tor is notoriously difficult. The breakthrough didn't come from cracking advanced cryptography; it came from sloppy Operational Security (OPSEC).

The creator, Alexandre Cazes (aka "Alpha02"), made a fatal error in the early days of the site. When new users registered, the automated welcome email included his personal Hotmail address in the header. That single breadcrumb allowed agents to trace the empire back to a villa in Thailand. Cazes was arrested, his laptops seized while unlocked, and the largest shadow market in history vanished overnight.
    `
  },
  {
    id: "tor-origins",
    title: "Why the US Military Created the Dark Web (And How It Got Away)",
    date: "2026-07-17",
    author: "ms-rox",
    category: "NETWORK ARCHITECTURE",
    image: "/blogs/tor-origins.jpeg",
    excerpt: "The Tor network wasn't built by criminals or hackers. It was engineered by the US Naval Research Laboratory. Here is why they built it, and why they gave it away.",
    content: `
When people think of the Dark Web, they picture black markets and illicit forums. But the underlying technology that makes it possible—The Onion Router (Tor)—was actually created by the US Naval Research Laboratory (NRL) in the mid-1990s. 

The military had a problem: they needed a way for intelligence operatives and dissidents in hostile countries to communicate securely without their traffic being traced back to US government servers. Standard encryption protects *what* is being said, but Onion Routing protects *who* is saying it by bouncing the connection through multiple encrypted relays.

However, if the only people using Tor were US spies, any traffic on the network would immediately be flagged as foreign intelligence. To solve this, the military open-sourced the project. By allowing the public—journalists, privacy advocates, and yes, criminals—to use the network, the military created a massive sea of encrypted "noise." To hide a covert operative's traffic, you don't make them invisible; you put them in a crowded room where everyone is wearing a mask.
    `
  },
  {
    id: "stuxnet-weapon",
    title: "Stuxnet: The Silent Cyber Weapon That Sabotaged a Nuclear Program",
    date: "2026-07-17",
    author: "ms-rox",
    category: "CYBER WARFARE",
    image: "/blogs/stuxnet-weapon.jpeg",
    excerpt: "Stuxnet wasn't just malware; it was a digital cruise missile. It proved that code could jump the airgap and cause catastrophic physical destruction.",
    content: `
In 2010, the cybersecurity world discovered a worm so sophisticated it changed the paradigm of digital warfare. Stuxnet wasn't designed to steal credit cards or launch DDoS attacks. It was designed to physically destroy industrial equipment—specifically, the uranium enrichment centrifuges at the Natanz nuclear facility in Iran.

The facility was "air-gapped," meaning it wasn't connected to the internet. Stuxnet crossed this boundary via infected USB drives dropped in the parking lot. Once inside the network, it utilized four unprecedented zero-day exploits to propagate silently. 

It hunted specifically for Siemens step7 PLCs (Programmable Logic Controllers). Once it found them, it intercepted the sensor data, feeding the operators normal readings on their screens while secretly spinning the centrifuges out of control until they tore themselves apart. Stuxnet proved that a highly targeted, state-sponsored cyber payload could cause the exact same physical destruction as a kinetic military strike.
    `
  },
  {
    id: "deep-shadows",
    title: "Beyond the Surface: What Actually Exists in the Web's Deepest Shadows?",
    date: "2026-07-17",
    author: "ms-rox",
    category: "THREAT INTELLIGENCE",
    image: "/blogs/deep-shadows.jpeg",
    excerpt: "Separating fact from fiction: The difference between the Deep Web, the Dark Web, and the myths of 'Mariana's Web'.",
    content: `
The internet is frequently compared to an iceberg. The "Surface Web"—everything indexed by Google and Bing—is just the tip above the water. Beneath it lies the "Deep Web," making up roughly 90% of all data. 

The Deep Web isn't inherently sinister. It simply consists of unindexed pages requiring authentication: your online banking dashboard, private corporate databases, medical records, and gated academic networks. 

Deeper still is the "Dark Web," a small fraction of the Deep Web requiring specific software (like Tor or I2P) to access via encrypted overlay networks. While it is a haven for shadow markets and ransomware leak sites, it is also a vital tool for whistleblowers and journalists operating under oppressive regimes. As for "Mariana's Web" and alleged secret networks requiring quantum computers to access? Pure internet folklore. The reality of the deepest shadows is far more pragmatic, driven by illicit commerce and complex operational security rather than urban legends.
    `
  }
];