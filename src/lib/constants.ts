export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  threatFocus: string[];
  isComingSoon?: boolean;
  tagline: string;
}

export interface ApproachStage {
  number: string;
  title: string;
  description: string;
  detailText: string;
  metrics: string;
}

export interface InsightArticle {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
}

export const BRAND = {
  name: "XENCLAVIS",
  tagline: "We Secure What You Create.",
  positioning: "Xenclavis helps organizations identify, assess, understand, and remediate security risks before those risks become business problems.",
  heroHeading: "WE SECURE WHAT YOU CREATE.",
  heroSubcopy: "Cybersecurity built to identify, understand and reduce risk before it becomes a business problem.",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "vapt",
    number: "01",
    title: "Vulnerability Assessment & Penetration Testing (VAPT)",
    shortDesc: "Simulated multi-layered adversarial attacks to uncover exploitation paths before malicious threat actors.",
    fullDesc: "Our VAPT methodology combines automated threat discovery with deep manual penetration testing. We emulate sophisticated real-world adversaries to identify vulnerabilities in your infrastructure, evaluate exploitability, and provide clear remediation guidance.",
    deliverables: [
      "Executive Risk Impact Summary",
      "Prioritized Technical Vulnerability Ledger",
      "Proof of Concept (PoC) Exploitation Pathways",
      "Actionable Remediation Roadmap & Re-Testing"
    ],
    threatFocus: [
      "Zero-Day Exploits",
      "Privilege Escalation",
      "Lateral Movement",
      "Authentication Bypass"
    ],
    tagline: "FIND THE WEAKNESS BEFORE SOMEONE ELSE DOES."
  },
  {
    id: "web-app",
    number: "02",
    title: "Web Application Security",
    shortDesc: "Comprehensive testing of web architectures, SPA frameworks, and complex business logic controls.",
    fullDesc: "Modern web applications house critical business processes. We perform deep security evaluations targeting OWASP Top 10 vulnerabilities, complex logic flaws, session management flaws, and client-side code manipulation.",
    deliverables: [
      "OWASP & ASVS Benchmark Compliance Report",
      "Business Logic Flaw Mapping",
      "Authentication & Authorization Audit",
      "Code-Level Fix Recommendations"
    ],
    threatFocus: [
      "SQLi / XSS / CSRF",
      "Broken Access Control (IDOR)",
      "Server-Side Request Forgery (SSRF)",
      "Business Logic Exploitation"
    ],
    tagline: "PROTECT MODERN DIGITAL EXPERIENCES."
  },
  {
    id: "mobile-app",
    number: "03",
    title: "Mobile Application Security",
    shortDesc: "Static and dynamic analysis of iOS and Android applications against reverse engineering and data leaks.",
    fullDesc: "We assess native and cross-platform mobile apps for local data storage flaws, insecure IPC, API endpoint exposure, cryptographic weaknesses, and reverse-engineering vulnerability.",
    deliverables: [
      "iOS & Android Binary Security Assessment",
      "Local Storage & Keychain/Keystore Audit",
      "Dynamic Runtime Manipulation Analysis",
      "Certificate Pinning & Tamper-Resistance Testing"
    ],
    threatFocus: [
      "Binary Reverse Engineering",
      "Dynamic Memory Manipulation",
      "Insecure Data Storage",
      "Hardcoded Credentials & Keys"
    ],
    tagline: "FORTIFY MOBILE ECOSYSTEMS."
  },
  {
    id: "api-security",
    number: "04",
    title: "API Security",
    shortDesc: "Zero-trust API authorization validation, GraphQL/REST schema inspection, and rate-limit fuzzing.",
    fullDesc: "APIs represent the primary data movement channel for modern enterprises. We evaluate REST, GraphQL, gRPC, and WebSockets for authorization bypass, object-level vulnerability, parameter tampering, and resource exhaustion.",
    deliverables: [
      "OWASP API Security Top 10 Audit",
      "BOLA & BFLA Access Control Validation",
      "Rate Limiting & Fuzzing Resilience Report",
      "Microservice Authentication Assessment"
    ],
    threatFocus: [
      "Broken Object Level Authorization (BOLA)",
      "Broken Function Level Authorization (BFLA)",
      "Mass Assignment & Unrestricted Consumption",
      "Data Exposure & Unvalidated Input"
    ],
    tagline: "SECURE DATA IN MOTION."
  },
  {
    id: "network-security",
    number: "05",
    title: "Network Security",
    shortDesc: "Internal and external perimeter evaluation, firewall rule verification, and wireless intrusion testing.",
    fullDesc: "Our network security engagements map active host perimeters, uncover misconfigurations, evaluate segmentation policies, and verify perimeter defense readiness against unauthorized intrusion.",
    deliverables: [
      "Perimeter & Internal Topology Scan",
      "Port & Service Vulnerability Matrix",
      "Segmentation & VLAN Isolation Verification",
      "Firewall & Router Policy Audit"
    ],
    threatFocus: [
      "Unpatched Perimeter Services",
      "Weak Segmentation Rules",
      "Man-in-the-Middle (MitM) Attack Vectors",
      "Default Credential Exposure"
    ],
    tagline: "REINFORCE YOUR DEFENSIVE PERIMETER."
  },
  {
    id: "source-code",
    number: "06",
    title: "Source Code Review",
    shortDesc: "Line-by-line manual and automated static security analysis (SAST) across complex codebases.",
    fullDesc: "Finding security issues early in the development lifecycle reduces remediation costs exponentially. We perform thorough static code audits to identify security defects, hardcoded secrets, and unsafe API usage directly in source code.",
    deliverables: [
      "Static Application Security Testing (SAST) Report",
      "Developer Code Snippet Fix Guides",
      "Secret & Token Leak Audit",
      "Dependency & Supply-Chain Risk Mapping"
    ],
    threatFocus: [
      "Unsafe Memory & Input Functions",
      "Hardcoded API Keys & Secrets",
      "Insecure Dependency Chains",
      "Injection Vulnerabilities"
    ],
    tagline: "BUILD SECURITY INTO THE SOURCE."
  },
  {
    id: "digital-forensics",
    number: "07",
    title: "Digital Forensics",
    shortDesc: "Incident investigation, memory analysis, evidence preservation, and breach timeline reconstruction.",
    fullDesc: "When security anomalies or suspected breaches occur, our digital forensics team preserves evidence, performs deep memory and log analysis, and reconstructs precise adversary timelines to establish exact scope and root cause.",
    deliverables: [
      "Forensic Evidence Chain of Custody Documentation",
      "Incident Timeline & Root Cause Reconstruction",
      "Malware Artifact & Memory Analysis Report",
      "Post-Incident Containment Recommendations"
    ],
    threatFocus: [
      "Ransomware Footprint Analysis",
      "Insider Data Exfiltration",
      "Persistence Mechanism Discovery",
      "Command & Control (C2) Identification"
    ],
    tagline: "WHEN SOMETHING GOES WRONG, KNOW WHAT HAPPENED."
  },
  {
    id: "security-consulting",
    number: "08",
    title: "Security Assessments & Consulting",
    shortDesc: "Enterprise cybersecurity posture reviews, threat modeling, and executive risk strategy alignment.",
    fullDesc: "We partner with technology leaders to evaluate security maturity, define custom threat models, design resilient cloud security architectures, and align technical controls with organizational objectives.",
    deliverables: [
      "Cybersecurity Maturity Assessment",
      "Threat Modeling & Architecture Blueprint",
      "Cloud Security Posture Evaluation",
      "Strategic Risk Reduction Roadmap"
    ],
    threatFocus: [
      "Architectural Design Flaws",
      "Misaligned Security Controls",
      "Third-Party Vendor Exposure",
      "Unclear Threat Models"
    ],
    tagline: "ELEVATE ENTERPRISE MATURITY."
  },
  {
    id: "grc-services",
    number: "09",
    title: "Governance, Risk & Compliance (GRC)",
    shortDesc: "Structured governance frameworks, regulatory alignment, and continuous risk management systems.",
    fullDesc: "Security requires more than technology — it requires governance, accountability, and continuous risk management. Xenclavis is expanding services to help organizations achieve and sustain ISO 27001, SOC 2, NIST, and HIPAA compliance readiness.",
    deliverables: [
      "Framework Alignment Gap Analysis",
      "Policy & Standard Operating Procedure Design",
      "Continuous Compliance Monitoring Framework",
      "Third-Party Risk Management Strategy"
    ],
    threatFocus: [
      "Regulatory Non-Compliance Risk",
      "Unmanaged Organizational Risk",
      "Audit Failure Exposure",
      "Policy Drift"
    ],
    isComingSoon: true,
    tagline: "COMING SOON — STRUCTURED SECURITY GOVERNANCE."
  }
];

