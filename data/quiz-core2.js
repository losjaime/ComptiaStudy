const QUIZ_CORE2 = [

  // ── Operating Systems ─────────────────────────────────────────────────────

  { id:"q2-os-01", exam:"core2", domain:"Operating Systems",
    question:"Which Windows file system supports file-level permissions, journaling, encryption, and files larger than 4 GB?",
    options:["FAT32","exFAT","NTFS","HFS+"],
    correct:2,
    explanation:"NTFS supports file/folder permissions, EFS encryption, journaling (crash recovery), files larger than 4 GB, and disk quotas. FAT32 is limited to 4 GB max file size." },

  { id:"q2-os-02", exam:"core2", domain:"Operating Systems",
    question:"A technician suspects Windows system files are corrupt. Which command should they run FIRST?",
    options:["chkdsk /f","sfc /scannow","DISM /Online /Cleanup-Image /RestoreHealth","bcdedit /fixmbr"],
    correct:1,
    explanation:"sfc /scannow (System File Checker) is the first-line tool. If SFC cannot fix files, follow up with the DISM command to repair the component store from Windows Update servers." },

  { id:"q2-os-03", exam:"core2", domain:"Operating Systems",
    question:"A user needs to format a USB drive for sharing large files between Windows and macOS. Which file system should be used?",
    options:["NTFS","FAT32","exFAT","ext4"],
    correct:2,
    explanation:"exFAT is natively read/write on both Windows and macOS and supports files larger than 4 GB. FAT32 works on both but is limited to 4 GB files. NTFS is read-only on macOS without third-party software." },

  { id:"q2-os-04", exam:"core2", domain:"Operating Systems",
    question:"Which utility allows a technician to see real-time CPU, memory, disk, and network usage AND end unresponsive processes in Windows?",
    options:["Event Viewer","Device Manager","Task Manager","Performance Monitor"],
    correct:2,
    explanation:"Task Manager (Ctrl+Shift+Esc) provides real-time resource monitoring and the ability to kill processes. For more detail, use Resource Monitor (resmon.exe) accessible from the Performance tab." },

  { id:"q2-os-05", exam:"core2", domain:"Operating Systems",
    question:"A user needs to access the command line on a Mac. Which built-in application provides this?",
    options:["Activity Monitor","System Information","Terminal","Console"],
    correct:2,
    explanation:"Terminal on macOS provides access to the Unix command line (bash/zsh). It is located in Applications > Utilities. Activity Monitor is the macOS equivalent of Task Manager." },

  { id:"q2-os-06", exam:"core2", domain:"Operating Systems",
    question:"Which Windows command immediately reapplies Group Policy settings without waiting for the automatic refresh cycle?",
    options:["gpresult /r","gpupdate /force","netsh policy update","regedit /update"],
    correct:1,
    explanation:"gpupdate /force re-applies all Group Policy settings immediately. gpresult /r shows the resulting set of policies currently applied (reporting, not updating)." },

  { id:"q2-os-07", exam:"core2", domain:"Operating Systems",
    question:"Which Windows Registry hive stores hardware configuration and system-wide settings?",
    options:["HKEY_CURRENT_USER","HKEY_CLASSES_ROOT","HKEY_LOCAL_MACHINE","HKEY_USERS"],
    correct:2,
    explanation:"HKEY_LOCAL_MACHINE (HKLM) contains hardware and OS-wide configuration, including drivers, services, and security settings. HKEY_CURRENT_USER (HKCU) contains per-user settings." },

  { id:"q2-os-08", exam:"core2", domain:"Operating Systems",
    question:"SFC cannot repair certain system files. Which command repairs the Windows component store by downloading clean files from Windows Update?",
    options:["chkdsk /r","sfc /offbootdir","DISM /Online /Cleanup-Image /RestoreHealth","bootrec /rebuildbcd"],
    correct:2,
    explanation:"DISM /Online /Cleanup-Image /RestoreHealth contacts Windows Update servers to download and replace corrupt component store files. Requires internet access." },

  { id:"q2-os-09", exam:"core2", domain:"Operating Systems",
    question:"Which Windows edition includes BitLocker, Remote Desktop host, Group Policy editor, and domain join capability?",
    options:["Windows 11 Home","Windows 11 SE","Windows 11 Pro","Windows 11 S Mode"],
    correct:2,
    explanation:"Windows Pro adds BitLocker encryption, Hyper-V virtualization, Group Policy editor (gpedit.msc), Remote Desktop hosting, and Active Directory / Azure AD domain join capabilities." },

  { id:"q2-os-10", exam:"core2", domain:"Operating Systems",
    question:"A Linux administrator needs to install a package on an Ubuntu server. Which command is correct?",
    options:["yum install nginx","apt install nginx","pacman -S nginx","rpm -i nginx"],
    correct:1,
    explanation:"Ubuntu/Debian-based distributions use APT (apt install). Red Hat/CentOS use yum or dnf. Arch Linux uses pacman. Always run 'apt update' first to refresh the package cache." },

  { id:"q2-os-11", exam:"core2", domain:"Operating Systems",
    question:"What does the Windows command 'chkdsk /f' do?",
    options:["Scans for bad sectors and recovers data","Checks and repairs file system errors on the next reboot","Defragments the hard drive","Repairs Windows system files"],
    correct:1,
    explanation:"chkdsk /f checks and fixes file system errors. It requires a reboot to run on the active system drive. Add /r to also locate bad sectors and attempt data recovery." },

  // ── Security ───────────────────────────────────────────────────────────────

  { id:"q2-sec-01", exam:"core2", domain:"Security",
    question:"A user receives an email appearing to be from their bank, urgently asking them to click a link and 'verify their account.' What type of attack is this?",
    options:["Vishing","Phishing","Tailgating","Brute force"],
    correct:1,
    explanation:"Phishing uses fraudulent emails to trick users into revealing credentials or clicking malicious links. Vishing is the voice/phone variant. Smishing uses SMS." },

  { id:"q2-sec-02", exam:"core2", domain:"Security",
    question:"An organization requires users to enter a password AND scan their fingerprint to log in. Which security concept is this?",
    options:["Single sign-on (SSO)","Role-based access control","Multi-factor authentication (MFA)","Mandatory access control"],
    correct:2,
    explanation:"MFA combines two or more factors: something you know (password), something you have (token), or something you are (biometric). Password + fingerprint = two factors." },

  { id:"q2-sec-03", exam:"core2", domain:"Security",
    question:"Which type of malware encrypts a victim's files and demands a ransom payment for the decryption key?",
    options:["Trojan","Worm","Ransomware","Rootkit"],
    correct:2,
    explanation:"Ransomware encrypts files or locks the system, demanding cryptocurrency payment. Prevention: maintain offline backups, patch systems, train users on phishing." },

  { id:"q2-sec-04", exam:"core2", domain:"Security",
    question:"Which technology encrypts all data on a Windows drive and requires TPM 2.0 (or a PIN/USB key) to boot?",
    options:["Windows Defender","BitLocker","EFS (Encrypting File System)","UAC"],
    correct:1,
    explanation:"BitLocker is Windows full-disk encryption. It requires Windows Pro/Enterprise and TPM 2.0. If the drive is removed, the data cannot be accessed without the recovery key." },

  { id:"q2-sec-05", exam:"core2", domain:"Security",
    question:"Which security principle states that users should only be granted the minimum permissions required for their job?",
    options:["Defense in depth","Separation of duties","Principle of least privilege","Zero trust"],
    correct:2,
    explanation:"Least privilege limits damage from account compromise or insider threats. Regular access reviews should remove permissions users no longer need." },

  { id:"q2-sec-06", exam:"core2", domain:"Security",
    question:"A user reports pop-up ads even when no browser is open and their browser homepage has changed without their action. What is the most likely cause?",
    options:["Ransomware","Rootkit","Adware / browser hijacker","Keylogger"],
    correct:2,
    explanation:"Adware displays unsolicited ads; browser hijackers change homepage and redirect searches. Both are typically bundled with free software. Use Malwarebytes and remove suspicious extensions." },

  { id:"q2-sec-07", exam:"core2", domain:"Security",
    question:"An employee holds a secure door open for a stranger who follows them in without badging. What physical security attack is this?",
    options:["Shoulder surfing","Phishing","Tailgating (piggybacking)","Vishing"],
    correct:2,
    explanation:"Tailgating is physically following an authorized person through a secure door. Prevention: security vestibule (mantrap), access control training, 'one badge, one person' culture." },

  { id:"q2-sec-08", exam:"core2", domain:"Security",
    question:"Which malware type hides itself inside the OS kernel and is the most difficult to detect and remove?",
    options:["Spyware","Trojan","Rootkit","Adware"],
    correct:2,
    explanation:"Rootkits operate at the kernel level and can hide files, processes, and network connections from normal OS functions and AV software. Detection often requires bootable offline scanners." },

  { id:"q2-sec-09", exam:"core2", domain:"Security",
    question:"What is the primary difference between a virus and a worm?",
    options:["A virus encrypts files; a worm does not","A worm requires user interaction to spread; a virus does not","A virus requires a host file to spread; a worm self-replicates across networks independently","A worm is always more destructive than a virus"],
    correct:2,
    explanation:"A virus attaches itself to files and spreads when infected files are shared. A worm propagates independently across networks by exploiting vulnerabilities, with no host file required." },

  { id:"q2-sec-10", exam:"core2", domain:"Security",
    question:"An attacker sends emails to an executive pretending to be the CEO, asking for an urgent wire transfer. Which targeted attack is this?",
    options:["Smishing","Spear phishing / whaling","Vishing","Pharming"],
    correct:1,
    explanation:"Whaling (a form of spear phishing) targets high-value individuals (executives, CFOs). Unlike broad phishing campaigns, it uses researched, personalized content to appear credible." },

  { id:"q2-sec-11", exam:"core2", domain:"Security",
    question:"Which protocol version(s) are currently recommended for securing web traffic (HTTPS)?",
    options:["SSL 3.0","TLS 1.0 or 1.1","TLS 1.2 or TLS 1.3","WPA3"],
    correct:2,
    explanation:"SSL and TLS 1.0/1.1 are deprecated and vulnerable. TLS 1.2 is widely deployed; TLS 1.3 is the current standard with improved speed and security. WPA3 is for Wi-Fi, not web traffic." },

  // ── Software Troubleshooting ──────────────────────────────────────────────

  { id:"q2-st-01", exam:"core2", domain:"Software Troubleshooting",
    question:"A Windows PC displays 'Operating System Not Found' on boot. What should the technician try first?",
    options:["Replace the hard drive","Reinstall Windows from scratch","Boot from installation media and run Startup Repair","Run chkdsk /f from the command line"],
    correct:2,
    explanation:"Startup Repair (via WinRE) automatically fixes corrupt bootloader issues (MBR/BCD). It's fast, non-destructive, and should always be tried before reinstalling Windows." },

  { id:"q2-st-02", exam:"core2", domain:"Software Troubleshooting",
    question:"A user can log into Windows but their desktop loads with a temporary profile and all personal settings are missing. What is the most likely cause?",
    options:["Hard drive failure","Corrupt user profile (ntuser.dat)","Malware infection","Windows Update corrupted the OS"],
    correct:1,
    explanation:"When Windows cannot load a user's ntuser.dat registry hive (due to corruption or permissions), it creates a temporary profile. Fix by creating a new profile and migrating files." },

  { id:"q2-st-03", exam:"core2", domain:"Software Troubleshooting",
    question:"After installing new software, Windows becomes unstable. A technician suspects a startup program conflict. What should they do?",
    options:["Run Windows Update","Perform a clean boot to isolate the conflicting startup item","Run System Restore","Reinstall Windows"],
    correct:1,
    explanation:"A clean boot starts Windows with only Microsoft services and no third-party startup programs. If the issue disappears, re-enable startup items in batches to find the culprit." },

  { id:"q2-st-04", exam:"core2", domain:"Software Troubleshooting",
    question:"An application crashes with 'msvcr140.dll not found.' What is the correct fix?",
    options:["Run sfc /scannow to restore the DLL","Download the DLL from a third-party site","Install the Microsoft Visual C++ 2017 Redistributable","Reinstall Windows"],
    correct:2,
    explanation:"msvcr140.dll is part of the Visual C++ 2017 runtime. Install the official Microsoft Visual C++ Redistributable package. Never download DLLs from random websites — they often contain malware." },

  { id:"q2-st-05", exam:"core2", domain:"Software Troubleshooting",
    question:"A technician needs to access Safe Mode on a Windows 11 PC that crashes before reaching the login screen. What is the correct method?",
    options:["Press F8 repeatedly during POST","Boot from Windows installation media and navigate to Startup Settings","Run msconfig and check Safe Mode, then restart normally","Press Ctrl+Alt+Del at the login screen"],
    correct:1,
    explanation:"In Windows 10/11, F8 is disabled by default. Boot from Windows media → Repair your computer → Troubleshoot → Advanced → Startup Settings → Restart → F4 for Safe Mode." },

  { id:"q2-st-06", exam:"core2", domain:"Software Troubleshooting",
    question:"Task Manager shows sustained 100% disk usage on a Windows PC. What is a likely cause?",
    options:["GPU driver is outdated","Windows Search indexing or Windows Update running in background","The CPU is overheating","The network card is failing"],
    correct:1,
    explanation:"Common culprits for 100% disk: Windows Search (indexing), Windows Update (downloading/installing), antivirus scanning, or a failing HDD with slow sectors. Check the Processes tab for the top disk consumer." },

  { id:"q2-st-07", exam:"core2", domain:"Software Troubleshooting",
    question:"A user's browser keeps redirecting to a fake search engine even after clearing browser history. What should the technician do?",
    options:["Reinstall the browser","Run Windows Defender scan only","Check and remove malicious browser extensions, then run an anti-malware scan","Perform a factory reset of the PC"],
    correct:2,
    explanation:"Browser hijackers modify extensions and sometimes DNS settings. Remove suspicious extensions from all browsers, run Malwarebytes, and check the hosts file (C:\\Windows\\System32\\drivers\\etc\\hosts)." },

  { id:"q2-st-08", exam:"core2", domain:"Software Troubleshooting",
    question:"A PC BSODs with MEMORY_MANAGEMENT. Which tool should be used to test the RAM?",
    options:["chkdsk /r","Windows Memory Diagnostic (mdsched.exe) or MemTest86","sfc /scannow","Device Manager"],
    correct:1,
    explanation:"Windows Memory Diagnostic and MemTest86 (more thorough, bootable) test RAM for errors. Multiple errors confirm faulty RAM. Test sticks one at a time to identify the bad module." },

  { id:"q2-st-09", exam:"core2", domain:"Software Troubleshooting",
    question:"A technician cannot delete a critical file because it is 'in use by another process.' Which tool identifies the process holding the file lock?",
    options:["Device Manager","Task Scheduler","Process Explorer (Sysinternals) or Resource Monitor","Event Viewer"],
    correct:2,
    explanation:"Process Explorer (Find > Handle or DLL) or Resource Monitor (CPU > Associated Handles) can identify which process has a file locked, allowing targeted action." },

  // ── Operational Procedures ────────────────────────────────────────────────

  { id:"q2-ops-01", exam:"core2", domain:"Operational Procedures",
    question:"A technician wants to apply a critical patch to a production server. What process must be followed first?",
    options:["Patch immediately to minimize exposure","Schedule the patch for after hours without approval","Obtain change management approval and schedule a maintenance window","Inform only the direct manager"],
    correct:2,
    explanation:"Change management ensures changes are documented, reviewed for risk, and scheduled during appropriate maintenance windows to minimize unexpected downtime." },

  { id:"q2-ops-02", exam:"core2", domain:"Operational Procedures",
    question:"A company uses the 3-2-1 backup strategy. Which statement correctly describes it?",
    options:["3 full backups, 2 incrementals, 1 differential","Back up 3 times per day, 2 times per week, once per month","Keep 3 copies of data, on 2 different media types, with 1 copy stored off-site","Use 3 backup servers, 2 on-site and 1 in the cloud"],
    correct:2,
    explanation:"3-2-1 means: 3 total copies, stored on at least 2 different media types (e.g., local disk + NAS), with 1 copy off-site or in the cloud to survive a local disaster." },

  { id:"q2-ops-03", exam:"core2", domain:"Operational Procedures",
    question:"Which backup type captures ONLY data changed since the LAST backup of any type (full or incremental)?",
    options:["Full backup","Differential backup","Incremental backup","Mirror backup"],
    correct:2,
    explanation:"Incremental backups only capture changes since the last backup event (full or incremental). They are smaller and faster than differentials but require more restore operations (full + every incremental)." },

  { id:"q2-ops-04", exam:"core2", domain:"Operational Procedures",
    question:"An old HR workstation is being decommissioned. Its hard drive contains sensitive employee records. What is the correct disposal method?",
    options:["Format the drive and sell the PC","Delete all files and recycle the drive","Physically destroy or use a certified data sanitization process (shred/degauss/DoD wipe)","Store the drive in a locked room"],
    correct:2,
    explanation:"Formatting and deletion do not securely erase data — recovery tools can retrieve it. Proper disposal: shred, degauss, or use NIST 800-88 / DoD 5220.22-M certified wiping." },

  { id:"q2-ops-05", exam:"core2", domain:"Operational Procedures",
    question:"A technician is asked to collect evidence from a compromised workstation for a legal investigation. What must be maintained throughout the process?",
    options:["A malware analysis report","Chain of custody documentation","A list of all installed applications","System performance logs"],
    correct:1,
    explanation:"Chain of custody documents who collected, handled, and transferred evidence. Without it, evidence may be inadmissible in court. Record every person who touches the evidence and when." },

  { id:"q2-ops-06", exam:"core2", domain:"Operational Procedures",
    question:"Which document defines acceptable use of company computers, internet, and email by employees?",
    options:["NDA (Non-Disclosure Agreement)","Acceptable Use Policy (AUP)","Incident Response Plan","Data Retention Policy"],
    correct:1,
    explanation:"An AUP outlines what employees can and cannot do with company IT resources. All employees should sign it. Violations can be disciplinary grounds. It also protects the company legally." },

  { id:"q2-ops-07", exam:"core2", domain:"Operational Procedures",
    question:"What does RPO (Recovery Point Objective) define in disaster recovery planning?",
    options:["How quickly systems must be restored after failure","The maximum acceptable amount of data loss measured in time","The cost budget for recovery operations","The geographic location of the backup site"],
    correct:1,
    explanation:"RPO defines how old a backup can be — i.e., how much data loss is acceptable. An RPO of 1 hour means backups must be no more than 1 hour old to meet the objective." },

  { id:"q2-ops-08", exam:"core2", domain:"Operational Procedures",
    question:"An employee regularly prints customer SSNs and takes them home. What type of security threat is this?",
    options:["External cyber attack","Zero-day exploit","Insider threat","Social engineering"],
    correct:2,
    explanation:"An insider threat involves a current (or former) employee, contractor, or partner who misuses access to harm the organization — intentionally or negligently." },

  { id:"q2-ops-09", exam:"core2", domain:"Operational Procedures",
    question:"A first-level support technician exhausts all troubleshooting options but cannot resolve the issue. What is the appropriate next step?",
    options:["Tell the user the problem cannot be resolved","Try more advanced fixes outside their skill and access level","Escalate the ticket to Tier 2 support with full documentation","Close the ticket after 30 minutes"],
    correct:2,
    explanation:"Escalation routes issues to higher-tier staff with more expertise. Always document all steps taken before escalating so the next technician doesn't repeat work." },

  { id:"q2-ops-10", exam:"core2", domain:"Operational Procedures",
    question:"Which scripting language is most commonly used for automation in Windows enterprise environments (Active Directory, Exchange, Azure)?",
    options:["Bash","Python","PowerShell","Ruby"],
    correct:2,
    explanation:"PowerShell is Microsoft's primary automation tool and integrates deeply with Windows, Active Directory, Exchange, Azure, and Microsoft 365. Bash is for Linux/macOS; Python is cross-platform." }

];
