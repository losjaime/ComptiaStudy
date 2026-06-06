const QUIZ_NETPLUS_WEEK1 = [

  // ── OSI Model ──────────────────────────────────────────────────────────────

  { id:"qnp-osi-01", exam:"netplus", domain:"OSI Model",
    question:"Which layer of the OSI model is responsible for logical addressing and routing?",
    options:["Data Link (Layer 2)","Network (Layer 3)","Transport (Layer 4)","Session (Layer 5)"],
    correct:1,
    explanation:"The Network layer (Layer 3) handles logical addressing (IP addresses) and determines the best path (routing) for data to travel across networks." },

  { id:"qnp-osi-02", exam:"netplus", domain:"OSI Model",
    question:"A switch uses MAC addresses to forward traffic. At which OSI layer does a switch primarily operate?",
    options:["Layer 1 (Physical)","Layer 2 (Data Link)","Layer 3 (Network)","Layer 4 (Transport)"],
    correct:1,
    explanation:"Switches operate at Layer 2 (Data Link) using MAC addresses to make forwarding decisions. Some managed switches can also perform Layer 3 routing." },

  { id:"qnp-osi-03", exam:"netplus", domain:"OSI Model",
    question:"What is the correct order of OSI layers from Layer 1 to Layer 7?",
    options:["Physical, Data Link, Network, Transport, Session, Presentation, Application","Physical, Network, Data Link, Transport, Presentation, Session, Application","Application, Presentation, Session, Transport, Network, Data Link, Physical","Data Link, Physical, Network, Transport, Session, Application, Presentation"],
    correct:0,
    explanation:"The OSI layers from bottom (1) to top (7) are: Physical, Data Link, Network, Transport, Session, Presentation, Application. Mnemonic: 'Please Do Not Throw Sausage Pizza Away.'" },

  { id:"qnp-osi-04", exam:"netplus", domain:"OSI Model",
    question:"At which OSI layer does encryption and data formatting occur?",
    options:["Application (Layer 7)","Presentation (Layer 6)","Session (Layer 5)","Transport (Layer 4)"],
    correct:1,
    explanation:"The Presentation layer (Layer 6) handles data formatting, encryption/decryption, and compression — it translates data between the application and network formats." },

  { id:"qnp-osi-05", exam:"netplus", domain:"OSI Model",
    question:"What is the PDU (Protocol Data Unit) at Layer 2 of the OSI model?",
    options:["Packet","Segment","Frame","Bit"],
    correct:2,
    explanation:"At Layer 2 (Data Link), data is organized into frames. Layer 1 = Bits, Layer 2 = Frames, Layer 3 = Packets, Layer 4 = Segments." },

  { id:"qnp-osi-06", exam:"netplus", domain:"OSI Model",
    question:"A hub receives a signal and repeats it out all ports. At which OSI layer does a hub operate?",
    options:["Layer 1 (Physical)","Layer 2 (Data Link)","Layer 3 (Network)","Layer 4 (Transport)"],
    correct:0,
    explanation:"Hubs operate at Layer 1 (Physical). They have no awareness of addresses — they simply regenerate and repeat electrical signals to all ports." },

  { id:"qnp-osi-07", exam:"netplus", domain:"OSI Model",
    question:"The process of adding headers to data as it moves down the OSI layers is called:",
    options:["Fragmentation","Encapsulation","Multiplexing","Segmentation"],
    correct:1,
    explanation:"Encapsulation is the process of adding protocol-specific headers (and trailers) at each layer as data moves down the stack. De-encapsulation reverses this on the receiving end." },

  // ── TCP/IP Model ───────────────────────────────────────────────────────────

  { id:"qnp-tcp-01", exam:"netplus", domain:"TCP/IP Model",
    question:"How many layers does the TCP/IP model have?",
    options:["3","4","5","7"],
    correct:1,
    explanation:"The TCP/IP model has 4 layers: Network Access (Link), Internet, Transport, and Application." },

  { id:"qnp-tcp-02", exam:"netplus", domain:"TCP/IP Model",
    question:"The TCP/IP Application layer corresponds to which OSI layers?",
    options:["Layer 7 only","Layers 6 and 7","Layers 5, 6, and 7","Layers 4, 5, 6, and 7"],
    correct:2,
    explanation:"The TCP/IP Application layer combines OSI Layers 5 (Session), 6 (Presentation), and 7 (Application) into a single layer." },

  { id:"qnp-tcp-03", exam:"netplus", domain:"TCP/IP Model",
    question:"Which TCP/IP layer is responsible for IP addressing and routing?",
    options:["Network Access","Internet","Transport","Application"],
    correct:1,
    explanation:"The Internet layer of the TCP/IP model handles IP addressing, routing, and packet forwarding — equivalent to OSI Layer 3 (Network)." },

  { id:"qnp-tcp-04", exam:"netplus", domain:"TCP/IP Model",
    question:"The TCP/IP Network Access layer combines which two OSI layers?",
    options:["Physical and Data Link","Data Link and Network","Network and Transport","Transport and Session"],
    correct:0,
    explanation:"The TCP/IP Network Access (Link) layer combines OSI Layer 1 (Physical) and Layer 2 (Data Link), handling both physical transmission and local addressing." },

  // ── Ports & Protocols ──────────────────────────────────────────────────────

  { id:"qnp-port-01", exam:"netplus", domain:"Ports & Protocols",
    question:"A network technician needs to securely access a remote Linux server's command line. Which protocol and port should they use?",
    options:["Telnet — port 23","SSH — port 22","RDP — port 3389","FTP — port 21"],
    correct:1,
    explanation:"SSH (port 22) provides encrypted remote command-line access. Telnet (port 23) is unencrypted and should never be used for remote administration." },

  { id:"qnp-port-02", exam:"netplus", domain:"Ports & Protocols",
    question:"Which port does HTTPS use for encrypted web traffic?",
    options:["Port 80","Port 443","Port 8080","Port 8443"],
    correct:1,
    explanation:"HTTPS uses port 443 for encrypted web traffic over TLS. Port 80 is standard unencrypted HTTP." },

  { id:"qnp-port-03", exam:"netplus", domain:"Ports & Protocols",
    question:"A DHCP server listens for client requests on which port?",
    options:["Port 53","Port 67","Port 68","Port 69"],
    correct:1,
    explanation:"DHCP servers listen on UDP port 67. DHCP clients listen on UDP port 68. DNS uses port 53." },

  { id:"qnp-port-04", exam:"netplus", domain:"Ports & Protocols",
    question:"Which protocol uses port 53 and can use both TCP and UDP?",
    options:["DHCP","DNS","SMTP","SNMP"],
    correct:1,
    explanation:"DNS uses port 53. Standard queries use UDP for speed; zone transfers between DNS servers use TCP for reliability." },

  { id:"qnp-port-05", exam:"netplus", domain:"Ports & Protocols",
    question:"A user wants to check email from multiple devices while keeping messages on the server. Which protocol should they use?",
    options:["POP3 (port 110)","IMAP (port 143)","SMTP (port 25)","HTTP (port 80)"],
    correct:1,
    explanation:"IMAP (port 143) keeps email on the server, allowing access from multiple devices. POP3 (port 110) downloads and typically removes email from the server." },

  { id:"qnp-port-06", exam:"netplus", domain:"Ports & Protocols",
    question:"Which port range is classified as 'well-known' ports?",
    options:["0–255","0–1023","1024–49151","49152–65535"],
    correct:1,
    explanation:"Well-known ports range from 0 to 1023 and are assigned to common services (HTTP=80, SSH=22, DNS=53). Registered ports: 1024–49151. Ephemeral: 49152–65535." },

  { id:"qnp-port-07", exam:"netplus", domain:"Ports & Protocols",
    question:"SNMP uses which two ports for network device management?",
    options:["Ports 20 and 21","Ports 67 and 68","Ports 110 and 143","Ports 161 and 162"],
    correct:3,
    explanation:"SNMP uses UDP port 161 for queries/polling and port 162 for traps (unsolicited alerts from devices to the management station)." },

  { id:"qnp-port-08", exam:"netplus", domain:"Ports & Protocols",
    question:"FTP uses two ports for operation. Which ports and what are they for?",
    options:["Port 20 (control) and 21 (data)","Port 20 (data) and 21 (control)","Port 22 (data) and 23 (control)","Port 25 (data) and 110 (control)"],
    correct:1,
    explanation:"FTP uses port 21 for the control/command channel and port 20 for data transfer in active mode." },

  { id:"qnp-port-09", exam:"netplus", domain:"Ports & Protocols",
    question:"A technician needs to remotely access the GUI of a Windows machine. Which protocol and port is used?",
    options:["SSH — port 22","VNC — port 5900","RDP — port 3389","Telnet — port 23"],
    correct:2,
    explanation:"RDP (Remote Desktop Protocol) uses port 3389 and is Microsoft's protocol for remote GUI access to Windows machines." },

  // ── Network Concepts ───────────────────────────────────────────────────────

  { id:"qnp-net-01", exam:"netplus", domain:"Network Concepts",
    question:"Which protocol is connection-oriented and provides reliable, ordered data delivery?",
    options:["UDP","TCP","ICMP","IP"],
    correct:1,
    explanation:"TCP (Transmission Control Protocol) is connection-oriented, using a three-way handshake to establish connections and ensuring reliable, ordered delivery." },

  { id:"qnp-net-02", exam:"netplus", domain:"Network Concepts",
    question:"A VoIP application needs low latency and can tolerate some packet loss. Which transport protocol should it use?",
    options:["TCP","UDP","ICMP","IGMP"],
    correct:1,
    explanation:"UDP is the right choice for real-time applications like VoIP and video streaming. It's faster because it doesn't wait for acknowledgments or retransmit lost packets." },

  { id:"qnp-net-03", exam:"netplus", domain:"Network Concepts",
    question:"What are the three steps of the TCP three-way handshake in order?",
    options:["ACK → SYN → SYN-ACK","SYN → ACK → SYN-ACK","SYN → SYN-ACK → ACK","SYN-ACK → SYN → ACK"],
    correct:2,
    explanation:"The TCP three-way handshake: 1) Client sends SYN, 2) Server responds with SYN-ACK, 3) Client sends ACK. The connection is now established." },

  { id:"qnp-net-04", exam:"netplus", domain:"Network Concepts",
    question:"When a DHCP server sends a Discover message to all devices on a subnet, what type of communication is this?",
    options:["Unicast","Multicast","Broadcast","Anycast"],
    correct:2,
    explanation:"DHCP Discover is a broadcast — it goes to all devices on the subnet because the client doesn't yet have an IP address and doesn't know the server's address." },

  { id:"qnp-net-05", exam:"netplus", domain:"Network Concepts",
    question:"A network uses switches for all connections. What communication mode do the switches support?",
    options:["Simplex only","Half-duplex only","Full-duplex","Multiplexing only"],
    correct:2,
    explanation:"Modern Ethernet switches support full-duplex communication — devices can send and receive data simultaneously. Hubs, by contrast, force half-duplex." },

  { id:"qnp-net-06", exam:"netplus", domain:"Network Concepts",
    question:"A MAC address is how many bits long?",
    options:["32 bits","48 bits","64 bits","128 bits"],
    correct:1,
    explanation:"A MAC address is 48 bits (6 bytes), typically written as six pairs of hexadecimal digits (e.g., AA:BB:CC:DD:EE:FF). The first 24 bits identify the manufacturer (OUI)." },

  { id:"qnp-net-07", exam:"netplus", domain:"Network Concepts",
    question:"What identifies the manufacturer in a MAC address?",
    options:["The last 24 bits","The first 24 bits (OUI)","The subnet mask","The port number"],
    correct:1,
    explanation:"The first 24 bits of a MAC address are the OUI (Organizationally Unique Identifier), assigned by IEEE to identify the hardware manufacturer." },

  { id:"qnp-net-08", exam:"netplus", domain:"Network Concepts",
    question:"Which addressing type sends data to the nearest member of a group?",
    options:["Unicast","Multicast","Broadcast","Anycast"],
    correct:3,
    explanation:"Anycast sends data to the nearest (or best) member of a group sharing the same address. Commonly used by CDNs and DNS root servers." },

];