export const APPROACH_STAGES: ApproachStage[] = [
  {
    number: "01",
    title: "DISCOVER",
    description: "Identify assets, systems, applications, and exposed attack surfaces.",
    detailText: "We conduct exhaustive asset mapping and digital footprint discovery to build an accurate index of active applications, endpoints, microservices, and external attack surfaces across your organization.",
    metrics: "100% Surface Visibility"
  },
  {
    number: "02",
    title: "ASSESS",
    description: "Find vulnerabilities, logic weaknesses, and security gaps.",
    detailText: "Using automated threat intelligence engines coupled with manual adversarial probing, we expose deep vulnerabilities, access control bypasses, and multi-vector exploitation paths.",
    metrics: "Zero False-Positive Target"
  },
  {
    number: "03",
    title: "UNDERSTAND",
    description: "Translate technical findings into meaningful business risk.",
    detailText: "Technical vulnerabilities mean little without business context. We quantify risk severity based on potential financial impact, data sensitivity, operational downtime, and regulatory exposure.",
    metrics: "Contextual Risk Scoring"
  },
  {
    number: "04",
    title: "REMEDIATE",
    description: "Prioritize actions and strengthen the enterprise security posture.",
    detailText: "We deliver step-by-step engineering guidance, code-level fix recommendations, and mandatory re-testing validation to ensure weaknesses are permanently neutralized.",
    metrics: "Verified Risk Elimination"
  }
];

