const CORE2_CARDS = [

  // ── Domain 1: Operating Systems (28%) ───────────────────────────────────

  { id:"c2-os-001", exam:"core2", domain:"Operating Systems", domainNum:1,
    question:"What file system does Windows use by default for system drives?",
    answer:"NTFS (New Technology File System)",
    detail:"NTFS supports file permissions, encryption (EFS), journaling, large files (>4GB), and compression. FAT32 is limited to 4GB file size." },

  { id:"c2-os-002", exam:"core2", domain:"Operating Systems", domainNum:1,
    question:"What file system is standard for modern macOS volumes?",
    answer:"APFS (Apple File System) — introduced in 2017, optimized for SSDs with built-in encryption and snapshots.",
    detail:"Older Macs used HFS+. macOS can read NTFS but not write to it natively. exFAT is cross-platform compatible." },

  { id:"c2-os-003", exam:"core2", domain:"Operating Systems", domainNum:1,
    question:"What is the Windows Registry?",
    answer:"A hierarchical database storing operating system and application configuration settings, user preferences, and hardware information.",
    detail:"Keys: HKEY_LOCAL_MACHINE (HKLM) = system/hardware. HKEY_CURRENT_USER (HKCU) = user settings. Edit with regedit — backup first!" },

  { id:"c2-os-004", exam:"core2", domain:"Operating Systems", domainNum:1,
    question:"What does Task Manager (Ctrl+Shift+Esc) show?",
    answer:"Running processes, CPU/memory/disk/network/GPU performance, startup programs, services, and app history.",
    detail:"Processes tab: see CPU/RAM per process. Performance tab: real-time graphs. Startup tab: manage startup programs to improve boot time." },

  { id:"c2-os-005", exam:"core2", domain:"Operating Systems", domainNum:1,
    question:"What Windows command checks and repairs file system errors?",
    answer:"chkdsk /f — checks and fixes file system errors. Add /r to also locate bad sectors and recover data.",
    detail:"chkdsk /f requires a reboot to run on the system drive. Run from elevated Command Prompt." },

  { id:"c2-os-006", exam:"core2", domain:"Operating Systems", domainNum:1,
    question:"What does sfc /scannow do?",
    answer:"System File Checker — scans for and repairs corrupt Windows system files by replacing them from a cached copy.",
    detail:"Run from elevated Command Prompt. If SFC cannot fix files, follow up with: DISM /Online /Cleanup-Image /RestoreHealth" },

  { id:"c2-os-007", exam:"core2", domain:"Operating Systems", domainNum:1,
    question:"What is DISM and when do you use it?",
    answer:"Deployment Image Servicing and Management — repairs the Windows component store (CBS). Use when SFC fails to fix system files.",
    detail:"Command: DISM /Online /Cleanup-Image /RestoreHealth (requires internet). Can also service offline images." },

  { id:"c2-os-008", exam:"core2", domain:"Operating Systems", domainNum:1,
    question:"What is the Windows Page File?",
    answer:"A virtual memory file (pagefile.sys) on the hard drive that extends physical RAM by storing inactive memory pages.",
    detail:"When RAM is full, Windows moves data to the page file. Too much reliance on the page file causes slowdowns. SSD page files perform better than HDD." },

  { id:"c2-os-009", exam:"core2", domain:"Operating Systems", domainNum:1,
    question:"What does msconfig (System Configuration) do?",
    answer:"Configures startup type, boot options (Safe Mode), and which services/startup programs load at boot.",
    detail:"Use for clean boot troubleshooting: disable non-Microsoft startup items to isolate software conflicts. Replaced by Task Manager for startup items in Windows 10/11." },

  { id:"c2-os-010", exam:"core2", domain:"Operating Systems", domainNum:1,
    question:"What does Device Manager show and what do the warning symbols mean?",
    answer:"All hardware devices and their drivers. Yellow ! = driver error/conflict. Red X = device disabled. ? = unrecognized device.",
    detail:"Right-click a device for driver update, rollback, or uninstall. Use 'Scan for hardware changes' after installing new hardware." },

  { id:"c2-os-011", exam:"core2", domain:"Operating Systems", domainNum:1,
    question:"What is Windows Event Viewer used for?",
    answer:"Views system, application, and security logs to investigate errors, warnings, and informational events for troubleshooting.",
    detail:"Key logs: System (OS events), Application (app crashes/errors), Security (login attempts, audit). Run eventvwr.msc." },

  { id:"c2-os-012", exam:"core2", domain:"Operating Systems", domainNum:1,
    question:"What is the difference between a 32-bit and 64-bit OS?",
    answer:"64-bit supports more than 4GB of RAM and can run both 32-bit and 64-bit apps. 32-bit is limited to ~3.2GB of usable RAM.",
    detail:"64-bit also provides better security features (ASLR, DEP). All modern CPUs and Windows versions are 64-bit. 32-bit Windows can't run 64-bit apps." },

  { id:"c2-os-013", exam:"core2", domain:"Operating Systems", domainNum:1,
    question:"What file system works on both Windows and macOS for a USB drive?",
    answer:"exFAT — supports files larger than 4GB and is natively read/write on both Windows and macOS.",
    detail:"FAT32 is also cross-compatible but limited to 4GB files. NTFS works on Mac for reading only (no native write without third-party software)." },

  { id:"c2-os-014", exam:"core2", domain:"Operating Systems", domainNum:1,
    question:"What is the difference between a clean install and an upgrade install of Windows?",
    answer:"Clean install: formats the drive and installs Windows fresh (no previous files). Upgrade: keeps files, settings, and applications while updating the Windows version.",
    detail:"Clean installs are preferred for maximum stability. Upgrade installs are more convenient for end users. Always back up before either." },

  { id:"c2-os-015", exam:"core2", domain:"Operating Systems", domainNum:1,
    question:"What is the netsh command used for?",
    answer:"Network Shell — a command-line tool for configuring network settings including IP addresses, DNS, firewall rules, and Wi-Fi profiles.",
    detail:"Example: netsh wlan show profiles (show saved Wi-Fi networks), netsh int ip reset (reset TCP/IP stack)." },

  { id:"c2-os-016", exam:"core2", domain:"Operating Systems", domainNum:1,
    question:"What are common Linux commands for navigating the file system?",
    answer:"ls (list), cd (change directory), pwd (print working directory), mkdir (make directory), rm (remove), cp (copy), mv (move).",
    detail:"Linux is case-sensitive. Root directory is /. Home directory shortcut is ~. Everything in Linux is a file." },

  { id:"c2-os-017", exam:"core2", domain:"Operating Systems", domainNum:1,
    question:"What is the Linux command to change file permissions, and what does chmod 755 mean?",
    answer:"chmod — changes file permissions. chmod 755 = owner: rwx (7), group: r-x (5), others: r-x (5).",
    detail:"Binary: r=4, w=2, x=1. chmod 644: owner rw, group r, others r. chmod +x file adds execute permission. Use sudo for system files." },

  { id:"c2-os-018", exam:"core2", domain:"Operating Systems", domainNum:1,
    question:"What is the macOS equivalent of Task Manager?",
    answer:"Activity Monitor — shows processes, CPU, memory, energy, disk, and network usage.",
    detail:"macOS Terminal provides access to Unix commands. System Information (About This Mac) shows hardware details. Console app shows system logs." },

  { id:"c2-os-019", exam:"core2", domain:"Operating Systems", domainNum:1,
    question:"What is Windows Defender and what does it protect against?",
    answer:"Built-in Windows antivirus and anti-malware solution included with Windows 10/11, providing real-time protection against viruses, ransomware, and spyware.",
    detail:"Part of Windows Security. Includes Firewall & network protection, App & browser control, and Device security. Updates automatically via Windows Update." },

  { id:"c2-os-020", exam:"core2", domain:"Operating Systems", domainNum:1,
    question:"What is the Windows command to display all active network connections and listening ports?",
    answer:"netstat -an (all connections with numeric addresses) or netstat -anb (also shows the program using each port, requires admin).",
    detail:"Used to diagnose unexpected connections or identify what port an application is listening on." },

  { id:"c2-os-021", exam:"core2", domain:"Operating Systems", domainNum:1,
    question:"What is the purpose of disk partitioning?",
    answer:"Divides a physical drive into separate logical sections, each with its own file system — used to separate OS from data, enable dual-boot, or organize storage.",
    detail:"MBR: max 4 primary partitions. GPT: up to 128 partitions. Windows uses Disk Management (diskmgmt.msc) to manage partitions." },

  { id:"c2-os-022", exam:"core2", domain:"Operating Systems", domainNum:1,
    question:"What is the difference between a local account and a Microsoft account in Windows?",
    answer:"Local account: credentials stored only on the device. Microsoft account: syncs settings to the cloud and enables OneDrive, Microsoft Store, and cross-device features.",
    detail:"Microsoft accounts require an email address. In enterprise, devices join Active Directory or Azure AD with domain accounts." },

  { id:"c2-os-023", exam:"core2", domain:"Operating Systems", domainNum:1,
    question:"What are the key differences between Windows Home and Windows Pro editions?",
    answer:"Pro adds: BitLocker encryption, Remote Desktop host, Hyper-V virtualization, Group Policy editor, domain join, and Azure AD join.",
    detail:"Home is for consumers. Pro is required for businesses that need domain connectivity or advanced security features." },

  { id:"c2-os-024", exam:"core2", domain:"Operating Systems", domainNum:1,
    question:"What is the Windows boot process in order?",
    answer:"Power on → UEFI POST → Boot Manager (bootmgr) → Windows Boot Loader (winload.efi) → Kernel (ntoskrnl.exe) → Session Manager (smss.exe) → Login",
    detail:"UEFI stores the boot entries. BCDEdit modifies the Boot Configuration Data. WinRE can repair a broken boot process." },

  { id:"c2-os-025", exam:"core2", domain:"Operating Systems", domainNum:1,
    question:"What does the 'gpupdate /force' command do?",
    answer:"Forces an immediate refresh of Group Policy settings on a Windows machine, rather than waiting for the automatic refresh interval.",
    detail:"Used in domain environments to apply policy changes immediately. gpresult /r shows which policies are currently applied to a user/computer." },

  { id:"c2-os-026", exam:"core2", domain:"Operating Systems", domainNum:1,
    question:"What Linux command installs packages on Debian/Ubuntu systems?",
    answer:"apt install <package> (or sudo apt-get install <package>). Use apt update first to refresh the package list.",
    detail:"Red Hat/CentOS uses yum or dnf. Arch uses pacman. Package managers handle dependencies automatically." },

  { id:"c2-os-027", exam:"core2", domain:"Operating Systems", domainNum:1,
    question:"What is the Windows Task Scheduler used for?",
    answer:"Automates tasks at specific times, intervals, or triggered by events — used for backups, updates, maintenance scripts, and log cleanup.",
    detail:"Run taskschd.msc. Many system tasks are pre-configured. Malware sometimes uses Task Scheduler for persistence." },

  // ── Domain 2: Security (28%) ─────────────────────────────────────────────

  { id:"c2-sec-001", exam:"core2", domain:"Security", domainNum:2,
    question:"What is the difference between authentication and authorization?",
    answer:"Authentication verifies who you are (identity). Authorization determines what you are allowed to do (permissions).",
    detail:"Example: username/password = authentication. File permissions = authorization. You must authenticate before being authorized." },

  { id:"c2-sec-002", exam:"core2", domain:"Security", domainNum:2,
    question:"What is Multi-Factor Authentication (MFA)?",
    answer:"Requires two or more verification factors: something you know (password), something you have (token/phone), or something you are (biometric).",
    detail:"SMS codes are the weakest form of MFA. Authenticator apps (TOTP) are stronger. Hardware keys (YubiKey) are the strongest." },

  { id:"c2-sec-003", exam:"core2", domain:"Security", domainNum:2,
    question:"What is phishing and how do you identify it?",
    answer:"A social engineering attack using fraudulent emails/messages to trick users into revealing credentials or clicking malicious links.",
    detail:"Signs: urgent language, spoofed sender addresses, suspicious links (hover to preview), grammatical errors, requests for credentials." },

  { id:"c2-sec-004", exam:"core2", domain:"Security", domainNum:2,
    question:"What is ransomware?",
    answer:"Malware that encrypts a victim's files and demands payment (usually cryptocurrency) for the decryption key.",
    detail:"Prevention: backups (offline/offsite), keep systems patched, train users on phishing. Do not pay the ransom — no guarantee of key delivery." },

  { id:"c2-sec-005", exam:"core2", domain:"Security", domainNum:2,
    question:"What is the principle of least privilege?",
    answer:"Users and systems should have only the minimum permissions required to perform their specific job function — nothing more.",
    detail:"Reduces the blast radius of a breach or insider threat. Regular privilege reviews should remove unnecessary access." },

  { id:"c2-sec-006", exam:"core2", domain:"Security", domainNum:2,
    question:"What is BitLocker and what does it require?",
    answer:"Windows full-disk encryption feature that encrypts an entire drive. Requires TPM 2.0 (or a startup PIN/USB key as an alternative).",
    detail:"Available on Windows Pro/Enterprise. Protects data if the drive is removed from the PC. Recovery key should be stored in Active Directory or Microsoft account." },

  { id:"c2-sec-007", exam:"core2", domain:"Security", domainNum:2,
    question:"What is the difference between a brute force and a dictionary attack?",
    answer:"Brute force tries every possible combination. Dictionary attack uses a prebuilt list of common passwords — faster but less exhaustive.",
    detail:"Defense: account lockout after failed attempts, long/complex passwords, MFA, password salting to defeat precomputed hashes." },

  { id:"c2-sec-008", exam:"core2", domain:"Security", domainNum:2,
    question:"What is social engineering?",
    answer:"Manipulating people through psychological tactics (urgency, authority, trust) to divulge confidential information or take harmful actions.",
    detail:"Types: phishing (email), vishing (voice), smishing (SMS), pretexting (fake scenario), tailgating (physical). Training is the primary defense." },

  { id:"c2-sec-009", exam:"core2", domain:"Security", domainNum:2,
    question:"What is the difference between a virus, worm, and Trojan?",
    answer:"Virus: requires a host file to spread. Worm: self-replicates across networks without a host file. Trojan: disguised as legitimate software, creates a backdoor.",
    detail:"Ransomware is often delivered as a Trojan. Worms can spread very quickly (e.g., WannaCry). Viruses spread via file sharing." },

  { id:"c2-sec-010", exam:"core2", domain:"Security", domainNum:2,
    question:"What is a VPN and when should you use one?",
    answer:"Virtual Private Network — encrypts all traffic between your device and a VPN server, securing data on untrusted networks (public Wi-Fi).",
    detail:"Site-to-site VPNs connect offices. Remote access VPNs allow employees to access company resources securely. SSL VPN vs IPSec VPN." },

  { id:"c2-sec-011", exam:"core2", domain:"Security", domainNum:2,
    question:"What is shoulder surfing?",
    answer:"Physically observing someone's screen or keyboard to steal passwords or sensitive information.",
    detail:"Mitigation: privacy screens, screen lock when away from desk, being aware of surroundings when entering credentials." },

  { id:"c2-sec-012", exam:"core2", domain:"Security", domainNum:2,
    question:"What is tailgating (piggybacking)?",
    answer:"Following an authorized person through a secure door without using your own credentials — a physical security breach.",
    detail:"Prevention: security vestibules (mantrap), access control awareness training, enforcing 'one badge, one person' policy." },

  { id:"c2-sec-013", exam:"core2", domain:"Security", domainNum:2,
    question:"What is a zero-day exploit?",
    answer:"An attack targeting a vulnerability for which no patch currently exists — vendors have 'zero days' to fix it before it's exploited.",
    detail:"Defense: layered security (defense in depth), intrusion detection, behavioral analysis — since signature-based AV won't detect it." },

  { id:"c2-sec-014", exam:"core2", domain:"Security", domainNum:2,
    question:"What is end-to-end encryption?",
    answer:"Encryption where only the communicating parties can read the data — the provider (or any intermediary) cannot decrypt it.",
    detail:"Examples: Signal, WhatsApp (E2E enabled), ProtonMail. Different from transport encryption (TLS), where the provider can read data at rest." },

  { id:"c2-sec-015", exam:"core2", domain:"Security", domainNum:2,
    question:"What is the difference between encryption and hashing?",
    answer:"Encryption is reversible with a key (two-way). Hashing is one-way and cannot be reversed — used to verify integrity and store passwords.",
    detail:"Common hashes: MD5, SHA-1 (deprecated for security), SHA-256 (current standard). Passwords should be hashed with salt (bcrypt, Argon2)." },

  { id:"c2-sec-016", exam:"core2", domain:"Security", domainNum:2,
    question:"What is SSL/TLS and what does it protect?",
    answer:"Transport Layer Security encrypts communication between a client and server, protecting data in transit from eavesdropping and tampering.",
    detail:"HTTPS uses TLS. SSL is deprecated (vulnerable). TLS 1.2 and 1.3 are current standards. Certificates are issued by Certificate Authorities (CAs)." },

  { id:"c2-sec-017", exam:"core2", domain:"Security", domainNum:2,
    question:"What is a DDoS attack?",
    answer:"Distributed Denial of Service — overwhelming a server or network with traffic from thousands of compromised systems (botnet) to make it unavailable.",
    detail:"Mitigation: CDN scrubbing, rate limiting, geo-blocking, ISP-level filtering. DDoS protection services: Cloudflare, Akamai." },

  { id:"c2-sec-018", exam:"core2", domain:"Security", domainNum:2,
    question:"What is credential harvesting?",
    answer:"Collecting usernames and passwords through phishing, keyloggers, data breaches, or fake login pages.",
    detail:"Harvested credentials are often sold on dark web markets. Password managers and MFA greatly reduce impact from credential theft." },

  { id:"c2-sec-019", exam:"core2", domain:"Security", domainNum:2,
    question:"What is a man-in-the-middle (MitM) attack?",
    answer:"An attacker secretly intercepts and potentially alters communications between two parties who believe they are communicating directly.",
    detail:"Defenses: TLS/HTTPS, certificate pinning, VPN, strong Wi-Fi encryption (WPA3). ARP spoofing is a common MitM technique." },

  { id:"c2-sec-020", exam:"core2", domain:"Security", domainNum:2,
    question:"What is the purpose of file and folder permissions?",
    answer:"Controls which users can read, write, or execute specific files and directories, enforcing access control.",
    detail:"Windows NTFS: Owner, Read, Write, Execute, Full Control. Linux: rwx for owner/group/others. Principle of least privilege applies." },

  { id:"c2-sec-021", exam:"core2", domain:"Security", domainNum:2,
    question:"What is spyware?",
    answer:"Malware that secretly monitors user activity (keystrokes, screenshots, browsing) and sends collected data to an attacker.",
    detail:"Often bundled with free software (adware). Signs: slow performance, unexpected network traffic, changed browser settings." },

  { id:"c2-sec-022", exam:"core2", domain:"Security", domainNum:2,
    question:"What is a rootkit and why is it dangerous?",
    answer:"Malware that hides itself and other malware in the OS kernel, making it invisible to standard antivirus and very difficult to remove.",
    detail:"Detection requires specialized tools (rootkit scanners, offline scanning, or UEFI-level tools). Often requires OS reinstallation to fully remove." },

  { id:"c2-sec-023", exam:"core2", domain:"Security", domainNum:2,
    question:"What is the purpose of a security token / hardware key?",
    answer:"A physical device that generates one-time passcodes or provides cryptographic proof of identity — used as MFA 'something you have'.",
    detail:"Examples: YubiKey (FIDO2/WebAuthn), RSA SecurID. Much more secure than SMS codes for MFA." },

  { id:"c2-sec-024", exam:"core2", domain:"Security", domainNum:2,
    question:"What are indicators of malware infection on a Windows PC?",
    answer:"Slow performance, unexpected network traffic, disabled AV or Task Manager, new unknown programs, pop-ups, changed browser homepage, high CPU/RAM by unknown processes.",
    detail:"Check: Task Manager, autoruns, network connections (netstat -anb), Event Viewer for suspicious entries." },

  { id:"c2-sec-025", exam:"core2", domain:"Security", domainNum:2,
    question:"What are the steps to remove malware from a Windows system?",
    answer:"1) Identify and isolate  2) Quarantine the device from the network  3) Boot to Safe Mode  4) Run updated anti-malware scan  5) Remove/quarantine threats  6) Patch/update  7) Document",
    detail:"If rootkit is suspected, use an offline bootable scanner. After removal, reset all potentially compromised passwords." },

  { id:"c2-sec-026", exam:"core2", domain:"Security", domainNum:2,
    question:"What is the purpose of a password manager?",
    answer:"Securely stores unique, complex passwords for every account, requiring only one master password — eliminates password reuse.",
    detail:"Password reuse is a critical vulnerability. If one site is breached, all accounts with the same password are compromised. Examples: Bitwarden, 1Password." },

  { id:"c2-sec-027", exam:"core2", domain:"Security", domainNum:2,
    question:"What is a security policy and why is it important?",
    answer:"A formal document defining how an organization protects its assets, including acceptable use, data handling, and incident response procedures.",
    detail:"Includes: AUP, password policy, remote access policy, incident response plan. Policies without enforcement are ineffective." },

  // ── Domain 3: Software Troubleshooting (23%) ─────────────────────────────

  { id:"c2-st-001", exam:"core2", domain:"Software Troubleshooting", domainNum:3,
    question:"What does 'No bootable device found' mean and how do you fix it?",
    answer:"BIOS cannot find a bootable drive. Check: boot order in UEFI, cable connections to drive, drive health, whether drive is recognized in UEFI.",
    detail:"If drive appears in UEFI but won't boot: corrupt bootloader — use WinRE startup repair. If drive is absent: hardware issue (cable, drive failure)." },

  { id:"c2-st-002", exam:"core2", domain:"Software Troubleshooting", domainNum:3,
    question:"How do you access Windows Recovery Environment (WinRE)?",
    answer:"Hold Shift while clicking Restart, or boot from Windows installation media and select 'Repair your computer'.",
    detail:"WinRE provides: Startup Repair, System Restore, System Image Recovery, Command Prompt, and reset options." },

  { id:"c2-st-003", exam:"core2", domain:"Software Troubleshooting", domainNum:3,
    question:"What is System Restore and when should you use it?",
    answer:"Rolls back system files and registry settings to a previous restore point without affecting user files. Use when a driver or update breaks the system.",
    detail:"Restore points are created automatically before updates/driver installs. Run rstrui.exe or access via WinRE." },

  { id:"c2-st-004", exam:"core2", domain:"Software Troubleshooting", domainNum:3,
    question:"What causes a 'missing DLL' error and how do you fix it?",
    answer:"A required Dynamic Link Library file is missing or corrupt. Fix: reinstall the application or install the required runtime (e.g., Visual C++ Redistributable).",
    detail:"Never download DLLs from random websites — they may contain malware. SFC /scannow can restore system DLLs." },

  { id:"c2-st-005", exam:"core2", domain:"Software Troubleshooting", domainNum:3,
    question:"How do you force-quit an unresponsive application in Windows?",
    answer:"Ctrl+Shift+Esc to open Task Manager → right-click the process → End Task.",
    detail:"If Task Manager itself is frozen: Ctrl+Alt+Del → Task Manager. If the desktop is unresponsive: Win+R → taskmgr, or restart." },

  { id:"c2-st-006", exam:"core2", domain:"Software Troubleshooting", domainNum:3,
    question:"What causes high CPU usage in Windows and how do you diagnose it?",
    answer:"Runaway process, malware, Windows Update, insufficient cooling. Diagnose via Task Manager → CPU column to identify the process.",
    detail:"WMI, antivirus, and 'System Idle Process' are often confused for high CPU. Sort by CPU descending. Use Resource Monitor for more detail." },

  { id:"c2-st-007", exam:"core2", domain:"Software Troubleshooting", domainNum:3,
    question:"What is a clean boot and when do you use it?",
    answer:"Starts Windows with only Microsoft services and drivers — used to isolate whether a third-party startup program or service is causing an issue.",
    detail:"Run msconfig → Services → check 'Hide all Microsoft services' → Disable all. Then restart. If issue resolves, re-enable services in batches to find the culprit." },

  { id:"c2-st-008", exam:"core2", domain:"Software Troubleshooting", domainNum:3,
    question:"What is Safe Mode in Windows and how do you access it?",
    answer:"Boots Windows with only essential drivers and services. Access: Shift+Restart → Troubleshoot → Advanced → Startup Settings → F4 (Safe Mode) or F5 (Safe Mode with Networking).",
    detail:"Use Safe Mode to uninstall bad drivers, run malware scans, or diagnose issues that don't occur without third-party drivers." },

  { id:"c2-st-009", exam:"core2", domain:"Software Troubleshooting", domainNum:3,
    question:"What is Startup Repair and what does it fix?",
    answer:"A WinRE tool that automatically repairs boot issues — corrupt MBR/BCD, missing boot files, or bootloader problems.",
    detail:"Accessed via WinRE. If Startup Repair fails, use bootrec /fixmbr and bootrec /fixboot commands from WinRE Command Prompt." },

  { id:"c2-st-010", exam:"core2", domain:"Software Troubleshooting", domainNum:3,
    question:"What is the Windows Action Center / Notification Center?",
    answer:"Displays system notifications, security alerts, Windows Update status, and quick settings. Access via the taskbar notification bell.",
    detail:"In Windows 11, notification center is separate from the Quick Settings panel. Security alerts from Windows Defender appear here." },

  { id:"c2-st-011", exam:"core2", domain:"Software Troubleshooting", domainNum:3,
    question:"What are the steps to troubleshoot a software application that won't install?",
    answer:"Check disk space, check OS compatibility (32 vs 64-bit), run as Administrator, check for conflicting software, review installer error logs, disable AV temporarily.",
    detail:"Windows Installer logs are in %TEMP%. Check Application Event Log for MSI errors. Some apps require specific .NET or VC++ runtime versions." },

  { id:"c2-st-012", exam:"core2", domain:"Software Troubleshooting", domainNum:3,
    question:"What does Disk Cleanup (cleanmgr) remove?",
    answer:"Temporary files, browser cache, Recycle Bin contents, Windows Update cleanup files, and other system files — frees disk space.",
    detail:"'Clean up system files' option removes older Windows versions and update packages. Disk Cleanup can free multiple GBs on old systems." },

  { id:"c2-st-013", exam:"core2", domain:"Software Troubleshooting", domainNum:3,
    question:"What is a common cause of browser redirects and pop-ups?",
    answer:"Adware or browser hijacker — often installed via bundled software. Remove malicious browser extensions and run an anti-malware scan.",
    detail:"Reset browser settings after removal. Check for unknown extensions in all installed browsers. Use Malwarebytes for adware removal." },

  { id:"c2-st-014", exam:"core2", domain:"Software Troubleshooting", domainNum:3,
    question:"What tool shows which process has a file locked in Windows?",
    answer:"Resource Monitor (resmon.exe) → CPU → Associated Handles. Or Process Explorer (Sysinternals) → Find → Handle or DLL.",
    detail:"A locked file prevents deletion, updates, or copying. Locked files are common when an app is still using them in the background." },

  { id:"c2-st-015", exam:"core2", domain:"Software Troubleshooting", domainNum:3,
    question:"How do you check Windows application crash logs?",
    answer:"Event Viewer (eventvwr.msc) → Windows Logs → Application. Look for Error and Critical level events from the application's source.",
    detail:"Crash logs include the exception code, faulting module, and timestamp. Useful for identifying buggy drivers or corrupted app files." },

  { id:"c2-st-016", exam:"core2", domain:"Software Troubleshooting", domainNum:3,
    question:"What is a user profile and what can cause profile corruption?",
    answer:"A folder containing a user's settings, desktop, documents, and registry hive (ntuser.dat). Corruption can occur from improper shutdowns or disk errors.",
    detail:"Signs of corruption: default profile loads instead of user profile, missing settings. Fix: copy files from old profile to new one, or restore from backup." },

  { id:"c2-st-017", exam:"core2", domain:"Software Troubleshooting", domainNum:3,
    question:"What Windows tool manages scheduled automated tasks?",
    answer:"Task Scheduler (taskschd.msc) — creates, views, and manages automated tasks triggered by time, events, or system conditions.",
    detail:"Malware commonly uses Task Scheduler for persistence. Review All Tasks view to find unfamiliar entries." },

  { id:"c2-st-018", exam:"core2", domain:"Software Troubleshooting", domainNum:3,
    question:"What is the difference between an upgrade and a repair install of Windows?",
    answer:"Upgrade install: updates Windows version, keeps files and apps. Repair install (in-place upgrade same version): reinstalls Windows, keeps files and apps, fixes corruption.",
    detail:"Run setup.exe from Windows media while booted into Windows to do an in-place repair. Fixes system file corruption without losing data." },

  { id:"c2-st-019", exam:"core2", domain:"Software Troubleshooting", domainNum:3,
    question:"What are Windows blue screen (BSOD) stop codes and where do you find them?",
    answer:"Stop codes identify the type of crash (e.g., MEMORY_MANAGEMENT, IRQL_NOT_LESS_OR_EQUAL). Find them on the BSOD screen or in Event Viewer → System → Critical events.",
    detail:"Use WinDbg or online BSOD analyzer with the minidump file (C:\\Windows\\Minidump) for detailed diagnosis." },

  { id:"c2-st-020", exam:"core2", domain:"Software Troubleshooting", domainNum:3,
    question:"What is the Windows Recovery Console command to fix the Master Boot Record?",
    answer:"bootrec /fixmbr — rewrites the MBR. bootrec /fixboot — rewrites the boot sector. bootrec /rebuildbcd — rebuilds the Boot Configuration Data.",
    detail:"Run from WinRE Command Prompt. Use when Startup Repair fails. bootrec /scanos detects installed Windows copies." },

  { id:"c2-st-021", exam:"core2", domain:"Software Troubleshooting", domainNum:3,
    question:"What does 'application has stopped working' mean and how do you handle it?",
    answer:"The process crashed, deadlocked, or ran out of resources. Click Close Program, then check Event Viewer Application log for the crash details.",
    detail:"Common causes: buggy third-party code, incompatible DLL, insufficient memory, corrupt installation. Reinstall or update the application." },

  { id:"c2-st-022", exam:"core2", domain:"Software Troubleshooting", domainNum:3,
    question:"What are common causes of slow Windows performance?",
    answer:"Too many startup programs, low disk space (<10% free), malware, failing HDD, insufficient RAM, background processes (indexing, updates), overheating.",
    detail:"Diagnose with Task Manager (CPU/memory/disk usage), check disk with chkdsk, clean temp files, scan for malware." },

  { id:"c2-st-023", exam:"core2", domain:"Software Troubleshooting", domainNum:3,
    question:"What is the purpose of Windows Reliability Monitor?",
    answer:"Shows a timeline of application crashes, Windows failures, hardware errors, and other events — useful for correlating problems with recent changes.",
    detail:"Access: Control Panel → Security and Maintenance → Reliability Monitor. Shows a stability index graph (1–10 scale)." },

  // ── Domain 4: Operational Procedures (21%) ──────────────────────────────

  { id:"c2-ops-001", exam:"core2", domain:"Operational Procedures", domainNum:4,
    question:"What is change management and why is it important in IT?",
    answer:"A formal process for requesting, reviewing, approving, and documenting IT changes — reduces risk of unplanned outages from uncontrolled changes.",
    detail:"Steps: Request → Impact Assessment → Approval → Scheduled Maintenance Window → Implementation → Testing → Documentation." },

  { id:"c2-ops-002", exam:"core2", domain:"Operational Procedures", domainNum:4,
    question:"What is the Grandfather-Father-Son (GFS) backup rotation?",
    answer:"A backup schedule using daily (Son), weekly (Father), and monthly (Grandfather) backup sets that are rotated and kept for different retention periods.",
    detail:"GFS ensures multiple generations of backups are available without requiring infinite media. Daily backups are overwritten more frequently." },

  { id:"c2-ops-003", exam:"core2", domain:"Operational Procedures", domainNum:4,
    question:"What is the difference between full, incremental, and differential backups?",
    answer:"Full: all data. Incremental: only changes since last backup (any type). Differential: all changes since last full backup. Differential restores are faster; incrementals use less storage.",
    detail:"Restore time: Full alone is fastest. Full + differential = 2 operations. Full + all incrementals = many operations. Incrementals accumulate faster." },

  { id:"c2-ops-004", exam:"core2", domain:"Operational Procedures", domainNum:4,
    question:"What are RTO and RPO?",
    answer:"RTO (Recovery Time Objective): max acceptable downtime before recovery must complete. RPO (Recovery Point Objective): max acceptable data loss measured in time.",
    detail:"Example: RTO = 4 hours (system must be back in 4h). RPO = 1 hour (backups must be no older than 1h to limit data loss)." },

  { id:"c2-ops-005", exam:"core2", domain:"Operational Procedures", domainNum:4,
    question:"What is the proper way to dispose of old hard drives containing sensitive data?",
    answer:"Physical destruction (shredding, degaussing) or certified DoD 5220.22-M wiping. Simply deleting files or formatting is insufficient.",
    detail:"For SSDs, physical destruction is preferred — secure erase tools (like manufacturer firmware wipe) can be used, but verification is important." },

  { id:"c2-ops-006", exam:"core2", domain:"Operational Procedures", domainNum:4,
    question:"What is PII and why must it be protected?",
    answer:"Personally Identifiable Information — data that can identify an individual (SSN, DOB, address, email, biometrics). Protected by law (GDPR, HIPAA, CCPA).",
    detail:"Breaching PII results in regulatory fines, legal liability, and reputational damage. Encryption, access controls, and retention policies are required." },

  { id:"c2-ops-007", exam:"core2", domain:"Operational Procedures", domainNum:4,
    question:"What is an Acceptable Use Policy (AUP)?",
    answer:"A document defining how employees may use company IT resources — covering internet usage, email, software installation, and prohibited activities.",
    detail:"All employees should sign the AUP. Violations can be grounds for termination. AUPs protect the company from legal liability." },

  { id:"c2-ops-008", exam:"core2", domain:"Operational Procedures", domainNum:4,
    question:"What should you do before performing maintenance on a PC?",
    answer:"Power off and unplug, use an ESD strap, document current configuration, back up data, obtain change approval if in a managed environment.",
    detail:"Photographing cable connections before disconnecting saves time during reassembly. Never work on live equipment for hardware changes." },

  { id:"c2-ops-009", exam:"core2", domain:"Operational Procedures", domainNum:4,
    question:"What is a ticketing system and what information should be recorded?",
    answer:"Software that tracks IT support requests. Record: problem description, user affected, steps taken, resolution, time spent, and any related CIs (hardware/software).",
    detail:"Good documentation creates a knowledge base for future issues. ITIL-based systems (ServiceNow, Jira) are common in enterprise environments." },

  { id:"c2-ops-010", exam:"core2", domain:"Operational Procedures", domainNum:4,
    question:"What is a chain of custody?",
    answer:"Documentation that tracks who handled evidence (device, log file) during an investigation, ensuring its integrity and admissibility.",
    detail:"Break the chain of custody and evidence may be inadmissible in court. Document: who collected, when, where stored, who accessed, and transfers." },

  { id:"c2-ops-011", exam:"core2", domain:"Operational Procedures", domainNum:4,
    question:"What is an incident response plan?",
    answer:"A documented procedure for detecting, containing, eradicating, and recovering from security incidents, minimizing damage and downtime.",
    detail:"Phases: Preparation → Identification → Containment → Eradication → Recovery → Lessons Learned. Having a plan before an incident is critical." },

  { id:"c2-ops-012", exam:"core2", domain:"Operational Procedures", domainNum:4,
    question:"What does MSDS/SDS document and when is it needed?",
    answer:"Material Safety Data Sheet / Safety Data Sheet — documents hazards, handling, storage, and disposal of chemicals (e.g., toner, cleaning solvents).",
    detail:"Required by OSHA. Laser toner is a fine particulate hazard — don't blow it with compressed air without a toner vacuum. Dispose per SDS." },

  { id:"c2-ops-013", exam:"core2", domain:"Operational Procedures", domainNum:4,
    question:"What is a data retention policy?",
    answer:"Defines how long data must be kept and when it must be securely deleted, based on legal, regulatory, or business requirements.",
    detail:"HIPAA: medical records 6+ years. Finance: 7 years. Some data must be retained for litigation holds. Deleting too early can be illegal." },

  { id:"c2-ops-014", exam:"core2", domain:"Operational Procedures", domainNum:4,
    question:"What is the purpose of IT documentation?",
    answer:"Creates records for troubleshooting, auditing, compliance, onboarding, and knowledge transfer — reduces dependency on individual knowledge.",
    detail:"Document: network diagrams, asset inventory, change logs, procedures, passwords (in a vault), vendor contacts. If it's not documented, it doesn't exist." },

  { id:"c2-ops-015", exam:"core2", domain:"Operational Procedures", domainNum:4,
    question:"What is a script used for in IT automation and what languages are common?",
    answer:"Automates repetitive tasks (user provisioning, backups, patch checks). Common languages: PowerShell (Windows), Bash (Linux/macOS), Python.",
    detail:"PowerShell can manage Active Directory, Azure, Exchange, and more. Bash is standard for Linux automation. Python is cross-platform and versatile." },

  { id:"c2-ops-016", exam:"core2", domain:"Operational Procedures", domainNum:4,
    question:"What is escalation in IT support?",
    answer:"Routing an issue to a higher-tier technician or specialist when it exceeds the current technician's expertise, authorization, or access level.",
    detail:"Tier 1: basic support. Tier 2: advanced/specialized. Tier 3: developer/vendor. Escalate with full documentation to avoid making the user repeat themselves." },

  { id:"c2-ops-017", exam:"core2", domain:"Operational Procedures", domainNum:4,
    question:"What is the 'if in doubt, don't' principle?",
    answer:"When uncertain whether an action is authorized or safe, stop, escalate, and document instead of proceeding — prevents unauthorized or damaging actions.",
    detail:"Especially important with destructive actions (data deletion, format, configuration changes). Always verify scope of authorization." },

  { id:"c2-ops-018", exam:"core2", domain:"Operational Procedures", domainNum:4,
    question:"What precautions should be taken when using compressed air to clean a PC?",
    answer:"Use short bursts, hold fans stationary (they can generate voltage if spun), work in a ventilated area, and use a toner vacuum (not compressed air) for laser printers.",
    detail:"Compressed air can damage fans if spun too fast. Blow dust away from the machine, not into it. Hold PCIe cards stationary when cleaning." },

  { id:"c2-ops-019", exam:"core2", domain:"Operational Procedures", domainNum:4,
    question:"What is a non-disclosure agreement (NDA) in an IT context?",
    answer:"A legal contract requiring parties to keep certain business information confidential — IT staff often sign NDAs to protect client data and system details.",
    detail:"Violating an NDA can result in civil lawsuits. Common in managed service provider (MSP) contracts and when servicing client systems." },

  { id:"c2-ops-020", exam:"core2", domain:"Operational Procedures", domainNum:4,
    question:"What is the 3-2-1 backup rule?",
    answer:"Keep 3 copies of data, on 2 different media types, with 1 copy stored off-site (or in the cloud).",
    detail:"This protects against hardware failure, disaster, and theft simultaneously. Off-site can be cloud storage or a remote location." },

  { id:"c2-ops-021", exam:"core2", domain:"Operational Procedures", domainNum:4,
    question:"What is the purpose of a post-incident review (lessons learned)?",
    answer:"After resolving an incident, the team reviews what happened, why, what worked, what failed, and how to prevent recurrence.",
    detail:"Output: updated procedures, new monitoring, patching schedule, or training. The final step in CompTIA's incident response process." }

];
