const CORE1_CARDS = [

  // ── Domain 1: Mobile Devices (13%) ──────────────────────────────────────

  { id:"c1-mob-001", exam:"core1", domain:"Mobile Devices", domainNum:1,
    question:"What is the purpose of a docking station for a laptop?",
    answer:"Connects a laptop to external peripherals (monitors, keyboard, Ethernet) through a single connection.",
    detail:"Docking stations expand a laptop's limited ports, making it function like a desktop at a workstation." },

  { id:"c1-mob-002", exam:"core1", domain:"Mobile Devices", domainNum:1,
    question:"What type of RAM is used in most modern laptops?",
    answer:"SO-DIMM (Small Outline Dual Inline Memory Module)",
    detail:"SO-DIMM is physically smaller than full-size DIMM used in desktops, designed to fit compact laptop form factors." },

  { id:"c1-mob-003", exam:"core1", domain:"Mobile Devices", domainNum:1,
    question:"What is NFC and how is it used on mobile devices?",
    answer:"Near Field Communication — short-range wireless technology (<4 cm) used for contactless payments, pairing, and data transfer.",
    detail:"NFC operates at 13.56 MHz. Common uses: Apple Pay, Google Pay, pairing Bluetooth speakers." },

  { id:"c1-mob-004", exam:"core1", domain:"Mobile Devices", domainNum:1,
    question:"What connector type does Apple use on modern iPhones (post-2023)?",
    answer:"USB-C",
    detail:"iPhones 15 and later use USB-C. Older iPhones used the proprietary Lightning connector (8-pin)." },

  { id:"c1-mob-005", exam:"core1", domain:"Mobile Devices", domainNum:1,
    question:"What is the difference between 5G Sub-6 GHz and 5G mmWave?",
    answer:"Sub-6 GHz has broader coverage and better penetration; mmWave has very high speeds but short range and poor penetration.",
    detail:"mmWave operates above 24 GHz and can achieve multi-Gbps speeds but only works within ~100 meters of a tower." },

  { id:"c1-mob-006", exam:"core1", domain:"Mobile Devices", domainNum:1,
    question:"What is a mobile hotspot?",
    answer:"A feature that shares a device's cellular data connection as a Wi-Fi network for other devices.",
    detail:"The device acts as a wireless router. Also called tethering. Data counts against the cellular plan." },

  { id:"c1-mob-007", exam:"core1", domain:"Mobile Devices", domainNum:1,
    question:"What is MDM and why do organizations use it?",
    answer:"Mobile Device Management — software that lets IT remotely manage, monitor, enforce policies, and wipe mobile devices.",
    detail:"MDM can enforce encryption, app restrictions, passcode requirements, and locate or remotely wipe lost devices." },

  { id:"c1-mob-008", exam:"core1", domain:"Mobile Devices", domainNum:1,
    question:"What is the purpose of a digitizer on a touchscreen?",
    answer:"Converts physical touch input into digital coordinates that the operating system can process.",
    detail:"The digitizer is a separate layer above the display. A cracked digitizer causes touch failure even if the display looks fine." },

  { id:"c1-mob-009", exam:"core1", domain:"Mobile Devices", domainNum:1,
    question:"What distinguishes a 2-in-1 laptop from a standard laptop?",
    answer:"A 2-in-1 can function as both a laptop and a tablet — either by rotating the screen 360° (convertible) or detaching it (detachable).",
    detail:"Examples: Microsoft Surface Pro (detachable), Lenovo Yoga (convertible)." },

  { id:"c1-mob-010", exam:"core1", domain:"Mobile Devices", domainNum:1,
    question:"What is the purpose of a gyroscope sensor in a mobile device?",
    answer:"Measures rotational orientation, enabling screen auto-rotation, gaming motion controls, and AR applications.",
    detail:"Works alongside the accelerometer. Accelerometer detects linear motion; gyroscope detects rotation." },

  { id:"c1-mob-011", exam:"core1", domain:"Mobile Devices", domainNum:1,
    question:"What does Wi-Fi calling allow a smartphone to do?",
    answer:"Make and receive phone calls and texts over a Wi-Fi network instead of cellular.",
    detail:"Useful in areas with poor cellular signal but available Wi-Fi. Requires carrier support." },

  { id:"c1-mob-012", exam:"core1", domain:"Mobile Devices", domainNum:1,
    question:"What is the difference between OLED and LCD displays?",
    answer:"OLED pixels emit their own light, enabling perfect blacks and higher contrast. LCD requires a backlight.",
    detail:"OLED is thinner, uses less power at low brightness, but can experience burn-in. LCD is more durable for static content." },

  { id:"c1-mob-013", exam:"core1", domain:"Mobile Devices", domainNum:1,
    question:"What is the purpose of a Trusted Platform Module (TPM) in a laptop?",
    answer:"A hardware security chip that stores cryptographic keys, enabling features like full-disk encryption (BitLocker).",
    detail:"TPM 2.0 is required for Windows 11. It prevents encryption keys from being extracted by software attacks." },

  { id:"c1-mob-014", exam:"core1", domain:"Mobile Devices", domainNum:1,
    question:"What does BYOD stand for and what is the key IT concern?",
    answer:"Bring Your Own Device. Key concern: personal devices may lack corporate security controls and policies.",
    detail:"IT must balance user privacy with security. MDM helps enforce policies on personal devices." },

  { id:"c1-mob-015", exam:"core1", domain:"Mobile Devices", domainNum:1,
    question:"What is the purpose of remote wipe on a mobile device?",
    answer:"Erases all data on a lost or stolen device remotely to prevent unauthorized access.",
    detail:"Triggered via MDM or Find My (Apple) / Find My Device (Android/Windows). Requires the device to have network access." },

  { id:"c1-mob-016", exam:"core1", domain:"Mobile Devices", domainNum:1,
    question:"What expansion slot do modern laptops use for storage upgrades?",
    answer:"M.2 slot (supports NVMe via PCIe or SATA protocol depending on the drive).",
    detail:"NVMe M.2 drives are significantly faster than SATA M.2. Always check the keying (M-key, B-key) before purchasing." },

  { id:"c1-mob-017", exam:"core1", domain:"Mobile Devices", domainNum:1,
    question:"What does 802.11ax (Wi-Fi 6) improve over 802.11ac (Wi-Fi 5)?",
    answer:"Higher throughput, better performance in dense environments (OFDMA), and improved battery efficiency (Target Wake Time).",
    detail:"Wi-Fi 6 max theoretical: 9.6 Gbps. Wi-Fi 6E adds the 6 GHz band. Wi-Fi 7 (802.11be) adds multi-link operation." },

  { id:"c1-mob-018", exam:"core1", domain:"Mobile Devices", domainNum:1,
    question:"What is the maximum typical range of Bluetooth (Class 2)?",
    answer:"Approximately 10 meters (33 feet). Class 1 can reach up to 100 meters.",
    detail:"Bluetooth 5.x extends range to ~40m for Class 2 at lower speeds. BLE (Bluetooth Low Energy) is used for IoT sensors." },

  { id:"c1-mob-019", exam:"core1", domain:"Mobile Devices", domainNum:1,
    question:"What is airplane mode?",
    answer:"A device setting that disables all wireless radios: cellular, Wi-Fi, Bluetooth, and NFC.",
    detail:"Required by airlines during takeoff/landing. You can manually re-enable Wi-Fi and Bluetooth after enabling airplane mode." },

  { id:"c1-mob-020", exam:"core1", domain:"Mobile Devices", domainNum:1,
    question:"What is the purpose of mobile device synchronization?",
    answer:"Keeps data consistent between a mobile device and cloud services or a desktop (contacts, calendar, email, photos).",
    detail:"Sync can happen over Wi-Fi, USB, or cellular. Exchange ActiveSync is commonly used in enterprise environments." },

  // ── Domain 2: Networking (23%) ──────────────────────────────────────────

  { id:"c1-net-001", exam:"core1", domain:"Networking", domainNum:2,
    question:"What is the purpose of a subnet mask?",
    answer:"Defines which portion of an IP address identifies the network vs. the host.",
    detail:"255.255.255.0 (/24) means the first 3 octets are the network. Devices on the same subnet can communicate directly." },

  { id:"c1-net-002", exam:"core1", domain:"Networking", domainNum:2,
    question:"What is the default gateway?",
    answer:"The router's IP address that a device sends traffic to when the destination is on a different network.",
    detail:"If a device's IP is 192.168.1.50, its default gateway is typically 192.168.1.1 (the router)." },

  { id:"c1-net-003", exam:"core1", domain:"Networking", domainNum:2,
    question:"What does DHCP do?",
    answer:"Dynamically assigns IP addresses, subnet masks, default gateways, and DNS servers to network clients.",
    detail:"DHCP uses a DORA process: Discover, Offer, Request, Acknowledge. Lease time determines how long an IP is held." },

  { id:"c1-net-004", exam:"core1", domain:"Networking", domainNum:2,
    question:"What port does HTTPS use?",
    answer:"TCP port 443",
    detail:"HTTPS = HTTP + TLS encryption. The browser shows a padlock icon when the connection is secured via a valid certificate." },

  { id:"c1-net-005", exam:"core1", domain:"Networking", domainNum:2,
    question:"What ports do HTTP, FTP (data/control), SSH, DNS, SMTP, and RDP use?",
    answer:"HTTP: 80 | FTP: 20 (data), 21 (control) | SSH: 22 | DNS: 53 | SMTP: 25 | RDP: 3389",
    detail:"These are the standard well-known ports. Memorize these for the exam." },

  { id:"c1-net-006", exam:"core1", domain:"Networking", domainNum:2,
    question:"What is the purpose of DNS?",
    answer:"Translates human-readable domain names (e.g., google.com) into IP addresses.",
    detail:"Without DNS you'd need to memorize IP addresses for every website. DNS uses a hierarchical distributed database." },

  { id:"c1-net-007", exam:"core1", domain:"Networking", domainNum:2,
    question:"What is the difference between TCP and UDP?",
    answer:"TCP is connection-oriented, reliable, and ordered (three-way handshake). UDP is connectionless, faster, and has no delivery guarantee.",
    detail:"TCP: web, email, file transfer. UDP: VoIP, video streaming, DNS queries, online gaming." },

  { id:"c1-net-008", exam:"core1", domain:"Networking", domainNum:2,
    question:"What is NAT and why is it used?",
    answer:"Network Address Translation maps private IP addresses to a single public IP, conserving IPv4 address space.",
    detail:"Home routers use NAT. Internal devices use 192.168.x.x; the router's WAN IP is the one visible on the internet." },

  { id:"c1-net-009", exam:"core1", domain:"Networking", domainNum:2,
    question:"What cable type uses RJ-45 connectors and what are the max lengths?",
    answer:"Twisted-pair Ethernet (Cat5e, Cat6, Cat6a). Maximum segment length: 100 meters for standard 1 Gbps.",
    detail:"Cat5e: 1 Gbps @ 100m. Cat6: 1 Gbps @ 100m, 10 Gbps @ 55m. Cat6a: 10 Gbps @ 100m." },

  { id:"c1-net-010", exam:"core1", domain:"Networking", domainNum:2,
    question:"What is a MAC address?",
    answer:"A 48-bit hardware address burned into a NIC, used for Layer 2 (local network) communication.",
    detail:"Format: 6 groups of 2 hex digits (e.g., 00:1A:2B:3C:4D:5E). First 3 bytes = OUI (manufacturer ID)." },

  { id:"c1-net-011", exam:"core1", domain:"Networking", domainNum:2,
    question:"What is the difference between 2.4 GHz and 5 GHz Wi-Fi bands?",
    answer:"2.4 GHz: longer range, more interference, slower. 5 GHz: shorter range, less interference, faster.",
    detail:"2.4 GHz has 3 non-overlapping channels (1, 6, 11). 5 GHz has many more non-overlapping channels." },

  { id:"c1-net-012", exam:"core1", domain:"Networking", domainNum:2,
    question:"What is PoE and what devices use it?",
    answer:"Power over Ethernet — delivers electrical power over Ethernet cables. Used by IP cameras, VoIP phones, and access points.",
    detail:"PoE (802.3af): up to 15.4W. PoE+ (802.3at): up to 30W. PoE++ (802.3bt): up to 90W." },

  { id:"c1-net-013", exam:"core1", domain:"Networking", domainNum:2,
    question:"What is the difference between a hub and a switch?",
    answer:"A hub broadcasts data to all ports. A switch forwards data only to the destination port based on the MAC address table.",
    detail:"Hubs create a single collision domain; switches create separate collision domains per port. Hubs are obsolete." },

  { id:"c1-net-014", exam:"core1", domain:"Networking", domainNum:2,
    question:"What is a VLAN?",
    answer:"Virtual LAN — logically segments a physical network into separate broadcast domains without requiring separate hardware.",
    detail:"VLANs improve security and performance. Devices on different VLANs need a router (Layer 3) to communicate." },

  { id:"c1-net-015", exam:"core1", domain:"Networking", domainNum:2,
    question:"What does WPA3 improve over WPA2?",
    answer:"Stronger encryption using SAE (Simultaneous Authentication of Equals) instead of PSK, protection against offline dictionary attacks, and forward secrecy.",
    detail:"WPA3-Personal uses SAE. WPA3-Enterprise supports 192-bit encryption. Forward secrecy means past sessions can't be decrypted if the key is later compromised." },

  { id:"c1-net-016", exam:"core1", domain:"Networking", domainNum:2,
    question:"What is the loopback address?",
    answer:"127.0.0.1 (IPv4) or ::1 (IPv6) — used to test the local network stack without sending traffic over a network.",
    detail:"Pinging 127.0.0.1 verifies the TCP/IP stack is installed and functioning on the local machine." },

  { id:"c1-net-017", exam:"core1", domain:"Networking", domainNum:2,
    question:"What is the APIPA address range and when is it assigned?",
    answer:"169.254.0.0/16 — automatically assigned when a device cannot reach a DHCP server.",
    detail:"APIPA (Automatic Private IP Addressing) allows local communication only. If you see a 169.254.x.x address, DHCP has failed." },

  { id:"c1-net-018", exam:"core1", domain:"Networking", domainNum:2,
    question:"What is a DMZ in networking?",
    answer:"Demilitarized Zone — a network segment that sits between the internal network and the internet, hosting publicly accessible services.",
    detail:"Web servers, email servers, and DNS servers are commonly placed in the DMZ. Traffic flows from internet → DMZ → firewall → internal network." },

  { id:"c1-net-019", exam:"core1", domain:"Networking", domainNum:2,
    question:"What is the IPv4 private address ranges?",
    answer:"10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16 — not routable on the public internet.",
    detail:"These are defined by RFC 1918. Home networks typically use 192.168.0.0/24 or 192.168.1.0/24." },

  { id:"c1-net-020", exam:"core1", domain:"Networking", domainNum:2,
    question:"What is the purpose of SSID?",
    answer:"Service Set Identifier — the name that identifies a specific Wi-Fi network.",
    detail:"An SSID can be hidden (not broadcast), but this provides minimal security since tools can still detect it." },

  { id:"c1-net-021", exam:"core1", domain:"Networking", domainNum:2,
    question:"What does a firewall do?",
    answer:"Monitors and controls incoming and outgoing network traffic based on predefined security rules.",
    detail:"Can be hardware (dedicated appliance) or software (Windows Defender Firewall). Next-gen firewalls inspect application-layer traffic." },

  { id:"c1-net-022", exam:"core1", domain:"Networking", domainNum:2,
    question:"What is the difference between a router and a switch?",
    answer:"A router connects different networks (Layer 3, uses IP addresses). A switch connects devices on the same network (Layer 2, uses MAC addresses).",
    detail:"Home 'routers' are typically router + switch + Wi-Fi AP + DHCP server combined in one device." },

  { id:"c1-net-023", exam:"core1", domain:"Networking", domainNum:2,
    question:"What fiber optic connector types are common in enterprise networking?",
    answer:"SC (square connector), LC (lucent connector/small form factor), ST (straight tip/bayonet). LC is most common in modern deployments.",
    detail:"Fiber uses light pulses instead of electrical signals, offering greater distance and bandwidth than copper." },

  { id:"c1-net-024", exam:"core1", domain:"Networking", domainNum:2,
    question:"What is DHCP reservation (static assignment)?",
    answer:"Configuring the DHCP server to always assign the same IP address to a specific device based on its MAC address.",
    detail:"Useful for printers, servers, and cameras that need consistent IPs without manual static configuration on the device." },

  { id:"c1-net-025", exam:"core1", domain:"Networking", domainNum:2,
    question:"What protocol does Ethernet use for collision detection on shared media?",
    answer:"CSMA/CD — Carrier Sense Multiple Access with Collision Detection.",
    detail:"Modern full-duplex switched Ethernet eliminates collisions entirely. CSMA/CD is mostly a historical/conceptual topic now." },

  // ── Domain 3: Hardware (25%) ─────────────────────────────────────────────

  { id:"c1-hw-001", exam:"core1", domain:"Hardware", domainNum:3,
    question:"What is the purpose of a PCIe slot and what is the current common standard?",
    answer:"PCI Express expansion slot connects GPUs, NVMe SSDs, NICs, and other expansion cards. PCIe 4.0 and 5.0 are current standards.",
    detail:"PCIe 4.0 x16 = 64 GB/s; PCIe 5.0 x16 = 128 GB/s. Slots are backward compatible but limited to the lower speed." },

  { id:"c1-hw-002", exam:"core1", domain:"Hardware", domainNum:3,
    question:"What is the difference between DDR4 and DDR5 RAM?",
    answer:"DDR5 offers higher speeds (4800+ MT/s), lower voltage (1.1V vs 1.2V), doubled bandwidth, and on-die ECC. DDR4 runs 2133–3200 MT/s.",
    detail:"DDR5 modules also have two independent 32-bit sub-channels per stick. DDR4 and DDR5 are not interchangeable (different notch position)." },

  { id:"c1-hw-003", exam:"core1", domain:"Hardware", domainNum:3,
    question:"What is POST (Power-On Self-Test)?",
    answer:"A firmware diagnostic routine that runs at startup to verify that essential hardware (CPU, RAM, GPU, storage) is functional.",
    detail:"If POST fails, it signals errors via beep codes or LED codes. A successful POST hands control to the bootloader." },

  { id:"c1-hw-004", exam:"core1", domain:"Hardware", domainNum:3,
    question:"What is the difference between NVMe SSD and SATA SSD?",
    answer:"NVMe uses PCIe lanes (up to ~7 GB/s). SATA is limited to ~600 MB/s. NVMe also has lower latency.",
    detail:"NVMe drives connect via M.2 or U.2 slots. SATA drives use 2.5\" or 3.5\" form factors (or M.2 SATA). NVMe is the modern default for performance." },

  { id:"c1-hw-005", exam:"core1", domain:"Hardware", domainNum:3,
    question:"What does UEFI replace and what advantages does it offer?",
    answer:"UEFI replaces BIOS. Advantages: GUI interface, mouse support, faster boot, GPT disk support (>2TB), Secure Boot, network capability.",
    detail:"Legacy BIOS uses MBR (max 2TB, 4 primary partitions). UEFI uses GPT (supports drives up to 9.4 ZB, 128 partitions)." },

  { id:"c1-hw-006", exam:"core1", domain:"Hardware", domainNum:3,
    question:"What is thermal paste (thermal compound) used for?",
    answer:"Fills microscopic air gaps between a CPU/GPU and its heatsink to improve heat transfer.",
    detail:"Air is an insulator. Thermal paste ensures maximum contact for heat conduction. Must be reapplied when removing a heatsink." },

  { id:"c1-hw-007", exam:"core1", domain:"Hardware", domainNum:3,
    question:"What is ECC RAM and where is it used?",
    answer:"Error-Correcting Code RAM — detects and corrects single-bit memory errors automatically. Used in servers and workstations.",
    detail:"ECC prevents data corruption from cosmic rays and electrical interference. Standard desktop CPUs typically don't support ECC." },

  { id:"c1-hw-008", exam:"core1", domain:"Hardware", domainNum:3,
    question:"What is the most common desktop motherboard form factor?",
    answer:"ATX (305mm × 244mm). Others include Micro-ATX (244mm × 244mm) and Mini-ITX (170mm × 170mm).",
    detail:"ATX boards support more expansion slots and RAM slots. Mini-ITX is used in compact builds with only 1 PCIe and 2 RAM slots." },

  { id:"c1-hw-009", exam:"core1", domain:"Hardware", domainNum:3,
    question:"What is the purpose of a CMOS battery on a motherboard?",
    answer:"Maintains BIOS/UEFI settings (date, time, hardware config) when the PC is powered off or unplugged.",
    detail:"Typically a CR2032 lithium coin cell. If the CMOS battery dies, the system clock resets to default and BIOS settings may be lost." },

  { id:"c1-hw-010", exam:"core1", domain:"Hardware", domainNum:3,
    question:"What is RAID 0, RAID 1, and RAID 5?",
    answer:"RAID 0: Striping (speed, no redundancy). RAID 1: Mirroring (redundancy, no speed gain). RAID 5: Striping with parity (needs 3+ drives, balances speed and redundancy).",
    detail:"RAID 0 loses all data if one drive fails. RAID 1 can survive one drive failure. RAID 5 can survive one drive failure." },

  { id:"c1-hw-011", exam:"core1", domain:"Hardware", domainNum:3,
    question:"What is a UPS and what does it protect against?",
    answer:"Uninterruptible Power Supply — provides battery backup during power outages and protects against power surges and fluctuations.",
    detail:"A UPS gives time to safely shut down during an outage. A surge protector only guards against voltage spikes, not outages." },

  { id:"c1-hw-012", exam:"core1", domain:"Hardware", domainNum:3,
    question:"What is dual-channel memory mode and how is it enabled?",
    answer:"Running two matched RAM sticks in specific paired slots doubles memory bandwidth. Enabled by installing sticks in the correct slots (check mobo manual).",
    detail:"Motherboards color-code the dual-channel slots. Mismatched slots may still work but in single-channel mode." },

  { id:"c1-hw-013", exam:"core1", domain:"Hardware", domainNum:3,
    question:"What does the 24-pin ATX connector do?",
    answer:"Provides the main power from the PSU to the motherboard.",
    detail:"Modern boards also require a separate 4-pin or 8-pin EPS/ATX12V connector for the CPU, and PCIe power connectors for GPUs." },

  { id:"c1-hw-014", exam:"core1", domain:"Hardware", domainNum:3,
    question:"What is TDP and why does it matter for CPU cooling?",
    answer:"Thermal Design Power — the maximum heat a CPU generates under sustained workloads. Cooling solutions must handle at least this value.",
    detail:"A 125W TDP CPU requires a robust air cooler or AIO liquid cooler. Low-power mobile CPUs may have 15–45W TDP." },

  { id:"c1-hw-015", exam:"core1", domain:"Hardware", domainNum:3,
    question:"What connector types does USB-C support via alternate modes?",
    answer:"USB data (up to USB4/40 Gbps), DisplayPort, HDMI, Thunderbolt 3/4, and USB Power Delivery up to 240W.",
    detail:"Not all USB-C ports are equal — a port labeled USB-C may only support USB 2.0 speeds without Thunderbolt or video output." },

  { id:"c1-hw-016", exam:"core1", domain:"Hardware", domainNum:3,
    question:"What is a KVM switch?",
    answer:"Keyboard, Video, Mouse switch — allows one set of peripherals to control multiple computers.",
    detail:"Used in data centers and by users managing multiple systems. Modern KVMs support USB and DisplayPort/HDMI." },

  { id:"c1-hw-017", exam:"core1", domain:"Hardware", domainNum:3,
    question:"What is the difference between a 2.5\" and 3.5\" hard drive?",
    answer:"2.5\" drives are used in laptops (and some desktops). 3.5\" drives are used in desktops and NAS — larger platters mean higher capacity per dollar.",
    detail:"3.5\" HDDs are available up to 20TB+. Both use SATA interfaces (typically)." },

  { id:"c1-hw-018", exam:"core1", domain:"Hardware", domainNum:3,
    question:"What is Secure Boot?",
    answer:"A UEFI feature that verifies the digital signature of the OS bootloader before executing it, preventing rootkits and unauthorized OS from loading.",
    detail:"Required for Windows 11. Can be disabled in UEFI settings to install Linux on some systems (though most modern distros support Secure Boot)." },

  { id:"c1-hw-019", exam:"core1", domain:"Hardware", domainNum:3,
    question:"What are the USB speed standards? (USB 2.0, 3.2 Gen 1, 3.2 Gen 2, 3.2 Gen 2x2)",
    answer:"USB 2.0: 480 Mbps | USB 3.2 Gen 1: 5 Gbps | USB 3.2 Gen 2: 10 Gbps | USB 3.2 Gen 2x2: 20 Gbps",
    detail:"USB4 Gen 2x2 = 20 Gbps, USB4 Gen 3x2 = 40 Gbps. Old marketing names like 'USB 3.0' and 'USB 3.1' are replaced by the Gen naming." },

  { id:"c1-hw-020", exam:"core1", domain:"Hardware", domainNum:3,
    question:"What is the difference between a GPU and an integrated graphics (iGPU)?",
    answer:"A dedicated GPU is a separate card with dedicated VRAM. An iGPU is built into the CPU die and shares system RAM.",
    detail:"iGPU is sufficient for everyday tasks. A discrete GPU is needed for gaming, 3D rendering, and video editing." },

  { id:"c1-hw-021", exam:"core1", domain:"Hardware", domainNum:3,
    question:"What is SATA and what are its speed limits?",
    answer:"Serial ATA — interface for connecting HDDs and SSDs. SATA III (current) maxes out at 6 Gbps (~600 MB/s effective).",
    detail:"SATA is a significant bottleneck for modern SSDs (which can exceed 7 GB/s via NVMe). SATA is still used for HDDs and budget SSDs." },

  { id:"c1-hw-022", exam:"core1", domain:"Hardware", domainNum:3,
    question:"What is the purpose of case fans and how does airflow direction matter?",
    answer:"Move air through the case to cool components. Proper airflow: intake fans at front/bottom, exhaust fans at rear/top.",
    detail:"Positive pressure (more intake): less dust buildup. Negative pressure (more exhaust): may pull dust through gaps. Balanced is ideal." },

  { id:"c1-hw-023", exam:"core1", domain:"Hardware", domainNum:3,
    question:"What is the difference between a mechanical HDD and an SSD?",
    answer:"HDD: spinning magnetic platters, moving read/write heads — slower, cheaper per GB, more fragile. SSD: flash memory — faster, more durable, more expensive per GB.",
    detail:"HDDs are still used for bulk storage (backups, NAS) due to lower cost per GB. SSDs are standard for boot drives." },

  { id:"c1-hw-024", exam:"core1", domain:"Hardware", domainNum:3,
    question:"What tool is used to connect power leads and data cables to components?",
    answer:"No special tool needed — connectors are keyed to prevent incorrect insertion. An ESD strap protects components during installation.",
    detail:"Anti-static precautions: work on a non-carpeted surface, use ESD strap, or touch metal chassis before handling components." },

  { id:"c1-hw-025", exam:"core1", domain:"Hardware", domainNum:3,
    question:"What are common laser printer components? (Name 4)",
    answer:"Toner cartridge, imaging drum, fuser assembly, transfer belt/roller, corona wire.",
    detail:"Laser printing process: Processing → Charging → Exposing → Developing → Transferring → Fusing → Cleaning." },

  // ── Domain 4: Virtualization & Cloud Computing (11%) ────────────────────

  { id:"c1-virt-001", exam:"core1", domain:"Virtualization & Cloud", domainNum:4,
    question:"What is a hypervisor and what are the two types?",
    answer:"Software that creates and manages virtual machines. Type 1 (bare-metal) runs directly on hardware. Type 2 (hosted) runs on a host OS.",
    detail:"Type 1 examples: VMware ESXi, Microsoft Hyper-V, Proxmox. Type 2 examples: VMware Workstation, VirtualBox." },

  { id:"c1-virt-002", exam:"core1", domain:"Virtualization & Cloud", domainNum:4,
    question:"What is a VM snapshot?",
    answer:"A saved state of a virtual machine at a specific point in time, allowing rollback to that state.",
    detail:"Snapshots capture RAM, disk state, and settings. Useful before risky changes. Too many snapshots can degrade performance." },

  { id:"c1-virt-003", exam:"core1", domain:"Virtualization & Cloud", domainNum:4,
    question:"What are IaaS, PaaS, and SaaS?",
    answer:"IaaS: virtual hardware (VMs, storage). PaaS: development platform. SaaS: ready-to-use software delivered over the internet.",
    detail:"IaaS: AWS EC2, Azure VMs. PaaS: Heroku, Google App Engine. SaaS: Microsoft 365, Salesforce, Google Docs." },

  { id:"c1-virt-004", exam:"core1", domain:"Virtualization & Cloud", domainNum:4,
    question:"What is the difference between public, private, and hybrid cloud?",
    answer:"Public: shared infrastructure managed by a provider (AWS, Azure). Private: dedicated to one org. Hybrid: mix of both.",
    detail:"Community cloud is a fourth type — shared by organizations with common requirements (e.g., government agencies)." },

  { id:"c1-virt-005", exam:"core1", domain:"Virtualization & Cloud", domainNum:4,
    question:"What is the difference between a container and a VM?",
    answer:"Containers share the host OS kernel and are lightweight. VMs include a full OS and are more isolated but heavier.",
    detail:"Docker containers start in milliseconds vs. seconds for VMs. VMs provide stronger isolation. Kubernetes orchestrates containers at scale." },

  { id:"c1-virt-006", exam:"core1", domain:"Virtualization & Cloud", domainNum:4,
    question:"What is VDI (Virtual Desktop Infrastructure)?",
    answer:"Delivers desktop environments from a centralized server to thin clients or endpoints, allowing remote access to a full desktop.",
    detail:"Users connect to a VM running their desktop in the data center. Centralized management, easier backups, but requires reliable network." },

  { id:"c1-virt-007", exam:"core1", domain:"Virtualization & Cloud", domainNum:4,
    question:"What is cloud elasticity?",
    answer:"The ability to automatically scale resources up or down based on demand, paying only for what is used.",
    detail:"Differs from scalability (which is planned growth). Elasticity handles sudden spikes. Example: auto-scaling web servers during traffic bursts." },

  { id:"c1-virt-008", exam:"core1", domain:"Virtualization & Cloud", domainNum:4,
    question:"What does the shared responsibility model mean in cloud security?",
    answer:"The provider secures the underlying infrastructure; the customer is responsible for their data, access controls, and application configuration.",
    detail:"In IaaS, customers manage OS, data, and apps. In SaaS, provider manages almost everything; customer manages data and user access only." },

  { id:"c1-virt-009", exam:"core1", domain:"Virtualization & Cloud", domainNum:4,
    question:"What is a thin client?",
    answer:"A lightweight endpoint device with minimal local processing power that relies on a server for compute and storage.",
    detail:"Thin clients are used with VDI. They reduce hardware costs, simplify management, and improve security (no local data)." },

  { id:"c1-virt-010", exam:"core1", domain:"Virtualization & Cloud", domainNum:4,
    question:"What is resource pooling in cloud computing?",
    answer:"Multiple customers share physical resources (compute, storage, network) that are dynamically allocated based on demand.",
    detail:"This is what enables the economies of scale in public cloud. Physical location is abstracted from the customer." },

  { id:"c1-virt-011", exam:"core1", domain:"Virtualization & Cloud", domainNum:4,
    question:"What is the purpose of a sandbox in virtualization/security?",
    answer:"An isolated environment for safely running untested code or applications without affecting the production system.",
    detail:"Malware analysis labs use sandboxes. Browser tab isolation is a form of sandboxing. VMs make excellent sandboxes." },

  { id:"c1-virt-012", exam:"core1", domain:"Virtualization & Cloud", domainNum:4,
    question:"What is on-premises vs. cloud infrastructure?",
    answer:"On-premises: hardware and software are owned and operated at the organization's physical location. Cloud: resources are hosted and managed by a provider.",
    detail:"On-prem offers more control and may meet compliance requirements. Cloud offers flexibility and reduced capital expenditure." },

  // ── Domain 5: Hardware & Network Troubleshooting (28%) ──────────────────

  { id:"c1-trb-001", exam:"core1", domain:"Hardware & Network Troubleshooting", domainNum:5,
    question:"What are the 6 steps in CompTIA's troubleshooting methodology?",
    answer:"1) Identify the problem  2) Establish a theory of probable cause  3) Test the theory  4) Establish an action plan  5) Implement the solution  6) Document findings",
    detail:"Always identify before theorizing. Always document at the end. The methodology applies to both hardware and software problems." },

  { id:"c1-trb-002", exam:"core1", domain:"Hardware & Network Troubleshooting", domainNum:5,
    question:"What does APIPA (169.254.x.x) tell you when troubleshooting a network issue?",
    answer:"The device cannot reach a DHCP server — it self-assigned a link-local address. Check the DHCP server, cable, or switch port.",
    detail:"An APIPA address means the device has local-only connectivity. Check: physical connection, DHCP server availability, firewall rules." },

  { id:"c1-trb-003", exam:"core1", domain:"Hardware & Network Troubleshooting", domainNum:5,
    question:"What does a loopback plug test?",
    answer:"Verifies that a NIC or port can send and receive data by looping its output back to its input.",
    detail:"Used to isolate whether a problem is with the cable/network or the port itself. Loopback tests both physical and logical port function." },

  { id:"c1-trb-004", exam:"core1", domain:"Hardware & Network Troubleshooting", domainNum:5,
    question:"What is a common cause of a computer that powers on but shows no display?",
    answer:"Check: monitor cable/power, display brightness, RAM not seated, GPU not seated, POST failure (listen for beep codes).",
    detail:"Swap to onboard video if discrete GPU is present. Test with a known-good monitor. Reset RAM by reseating it." },

  { id:"c1-trb-005", exam:"core1", domain:"Hardware & Network Troubleshooting", domainNum:5,
    question:"What does tracert (traceroute) show and how is it useful?",
    answer:"Shows each network hop between source and destination with latency. Useful for pinpointing where a connection slows or fails.",
    detail:"If tracert times out at a specific hop, the issue is at or beyond that router. High latency at one hop may indicate congestion." },

  { id:"c1-trb-006", exam:"core1", domain:"Hardware & Network Troubleshooting", domainNum:5,
    question:"What Windows command displays full IP configuration including MAC address?",
    answer:"ipconfig /all",
    detail:"ipconfig alone shows IP, mask, and gateway. /all also shows MAC address, DHCP server, DNS servers, and lease information." },

  { id:"c1-trb-007", exam:"core1", domain:"Hardware & Network Troubleshooting", domainNum:5,
    question:"What does nslookup do?",
    answer:"Queries DNS servers to resolve a hostname to an IP address (or reverse lookup). Useful for diagnosing DNS issues.",
    detail:"If nslookup resolves but the browser fails, check firewall/proxy settings. If nslookup fails, DNS is the problem." },

  { id:"c1-trb-008", exam:"core1", domain:"Hardware & Network Troubleshooting", domainNum:5,
    question:"What are common symptoms of a failing hard drive?",
    answer:"Clicking or grinding noises, slow access times, bad sectors, frequent crashes, SMART errors, files becoming corrupt.",
    detail:"Use CrystalDiskInfo or HDDScan to read SMART data. Back up immediately on any SMART warning. Clicking = head crash imminent." },

  { id:"c1-trb-009", exam:"core1", domain:"Hardware & Network Troubleshooting", domainNum:5,
    question:"What is SMART and how is it used in troubleshooting?",
    answer:"Self-Monitoring, Analysis, and Reporting Technology — built into HDDs/SSDs to monitor drive health and predict failure.",
    detail:"Check SMART data with CrystalDiskInfo (Windows) or smartctl (Linux). Reallocated sectors and pending sectors are warning signs." },

  { id:"c1-trb-010", exam:"core1", domain:"Hardware & Network Troubleshooting", domainNum:5,
    question:"What causes a BSOD (Blue Screen of Death) and how do you begin diagnosing it?",
    answer:"Hardware failure (RAM, GPU, storage), corrupt or incompatible drivers, or OS corruption. Note the stop code and file name listed on the BSOD.",
    detail:"Common stop codes: MEMORY_MANAGEMENT (RAM), IRQL_NOT_LESS_OR_EQUAL (driver), CRITICAL_PROCESS_DIED (OS). Check Event Viewer for details." },

  { id:"c1-trb-011", exam:"core1", domain:"Hardware & Network Troubleshooting", domainNum:5,
    question:"What tool tests RAM for errors?",
    answer:"Windows Memory Diagnostic (mdsched.exe) or MemTest86 (bootable, more thorough).",
    detail:"Run MemTest86 for at least 1–2 full passes. Multiple errors usually indicate bad RAM. Test sticks individually to find the faulty one." },

  { id:"c1-trb-012", exam:"core1", domain:"Hardware & Network Troubleshooting", domainNum:5,
    question:"What does the netstat command show?",
    answer:"Active network connections, listening ports, routing tables, and network interface statistics.",
    detail:"netstat -an: all connections with numeric addresses. netstat -b: shows the executable using each connection (requires admin)." },

  { id:"c1-trb-013", exam:"core1", domain:"Hardware & Network Troubleshooting", domainNum:5,
    question:"What does a toner probe (fox and hound) do?",
    answer:"Traces cable runs through walls and ceilings — a tone generator attaches to one end, a probe at the other end detects the tone.",
    detail:"Essential for documenting or locating unknown cable runs. The probe can detect the cable through walls without damaging them." },

  { id:"c1-trb-014", exam:"core1", domain:"Hardware & Network Troubleshooting", domainNum:5,
    question:"If a user can ping an IP address but cannot browse to a website, what is likely the issue?",
    answer:"DNS resolution failure — the hostname cannot be resolved to an IP. Check DNS server settings and try nslookup.",
    detail:"Test: ping 8.8.8.8 (works = connectivity OK) then ping google.com (fails = DNS issue). Fix: correct DNS server address, flush DNS cache." },

  { id:"c1-trb-015", exam:"core1", domain:"Hardware & Network Troubleshooting", domainNum:5,
    question:"What is an ESD strap and when must you use it?",
    answer:"Electrostatic discharge wrist strap grounded to the chassis — prevents static electricity from damaging sensitive electronic components.",
    detail:"Even a small static discharge (undetectable to humans) can permanently damage RAM, CPUs, and GPUs. Always use ESD protection when handling components." },

  { id:"c1-trb-016", exam:"core1", domain:"Hardware & Network Troubleshooting", domainNum:5,
    question:"What does the arp command show?",
    answer:"The ARP cache — current mappings of IP addresses to MAC addresses on the local network.",
    detail:"arp -a: displays full ARP table. Used to verify MAC-to-IP mappings and diagnose ARP poisoning/spoofing attacks." },

  { id:"c1-trb-017", exam:"core1", domain:"Hardware & Network Troubleshooting", domainNum:5,
    question:"What tool would you use to crimp RJ-45 connectors onto Ethernet cable?",
    answer:"A crimping tool (crimper). You also need a cable stripper and RJ-45 connectors.",
    detail:"Wire order follows T568A or T568B standard. T568B is most common in commercial installations. Both ends must use the same standard for a straight-through cable." },

  { id:"c1-trb-018", exam:"core1", domain:"Hardware & Network Troubleshooting", domainNum:5,
    question:"A printer prints garbage characters. What is the most likely cause?",
    answer:"Incorrect or corrupt printer driver. Reinstall the correct driver for the printer model and OS.",
    detail:"Also check: wrong printer selected, PCL vs. PostScript mismatch. For laser printers, a bad formatter board can cause this." },

  { id:"c1-trb-019", exam:"core1", domain:"Hardware & Network Troubleshooting", domainNum:5,
    question:"What is a multimeter used for in IT troubleshooting?",
    answer:"Measures voltage, current, and resistance — used to test PSU output voltages, AC outlets, and cable continuity.",
    detail:"PSU voltages: 12V rail (drives/fans), 5V rail (USB, logic), 3.3V rail (RAM, chipset). More than 5% variance indicates a failing PSU." },

  { id:"c1-trb-020", exam:"core1", domain:"Hardware & Network Troubleshooting", domainNum:5,
    question:"What does 'no POST' indicate?",
    answer:"The system failed before completing Power-On Self-Test — likely a hardware issue: dead PSU, unseated RAM, failed CPU, or short circuit.",
    detail:"Diagnosis: check PSU (paperclip test), reseat RAM, check for shorts (standoffs), try with minimum hardware (1 RAM stick, no GPU)." },

  { id:"c1-trb-021", exam:"core1", domain:"Hardware & Network Troubleshooting", domainNum:5,
    question:"What is the first thing to check when a laptop has no Wi-Fi?",
    answer:"Check if the Wi-Fi radio is enabled — many laptops have a hardware switch or Fn key toggle that disables the wireless adapter.",
    detail:"Also check: Device Manager for driver errors, airplane mode setting, BIOS/UEFI wireless enabled, distance from access point." },

  { id:"c1-trb-022", exam:"core1", domain:"Hardware & Network Troubleshooting", domainNum:5,
    question:"What are the steps to release and renew a DHCP lease in Windows?",
    answer:"Open Command Prompt and run: ipconfig /release  then  ipconfig /renew",
    detail:"Also run ipconfig /flushdns to clear the DNS cache. Useful when a device gets stuck with an old or APIPA address." },

  { id:"c1-trb-023", exam:"core1", domain:"Hardware & Network Troubleshooting", domainNum:5,
    question:"A monitor displays distorted or wavy lines. What should you check?",
    answer:"Check video cable connection, try a different cable, test with a different monitor or port. GPU driver or overheating GPU are also possible causes.",
    detail:"VGA cables are susceptible to interference and pin damage. HDMI/DisplayPort digital signals are less prone to analog distortion." },

  { id:"c1-trb-024", exam:"core1", domain:"Hardware & Network Troubleshooting", domainNum:5,
    question:"What does ipconfig /flushdns do?",
    answer:"Clears the local DNS resolver cache, forcing the system to perform fresh DNS lookups for all hostnames.",
    detail:"Use when a website moved to a new IP and you're still hitting the old one, or after changing DNS servers." },

  { id:"c1-trb-025", exam:"core1", domain:"Hardware & Network Troubleshooting", domainNum:5,
    question:"What is the significance of a 'limited or no connectivity' message in Windows?",
    answer:"The adapter has an IP address (possibly APIPA) but cannot reach the internet or DHCP server. Check physical connection, DHCP, and router.",
    detail:"Steps: check cable/Wi-Fi signal, ipconfig to see IP, release/renew DHCP, check default gateway with ping, check router/modem status." }

];
