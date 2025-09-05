export type LeanCallStatus = 'completed' | 'upcoming' | 'scheduled' | 'unscheduled';

export interface LeanCall {
  id: string;
  title: string;
  date: string;
  summary: string;
  thumbnail: string | null;
  youtubeUrl: string;
  resources?: {
    title: string;
    url: string;
    type: 'agenda' | 'slides' | 'notes';
  }[];
}

export function determineLeanCallStatus(date: string): LeanCallStatus {
  if (date === 'TBD') return 'unscheduled';

  const callDate = new Date(date);
  const today = new Date();
  const oneMonthFromNow = new Date();
  oneMonthFromNow.setMonth(today.getMonth() + 1);

  if (callDate < today) return 'completed';
  if (callDate <= oneMonthFromNow) return 'upcoming';
  return 'scheduled';
}

export const leanCallsData: LeanCall[] = [
  {
    id: 'call-1',
    title: 'Lean Call #1: Social Layer Updates',
    date: 'February 14, 2025',
    summary:
      'The kickoff call covering social layer progress, funding structures, legal updates, introductions of research specialists and client teams, and coordinator presentations',
    thumbnail: null,
    youtubeUrl: 'https://www.youtube.com/watch?v=sSx6juIu4AI',
    resources: [
      {
        title: 'Meeting agenda',
        url: 'https://github.com/ethereum/pm/issues/1327',
        type: 'agenda',
      },
      {
        title: 'Presentation slides',
        url: 'https://docs.google.com/presentation/d/14Fx1s5cBMNG9LDw5PsMsvq7KV5mSqlf9z3ZMCcOuxkM',
        type: 'slides',
      },
    ],
  },
  {
    id: 'call-2',
    title: 'Lean Call #2: Post-Quantum Security',
    date: 'February 28, 2025',
    summary:
      'Technical updates on post-quantum cryptography solutions, featuring technical presentations from researchers on signature schemes, hash functions, minimal zkVMs, and formal verification.',
    thumbnail: null,
    youtubeUrl: 'https://www.youtube.com/watch?v=BtYb_guRq78',
    resources: [
      {
        title: 'Meeting agenda',
        url: 'https://github.com/ethereum/pm/issues/1336',
        type: 'agenda',
      },
      {
        title: 'Introduction slides',
        url: 'https://docs.google.com/presentation/d/1V3utqODaki03C_UqOEuD9sD_sm_rqSq035nMD_qa7Sg',
        type: 'slides',
      },
      {
        title: "Kakarot Labs' introduction",
        url: 'https://docs.google.com/presentation/d/1zjXOUuP_Dyiuxb5w35E4n-EWf8UD4x2oKvKlsIxG_-s',
        type: 'slides',
      },
      {
        title: "Thomas Coratger's slides on zkVM",
        url: 'https://hackmd.io/@tcoratger/B16moU0q1x#/',
        type: 'slides',
      },
      {
        title: "Benedikt Wagner's slides on hash-based multi-signatures",
        url: './resources/beam-calls/status-hash-sig.pdf',
        type: 'slides',
      },
      {
        title: "Alex's slides on post-quantum distributed validators",
        url: './resources/beam-calls/thbs_beamcall2.pdf',
        type: 'slides',
      },
    ],
  },
  {
    id: 'call-3',
    title: 'Lean Call #3: P2P Networking',
    date: 'April 4, 2025',
    summary: 'Discussion on the latest developments in peer-to-peer networking.',
    thumbnail: null,
    youtubeUrl: 'https://www.youtube.com/watch?v=dJkuwuh2Nrs',
    resources: [
      {
        title: 'Meeting agenda',
        url: 'https://github.com/ethereum/pm/issues/1389',
        type: 'agenda',
      },
      {
        title: 'Social Layer Updates',
        url: 'https://docs.google.com/presentation/d/1yavZUvmfnTYzsOuY086AaJgtTMEayANfNBVnmxL1_Kg',
        type: 'slides',
      },
      {
        title: 'Hash-based SNARKs w/ Small Proofs',
        url: 'https://docs.google.com/presentation/d/10pRsghxatnjju_8oKAmrhas1t5P_jtiTxUme3w1U7CY',
        type: 'slides',
      },
      {
        title: 'Permissionless Aggregation',
        url: 'https://docs.google.com/presentation/d/11z8uO3rTHO2dxsNmRqWFqgJgMtRQAzYUq2nNT0UAPdY',
        type: 'slides',
      },
      {
        title: 'Generalized Gossipsub',
        url: 'https://docs.google.com/presentation/d/1AtsSryG_xiiuhUBRbHjSWAu4YlBPq1x-lulyLhDnYVc',
        type: 'slides',
      },
      {
        title: 'Gossipsub V2',
        url: 'https://docs.google.com/presentation/d/1jDC5pV710PEz_-Flgdt4zGeo8zlzdAszWXaxjprRPiw',
        type: 'slides',
      },
      {
        title: 'Grid Topology',
        url: 'https://hackmd.io/@kamilsa/rJ7SjSZaye#/',
        type: 'slides',
      },
      {
        title: 'Set Reconciliation',
        url: 'https://docs.google.com/presentation/d/1zqBpF-o7qFFuYUPESgK0jIYvVbiD2dlu9X2dpaS1ySQ',
        type: 'slides',
      },
      {
        title: 'libp2p in C',
        url: 'https://docs.google.com/presentation/d/1nDm8wk2psmRIYbh0cb5ye11KmABu-D-kmVv3VuIdZoY',
        type: 'slides',
      },
      {
        title: 'libp2p in Zig',
        url: 'https://docs.google.com/presentation/d/1WU0X-7sAKIoNy3gwA32PTtv5X6biRlLwXwsbVBXDUkQ',
        type: 'slides',
      },
    ],
  },
  {
    id: 'call-4',
    title: 'Lean Call #4: Exit Queue',
    date: 'April 18, 2025',
    summary:
      'Discussion of Ethereum validator exit mechanisms and proposals to improve exit queue flexibility while maintaining protocol security.',
    thumbnail: null,
    youtubeUrl: 'https://www.youtube.com/watch?v=M6oRqhjMFQc',
    resources: [
      {
        title: 'Meeting agenda',
        url: 'https://github.com/ethereum/pm/issues/1446',
        type: 'agenda',
      },
      {
        title: 'Ethereum Validator Exits Overview',
        url: 'https://hackmd.io/@mikeneuder/eli5-ethereum-validator-exits',
        type: 'notes',
      },
      {
        title: 'Minslack: Proposal to Add Flexibility to Exit Queue',
        url: 'https://ethresear.ch/t/adding-flexibility-to-ethereums-exit-queue/22061',
        type: 'notes',
      },
    ],
  },
  {
    id: 'call-5',
    title: 'Lean Call #5: APS (Attester-Proposer Separation)',
    date: 'May 2, 2025',
    summary:
      'Exploration of the Attester-Proposer Separation (APS) concept, its benefits, and potential applications for Lean Consensus.',
    thumbnail: null,
    youtubeUrl: 'https://youtu.be/5OOzMqCOoKM',
    resources: [
      {
        title: 'Meeting agenda',
        url: 'https://github.com/ethereum/pm/issues/1447',
        type: 'agenda',
      },
      {
        title: 'Attester-Proposer Separation Presentation Slides',
        url: 'https://docs.google.com/presentation/d/11udzhHKbmEGKla0kNPnQ0IPLcgX7dFcvTc0sdGTAyXk',
        type: 'slides',
      },
    ],
  },
  {
    id: 'call-6',
    title: 'Lean Call #6: 3SF (Finality)',
    date: 'May 16, 2025',
    summary:
      'Discussion on the finality of the 3SF protocol, including its implementation and implications on the network.',
    thumbnail: null,
    youtubeUrl: 'https://youtu.be/Eft4K0lGdBo',
    resources: [
      {
        title: 'Meeting agenda',
        url: 'https://github.com/ethereum/pm/issues/1448',
        type: 'agenda',
      },
      {
        title: '3SF Finality Protocol Updates',
        url: 'https://docs.google.com/presentation/d/1vAIDvB8qwQWgMHEjne73VFiPo8Vq9-7KRb6ni_mU8ag/edit',
        type: 'slides',
      },
    ],
  },
  {
    id: 'call-7',
    title: 'Lean Call #7: PQ Sub-Spec',
    date: 'September 5, 2025',
    summary:
      'In-depth discussion on the Post-Quantum (PQ) sub-specification, focusing on its cryptographic aspects and integration into Lean Consensus.',
    thumbnail: null,
    youtubeUrl: 'https://www.youtube.com/watch?v=hAIp_JHrr4I',
    resources: [
      {
        title: 'Meeting agenda',
        url: 'https://github.com/ethereum/pm/issues/1717',
        type: 'agenda',
      },
      {
        title: 'PQ Interop Slides',
        url: 'https://docs.google.com/presentation/d/1-rAV0gdy2ZVmqDrmLXmGoMclP2EJsYOoRBxogfq_uQc/edit?slide=id.g37bac8dfc79_0_960#slide=id.g37bac8dfc79_0_960',
        type: 'slides',
      },
      {
        title: 'leanSpec Slides',
        url: 'https://docs.google.com/presentation/d/18wU24mrRrkYzO-vtZJEw6R9Apv5Nzxw7cFbrWnnegck/edit?slide=id.p#slide=id.p',
        type: 'slides',
      },
      {
        title: 'Lean MultiSig Spec Slides',
        url: 'https://docs.google.com/presentation/d/1IUq91Qm8ma7-jDALNkdrO4ostLbh1PFajIB6k_cLEuA/edit?slide=id.p#slide=id.p',
        type: 'slides',
      },
      {
        title: 'Minimal ZKVM for Lean Slides',
        url: 'https://docs.google.com/presentation/d/11DV4QPP2ZPYDsqnTeqBILfQYXZi-MxtAcLEe2lFSvNM/edit?slide=id.p#slide=id.p',
        type: 'slides',
      },
    ],
  },
  {
    id: 'call-8',
    title: 'Lean Call #8: P2P Sub-Spec',
    date: 'TBD',
    summary:
      'Examination of the Peer-to-Peer (P2P) sub-specification, covering its role in facilitating decentralized communication within Lean Consensus.',
    thumbnail: null,
    youtubeUrl: '#',
  },
  {
    id: 'call-9',
    title: 'Lean Call #9: Rainbow Staking Sub-Spec',
    date: 'TBD',
    summary:
      'Introduction to Rainbow Staking, a novel staking mechanism designed to enhance network security and decentralization.',
    thumbnail: null,
    youtubeUrl: '#',
  },
  {
    id: 'call-10',
    title: 'Lean Call #10: Finality Sub-Spec',
    date: 'TBD',
    summary:
      "Delving into the Finality sub-specification, including its technical details and implications for the network's finality",
    thumbnail: null,
    youtubeUrl: '#',
  },
  {
    id: 'call-11',
    title: 'Lean Call #11: Lean Consensus Spec',
    date: 'TBD',
    summary:
      'Lean Consensus specification discussion, covering the overall architecture and core components of Lean Consensus.',
    thumbnail: null,
    youtubeUrl: '#',
  },
];
