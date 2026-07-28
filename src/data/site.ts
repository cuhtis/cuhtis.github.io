export const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
] as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/cuhtis",
    icon: "github"
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/curtisli",
    icon: "linkedin"
  },
  {
    label: "Email",
    href: "mailto:curtis.li@nyu.edu",
    icon: "email"
  }
] as const;

export const experience = [
  {
    role: "Software Engineer",
    organization: "Meta Platforms, Inc.",
    date: "July 2017 — Present"
  },
  {
    role: "Software Engineering Intern",
    organization: "NimbleDroid, Inc.",
    date: "May 2016 — September 2016"
  },
  {
    role: "Systems Research Assistant",
    organization: "New York University",
    date: "September 2015 — May 2016"
  }
] as const;

export const education = {
  institution: "New York University",
  degree: "Computer Science",
  date: "Graduated May 2017",
  details: [
    "Major GPA 4.00 · Cumulative GPA 3.95",
    "Summa Cum Laude · Phi Beta Kappa",
    "Computer Science Prize for Outstanding Performance",
    "University Honors Scholar"
  ]
} as const;