export const INSIGHTS_DATA: InsightArticle[] = [
  {
    id: "zero-trust-api",
    category: "API Security",
    title: "Zero-Trust API Security: Moving Beyond Perimeter Control",
    excerpt: "Why traditional perimeter firewalls fail to stop modern BOLA and BFLA authorization flaws in distributed API gateway architectures.",
    content: `Modern software architectures rely heavily on decoupled microservices communicating through REST and GraphQL APIs. However, securing these APIs requires a fundamental shift from edge-based network firewalls to granular Zero-Trust object authorization.

In this deep-dive analysis, our security engineering team examines how Broken Object Level Authorization (BOLA) remains the #1 threat vector in modern Web App and Mobile ecosystems. We break down step-by-step testing methodologies and architectural patterns designed to prevent authorization bypass before deployment.`,
    date: "AUG 2026",
    readTime: "6 MIN READ",
    author: "Xenclavis Threat Research Team"
  },
  {
    id: "risk-translation",
    category: "VAPT & Risk",
    title: "From Vulnerability to Business Impact: The Art of Risk Translation",
    excerpt: "How security leaders bridge the communication gap between technical CVE findings and C-suite business risk decisions.",
    content: `A Critical CVSS score of 9.8 is informative to an engineer, but without operational context, it fails to drive executive action. Xenclavis focuses heavily on translating raw technical vulnerability data into clear business impact matrices.

By evaluating threat likelihood, data asset sensitivity, and organizational exposure, security teams can align remediation priorities with true enterprise risk rather than arbitrary scanner outputs.`,
    date: "JUL 2026",
    readTime: "5 MIN READ",
    author: "Xenclavis Risk Strategy Lab"
  },
  {
    id: "digital-forensics-post-breach",
    category: "Digital Forensics",
    title: "Digital Forensics in Post-Breach Incident Reconstruction",
    excerpt: "A tactical guide to volatile memory acquisition, log correlation, and establishing malicious persistence mechanisms.",
    content: `When an incident occurs, time is the critical variable. Establishing a rigorous chain of custody and preserving volatile RAM state is crucial for identifying initial access vectors and lateral movement.

We explore real-world forensic artifacts left behind by advanced persistent threats (APTs), including PowerShell execution logs, registry persistence keys, and C2 beaconing frequencies.`,
    date: "JUN 2026",
    readTime: "8 MIN READ",
    author: "Digital Forensics Unit"
  },
  {
    id: "mobile-runtime-tampering",
    category: "Mobile Security",
    title: "Securing Mobile App Ecosystems Against Runtime Manipulation",
    excerpt: "Exploring Android Frida hook injection, iOS keychains, and how to implement robust anti-tampering defenses.",
    content: `Mobile apps operate in an inherently untrusted client environment. Malicious users can easily attach debuggers, bypass SSL pinning, and hook native function calls to modify app runtime logic.

This technical article outlines best practices for obfuscation, dynamic integrity checks, hardware-backed keystores, and proactive anti-debugging controls.`,
    date: "MAY 2026",
    readTime: "7 MIN READ",
    author: "Application Defense Group"
  }
];

export const VAPT_PIPELINE_STEPS = [
  { step: "01", title: "Target Application", desc: "Digital asset, cloud service or infrastructure scope defined." },
  { step: "02", title: "Attack Surface Mapping", desc: "Uncovering active endpoints, hidden parameters and vectors." },
  { step: "03", title: "Vulnerability Discovery", desc: "Deep probing for flaws, access bypasses and misconfigurations." },
  { step: "04", title: "Exploitation Validation", desc: "Safe proof-of-concept testing to confirm real exploitability." },
  { step: "05", title: "Risk Quantification", desc: "Mapping technical findings to business downtime & financial impact." },
  { step: "06", title: "Remediation & Re-test", desc: "Fix verification and security posture confirmation." }
];
