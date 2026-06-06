const NETPLUS_WEEK1_CARDS = [

  // ── OSI Model ──────────────────────────────────────────────────────────────

  { id:"np-osi-001", exam:"netplus", domain:"OSI Model", domainNum:1,
    question:"What are the 7 layers of the OSI model, from bottom to top?",
    answer:"Physical, Data Link, Network, Transport, Session, Presentation, Application",
    detail:"Mnemonic: 'Please Do Not Throw Sausage Pizza Away' — each first letter matches a layer, starting from Layer 1." },

  { id:"np-osi-002", exam:"netplus", domain:"OSI Model", domainNum:1,
    question:"What is the mnemonic for remembering the OSI layers (bottom to top)?",
    answer:"Please Do Not Throw Sausage Pizza Away",
    detail:"P=Physical, D=Data Link, N=Network, T=Transport, S=Session, P=Presentation, A=Application." },

  { id:"np-osi-003", exam:"netplus", domain:"OSI Model", domainNum:1,
    question:"What happens at Layer 1 (Physical) of the OSI model?",
    answer:"Transmits raw bits over a physical medium — defines cables, connectors, voltages, and signaling.",
    detail:"Devices: hubs, repeaters, network cables. The Physical layer doesn't understand addresses or data structure — just electrical/optical signals." },

  { id:"np-osi-004", exam:"netplus", domain:"OSI Model", domainNum:1,
    question:"What happens at Layer 2 (Data Link) of the OSI model?",
    answer:"Handles MAC addressing, frames data, and provides error detection on the local network segment.",
    detail:"Devices: switches, bridges. Uses MAC addresses for local delivery. Sublayers: LLC (Logical Link Control) and MAC (Media Access Control)." },

  { id:"np-osi-005", exam:"netplus", domain:"OSI Model", domainNum:1,
    question:"What happens at Layer 3 (Network) of the OSI model?",
    answer:"Handles logical addressing (IP) and routing — determines the best path for data across networks.",
    detail:"Devices: routers. Protocols: IP, ICMP, ARP. The Network layer is responsible for packet forwarding and inter-network communication." },

  { id:"np-osi-006", exam:"netplus", domain:"OSI Model", domainNum:1,
    question:"What happens at Layer 4 (Transport) of the OSI model?",
    answer:"Provides end-to-end delivery, flow control, and error recovery using TCP or UDP.",
    detail:"TCP provides reliable, ordered delivery via three-way handshake. UDP provides fast, connectionless delivery with no guarantee." },

  { id:"np-osi-007", exam:"netplus", domain:"OSI Model", domainNum:1,
    question:"What happens at Layer 5 (Session) of the OSI model?",
    answer:"Establishes, manages, and terminates communication sessions between applications.",
    detail:"Controls dialog (simplex, half-duplex, full-duplex). Examples: NetBIOS, RPC, SQL sessions." },

  { id:"np-osi-008", exam:"netplus", domain:"OSI Model", domainNum:1,
    question:"What happens at Layer 6 (Presentation) of the OSI model?",
    answer:"Handles data formatting, encryption/decryption, and compression — translates data between the application and network.",
    detail:"Ensures data from one system can be understood by another. Examples: TLS/SSL encryption, JPEG, ASCII, MPEG." },

  { id:"np-osi-009", exam:"netplus", domain:"OSI Model", domainNum:1,
    question:"What happens at Layer 7 (Application) of the OSI model?",
    answer:"Provides the interface between user applications and network services.",
    detail:"This is the layer users interact with. Protocols: HTTP, HTTPS, FTP, SSH, DNS, DHCP, SMTP, POP3, IMAP." },

  { id:"np-osi-010", exam:"netplus", domain:"OSI Model", domainNum:1,
    question:"What is the PDU (Protocol Data Unit) at each OSI layer?",
    answer:"Layer 7–5: Data | Layer 4: Segment (TCP) / Datagram (UDP) | Layer 3: Packet | Layer 2: Frame | Layer 1: Bit",
    detail:"The PDU name changes as data moves down the stack — this process is called encapsulation." },

  { id:"np-osi-011", exam:"netplus", domain:"OSI Model", domainNum:1,
    question:"Which OSI layer do routers operate at?",
    answer:"Layer 3 (Network)",
    detail:"Routers use IP addresses to make forwarding decisions and route packets between different networks." },

  { id:"np-osi-012", exam:"netplus", domain:"OSI Model", domainNum:1,
    question:"Which OSI layer do switches operate at?",
    answer:"Layer 2 (Data Link)",
    detail:"Switches use MAC addresses to forward frames within a local network. Some managed switches can also operate at Layer 3." },

  { id:"np-osi-013", exam:"netplus", domain:"OSI Model", domainNum:1,
    question:"Which OSI layer do hubs operate at?",
    answer:"Layer 1 (Physical)",
    detail:"Hubs blindly repeat signals to all ports — they have no understanding of addresses or data structure." },

  { id:"np-osi-014", exam:"netplus", domain:"OSI Model", domainNum:1,
    question:"What is encapsulation in the OSI model?",
    answer:"The process of adding headers (and sometimes trailers) to data as it moves down each layer of the OSI stack.",
    detail:"At each layer, the previous layer's PDU becomes the payload. De-encapsulation is the reverse process on the receiving end." },

  { id:"np-osi-015", exam:"netplus", domain:"OSI Model", domainNum:1,
    question:"What are the two sublayers of the Data Link layer (Layer 2)?",
    answer:"LLC (Logical Link Control) and MAC (Media Access Control)",
    detail:"LLC handles flow control and error checking. MAC handles physical addressing and media access (who can transmit when)." },

  // ── TCP/IP Model ───────────────────────────────────────────────────────────

  { id:"np-tcp-001", exam:"netplus", domain:"TCP/IP Model", domainNum:2,
    question:"What are the 4 layers of the TCP/IP model, from bottom to top?",
    answer:"Network Access (Link), Internet, Transport, Application",
    detail:"The TCP/IP model is the practical model used on the internet. It combines several OSI layers into fewer, more practical layers." },

  { id:"np-tcp-002", exam:"netplus", domain:"TCP/IP Model", domainNum:2,
    question:"How does the TCP/IP Network Access layer map to the OSI model?",
    answer:"It maps to OSI Layers 1 (Physical) and 2 (Data Link).",
    detail:"The Network Access layer handles both physical transmission and local addressing (MAC). Protocols: Ethernet, Wi-Fi, ARP." },

  { id:"np-tcp-003", exam:"netplus", domain:"TCP/IP Model", domainNum:2,
    question:"How does the TCP/IP Internet layer map to the OSI model?",
    answer:"It maps to OSI Layer 3 (Network).",
    detail:"Handles logical addressing and routing. Key protocols: IP (IPv4/IPv6), ICMP, IGMP." },

  { id:"np-tcp-004", exam:"netplus", domain:"TCP/IP Model", domainNum:2,
    question:"How does the TCP/IP Transport layer map to the OSI model?",
    answer:"It maps to OSI Layer 4 (Transport).",
    detail:"Provides end-to-end communication. Key protocols: TCP (reliable) and UDP (fast, connectionless)." },

  { id:"np-tcp-005", exam:"netplus", domain:"TCP/IP Model", domainNum:2,
    question:"How does the TCP/IP Application layer map to the OSI model?",
    answer:"It maps to OSI Layers 5 (Session), 6 (Presentation), and 7 (Application).",
    detail:"The TCP/IP model combines these three OSI layers into one. Includes protocols like HTTP, FTP, SSH, DNS, SMTP." },

  { id:"np-tcp-006", exam:"netplus", domain:"TCP/IP Model", domainNum:2,
    question:"What is the primary protocol at the TCP/IP Internet layer?",
    answer:"IP (Internet Protocol) — responsible for logical addressing and routing packets across networks.",
    detail:"IPv4 uses 32-bit addresses; IPv6 uses 128-bit addresses. IP is connectionless and unreliable — reliability comes from TCP at the Transport layer." },

  { id:"np-tcp-007", exam:"netplus", domain:"TCP/IP Model", domainNum:2,
    question:"Why is the TCP/IP model considered more practical than the OSI model?",
    answer:"It was designed around real protocols actually used on the internet, while OSI is a theoretical reference model.",
    detail:"TCP/IP was built from working protocols (TCP, IP, HTTP). OSI was designed as an ideal framework first. Both are important to know for the Network+ exam." },

  { id:"np-tcp-008", exam:"netplus", domain:"TCP/IP Model", domainNum:2,
    question:"What are the main differences between the TCP/IP model and the OSI model?",
    answer:"TCP/IP has 4 layers (practical, protocol-based); OSI has 7 layers (theoretical, reference model). TCP/IP combines OSI Layers 1–2 and 5–7.",
    detail:"OSI is used for teaching and troubleshooting concepts. TCP/IP reflects the actual protocol stack used in networking." },

  // ── Ports & Protocols ──────────────────────────────────────────────────────

  { id:"np-port-001", exam:"netplus", domain:"Ports & Protocols", domainNum:3,
    question:"What ports does FTP use?",
    answer:"Port 20 (data transfer) and Port 21 (control/commands)",
    detail:"FTP uses two connections: the control channel (port 21) for commands, and the data channel (port 20) for file transfers in active mode." },

  { id:"np-port-002", exam:"netplus", domain:"Ports & Protocols", domainNum:3,
    question:"What port does SSH use?",
    answer:"Port 22",
    detail:"SSH (Secure Shell) provides encrypted remote command-line access. Also used by SFTP and SCP for secure file transfers." },

  { id:"np-port-003", exam:"netplus", domain:"Ports & Protocols", domainNum:3,
    question:"What port does Telnet use?",
    answer:"Port 23",
    detail:"Telnet provides unencrypted remote access — all data (including passwords) is sent in plaintext. Always use SSH (port 22) instead." },

  { id:"np-port-004", exam:"netplus", domain:"Ports & Protocols", domainNum:3,
    question:"What port does SMTP use?",
    answer:"Port 25 (server-to-server) and Port 587 (client submission)",
    detail:"SMTP (Simple Mail Transfer Protocol) sends email. Port 25 is used between mail servers; port 587 is used by email clients to submit outgoing mail." },

  { id:"np-port-005", exam:"netplus", domain:"Ports & Protocols", domainNum:3,
    question:"What port does DNS use?",
    answer:"Port 53 — uses UDP for standard queries and TCP for zone transfers.",
    detail:"Most DNS lookups use UDP (faster, smaller packets). TCP is used for zone transfers between DNS servers and for responses larger than 512 bytes." },

  { id:"np-port-006", exam:"netplus", domain:"Ports & Protocols", domainNum:3,
    question:"What ports does DHCP use?",
    answer:"Port 67 (server) and Port 68 (client)",
    detail:"DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses. The server listens on UDP port 67; clients listen on UDP port 68." },

  { id:"np-port-007", exam:"netplus", domain:"Ports & Protocols", domainNum:3,
    question:"What port does HTTP use?",
    answer:"Port 80",
    detail:"HTTP (Hypertext Transfer Protocol) is unencrypted web traffic. All data is sent in plaintext — use HTTPS (port 443) for security." },

  { id:"np-port-008", exam:"netplus", domain:"Ports & Protocols", domainNum:3,
    question:"What port does HTTPS use?",
    answer:"Port 443",
    detail:"HTTPS encrypts web traffic using TLS (Transport Layer Security). Indicated by the padlock icon and 'https://' in the browser address bar." },

  { id:"np-port-009", exam:"netplus", domain:"Ports & Protocols", domainNum:3,
    question:"What port does POP3 use?",
    answer:"Port 110 (unencrypted) and Port 995 (POP3S — encrypted with TLS)",
    detail:"POP3 (Post Office Protocol 3) downloads email from the server to a local client. Messages are typically removed from the server after download." },

  { id:"np-port-010", exam:"netplus", domain:"Ports & Protocols", domainNum:3,
    question:"What port does IMAP use?",
    answer:"Port 143 (unencrypted) and Port 993 (IMAPS — encrypted with TLS)",
    detail:"IMAP (Internet Message Access Protocol) keeps email on the server, allowing access from multiple devices. More flexible than POP3." },

  { id:"np-port-011", exam:"netplus", domain:"Ports & Protocols", domainNum:3,
    question:"What port does RDP use?",
    answer:"Port 3389",
    detail:"RDP (Remote Desktop Protocol) is a Microsoft protocol for remote GUI access to Windows computers. Uses TCP by default." },

  { id:"np-port-012", exam:"netplus", domain:"Ports & Protocols", domainNum:3,
    question:"What ports does SNMP use?",
    answer:"Port 161 (polling/queries) and Port 162 (traps/alerts)",
    detail:"SNMP (Simple Network Management Protocol) monitors and manages network devices. Agents on devices are polled on 161; they send unsolicited alerts (traps) to 162." },

  { id:"np-port-013", exam:"netplus", domain:"Ports & Protocols", domainNum:3,
    question:"What is the difference between FTP and SFTP?",
    answer:"FTP is unencrypted (ports 20/21); SFTP runs over SSH encryption (port 22).",
    detail:"SFTP (SSH File Transfer Protocol) provides the same file transfer capability as FTP but with full encryption. Always prefer SFTP over FTP." },

  { id:"np-port-014", exam:"netplus", domain:"Ports & Protocols", domainNum:3,
    question:"What is the range for well-known ports?",
    answer:"0 to 1023",
    detail:"Well-known ports are assigned to common services (HTTP=80, HTTPS=443, SSH=22, etc.). They are standardized by IANA." },

  { id:"np-port-015", exam:"netplus", domain:"Ports & Protocols", domainNum:3,
    question:"What is the range for registered ports and ephemeral ports?",
    answer:"Registered: 1024–49151 | Ephemeral (dynamic): 49152–65535",
    detail:"Registered ports are used by vendor-specific apps (MySQL=3306, RDP=3389). Ephemeral ports are temporary, assigned by the OS for client-side connections." },

  // ── Network Concepts ───────────────────────────────────────────────────────

  { id:"np-net-001", exam:"netplus", domain:"Network Concepts", domainNum:4,
    question:"What is TCP and when is it used?",
    answer:"Transmission Control Protocol — connection-oriented, reliable, ordered delivery. Used for HTTP, email, file transfers.",
    detail:"TCP uses a three-way handshake (SYN → SYN-ACK → ACK) to establish connections and ensures every packet arrives in order." },

  { id:"np-net-002", exam:"netplus", domain:"Network Concepts", domainNum:4,
    question:"What is UDP and when is it used?",
    answer:"User Datagram Protocol — connectionless, fast, no delivery guarantee. Used for DNS, VoIP, streaming, gaming.",
    detail:"UDP skips the handshake and error checking for speed. If a packet is lost, it's not retransmitted — the application handles it." },

  { id:"np-net-003", exam:"netplus", domain:"Network Concepts", domainNum:4,
    question:"What is the TCP three-way handshake?",
    answer:"SYN → SYN-ACK → ACK — the process TCP uses to establish a reliable connection before data transfer.",
    detail:"1) Client sends SYN. 2) Server responds with SYN-ACK. 3) Client sends ACK. Connection is now established." },

  { id:"np-net-004", exam:"netplus", domain:"Network Concepts", domainNum:4,
    question:"What is unicast communication?",
    answer:"One-to-one — a single sender transmits to a single specific receiver.",
    detail:"Most network traffic is unicast (e.g., loading a webpage, SSH session). Each unicast frame has one source and one destination MAC address." },

  { id:"np-net-005", exam:"netplus", domain:"Network Concepts", domainNum:4,
    question:"What is multicast communication?",
    answer:"One-to-many — a single sender transmits to a specific group of interested receivers.",
    detail:"Only devices that have joined the multicast group receive the traffic. Used for video streaming, OSPF routing updates. IPv4 range: 224.0.0.0–239.255.255.255." },

  { id:"np-net-006", exam:"netplus", domain:"Network Concepts", domainNum:4,
    question:"What is broadcast communication?",
    answer:"One-to-all — a single sender transmits to every device on the network segment.",
    detail:"Broadcast goes to all hosts in a subnet. Examples: ARP requests, DHCP Discover. IPv4 broadcast address: 255.255.255.255. IPv6 does NOT use broadcast." },

  { id:"np-net-007", exam:"netplus", domain:"Network Concepts", domainNum:4,
    question:"What is the difference between half-duplex and full-duplex?",
    answer:"Half-duplex: communicate in both directions, but only one at a time. Full-duplex: communicate in both directions simultaneously.",
    detail:"Half-duplex example: walkie-talkie. Full-duplex example: phone call. Modern Ethernet switches operate in full-duplex; hubs operate in half-duplex." },

  { id:"np-net-008", exam:"netplus", domain:"Network Concepts", domainNum:4,
    question:"What is a MAC address?",
    answer:"A 48-bit hardware address assigned to every network interface, written in hexadecimal (e.g., AA:BB:CC:DD:EE:FF).",
    detail:"MAC addresses operate at Layer 2 (Data Link). They are used for local network communication — a device needs a MAC address to send/receive frames on a LAN." },

  { id:"np-net-009", exam:"netplus", domain:"Network Concepts", domainNum:4,
    question:"How is a MAC address structured?",
    answer:"First 24 bits = OUI (Organizationally Unique Identifier — identifies the manufacturer). Last 24 bits = device-specific identifier.",
    detail:"Example: if MAC is AA:BB:CC:DD:EE:FF, AA:BB:CC is the OUI (vendor code) and DD:EE:FF uniquely identifies the device." },

  { id:"np-net-010", exam:"netplus", domain:"Network Concepts", domainNum:4,
    question:"What is the difference between a MAC address and an IP address?",
    answer:"MAC = Layer 2, physical/hardware, used on local network. IP = Layer 3, logical, used for routing across networks.",
    detail:"MAC addresses don't change (burned into the NIC). IP addresses are assigned logically and can change. You need both to communicate on a network." },

  { id:"np-net-011", exam:"netplus", domain:"Network Concepts", domainNum:4,
    question:"What is anycast?",
    answer:"One-to-nearest — a packet is sent to the nearest member of a group of devices sharing the same address.",
    detail:"Used heavily in IPv6 and CDNs (Content Delivery Networks). DNS root servers use anycast so your query goes to the geographically nearest server." },

  { id:"np-net-012", exam:"netplus", domain:"Network Concepts", domainNum:4,
    question:"Which transport protocol uses a three-way handshake?",
    answer:"TCP (Transmission Control Protocol)",
    detail:"The three-way handshake (SYN, SYN-ACK, ACK) ensures both sides are ready. UDP does not handshake — it just sends data." },

  { id:"np-net-013", exam:"netplus", domain:"Network Concepts", domainNum:4,
    question:"How does TCP terminate a connection?",
    answer:"Four-way teardown: FIN → ACK → FIN → ACK",
    detail:"Either side can initiate by sending a FIN. The other side ACKs, sends its own FIN, and receives a final ACK. Both sides must agree to close." },

  { id:"np-net-014", exam:"netplus", domain:"Network Concepts", domainNum:4,
    question:"What is flow control in TCP?",
    answer:"A mechanism where the receiver tells the sender how much data it can handle, preventing buffer overflow.",
    detail:"TCP uses a sliding window mechanism. The receiver advertises a 'window size' — the sender can only send that much data before waiting for an acknowledgment." },

];
