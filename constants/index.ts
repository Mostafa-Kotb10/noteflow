import type { ComponentType, SVGProps } from "react";

interface TrustedByItem {
  svg: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  website: string;
  ariaLabel?: string;
};

// export const TRUSTED_BY: TrustedByItem[] = [
//   {
//     svg: vercelSvg,
//     label: "Vercel",
//     website: "https://vercel.com",
//     ariaLabel: "Trusted by Vercel",
//   },
//   {
//     svg: airbnbSvg,
//     label: "Airbnb",
//     website: "https://airbnb.com",
//     ariaLabel: "Trusted by Airbnb",
//   },
//   {
//     svg: slackSvg,
//     label: "Slack",
//     website: "https://slack.com",
//     ariaLabel: "Trusted by Slack",
//   },
//   // {
//   //   svg: spotifySvg,
//   //   label: "Spotify",
//   //   website: "https://spotify.com",
//   //   ariaLabel: "Trusted by Spotify",
//   // },
//   {
//     svg: notionSvg,
//     label: "Notion",
//     website: "https://notion.so",
//     ariaLabel: "Trusted by Notion",
//   },
// ] as const;

export const SIDEBAR_MENU_ITEMS = [
  {
    title: "Qrcodes",
    url: "#",
    items: [
      {
        title: "Qrcodes",
        url: "qr",
      },
      {
        title: "Tasks",
        url: "#",
      },
    ],
  },

]
