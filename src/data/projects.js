export const armoryData = {
  cliTools: [
    {
      id: "ripper-fence",
      title: "Ripper Fence 1.0",
      category: "CLI UTILITY // DEFENSIVE TOOL",
      license: "MIT License [Copyright (c) 2025 Maleen Rox]",
      description: "A cross-platform command-line utility engineered to generate cryptographically secure, high-entropy passwords resistant to advanced brute-force and dictionary attacks (e.g., John the Ripper, Hydra, Medusa). Features OS-level memory cleanup, clipboard integration, and secure credential storage.",
      techStack: [
        "Python 3",
        "secrets",
        "string",
        "subprocess",
        "pathlib",
        "gc (Memory Cleanup)",
        "Cross-Platform (Win/Linux/macOS)"
      ],
      asciiArt: `
                      ...                            
                     ;::::;                           
                   ;::::; :;                          
                 ;:::::'   :;                         
                ;:::::;     ;.                        
               ,:::::'       ;           OOO        
               ::::::;       ;          OOOOO        
               ;:::::;       ;         OOOOOOOO       
              ,;::::::;     ;'         / OOOOOOO      
            ;:::::::::\`. ,,,;.        /  / DOOOOOO    
          .';:::::::::::::::::;,     /  /     DOOOO   
         ,::::::;::::::;;;;::::;,   /  /        DOOO  
        ;\`::::::\`'::::::;;;::::: ,#/  /          DOOO 
        :\`:::::::\`;::::::;;::: ;::#  /            DOOO
        ::\`:::::::\`;:::::::: ;::::# /              DOO
        \`:\`:::::::\`;:::::: ;::::::#/               DOO
         :::\`:::::::\`;; ;:::::::::##                OO
         ::::\`:::::::\`;::::::::;:::#                OO
         \`:::::\`::::::::::::;'\`:;::#                1 
          \`:::::\`::::::::;' /  / \`:#                  
           ::::::\`:::::;'  /  /   \`#               

    RRRR  III PPPP  PPPP  EEEE RRRR      FFFF EEEE N   N  CCC EEEE      11      000  
    R   R  I  P   P P   P E    R   R     F    E    NN  N C    E        111     0  00 
    RRRR   I  PPPP  PPPP  EEE  RRRR      FFF  EEE  N N N C    EEE       11     0 0 0 
    R R    I  P     P     E    R R       F    E    N  NN C    E         11  .. 00  0 
    R  RR III P     P     EEEE R  RR     F    EEEE N   N  CCC EEEE     11l1 ..  000 
----------------------------------------------------------------------------------------
                              Ripper Fence 1.0 by MS Rox
----------------------------------------------------------------------------------------     
      `,
      githubUrl: "https://github.com/maleenrox/ripperfence",
      downloads: {
        exe: "/RipperFence-files/RipperFence.exe",
        deb: "/RipperFence-files/ripperfence_1.0-1_all.deb"
      }
    }
  ],
  researchPapers: [
    {
      id: "shadow-markets",
      title: "Shadow Markets and Stealth Vectors",
      subtitle: "The Illicit Trade of 'Living off the Land' (LotL) Capabilities",
      category: "THREAT INTELLIGENCE // RESEARCH",
      standard: "IEEE Academic Format & Referencing Standard",
      description: "A comprehensive cybersecurity analysis report detailing the atomic-level mechanics of Living off the Land (LotL) attacks and their dark web commodification. Analyzes fileless in-memory execution, native OS binary exploitation (PowerShell/Bash), Process Hollowing, Reflective DLL Injection, and Ransomware-as-a-Service (RaaS) operating across Tor/PGP infrastructure.",
      techStack: [
        "Living off the Land (LotL)",
        "Fileless In-Memory Execution",
        "Process Hollowing",
        "Reflective DLL Injection",
        "RaaS Architecture",
        "Tor/PGP Infrastructure",
        "EDR Evasion Analysis"
      ],
      asciiArt: `
   _____ _               _                  __  __            _        _   
  / ____| |             | |                |  \\/  |          | |      | |  
 | (___ | |__   __ _  __| | _____      __  | \\  / | __ _ _ __| | _____| |_ 
  \\___ \\| '_ \\ / _\` |/ _\` |/ _ \\ \\ /\\ / /  | |\\/| |/ _\` | '__| |/ / _ \\ __|
  ____) | | | | (_| | (_| | (_) \\ V  V /   | |  | | (_| | |  |   <  __/ |_ 
 |_____/|_| |_|\\__,_|\\__,_|\\___/ \\_/\\_/    |_|  |_|\\__,_|_|  |_|\\_\\___|\\__|
  ========================================================================
   [STEALTH VECTORS // NATIVE OS BINARY EXPLOITATION ANALYSIS]
      `,
      downloads: {
        pdf: "/ShadowMarkets-files/Shadow Markets and Stealth Vectors - Maleen Sathsara.pdf"
      }
    }
  ]
};