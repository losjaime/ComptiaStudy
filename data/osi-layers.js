const OSI_LAYERS = [
  {
    num: 7,
    name: "Application",
    function: "Provides the interface between user-facing applications and the network. This is the layer users and software directly interact with — everything below it is invisible to them.",
    protocols: "HTTP (80), HTTPS (443), FTP (20/21), SFTP/SSH (22), Telnet (23), SMTP (25), DNS (53), DHCP (67/68), POP3 (110), IMAP (143), SNMP (161/162), RDP (3389)",
    devices: "None — this is a software layer, not a hardware layer.",
    pdu: "Data",
    examTip: "If a question names a specific protocol like HTTP, FTP, or DNS, it's almost always testing Layer 7."
  },
  {
    num: 6,
    name: "Presentation",
    function: "Formats, encrypts/decrypts, and compresses data so the Application layer can use it. Translates data between application format and network format.",
    protocols: "TLS/SSL, JPEG, GIF, PNG, MPEG, ASCII, EBCDIC",
    devices: "None — handled by software (OS or application).",
    pdu: "Data",
    examTip: "Encryption (TLS/SSL) and file formats like JPEG or MPEG are the classic Layer 6 giveaways."
  },
  {
    num: 5,
    name: "Session",
    function: "Establishes, maintains, and tears down communication sessions between two devices. Controls dialog — simplex, half-duplex, or full-duplex.",
    protocols: "NetBIOS, RPC, PPTP, SQL sessions",
    devices: "None — managed by the operating system or application.",
    pdu: "Data",
    examTip: "Think 'session' = login/logout and keeping track of an ongoing conversation between two hosts."
  },
  {
    num: 4,
    name: "Transport",
    function: "Provides end-to-end delivery, segmentation, flow control, and error recovery using TCP (reliable) or UDP (fast, no guarantee).",
    protocols: "TCP, UDP — port numbers live here",
    devices: "Firewall (stateful firewalls inspect traffic at this layer)",
    pdu: "Segment (TCP) / Datagram (UDP)",
    examTip: "Any question about TCP vs. UDP or port numbers is testing Layer 4."
  },
  {
    num: 3,
    name: "Network",
    function: "Handles logical addressing (IP) and routing — determines the best path for data to travel between different networks.",
    protocols: "IP (v4/v6), ICMP, IGMP, ARP",
    devices: "Router, Layer 3 switch",
    pdu: "Packet",
    examTip: "Routing decisions, IP addresses, and subnetting all live at Layer 3."
  },
  {
    num: 2,
    name: "Data Link",
    function: "Handles MAC addressing, frames data, and provides error detection on the local network segment. Split into LLC and MAC sublayers.",
    protocols: "Ethernet, Wi-Fi (802.11), PPP",
    devices: "Switch, bridge",
    pdu: "Frame",
    examTip: "Switches, MAC addresses, and VLANs are all Layer 2 territory."
  },
  {
    num: 1,
    name: "Physical",
    function: "Transmits raw bits as electrical, optical, or radio signals over a physical medium. No concept of addresses or data structure.",
    protocols: "Ethernet cabling standards, fiber, DSL, RS-232",
    devices: "Hub, repeater, cabling, NIC (physical port)",
    pdu: "Bit",
    examTip: "Anything about cables, connectors, or signal type points to Layer 1."
  },
];
