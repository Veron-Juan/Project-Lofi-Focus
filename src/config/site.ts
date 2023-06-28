export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Lofi Focus",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Lofi",
      href:"/lofi"
    },
    {
      title: "Pomodoro",
      href:"/pomodoro"
    },

    {
      title: "Community",
      href: "/community"
    },
    
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
