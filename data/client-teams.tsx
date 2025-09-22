export interface Link {
  type: 'website' | 'twitter' | 'github' | 'hackmd';
  url: string;
}

export interface ClientTeam {
  id: string;
  name: string;
  description: string;
  status: 'existing' | 'new';
  links: Link[];
}

export const clientTeamsData: ClientTeam[] = [
  {
    id: 'ream',
    name: 'Ream',
    description:
      'The high-performance Lean Consensus client written in Rust, focusing on delivering the most performant and user-friendly Lean Consensus client.',
    status: 'new',
    links: [
      { type: 'twitter', url: 'https://twitter.com/reamlabs' },
      { type: 'github', url: 'https://github.com/reamlabs' },
      { type: 'hackmd', url: 'https://hackmd.io/@reamlabs' },
    ],
  },
  {
    id: 'zeam',
    name: 'Zeam',
    description:
      'The Zig-based client team focused on representing Asia in the Ethereum ecosystem, building foundational components and integrating with various ZKVMs.',
    status: 'new',
    links: [
      { type: 'twitter', url: 'https://x.com/zeamETH' },
      { type: 'github', url: 'https://github.com/blockblaz/zeam' },
    ],
  },
  {
    id: 'quadrivium',
    name: 'Quadrivium',
    description:
      'The blockchain infrastructure team based in Kazakhstan with expertise in C++ implementations, notably maintaining a C++ libp2p library previously used in Polkadot.',
    status: 'new',
    links: [],
  },
  {
    id: 'lantern',
    name: 'Lantern',
    description:
      'By Pier Two. C-based Ethereum Lean Consensus client. Focused on enabling devices with limited compute to follow the consensus.',
    status: 'new',
    links: [
      { type: 'website', url: 'https://piertwo.com/' },
      { type: 'twitter', url: 'https://x.com/PierTwo_com' },
      { type: 'github', url: 'https://github.com/Pier-Two' },
    ],
  },
  {
    id: 'lambdaclass',
    name: 'LambdaClass',
    description:
      'The team with experience in ZK development across multiple projects, currently working on both an Elixir consensus client and considering Rust or their own language called Concrete for their Lean Consensus client.',
    status: 'new',
    links: [
      { type: 'website', url: 'https://lambdaclass.com' },
      { type: 'twitter', url: 'https://x.com/class_lambda' },
      { type: 'github', url: 'https://github.com/lambdaclass' },
    ],
  },
  {
    id: 'colibri',
    name: 'Colibri',
    description:
      'The client team focused on ultra-light client development for resource-constrained IoT devices, with experience building small-footprint implementations.',
    status: 'new',
    links: [
      { type: 'twitter', url: 'https://x.com/CorpusCoreHQ' },
      { type: 'github', url: 'https://github.com/corpus-core/c4' },
    ],
  },
  {
    id: 'afream',
    name: 'Afream',
    description:
      'The African-led Lean Consensus client initiative focusing on regional blockchain adoption.',
    status: 'new',
    links: [],
  },
  {
    id: 'nethermind',
    name: 'Nethermind',
    description:
      'The high-performance .NET execution client with enterprise-grade features and extensive APIs.',
    status: 'new',
    links: [
      { type: 'website', url: 'https://nethermind.io' },
      { type: 'twitter', url: 'https://twitter.com/nethermindeth' },
      { type: 'github', url: 'https://github.com/nethermindeth' },
    ],
  },
  {
    id: 'dvlabs',
    name: 'DV Labs',
    description:
      "The Obol Collective team building Charon, Ethereum's distributed validator middleware client in GoLang.",
    status: 'new',
    links: [
      { type: 'website', url: 'https://dvlabs.tech' },
      { type: 'twitter', url: 'https://twitter.com/dv_labs' },
      { type: 'github', url: 'https://github.com/obolnetwork' },
    ],
  },
  {
    id: 'grandine',
    name: 'Grandine',
    description:
      'The research-focused Ethereum consensus client implementing novel approaches to consensus mechanisms.',
    status: 'existing',
    links: [
      { type: 'website', url: 'https://grandine.io' },
      { type: 'twitter', url: 'https://x.com/grandineio' },
      { type: 'github', url: 'https://github.com/grandinetech' },
    ],
  },
  {
    id: 'lodestar',
    name: 'Lodestar',
    description:
      'The JavaScript/TypeScript implementation of the Ethereum consensus client focused on modularity and extensibility.',
    status: 'existing',
    links: [
      { type: 'website', url: 'https://lodestar.chainsafe.io' },
      { type: 'twitter', url: 'https://twitter.com/lodestar_eth' },
      { type: 'github', url: 'https://github.com/ChainSafe' },
    ],
  },
  {
    id: 'teku',
    name: 'Teku',
    description:
      'The enterprise-grade Ethereum consensus client built in Java by ConsenSys, designed for institutional staking.',
    status: 'existing',
    links: [
      { type: 'website', url: 'https://consensys.io/teku' },
      { type: 'twitter', url: 'https://twitter.com/Teku_ConsenSys' },
      { type: 'github', url: 'https://github.com/ConsenSys' },
    ],
  },
  {
    id: 'lighthouse',
    name: 'Lighthouse',
    description:
      'The high-performance Ethereum consensus client built in Rust, focused on security and efficiency.',
    status: 'existing',
    links: [
      { type: 'website', url: 'https://lighthouse.sigmaprime.io' },
      { type: 'twitter', url: 'https://twitter.com/sigp_io' },
      { type: 'github', url: 'https://github.com/sigp' },
    ],
  },
  {
    id: 'prysm',
    name: 'Prysm',
    description:
      'The Go implementation of Ethereum consensus, emphasizing usability and reliability for validators.',
    status: 'existing',
    links: [
      { type: 'website', url: 'https://prysmaticlabs.com' },
      { type: 'twitter', url: 'https://twitter.com/prylabs' },
      { type: 'github', url: 'https://github.com/prysmaticlabs' },
    ],
  },
  {
    id: 'nimbus',
    name: 'Nimbus',
    description:
      'The lightweight Ethereum consensus client in Nim, optimized for resource-restricted devices.',
    status: 'existing',
    links: [
      { type: 'website', url: 'https://nimbus.team' },
      { type: 'twitter', url: 'https://twitter.com/ethnimbus' },
      { type: 'github', url: 'https://github.com/status-im' },
    ],
  },
];
