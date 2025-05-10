import { Youtube, FileText, Twitter } from 'lucide-react';

export type KeyResource = {
  icon: typeof Youtube | typeof FileText | typeof Twitter;
  title: string;
  url: string;
  date: string;
};

export const keyResourcesData: KeyResource[] = [
  {
    icon: Youtube,
    title: 'Keynote: [title redacted] at Devcon SEA',
    url: 'https://www.youtube.com/watch?v=lRqnFrqpq4k',
    date: 'Nov 2024',
  },
  {
    icon: Youtube,
    title: 'Ethereum Roadmap & Beamchain at Bankless Summit',
    url: 'https://www.youtube.com/watch?v=8mJDt8TGebc',
    date: 'Nov 2024',
  },
  {
    icon: Youtube,
    title: "Deep Dive into Ethereum's Beam Chain with The Defiant",
    url: 'https://www.youtube.com/watch?v=88FDeg5JaUk',
    date: 'Nov 2024',
  },
  {
    icon: Youtube,
    title: 'Beam chain tldr at Devcon SEA Community-Led Session',
    url: 'https://www.youtube.com/watch?v=63w7kHh737w',
    date: 'Nov 2024',
  },
  {
    icon: Youtube,
    title: "Ethereum's Three Front War on Bankless Podcast",
    url: 'https://youtu.be/jUFVOUq0-fc?si=4ayhCrWKLNiv2q10&t=2936',
    date: 'Dec 2024',
  },
  {
    icon: FileText,
    title: 'Future of Ethereum: Beam Chain by Seungmin Jeon',
    url: 'https://medium.com/@organmo/future-of-ethereum-1-beam-chain-52492e39af62',
    date: 'Jan 2025',
  },
  {
    icon: Twitter,
    title: 'Twitter post on the beam chain roadmap by Vitalik Buterin',
    url: 'https://x.com/VitalikButerin/status/1885046277932552697',
    date: 'Jan 2025',
  },
];
