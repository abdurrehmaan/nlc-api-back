const cis_standard = {
  MinPA: [">=", 1],

  MaxPA: ["<=", 365],

  MinPL: [">=", 14],

  PMMCR: ["=", 1],

  EPHE: [">=", 24],

  SPURE: ["=", 0],

  RMPL: ["=", 1],

  MPLA: [">=", 10],

  ALTD: ["<=", 5],

  RALC: [">=", 15],

  ALDN: [">=", 15],

  AAAL: ["=", 1],

  ATCN: ["Administrator", "Remote Desktop"],

  APOS: "",

  BUFD: ["Administrator"],

  CSTT: ["Administrator", "Local Service"],

  CPFE: ["Administrator"],

  CTOT: "",

  CPSO: "",

  DPGS: ["Administrator"],

  FSRMS: ["Administrator"],

  GSAT: ["Local Service", "Network Service"],

  AMQP: ["Administrator", "Local Service", "Network Service"],

  ISPY: ["Administrator", "Window Manager-Window manager group"],

  LUDD: ["Administrator"],

  LPMT: "",

  LOBJ: ["Administrator"],

  LOAS: "",

  ALLY: ["Administrator"],

  MASL: ["Administrator"],

  MFEV: ["Administrator"],

  PSPS: ["Administrator"],

  PSPE: ["Administrator", "NT Service-WdiServiceHost"],

  RPLT: ["Local Service", "Network Service"],

  RFDS: ["Administrator"],

  SDSM: ["Administrator", "Users"],

  TOFO: ["Administrator"],

  DACR: ["Guests"],

  DLBJ: ["Guests"],

  DLSE: ["Guests"],

  DLLY: ["Guests"],

  SDSD: "",

  ECUA: "",

  PVMT: ["Administrator"],

  ALRDS: ["Administrator", "Remote Desktop Users"],

  DLRDS: ["Guests"],

  ICAAN: ["Administrator", "Local Service", "Network Service", "Service"],

  CGOT: ["Administrator", "Local Service", "Network Service", "Service"],

  ACMR: "",

  MOLL: "",

  CTZE: ["Administrator", "Local Service", "Users"],

  CSLS: ["Administrator"],

  ALSM: ["=", 1],

  ALSNS: ["=", 0],

  APAR: ["=", 0],

  CETD: ["=", 2147483640],

  DSLANM: ["=", 1],

  FLLHE: ["=", 1],

  LANMA: ["=", 5],

  LCSRMT: [1, 2],

  MSSNRPCC: ["=", 537395200],

  MSSNRPCS: ["=", 537395200],

  MNCDSA: ["=", 1],

  MNCDSS: ["=", 1],

  SUPTPSS: ["=", 0],

  AAMB: ["=", 1],

  BEPA: ["=", 2],

  BEPS: ["=", 0],

  DAIPE: ["=", 1],

  OEUA: ["=", 1],

  RAAM: ["=", 1],

  SSDP: ["=", 1],

  VFRW: ["=", 1],

  RCIW: ["=", 1],

  SDPS: ["=", 1],

  DESS: ["=", 1],

  DESC: ["=", 1],

  DSCD: ["=", 1],

  DMAPC: ["=", 0],

  MMAP: ["<=", 30],

  RSSK: ["=", 1],

  DRAD: ["=", 0],

  DDLS: ["=", 1],

  MILT: ["<=", 900],

  MTUA: [">=", 21],

  MTUAG: [">=", 8],

  NPLC: ["<=", 5],

  PUCPD: [5, 14],

  RDCA: ["=", 1],

  SCRB: [1, 2, 3],

  AITRS: ["<=", 15],

  DSCN: ["=", 1],

  DSCCA: ["=", 1],

  DCLH: ["=", 1],

  SSPBV: [1, 2],

  AANT: ["=", 0],

  DAAES: ["=", 1],

  DAAESS: ["=", 1],

  DASPC: ["=", 1],

  LEPAA: ["=", 1],

  NPAA: "",

  RARP: [
    "System-CurrentControlSet-Control-ProductOptions",
    "System-CurrentControlSet-Control-Server Applications",
    "Software-Microsoft-Windows NT-CurrentVersion",
  ],

  RARPAP: [
    "System-CurrentControlSet-Control-Print-Printers",
    "System-CurrentControlSet-Services-Eventlog",
    "Software-Microsoft-OLAP Server",
    "Software-Microsoft-Windows NT-CurrentVersion-Print",
    "Software-Microsoft-Windows NT-CurrentVersion-Windows",
    "System-CurrentControlSet-Control-ContentIndex",
    "System-CurrentControlSet-Control-Terminal Server",
    "System-CurrentControlSet-Control-Terminal Server-UserConfig",
    "System-CurrentControlSet-Control-Terminal Server-DefaultUserConfiguration",
    "Software-Microsoft-Windows NT-CurrentVersion-Perflib",
    "System-CurrentControlSet-Services-SysmonLog",
  ],

  RAANP: ["=", 1],

  RCAMRC: "O:BAG:BAD:[A;;RC;;;BA]",

  NASAA: "",

  SSMLA: ["=", 1],

  SCFSKPSOC: ["=", 2],

  PTSR: ["=", 4],

  BHSS: ["=", 4],

  BAGS: ["=", 4],

  SACH: ["=", 4],

  DMSM: ["=", 4],

  GNSC: ["=", 4],

  ICSG: ["=", 4],

  LLTDM: ["=", 4],

  MIIS: ["=", 4],

  PNRP: ["=", 4],

  PNGG: ["=", 4],

  PNIM: ["=", 4],

  PMNPS: ["=", 4],

  PTSA: ["=", 4],

  RAACM: ["=", 4],

  RDCN: ["=", 4],

  RDSS: ["=", 4],

  RDSUPR: ["=", 4],

  RERY: ["=", 4],

  RRAS: ["=", 4],

  SRAC: ["=", 4],

  SSDY: ["=", 4],

  UPDH: ["=", 4],

  WECS: ["=", 4],

  WECR: ["=", 4],

  WMPNSS: ["=", 4],

  WMHS: ["=", 4],

  WPNSS: ["=", 4],

  WPIS: ["=", 4],

  WRMT: ["=", 4],

  XAMS: ["=", 4],

  ALAM: ["=", 4],

  XLGS: ["=", 4],

  XLNS: ["=", 4],

  WWWPS: ["=", 4],

  WMSE: ["=", 4],

  SPSE: ["=", 4],

  STSE: ["=", 4],

  PRSCPS: ["=", 4],

  OSSHS: ["=", 4],

  MFTPS: ["=", 4],

  LXSSMR: ["=", 4],

  IISAS: ["=", 4],

  CRBR: ["=", 4],

  IDME: ["=", 4],

  RPCLL: ["=", 4],

  DPFLSE: ["=", 1],

  DPIDCS: ["=", 1],

  DPOC: ["=", 1],

  DPDN: ["=", 1],

  DPNL: "%SystemRoot%-System32-logfiles-firewall-domainfw.log",

  DPSL: [">=", 16384],

  DPLD: ["=", 1],

  DPLS: ["=", 1],

  PPFS: ["=", 1],

  PPIC: ["=", 1],

  PPOC: ["=", 0],

  PPDN: ["=", 1],

  PPPN: "%systemroot%-system32-logfiles-firewall-pfirewall.log",

  PPSL: [">=", 16384],

  PPLD: ["=", 1],

  PPPL: ["=", 1],

  PUPFS: ["=", 1],

  PUPIC: ["=", 1],

  PUPOC: ["=", 0],

  PUPDN: ["=", 1],

  PUPLF: ["=", 0],

  PUPLCS: ["=", 0],

  PUPPN: "%windir%-system32-logfiles-firewall-public-firewall.log",

  PUPSL: [">=", 16384],

  PUPLD: ["=", 1],

  PUPLS: ["=", 1],

  "Security System Extension": ["=", 1],

  "System Integrity": ["=", 1],

  "IPsec Driver": ["=", 1],

  "Other System Events": ["=", 1],

  "Security State Change": ["=", 1],

  Logon: ["=", 1],

  Logoff: ["=", 1],

  "Account Lockout": ["=", 1],

  "IPsec Main Mode": ["=", 1],

  "IPsec Quick Mode": ["=", 1],

  "IPsec Extended Mode": ["=", 1],

  "Special Logon": ["=", 1],

  "Other Logon/Logoff Events": ["=", 1],

  "Network Policy Server": ["=", 1],

  "User / Device Claims": ["=", 1],

  "Group Membership": ["=", 1],

  "File System": ["=", 1],

  Registry: ["=", 1],

  "Kernel Object": ["=", 1],

  SAM: ["=", 1],

  "Certification Services": ["=", 1],

  "Application Generated": ["=", 1],

  "Handle Manipulation": ["=", 1],

  "File Share": ["=", 1],

  "Filtering Platform Packet Drop": ["=", 1],

  "Filtering Platform Connection": ["=", 1],

  "Other Object Access Events": ["=", 1],

  "Detailed File Share": ["=", 1],

  "Removable Storage": ["=", 1],

  "Central Policy Staging": ["=", 1],

  "Non Sensitive Privilege Use": ["=", 1],

  "Other Privilege Use Events": ["=", 1],

  "Sensitive Privilege Use": ["=", 1],

  "Process Creation": ["=", 1],

  "Process Termination": ["=", 1],

  "DPAPI Activity": ["=", 1],

  "RPC Events": ["=", 1],

  "Plug and Play Events": ["=", 1],

  "Token Right Adjusted Events": ["=", 1],

  "Audit Policy Change": ["=", 1],

  "Authentication Policy Change": ["=", 1],

  "Authorization Policy Change": ["=", 1],

  "MPSSVC Rule-Level Policy Change": ["=", 1],

  "Filtering Platform Policy Change": ["=", 1],

  "Other Policy Change Events": ["=", 1],

  "Computer Account Management": ["=", 1],

  "Security Group Management": ["=", 1],

  "Distribution Group Management": ["=", 1],

  "Application Group Management": ["=", 1],

  "Other Account Management Events": ["=", 1],

  "User Account Management": ["=", 1],

  "Directory Service Access": ["=", 1],

  "Directory Service Changes": ["=", 1],

  "Directory Service Replication": ["=", 1],

  "Detailed Directory Service Replication": ["=", 1],

  "Kerberos Service Ticket Operations": ["=", 1],

  "Other Account Logon Events": ["=", 1],

  "Kerberos Authentication Service": ["=", 1],

  "Credential Validation": ["=", 1],

  AFERM: ["=", 2],

  PUFIPD: ["=", 1],

  SDSIY: ["=", 0],

  FAPSOAP: ["=", 1],

  AABPRD: "none",

  CBPRD: ["=", 1],

  CBPRDR: ["=", 1],

  CBPRDRP: ["=", 0],

  CBPRDRK: ["=", 0],

  CBPRDRO: ["=", 1],

  CBPRDRS: ["=", 0],

  CBPRDRC: ["=", 1],

  CBPRDRD: ["=", 0],

  CHBERD: ["=", 0],

  CPRDD: ["=", 0],

  CSCRD: ["=", 1],

  CSCRDD: ["=", 1],

  DWARD: ["=", 1],

  DWRDPB: ["=", 0],

  DNDDC: ["=", 1],

  AEPFS: ["=", 1],

  ASBIV: ["=", 1],

  CBPOSD: ["=", 1],

  CBPOSDR: ["=", 0],

  CBPODRD: ["=", 1],

  CBPODRK: ["=", 0],

  CBPODRO: ["=", 1],

  CBPODRS: ["=", 1],

  CBPOSDS: ["=", 1],

  CBPODRE: ["=", 1],

  CHBEOD: ["=", 0],

  CPOSD: ["=", 0],

  RALAS: ["=", 1],

  RAASAB: ["=", 0],

  AABPFD: "none",

  CBPFD: ["=", 1],

  CBPFDR: ["=", 1],

  CHBPF: ["=", 2],

  CHBPFD: ["=", 2],

  CBPFDRO: ["=", 1],

  CBPFDRS: ["=", 1],

  CBLFD: ["=", 1],

  CBLFDR: ["=", 1],

  CHBEFD: ["=", 0],

  CUPFD: ["=", 0],

  CSCFD: ["=", 1],

  CSCFDR: ["=", 1],

  AAEMDAG: ["=", 1],

  ACMMDAG: ["=", 0],

  APMDAG: ["=", 0],

  AFDSHOS: ["=", 0],

  CMDAGCS: ["=", 1],

  TMDAGM: ["=", 1],

  PELSC: ["=", 1],

  PELSS: ["=", 1],

  AUEOSR: ["=", 0],

  AWOTS: ["=", 0],

  LAGEN: "C:\\Program Files\\LAPS\\CSE\\AdmPwd.dll",

  LDNAP: ["=", 1],

  LELAPM: ["=", 1],

  PSHRV: ["=", 4],

  PSHRVP: [">=", 15],

  PSHRY: ["<=", 30],

  AURLN: ["=", 0],

  CSCDR: ["=", 4],

  CESSR: ["=", 0],

  ESEHOP: ["=", 0],

  LPDIN: ["=", 1],

  NTNTC: ["=", 2],

  WDADR: ["=", 0],

  MAALE: ["=", 0],

  MDISR: ["=", 2],

  MDISRP: ["=", 2],

  MECRI: ["=", 0],

  MKATP: ["=", 300000],

  MNRDAC: ["=", 1],

  MPRDAI: ["=", 0],

  MSDSM: ["=", 1],

  MTMDRT: ["=", 3],

  MTDRS: ["=", 3],

  MSSGP: ["<=", 5],

  MWLPTS: ["=", 90],

  CEDHS: ["=", 2],

  TOMNR: ["=", 0],

  EEFPS: ["=", 0],

  EEIGLN: ["=", 0],

  TOMID: ["=", 0],

  TORDR: ["=", 0],

  TOMIDR: ["=", 0],

  TOMILD: ["=", 0],

  TMIOD: ["=", 0],

  TORRD: ["=", 0],

  TNORD: ["=", 0],

  TONRD: ["=", 0],

  TMPNS: ["=", 1],

  PICNB: ["=", 0],

  PUICS: ["=", 0],

  RDEWS: ["=", 1],

  HUPRVN: "RequireMutualAuthentication=1, RequireIntegrity=1",

  HUPRVS: "RequireMutualAuthentication=1, RequireIntegrity=1",

  ETIPR: ["=", 255],

  CWSWC: ["=", 0],

  CWSUW: ["=", 0],

  CWSWCN: ["=", 0],

  CNWSWC: ["=", 0],

  CNOWS: ["=", 0],

  PAWCN: ["=", 1],

  MNOSC: ["=", 3],

  PCNDN: ["=", 1],

  APSAC: ["=", 2],

  WIDNC: ["=", 1],

  WUDFEC: ["=", 1],

  TONSN: ["=", 1],

  ICLPC: ["=", 1],

  ENORN: ["=", 0],

  RHADNE: ["=", 1],

  TOVBS: ["=", 1],

  TVBSP: ["=", 3],

  TVBSV: ["=", 3],

  TVBDS: ["=", 3],

  TVBSCG: ["=", 3],

  TVBSSL: ["=", 3],

  PDMRI: ["=", 1],

  PIDMTMTDSC: ["=", 1],

  PIMDIDMALID: ["=", 1],

  PIDTMTDIDS: ["=", 1],

  PRDTMTDIDSMID: ["=", 1],

  PCICCCA: "PCI-CC_0C0A",

  PMISROOL: [
    "{d48179be-ec20-11d1-b6b8-00c04fa372a7}",
    "{7ebefbc0-3200-11d2-b4c2-00a0C9697d07}",
    "{c06ff265-ae09-48f0-812c-16753d7cba83}",
    "{6bdd1fc1-810f-11d0-bec7-08002be2092f}",
  ],

  BSDIP: ["=", 3],

  CERPG: ["=", 0],

  CRYPG: ["=", 0],

  CESOD: ["=", 0],

  TOBRGP: ["=", 0],

  TODPD: ["=", 1],

  TOHPDS: ["=", 1],

  TOHRER: ["=", 1],

  TOICW: ["=", 1],

  TOIDWP: ["=", 1],

  TOPHP: ["=", 1],

  TORUC: ["=", 1],

  TOSCF: ["=", 1],

  TOPPT: ["=", 1],

  TOPWT: ["=", 1],

  TOWMCE: ["=", 2],

  TOWCEI: ["=", 0],

  TOWER: ["=", 1],

  TWERD: ["=", 0],

  SDAUC: ["=", 0],

  SDACD: ["=", 1],

  EPEDI: ["=", 0],

  DCUIM: ["=", 1],

  BUSAD: ["=", 1],

  DNDNS: ["=", 1],

  DNECD: ["=", 1],

  ELUDJ: ["=", 0],

  TOANS: ["=", 1],

  TOPPS: ["=", 1],

  TOCPS: ["=", 0],

  ACSAD: ["=", 0],

  AUOAS: ["=", 0],

  ANCDCS: ["=", 0],

  ANCDCD: ["=", 0],

  RAPWC: ["=", 1],

  RPWCW: ["=", 1],

  CEORA: ["=", 0],

  CESRA: ["=", 0],

  EREMCA: ["=", 1],

  RURCS: ["=", 1],

  CVRUW: [1, 2],

  MTSDT: ["=", 0],

  DEPTK: ["=", 0],

  TOTAI: ["=", 1],

  EWNCRD: ["=", 1],

  EWNSRD: ["=", 0],

  AWASA: ["=", 0],

  AMATO: ["=", 1],

  DANVD: ["=", 1],

  SDBAR: ["=", 1],

  TNOAP: ["=", 255],

  CEASG: ["=", 1],

  AWUOC: ["=", 0],

  TOCAS: ["=", 1],

  TOMCE: ["=", 1],

  REPFP: [1, 2],

  DNDPB: ["=", 1],

  EAAEN: ["=", 0],

  AWDCD: ["=", 1],

  DOSDS: ["=", 1],

  DNSFN: ["=", 1],

  EOSAG: ["=", 1],

  LDLCN: ["=", 1],

  LTDCN: ["=", 1],

  TUCOIB: ["=", 0],

  CELBR: ["=", 0],

  STMLF: [32768, 2147483647],

  CELBF: ["=", 0],

  STMLFS: [196608, 2147483647],

  CLETL: ["=", 0],

  SYMLFS: [32768, 2147483647],

  CLELB: ["=", 0],

  SYMFS: [32768, 2147483647],

  TODEP: ["=", 0],

  TOHTOC: ["=", 0],

  TOSPM: ["=", 0],

  DELON: ["=", 1],

  AMSCS: ["=", 0],

  BACMA: ["=", 1],

  CLSOR: ["=", 0],

  JNMMS: ["=", 0],

  CASRN: ["=", 1],

  CEASR: ["=", 1],

  CASRR: ["=", 1],

  CAKSR: ["=", 1],

  CEAKSR: ["=", 1],

  CASER: ["=", 1],

  CASERN: ["=", 1],

  CASRS: ["=", 1],

  CEAKSRS: ["=", 1],

  CASRNS: ["=", 1],

  CEASE: ["=", 1],

  CAKSRN: ["=", 1],

  CASRNSA: ["=", 1],

  PUAFAD: ["=", 1],

  EFHCF: ["=", 1],

  CADFA: ["=", 0],

  TOFPN: ["=", 0],

  TOBMG: ["=", 0],

  TOSTS: ["=", 0],

  CEWNE: ["=", 1],

  SNRED: ["=", 0],

  TOESG: ["=", 0],

  CDFPU: ["=", 1],

  TOMDA: ["=", 0],

  ELNIOTTBR: ["=", 0],

  PUODF: ["=", 1],

  TOPTIS: ["=", 1],

  DNAPS: ["=", 1],

  AUCRBUDSS: ["=", 1],

  DNACPR: ["=", 1],

  DNADR: ["=", 1],

  DNALPR: ["=", 1],

  DNASPP: ["=", 1],

  APFPUC: ["=", 1],

  RSRCN: ["=", 1],

  RUSSLR: ["=", 2],

  RUARC: ["=", 1],

  SCCEL: ["=", 3],

  STLARD: ["<=", 900000],

  STLDS: ["=", 60000],

  DNUTF: ["=", 1],

  PDOES: ["=", 1],

  AWCSH: ["=", 0],

  AIOEF: ["=", 0],

  TOKCOA: ["=", 1],

  DEAAFMS: ["=", 1],

  ODPSMS: ["=", 1],

  TOADIUS: ["=", 4],

  TOOULVWS: ["=", 1],

  TNOFTSA: ["=", 1],

  ALLWWGTS: ["=", 0],

  CWDSS: ["=", 1],

  CWDSR: "Block",

  CWDSSN: ["=", 1],

  PBDSSPFS: ["=", 1],

  EDWGRB: ["=", 0],

  ASAWIW: ["=", 0],

  AWIWE: ["=", 1],

  AUCOI: ["=", 0],

  AIWEP: ["=", 0],

  PIESPW: ["=", 0],

  SALLIU: ["=", 1],

  TOPSBL: ["=", 1],

  TOPTN: ["=", 0],

  WCABAN: ["=", 0],

  WCAUT: ["=", 0],

  WCDDA: ["=", 0],

  AWBAN: ["=", 0],

  ARSMTW: ["=", 0],

  AWUTC: ["=", 0],

  DWSRC: ["=", 1],

  ARSAS: ["=", 0],

  ALNWSBX: ["=", 0],

  ALCSWSBX: ["=", 0],

  PUFMS: ["=", 1],

  NARLUS: ["=", 0],

  CDAUS: [2, 3, 4, 5, 7],

  CAUSI: [0, 1, 2, 3, 4, 5, 6, 7],

  MEPBS: ["=", 0],

  SWPBFU: ["=", 1],

  SPBFUR: [">=", 180],

  SQUAR: ["=", 1],

  SQUHR: ["=", 0],

  ESNSR: ["=", 1],

  PPTSS: ["=", 1],

  SNSRT: ["<=", 900],

  TOTNLS: ["=", 1],

  TOHEIP: ["=", 1],

  DNPZI: ["=", 2],

  NAPOA: ["=", 3],

  CWSLS: ["=", 2],

  DNSTC: ["=", 1],

  DNUDD: ["=", 1],

  TOAWSF: ["=", 1],

  TOSCD: ["=", 1],

  PUFSF: ["=", 1],

  AIWEPFCU: ["=", 0],

  PTCDD: ["=", 1],

  PTCRJHP: ["=", 1],
  RAPUSF: ["=", 1],
  AUANRN: ["=", 0],
  DNWLR: ["=", 1],
  ALLWCTNA: ["=", 0],
  AWCALS: ["=", 0],
  CAPCETS: ["=", 1],
  PTUQFLTS: ["=", 1],
  TOCOCT: ["=", 1],
  BKLUWRAH: ["=", 1],
  PNAUIWA: ["=", 1],
  MALTHDS: ["<=", 10],
  TNOASTS: ["=", 1],
  AQSCTULN: ["=", 0],
  AAACCSTS: ["=", 0],
  ACGACCST: ["=", 0],
  ATCRACTS: ["Administrator", "S-1-5-32-544", "Administrators"],
  ATRGACTS: ["Guests", "S-1-5-32-546"],
  ATBMACTS: ["=", 3],
  ALAUBPCL: ["=", 1],
};

module.exports = cis_standard;
