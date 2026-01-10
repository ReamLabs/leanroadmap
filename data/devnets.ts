export interface DevnetLink {
  title: string;
  url: string;
}

export interface Devnet {
  id: string;
  name: string;
  status: 'completed' | 'active' | 'planned';
  goals: string[];
  results?: string[];
  specs?: string[];
  clients?: string[];
  date?: string; // Format: "YYYY-MM" e.g. "2025-10"
  links?: DevnetLink[];
}

export const devnetsData: Devnet[] = [
  {
    id: 'pq-devnet-0',
    name: 'pq-devnet-0',
    status: 'completed',
    date: '2025-10',
    goals: [
      'Create leanSpec framework',
      'Multi-client coordination (no PQ sigs yet)',
      'Interop trials with 4s slots, QUIC, Gossipsub v1.0',
      'Apply modified 3SF-mini as consensus mechanism',
    ],
    results: [
      'Initial client specs established',
      'Ream, Zeam, Qlean clients interop achieved with modified 3SF-mini consensus',
    ],
    clients: ['Ream', 'Zeam', 'Qlean'],
    links: [
      {
        title: 'High-level specification',
        url: 'https://github.com/leanEthereum/pm/blob/main/breakout-rooms/leanConsensus/pq-interop/pq-devnet-0.md',
      },
      { title: 'Recap by ReamLabs', url: 'https://hackmd.io/@reamlabs/ryYUl04Rle' },
    ],
  },
  {
    id: 'pq-devnet-1',
    name: 'pq-devnet-1',
    status: 'completed',
    date: '2025-12',
    goals: [
      'Integrate leanSig signing & verification',
      'Apply basic signature aggregation (by concatenation)',
      'Set baseline performance metrics for PQ signature signing & verification',
    ],
    results: [
      'leanSig signing & verification integrated in clients',
      'Client interop with PQ signing & verification achieved',
    ],
    clients: ['Ream', 'Zeam', 'Qlean', 'Lantern', 'Lighthouse'],
    links: [
      {
        title: 'High-level specification',
        url: 'https://github.com/leanEthereum/pm/blob/main/breakout-rooms/leanConsensus/pq-interop/pq-devnet-1.md',
      },
    ],
  },
  {
    id: 'pq-devnet-2',
    name: 'pq-devnet-2',
    status: 'active',
    date: '2026-01',
    goals: [
      'Integrate leanMultisig aggregation',
      'Set baseline performance metrics for PQ signature aggregation',
    ],
    clients: ['Ream', 'Zeam', 'Qlean', 'Lantern', 'Lighthouse'],
    links: [
      {
        title: 'High-level specification',
        url: 'https://github.com/leanEthereum/pm/blob/main/breakout-rooms/leanConsensus/pq-interop/pq-devnet-2.md',
      },
    ],
  },
];
