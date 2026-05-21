const QUIZ_CORE1 = [

  // ── Mobile Devices ───────────────────────────────────────────────────────

  { id:"q1-mob-01", exam:"core1", domain:"Mobile Devices",
    question:"A technician is upgrading RAM in a laptop. Which memory form factor should they use?",
    options:["DIMM","SO-DIMM","RIMM","UDIMM"],
    correct:1,
    explanation:"Laptops use SO-DIMM (Small Outline DIMM) because it is physically smaller than the full-size DIMM used in desktop systems." },

  { id:"q1-mob-02", exam:"core1", domain:"Mobile Devices",
    question:"Which wireless technology enables contactless payments and requires devices to be within approximately 4 cm?",
    options:["Bluetooth","Wi-Fi Direct","NFC","IR"],
    correct:2,
    explanation:"NFC (Near Field Communication) operates at 13.56 MHz over very short distances and is used for contactless payments (Apple Pay, Google Pay) and quick device pairing." },

  { id:"q1-mob-03", exam:"core1", domain:"Mobile Devices",
    question:"A user's laptop touchscreen stops responding after a display replacement. Which component was most likely damaged?",
    options:["The LCD backlight","The graphics driver","The digitizer","The display data cable"],
    correct:2,
    explanation:"The digitizer is the layer that converts physical touch into digital coordinates. It is a separate component from the display and can be damaged or disconnected during screen replacement." },

  { id:"q1-mob-04", exam:"core1", domain:"Mobile Devices",
    question:"Which 5G technology offers the highest speeds but the shortest range with poor building penetration?",
    options:["Sub-6 GHz","mmWave","LTE Advanced","C-Band"],
    correct:1,
    explanation:"5G mmWave operates above 24 GHz and can deliver multi-Gbps speeds but only within roughly 100 meters of a tower and cannot penetrate walls well." },

  { id:"q1-mob-05", exam:"core1", domain:"Mobile Devices",
    question:"An IT department needs to enforce password policies and remotely wipe employee smartphones. Which solution should they deploy?",
    options:["A VPN client","MDM (Mobile Device Management)","BitLocker","Windows Defender"],
    correct:1,
    explanation:"MDM software (e.g., Microsoft Intune, Jamf) lets IT manage, monitor, enforce policies, and remotely wipe mobile devices across the organization." },

  { id:"q1-mob-06", exam:"core1", domain:"Mobile Devices",
    question:"What improvement does 802.11ax (Wi-Fi 6) bring specifically for crowded environments like stadiums?",
    options:["Longer range than 802.11ac","OFDMA for efficient multi-user communication","Higher single-device throughput only","Operates exclusively on 6 GHz"],
    correct:1,
    explanation:"802.11ax introduces OFDMA (Orthogonal Frequency Division Multiple Access) which divides channels into sub-channels so many devices can transmit simultaneously — critical in dense deployments." },

  // ── Networking ────────────────────────────────────────────────────────────

  { id:"q1-net-01", exam:"core1", domain:"Networking",
    question:"Which port does Remote Desktop Protocol (RDP) use by default?",
    options:["22","80","443","3389"],
    correct:3,
    explanation:"RDP uses TCP/UDP port 3389. This port is a frequent target for brute-force attacks and should be restricted by firewall rules or replaced with a VPN tunnel." },

  { id:"q1-net-02", exam:"core1", domain:"Networking",
    question:"A workstation has the IP address 169.254.12.45. What does this indicate?",
    options:["A valid static IP assigned by the administrator","A Class A private network address","DHCP failed — the device self-assigned an APIPA address","The device is configured for IPv6"],
    correct:2,
    explanation:"169.254.x.x is an APIPA (Automatic Private IP Addressing) address, automatically assigned when a device cannot contact a DHCP server. It allows only local subnet communication." },

  { id:"q1-net-03", exam:"core1", domain:"Networking",
    question:"A user can open websites by entering IP addresses directly but not by hostname. What is the most likely cause?",
    options:["Default gateway misconfiguration","DNS resolution failure","DHCP server is offline","Firewall blocking port 80"],
    correct:1,
    explanation:"If IP-based access works but hostname-based access fails, DNS is not resolving names to addresses. Check DNS server settings with ipconfig /all and test with nslookup." },

  { id:"q1-net-04", exam:"core1", domain:"Networking",
    question:"Which Wi-Fi security protocol uses SAE (Simultaneous Authentication of Equals) to protect against offline dictionary attacks?",
    options:["WEP","WPA","WPA2-Personal","WPA3-Personal"],
    correct:3,
    explanation:"WPA3-Personal replaces the PSK handshake with SAE, which prevents offline password-guessing attacks and provides forward secrecy — sessions remain secure even if the password is later compromised." },

  { id:"q1-net-05", exam:"core1", domain:"Networking",
    question:"What is the maximum cable length for Cat6a Ethernet running at 10 Gbps?",
    options:["55 meters","75 meters","100 meters","150 meters"],
    correct:2,
    explanation:"Cat6a (Augmented) supports 10 Gbps up to 100 meters. Cat6 (non-augmented) supports 10 Gbps only up to 55 meters before signal degradation." },

  { id:"q1-net-06", exam:"core1", domain:"Networking",
    question:"Which of the following is a valid private IPv4 address range?",
    options:["172.32.0.0/12","10.0.0.0/8","198.168.0.0/16","192.0.0.0/8"],
    correct:1,
    explanation:"RFC 1918 private ranges: 10.0.0.0/8, 172.16.0.0/12 (172.16–172.31), 192.168.0.0/16. Note: 172.32.x.x is PUBLIC — only 172.16–172.31 is private." },

  { id:"q1-net-07", exam:"core1", domain:"Networking",
    question:"What is the purpose of NAT on a home router?",
    options:["Assigns IP addresses dynamically from a pool","Translates domain names to IP addresses","Maps multiple private IPs to a single public IP to conserve IPv4 addresses","Encrypts traffic between LAN and WAN"],
    correct:2,
    explanation:"NAT (Network Address Translation) lets many devices share one public IP address. The router rewrites packet headers so internet traffic appears to come from one IP." },

  { id:"q1-net-08", exam:"core1", domain:"Networking",
    question:"A technician is connecting VoIP phones without access to a wall outlet. Which technology powers the phones over the network cable?",
    options:["USB Power Delivery","PoE (Power over Ethernet)","HDMI","Thunderbolt"],
    correct:1,
    explanation:"PoE (802.3af/at/bt) delivers up to 15–90W over standard Ethernet cable, eliminating the need for separate power supplies for IP phones, cameras, and access points." },

  { id:"q1-net-09", exam:"core1", domain:"Networking",
    question:"What is the key difference between a network hub and a network switch?",
    options:["A hub is faster than a switch","A switch broadcasts all traffic; a hub forwards to specific ports","A hub forwards traffic to all ports; a switch uses MAC addresses to forward to the correct port only","A switch only works with fiber; a hub works with copper"],
    correct:2,
    explanation:"A switch learns MAC addresses and forwards frames only to the destination port, reducing unnecessary traffic. A hub broadcasts every frame to all ports, wasting bandwidth and creating collisions." },

  // ── Hardware ──────────────────────────────────────────────────────────────

  { id:"q1-hw-01", exam:"core1", domain:"Hardware",
    question:"Which storage interface provides the fastest performance for modern SSDs?",
    options:["SATA II","SATA III","PCIe NVMe","USB 3.2 Gen 2"],
    correct:2,
    explanation:"NVMe SSDs use PCIe lanes and can reach speeds of 5–7 GB/s. SATA III is bottlenecked at ~600 MB/s. NVMe also has much lower latency than SATA." },

  { id:"q1-hw-02", exam:"core1", domain:"Hardware",
    question:"Which RAID level provides disk mirroring with full redundancy but no write performance improvement?",
    options:["RAID 0","RAID 1","RAID 5","RAID 6"],
    correct:1,
    explanation:"RAID 1 (mirroring) writes identical data to two drives. If one fails, the other continues operating. There is no write speed benefit, but reads can be slightly faster." },

  { id:"q1-hw-03", exam:"core1", domain:"Hardware",
    question:"What is the main advantage of DDR5 over DDR4 RAM?",
    options:["DDR5 is backward compatible with DDR4 slots","DDR5 has lower voltage (1.1V) and nearly double the bandwidth","DDR5 has lower latency at the same clock speed","DDR5 uses larger physical DIMMs for better cooling"],
    correct:1,
    explanation:"DDR5 operates at 1.1V vs DDR4's 1.2V, offers significantly higher speeds (4800+ MT/s), and doubles the internal bus width. DDR4 and DDR5 are NOT backward compatible." },

  { id:"q1-hw-04", exam:"core1", domain:"Hardware",
    question:"Which component stores BIOS/UEFI configuration and the system clock when the PC is powered off?",
    options:["The system RAM","The hard drive","The CMOS battery","The power supply"],
    correct:2,
    explanation:"A CR2032 coin cell battery (CMOS battery) on the motherboard maintains BIOS/UEFI settings and the real-time clock. When it dies, the system date/time resets and settings may be lost." },

  { id:"q1-hw-05", exam:"core1", domain:"Hardware",
    question:"A user wants to run a 4K display and fast storage from a single laptop port. Which connector supports both?",
    options:["USB-A 3.2 Gen 2","USB-C with Thunderbolt 4","HDMI 2.0","DisplayPort 1.4 (full-size)"],
    correct:1,
    explanation:"Thunderbolt 4 over USB-C carries up to 40 Gbps data, supports two 4K displays or one 8K display, USB 3.2, and up to 100W power delivery over a single cable." },

  { id:"q1-hw-06", exam:"core1", domain:"Hardware",
    question:"What is the purpose of thermal paste between a CPU and its heatsink?",
    options:["Acts as an adhesive to secure the heatsink","Provides electrical insulation","Fills microscopic gaps to improve heat transfer","Lubricates the CPU fan bearing"],
    correct:2,
    explanation:"Even a polished metal surface has microscopic pits and bumps. Thermal compound fills these with a heat-conductive material instead of insulating air, maximizing heat transfer." },

  { id:"q1-hw-07", exam:"core1", domain:"Hardware",
    question:"Which power connector supplies the main 24-pin power to a desktop motherboard?",
    options:["SATA power connector","4-pin Molex","ATX 24-pin connector","PCIe 8-pin connector"],
    correct:2,
    explanation:"The ATX 24-pin connector provides the main power rails (+12V, +5V, +3.3V, etc.) to the motherboard. The CPU also requires a separate 4-pin or 8-pin EPS/ATX12V connector." },

  { id:"q1-hw-08", exam:"core1", domain:"Hardware",
    question:"A customer's laptop uses M.2 for storage. The slot is marked as 'M-key.' Which drive type offers the best performance?",
    options:["M.2 SATA SSD","M.2 NVMe SSD","2.5-inch SATA SSD","mSATA SSD"],
    correct:1,
    explanation:"An M.2 NVMe SSD uses PCIe lanes through the M-key slot for maximum performance (~5–7 GB/s). M.2 SATA drives use the same slot but are limited to SATA III speeds (~600 MB/s)." },

  { id:"q1-hw-09", exam:"core1", domain:"Hardware",
    question:"Which USB speed standard achieves 20 Gbps using two 10 Gbps lanes?",
    options:["USB 2.0","USB 3.2 Gen 1","USB 3.2 Gen 2","USB 3.2 Gen 2x2"],
    correct:3,
    explanation:"USB 3.2 Gen 2x2 uses two 10 Gbps lanes for a total of 20 Gbps. Gen 1 = 5 Gbps, Gen 2 = 10 Gbps (single lane), Gen 2x2 = 20 Gbps (dual lane)." },

  { id:"q1-hw-10", exam:"core1", domain:"Hardware",
    question:"A server administrator requires RAM that automatically detects and corrects single-bit memory errors. Which type is needed?",
    options:["DDR5 non-ECC","SO-DIMM DDR4","ECC (Error-Correcting Code) RAM","Dual-channel DDR4"],
    correct:2,
    explanation:"ECC RAM includes extra chips that detect and correct single-bit errors on the fly, preventing data corruption. Required for servers and workstations where memory errors could cause data loss." },

  // ── Virtualization & Cloud ────────────────────────────────────────────────

  { id:"q1-virt-01", exam:"core1", domain:"Virtualization & Cloud",
    question:"Which hypervisor type runs directly on the physical hardware without a host operating system?",
    options:["Type 2","Hosted","Type 1","Type 3"],
    correct:2,
    explanation:"Type 1 (bare-metal) hypervisors (VMware ESXi, Hyper-V, Proxmox) run directly on hardware. Type 2 (hosted) hypervisors (VirtualBox, VMware Workstation) run on top of a host OS." },

  { id:"q1-virt-02", exam:"core1", domain:"Virtualization & Cloud",
    question:"A company wants to deliver full desktop environments from a centralized server to lightweight endpoints. Which technology should they implement?",
    options:["NAS","VDI (Virtual Desktop Infrastructure)","RAID 5","Type 2 hypervisor"],
    correct:1,
    explanation:"VDI hosts desktop VMs on a server. Users connect from thin clients or other devices. Centralizes management and keeps data off endpoints." },

  { id:"q1-virt-03", exam:"core1", domain:"Virtualization & Cloud",
    question:"Which cloud service model provides virtual machines, storage, and networking — but the customer manages the OS and applications?",
    options:["SaaS","PaaS","IaaS","DaaS"],
    correct:2,
    explanation:"IaaS (Infrastructure as a Service) provides the virtual hardware layer. The customer controls everything above the hypervisor: OS, runtime, apps, and data. Examples: AWS EC2, Azure VMs." },

  { id:"q1-virt-04", exam:"core1", domain:"Virtualization & Cloud",
    question:"What is the primary purpose of a VM snapshot?",
    options:["Increases VM CPU performance","Backs up the physical host configuration","Captures a point-in-time state for quick rollback","Migrates a VM to a different physical host"],
    correct:2,
    explanation:"A snapshot captures the VM's disk state, memory, and settings. If a change breaks the VM, you can instantly revert to the pre-snapshot state. Not a substitute for proper backups." },

  { id:"q1-virt-05", exam:"core1", domain:"Virtualization & Cloud",
    question:"What is the main advantage of containers (e.g., Docker) over virtual machines?",
    options:["Containers provide stronger security isolation","Containers include a full guest OS for better compatibility","Containers share the host OS kernel and are much more lightweight","Containers require a Type 1 hypervisor"],
    correct:2,
    explanation:"Containers share the host OS kernel and only package the application and its dependencies. This makes them much smaller and faster to start than VMs, which require a full OS per instance." },

  // ── Hardware & Network Troubleshooting ───────────────────────────────────

  { id:"q1-trb-01", exam:"core1", domain:"Hardware & Network Troubleshooting",
    question:"What is the FIRST step in CompTIA's 6-step troubleshooting methodology?",
    options:["Establish a theory of probable cause","Test the theory","Identify the problem","Document findings"],
    correct:2,
    explanation:"The 6 steps are: 1) Identify the problem, 2) Establish theory, 3) Test theory, 4) Establish action plan, 5) Implement solution, 6) Document. Always gather information before theorizing." },

  { id:"q1-trb-02", exam:"core1", domain:"Hardware & Network Troubleshooting",
    question:"A technician runs 'ping 127.0.0.1' and it fails. What does this indicate?",
    options:["The network cable is unplugged","The DNS server is unreachable","The local TCP/IP stack is not functioning correctly","The default gateway is misconfigured"],
    correct:2,
    explanation:"127.0.0.1 is the loopback address — it tests the local network stack without sending traffic. A failed loopback ping means TCP/IP is broken locally, not a network issue." },

  { id:"q1-trb-03", exam:"core1", domain:"Hardware & Network Troubleshooting",
    question:"Which command shows each network hop and its latency on the path to a destination?",
    options:["ping","netstat","ipconfig","tracert"],
    correct:3,
    explanation:"tracert (Windows) / traceroute (Linux/macOS) shows each router hop between source and destination along with round-trip latency — useful for finding where a connection slows or fails." },

  { id:"q1-trb-04", exam:"core1", domain:"Hardware & Network Troubleshooting",
    question:"A new network cable is not working. Which tool verifies that all 8 wires are correctly terminated to both RJ-45 connectors?",
    options:["Multimeter","Tone probe","Cable tester","Loopback plug"],
    correct:2,
    explanation:"A cable tester sends a signal down each wire pair and confirms continuity and correct pinout at both ends, quickly identifying opens, shorts, or miswires." },

  { id:"q1-trb-05", exam:"core1", domain:"Hardware & Network Troubleshooting",
    question:"After a driver update, a PC BSODs on every boot with IRQL_NOT_LESS_OR_EQUAL. What is the fastest fix?",
    options:["Reinstall Windows","Replace the GPU","Boot to Safe Mode and roll back or uninstall the driver","Run sfc /scannow from normal boot"],
    correct:2,
    explanation:"Safe Mode loads only essential Microsoft drivers. From there you can access Device Manager to roll back or uninstall the problematic driver, then reboot normally." },

  { id:"q1-trb-06", exam:"core1", domain:"Hardware & Network Troubleshooting",
    question:"A desktop PC makes a loud clicking noise from inside the case. Which component is most likely failing?",
    options:["Power supply fan","Hard disk drive","CPU cooler fan","Case fan"],
    correct:1,
    explanation:"A clicking or grinding noise from an HDD is the classic sign of a failing read/write head (the 'click of death'). Back up data immediately and replace the drive." },

  { id:"q1-trb-07", exam:"core1", domain:"Hardware & Network Troubleshooting",
    question:"Which command displays IP address, subnet mask, default gateway, MAC address, and DHCP server details on Windows?",
    options:["ipconfig","ipconfig /all","netstat -a","arp -a"],
    correct:1,
    explanation:"ipconfig alone shows IP, mask, and gateway per adapter. ipconfig /all adds MAC address, DHCP server, DNS servers, lease dates, and more — essential for troubleshooting." },

  { id:"q1-trb-08", exam:"core1", domain:"Hardware & Network Troubleshooting",
    question:"A user can ping 8.8.8.8 successfully but cannot browse to any website by name. What should the technician check?",
    options:["Default gateway settings","DNS server configuration","Network cable","Firewall port 443"],
    correct:1,
    explanation:"Successful ping by IP proves connectivity. Failed browsing by name means DNS resolution is broken. Check DNS server address (ipconfig /all), test with nslookup, try alternate DNS." },

  { id:"q1-trb-08b", exam:"core1", domain:"Hardware & Network Troubleshooting",
    question:"A technician needs to trace an unknown cable through a wall. Which tool should they use?",
    options:["Cable tester","Multimeter","Tone probe (fox and hound)","Punchdown tool"],
    correct:2,
    explanation:"A tone probe (toner/tracer) emits a tone on one end of the cable, and the inductive probe detects the tone through walls and ceilings without cutting into the wall." },

  { id:"q1-trb-09", exam:"core1", domain:"Hardware & Network Troubleshooting",
    question:"A PC powers on (fans spin, LEDs light) but produces no display output. What is the FIRST thing to check?",
    options:["Replace the motherboard","Check monitor power and video cable connection, then reseat RAM and GPU","Run a memory diagnostic","Flash the BIOS"],
    correct:1,
    explanation:"Start simple: verify monitor is on, cable is connected, brightness isn't zero. Then check RAM seating and GPU seating. Listen for POST beep codes. Escalate hardware only after these basics." },

  { id:"q1-trb-10", exam:"core1", domain:"Hardware & Network Troubleshooting",
    question:"What does the ARP command 'arp -a' display?",
    options:["All active TCP connections","The local DNS resolver cache","IP-to-MAC address mappings in the ARP table","All listening UDP ports"],
    correct:2,
    explanation:"The ARP (Address Resolution Protocol) table maps IP addresses to MAC addresses on the local network. Used to verify correct MAC-to-IP mappings and diagnose ARP spoofing attacks." }

];
