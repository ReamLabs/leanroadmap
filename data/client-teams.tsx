export interface Link {
  type: 'website' | 'twitter' | 'github' | 'hackmd';
  url: string;
}

export interface ClientTeam {
  id: string;
  name: string;
  language: string;
  description: string;
  leanRepo: string;
  links: Link[];
}

export const clientTeamsData: ClientTeam[] = [
  {
    id: 'ream',
    name: 'Ream',
    language: 'Rust',
    description:
      'The high-performance Lean Consensus client written in Rust, focusing on delivering the most performant and user-friendly Lean Consensus client.',
    leanRepo: 'https://github.com/ReamLabs/ream',
    links: [
      { type: 'website', url: 'https://reamlabs.com' },
      { type: 'twitter', url: 'https://twitter.com/reamlabs' },
      { type: 'github', url: 'https://github.com/reamlabs' },
      { type: 'hackmd', url: 'https://hackmd.io/@reamlabs' },
    ],
  },
  {
    id: 'zeam',
    name: 'Zeam',
    language: 'Zig',
    description:
      'The Zig-based client team focused on representing Asia in the Ethereum ecosystem, building foundational components and integrating with various ZKVMs.',
    leanRepo: 'https://github.com/blockblaz/zeam',
    links: [
      { type: 'twitter', url: 'https://x.com/zeamETH' },
      { type: 'github', url: 'https://github.com/blockblaz/zeam' },
    ],
  },
  {
    id: 'quadrivium',
    name: 'Qlean-mini',
    language: 'C++',
    description:
      'The blockchain infrastructure team with expertise in networking and C++, notably maintaining a C++ libp2p library previously used in Polkadot.',
    leanRepo: 'https://github.com/qdrvm/qlean-mini',
    links: [
      { type: 'website', url: 'https://qdrvm.io/' },
      { type: 'github', url: 'https://github.com/qdrvm' },
      { type: 'twitter', url: 'https://x.com/qdrvm_io' },
    ],
  },
  {
    id: 'lantern',
    name: 'Lantern',
    language: 'C',
    description:
      'By Pier Two. C-based Ethereum Lean Consensus client. Focused on enabling devices with limited compute to follow the consensus.',
    leanRepo: 'https://github.com/Pier-Two/lantern',
    links: [
      { type: 'website', url: 'https://piertwo.com/' },
      { type: 'twitter', url: 'https://x.com/PierTwo_com' },
      { type: 'github', url: 'https://github.com/Pier-Two' },
    ],
  },
  {
    id: 'lighthouse',
    name: 'Lighthouse',
    language: 'Rust',
    description:
      'A Lighthouse fork for Lean Consensus, leveraging the battle-tested Rust codebase.',
    leanRepo: 'https://github.com/hopinheimer/lighthouse',
    links: [
      { type: 'website', url: 'https://lighthouse.sigmaprime.io/' },
      { type: 'twitter', url: 'https://x.com/sigp_io' },
      { type: 'github', url: 'https://github.com/sigp' },
    ],
  },
  {
    id: 'ethlambda',
    name: 'ethlambda',
    language: 'Rust',
    description:
      'A minimalist and fast Lean Consensus client by LambdaClass, bringing expertise in distributed systems and blockchain infrastructure to deliver a robust and performant implementation.',
    leanRepo: 'https://github.com/lambdaclass/ethlambda',
    links: [
      { type: 'website', url: 'https://lambdaclass.com' },
      { type: 'twitter', url: 'https://x.com/ethlambda_lean' },
      { type: 'github', url: 'https://github.com/lambdaclass' },
    ],
  },
];
