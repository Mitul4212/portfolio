import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const personalInfo = {
  name: "Mitul Chovatiya",
  title: "Android Developer",
  tagline: "Building robust Android applications with modern architecture.",
  location: "Surat, India",
  phone: "+91 6354243008",
  email: "mitul4212a@gmail.com",
  social: {
    linkedin: "https://linkedin.com/in/mitul-c",
    github: "https://github.com/Mitul4212",
  },
  about:
    "I am an independent Android Developer based in Surat, India, with a strong focus on building scalable, user-centric mobile applications. My expertise lies in Kotlin, MVVM architecture, and the Jetpack suite. I have a proven track record of delivering production-ready apps, from architecture design to deployment and monetization.",
};

export const skills = [
  {
    category: "Languages",
    items: ["Kotlin", "Java", "SQL"],
  },
  {
    category: "Android Architecture",
    items: [
      "MVVM",
      "Clean Architecture",
      "Jetpack Navigation",
      "WorkManager",
    ],
  },
  {
    category: "Core Development",
    items: [
      "VpnService",
      "AccessibilityService",
      "Foreground Services",
      "Room DB",
    ],
  },
  {
    category: "Networking & Backend",
    items: [
      "Retrofit",
      "OkHttp",
      "Firebase",
      "OpenVPN",
    ],
  },
  {
    category: "Tools & Monetization",
    items: [
      "Android Studio",
      "Git",
      "Google Play Billing",
      "AdMob",
    ],
  },
];

export const experience = [
  {
    title: "Independent Android Developer",
    company: "Self-Employed",
    location: "Surat, India",
    period: "May 2025 – Present",
    description: [
      "Built & launched Nocturne VPN, a production-ready VPN app with 20+ core features.",
      "Integrated Google Play Billing (subscriptions), AdMob, GDPR consent.",
      "Deployed scalable backend using Firebase Firestore for user sync and OpenVPN configs.",
      "Managed full SDLC: architecture → development → optimization → release.",
    ],
  },
];

export const education = [
  {
    institution: "Drs. Kiran & Pallavi Patel Global University (KPGU)",
    degree: "B.Tech in Computer Science and Engineering",
    period: "Sep 2021 – May 2025",
    grade: "CGPA: 8.76/10",
    achievements: [
      "Finalist – GTU Code Unnati Innovation Marathon (2024–2025)",
    ],
  },
];

export const projects = [
  {
    title: "Nocturne VPN",
    subtitle: "Fast, Secure & Private Proxy",
    description:
      "A production-ready VPN application focusing on privacy and speed. Integrated OpenVPN protocol using VpnService for encrypted tunnels and implemented server scoring + load balancing across 50+ global servers.",
    tech: [
      "Kotlin",
      "MVVM",
      "OpenVPN",
      "VpnService",
      "Coroutines",
      "WorkManager",
    ],
    features: [
      "Real-time network speed dashboard",
      "3D globe visualization",
      "Dark mode support",
      "Multi-auth: Google / Facebook / Email",
      "99.9% ANR-free sessions via background workers",
    ],
    links: {
      github: "https://github.com/Mitul4212/NocturneVPN.git",
      demo: "https://nocturne-vpn-fast-secure-and-private-vpn-proxy.en.uptodown.com/android",
    },
    image: "/screens/nocturnevpn.jpg",
  },
  {
    title: "Volume Button Mapping App",
    subtitle: "System Utility",
    description:
      "A system utility app that remaps volume buttons to power functions using AccessibilityService. Delivered a full prototype in 48 hours with 25+ test cases passed.",
    tech: ["Kotlin", "AccessibilityService", "DeviceAdminReceiver"],
    features: [
      "Remapped volume buttons to power functions",
      "Persistent Foreground Service bypassing OEM battery optimizations",
    ],
    links: {
      github: "https://github.com/Mitul4212/Volume-Button-Mapping.git",
    },
    image: "/screens/Volume%20Button%20Mapping%20App.png",
  },
];

export const interests = [
  "Workflow Automation: n8n.io, Make.com",
  "Mobile Security Research",
  "Open-source contributions",
];
