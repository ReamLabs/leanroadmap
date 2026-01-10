import type { ReactNode } from 'react';
import {
  Shield,
  Lock,
  FileCheck,
  Cpu,
  Feather,
  FileCode,
  Waypoints,
  Split,
  Zap,
} from 'lucide-react';

export interface ResearchTrack {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  colorClass: string;
  status: 'active' | 'inactive';
  progress: number;
  lead: string;
  leadLink: string;
  tags: string[];
  milestones: Milestone[];
  resources: Resource[];
}

export interface Milestone {
  title: string;
  completed: boolean;
  date?: string;
}

export interface Resource {
  title: string;
  url: string;
  type: 'specs' | 'paper' | 'code' | 'presentation' | 'website' | 'article';
  date?: string;
}

export const researchTracksData: ResearchTrack[] = [
  {
    id: 'poseidon',
    title: 'Poseidon Cryptanalysis Initiative',
    description:
      'Comprehensively tests the security of the Poseidon hash function through a multi-faceted approach \
      including competitive bounties, targeted research grants, specialized workshops, academic awards, \
      and advanced hardware testing.',
    icon: <Lock className="h-5 w-5" />,
    colorClass: 'blue',
    status: 'active',
    progress: 50,
    lead: 'Dmitry Khovratovich',
    leadLink: 'https://x.com/Khovr',
    tags: ['Post-Quantum Signatures', 'Security'],
    milestones: [
      { title: 'Bounties established ($66k already earned)', completed: true, date: '2025-01' },
      { title: 'Research grants (three recipients chosen)', completed: true, date: '2025-02' },
      {
        title:
          'Workshop on Cryptanalysis of Algebraic Hash Functions at 31st Fast Software Encryption Conference',
        completed: true,
        date: '2025-03',
      },
      {
        title: 'Workshop at Algebraic Hash Cryptanalysis Days',
        completed: false,
        date: '2025-05',
      },
      { title: 'Groebner basis exploratorations', completed: false },
    ],
    resources: [
      {
        title: "EF's Poseidon Cryptanalysis Initiative",
        url: 'https://www.poseidon-initiative.info/',
        type: 'website',
      },
      {
        title: 'Poseidon2: A Faster Version of the Poseidon Hash Function',
        url: 'https://eprint.iacr.org/2023/323',
        type: 'paper',
        date: '2023-03',
      },
      {
        title: 'Attacking Poseidon via Graeffe-Based Root-Finding over NTT-Friendly Fields',
        url: 'https://eprint.iacr.org/2025/937',
        type: 'paper',
        date: '2025-05',
      },
      {
        title:
          'Breaking Poseidon Challenges with Graeffe Transforms and Complexity Analysis by FFT Lower Bounds',
        url: 'https://eprint.iacr.org/2025/950',
        type: 'paper',
        date: '2025-05',
      },
      {
        title: 'Poseidon and Neptune: Gröbner Basis Cryptanalysis Exploiting Subspace Trails',
        url: 'https://eprint.iacr.org/2025/954',
        type: 'paper',
        date: '2025-05',
      },
    ],
  },
  {
    id: 'hash-based-multi-signatures',
    title: 'Hash-Based Multi-Signatures',
    description:
      'Develop and analyze hash-based multi-signatures using Winternitz XMSS as a post-quantum \
      replacement for BLS signatures.',
    icon: <FileCheck className="h-5 w-5" />,
    colorClass: 'green',
    status: 'active',
    progress: 70,
    lead: 'Benedikt Wagner',
    leadLink: 'https://benedikt-wagner.dev/',
    tags: ['Post-Quantum Signatures', 'Security'],
    milestones: [
      {
        title: 'Paper publication (including proofs) and prototype implementation',
        completed: true,
        date: '2025-01',
      },
      {
        title: 'Efficiency analysis of hash-based signature candidates',
        completed: true,
        date: '2025-03',
      },
      {
        title: 'Exploring further optimizations for hash-based signature candidates',
        completed: true,
      },
      {
        title: 'Identification of alternatives for post-quantum multi-signatures',
        completed: true,
      },
      {
        title: 'Fixing parameters such as key lifetime',
        completed: false,
      },
    ],
    resources: [
      {
        title: 'Hash-Based Multi-Signatures for Post-Quantum Ethereum',
        url: 'https://eprint.iacr.org/2025/055',
        type: 'paper',
        date: '2025-01',
      },
      {
        title: 'Towards Hash-Based Multi-Signatures for Post-Quantum Distributed Validators',
        url: 'https://github.com/ObolNetwork/pqdv/blob/main/doc/main.pdf',
        type: 'paper',
        date: '2025-03',
      },
      {
        title: 'Follow-up research on Hash-Based Multi-Signatures (Top of the hypercube)',
        url: 'https://eprint.iacr.org/2025/889.pdf',
        type: 'paper',
        date: '2025-05',
      },
      {
        title: 'Reference implementation in Rust (old)',
        url: 'https://github.com/b-wagn/hash-sig',
        type: 'code',
      },
      {
        title: 'Reference implementation in Rust (actively maintained)',
        url: 'https://github.com/leanEthereum/leanSig',
        type: 'code',
      },
    ],
  },
  {
    id: 'signature-aggregation',
    title: 'Post-Quantum Signature Aggregation with zkVMs',
    description:
      'Explore minimal zero-knowledge virtual machines (zkVMs) specifically optimized for \
      signature aggregation, including various options like Binus M3, SP1, KRU, STU, Jolt, and OpenVM.',
    icon: <Cpu className="h-5 w-5" />,
    colorClass: 'amber',
    status: 'active',
    progress: 50,
    lead: 'Thomas Coratger',
    leadLink: 'https://x.com/tcoratger',
    tags: ['Post-Quantum Signatures'],
    milestones: [
      {
        title: 'Benchmark hash in SNARK (Plonky3, STwo, Binius, Hashcaster)',
        completed: true,
        date: '2025-02',
      },
      { title: 'Hashcaster exploration work', completed: true, date: '2025-02' },
      {
        title: 'Snarkify hash-based signature aggregation with SP1 & OpenVM',
        completed: true,
        date: '2025-02',
      },
      { title: 'Explore GKR style provers', completed: false },
      { title: 'Explore WHIR', completed: false },
      { title: 'More explorations over binary field techniques', completed: false },
    ],
    resources: [
      {
        title: 'Benchmark Hash in SNARK',
        url: 'https://hackmd.io/@han/bench-hash-in-snark',
        type: 'website',
      },
      {
        title: 'Hash-based Signature Aggregation',
        url: 'https://hackmd.io/@han/hash-sig-agg',
        type: 'website',
      },
      {
        title: 'WHIR',
        url: 'https://gfenzi.io/papers/whir/',
        type: 'paper',
        date: '2024-09',
      },
      {
        title: 'Circuit gadgets',
        url: 'https://hackmd.io/@tcoratger/SyWbmVPckx',
        type: 'website',
        date: '2025-02',
      },
      {
        title: 'Post Quantum Signature Aggregation: a Folding Approach',
        url: 'https://ethresear.ch/t/post-quantum-signature-aggregation-a-folding-approach/23639',
        type: 'article',
        date: '2025-12',
      },
    ],
  },
  {
    id: 'falcon-signatures',
    title: 'Falcon Signatures',
    description:
      'Exploring lattice-based signatures as an alternative to hash-based signatures for their \
      significantly smaller signatures, potentially allowing Ethereum to support five times\
      more validators.',
    icon: <Feather className="h-5 w-5" />,
    colorClass: 'red',
    status: 'inactive',
    progress: 10,
    lead: 'Josh Beal',
    leadLink: 'https://x.com/TheBealDeal',
    tags: ['Post-Quantum Signatures'],
    milestones: [
      { title: 'Proposal for Falcon signature aggregation', completed: true, date: '2025-02' },
      { title: 'Combining Falcon signatures with code-based SNARKs', completed: false },
    ],
    resources: [
      { title: 'Falcon Signatures Website', url: 'https://falcon-sign.info/', type: 'website' },
      {
        title: 'Some existing work on Falcon-based multi-signatures',
        url: 'https://eprint.iacr.org/2024/311',
        type: 'paper',
        date: '2024-08',
      },
      {
        title: 'Benchmarks for LaBRADOR aggregation of Falcon signatures',
        url: 'https://ethresear.ch/t/lattice-based-signature-aggregation/22282',
        type: 'article',
        date: '2025-05',
      },
    ],
  },
  {
    id: 'formal-verification',
    title: 'Formal Verification',
    description:
      'Mathematically prove the security properties of cryptographic proof systems like FRI, STU, and WHIR \
      using the Lean 4 framework, creating structured blueprints that map out theorem dependencies to verify \
      that the zkEVM implementations are correct.',
    icon: <FileCode className="h-5 w-5" />,
    colorClass: 'indigo',
    status: 'active',
    progress: 40,
    lead: 'Alex Hicks',
    leadLink: 'https://x.com/alexanderlhicks',
    tags: ['Security'],
    milestones: [
      { title: 'zkEVM formal verification project initiation', completed: true, date: '2025-01' },
      { title: 'Lean 4 framework implementation', completed: false, date: '2025-03' },
      { title: 'FRI proof system specification', completed: false },
      { title: 'STIR proof system specification', completed: false },
      { title: 'WHIR proof system specification', completed: false },
    ],
    resources: [
      {
        title: "EF's zkEVM Formal Verification Project",
        url: 'https://verified-zkevm.org/',
        type: 'website',
      },
      {
        title: 'Formally Verified SNARKs in Lean',
        url: 'https://github.com/Verified-zkEVM/ArkLib',
        type: 'code',
      },
      {
        title: 'Lean blueprints',
        url: 'https://github.com/PatrickMassot/leanblueprint',
        type: 'code',
      },
      {
        title: 'ArkLib Lean blueprint',
        url: 'https://verified-zkevm.github.io/ArkLib/blueprint/index.html',
        type: 'website',
      },
    ],
  },
  {
    id: 'p2p',
    title: 'P2P Networking',
    description:
      "Modernizes how Ethereum consensus nodes communicate by developing next-generation \
      networking protocols like Gossipsub v2.0 and advanced set reconciliation to enable Lean Consensus's \
      4-second block times and increased validators from reduced staking requirements (32 ETH to 1 ETH), \
      and while uncompromising on decentralization.",
    icon: <Waypoints className="h-5 w-5" />,
    colorClass: 'teal',
    status: 'active',
    progress: 30,
    lead: 'Raúl Kripalani',
    leadLink: 'https://x.com/raulvk',
    tags: ['Scaling'],
    milestones: [
      {
        title: 'Practical Rateless Set Reconciliation research',
        completed: true,
        date: '2024-02',
      },
      { title: 'Generalized Gossipsub specification', completed: false },
      { title: 'Gossipsub V2 specification', completed: false },
      { title: 'Grid Topology research', completed: false },
      { title: 'libp2p in C development', completed: false },
      { title: 'libp2p in Zig development', completed: false },
    ],
    resources: [
      {
        title: 'Practical Rateless Set Reconciliation',
        url: 'https://arxiv.org/abs/2402.02668',
        type: 'paper',
        date: '2024-08',
      },
      {
        title: 'Gossipsub v2.0 specification',
        url: 'https://github.com/libp2p/specs/pull/653',
        type: 'specs',
        date: '2024-12',
      },
      {
        title: 'Generalised Gossipsub specification',
        url: 'https://github.com/libp2p/specs/pull/664',
        type: 'specs',
        date: '2025-03',
      },
      {
        title: 'Eth P2P: How Ethereum Talks to Itself',
        url: 'https://docs.google.com/presentation/d/1Ws-iPfzzA3N2BCLiMgJGb_LbSiGllK4LCs6CCx3Yswo/edit',
        type: 'presentation',
        date: '2025-11',
      },
    ],
  },
  {
    id: 'attester-proposer-separation',
    title: 'Attester-Proposer Separation',
    description:
      'Separates the roles of block proposers and attesters in Ethereum consensus to reduce \
      centralization pressures, enable more efficient MEV handling, and improve overall network \
      decentralization.',
    icon: <Split className="h-5 w-5" />,
    colorClass: 'pink',
    status: 'active',
    progress: 20,
    lead: 'TBD',
    leadLink: '',
    tags: ['Consensus', 'Scaling'],
    milestones: [{ title: 'Exploratory research', completed: false }],
    resources: [
      {
        title: 'Attester-Proposer Separation Tracker',
        url: 'https://efdn.notion.site/Attester-Proposer-Separation-Tracker-15bd9895554180c2ac75cb40878ecd33',
        type: 'website',
      },
      {
        title: 'Unbundling Staking: Towards Rainbow Staking',
        url: 'https://ethresear.ch/t/unbundling-staking-towards-rainbow-staking/18683',
        type: 'article',
        date: '2024-02',
      },
      {
        title: "Attester-Proposer Separation Seminar Presentation at King's College London",
        url: 'https://docs.google.com/presentation/d/1C4Iykpf-zNqCE1TyWxDzzw_A7n52GaUJz01Hw5v-NPo/edit',
        type: 'presentation',
        date: '2025-01',
      },
      {
        title: 'Toward a General Model for Proposer Selection Mechanism Design',
        url: 'https://ethresear.ch/t/toward-a-general-model-for-proposer-selection-mechanism-design/21790',
        type: 'article',
        date: '2025-02',
      },
      {
        title: 'Rainbow Roles Incentives: ABPS, FOCIL + AS',
        url: 'https://ethresear.ch/t/rainbow-roles-incentives-abps-focilr-as/21826',
        type: 'article',
        date: '2025-02',
      },
    ],
  },
  {
    id: 'faster-finality',
    title: 'Faster Finality',
    description:
      'Reduces Ethereum finality from ~15 minutes to seconds using 3-slot finality (3SF) — a practical \
      alternative to single-slot finality that balances speed, security, and implementation complexity \
      while integrating with ePBS, FOCIL, and PeerDAS.',
    icon: <Zap className="h-5 w-5" />,
    colorClass: 'orange',
    status: 'active',
    progress: 50,
    lead: 'Barnabé Monnot',
    leadLink: 'https://x.com/barnabemonnot',
    tags: ['Consensus', 'Scaling'],
    milestones: [{ title: 'Exploratory research', completed: false }],
    resources: [
      {
        title: 'A Simple Single Slot Finality Protocol For Ethereum',
        url: 'https://eprint.iacr.org/2023/280',
        type: 'paper',
        date: '2023-02',
      },
      {
        title: '3-Slot Finality: SSF Is Not About Single Slot',
        url: 'https://ethresear.ch/t/3-slot-finality-ssf-is-not-about-single-slot/20927',
        type: 'article',
        date: '2024-11',
      },
      {
        title: 'Integrating 3SF with ePBS, FOCIL, and PeerDAS',
        url: 'https://ethresear.ch/t/integrating-3sf-with-epbs-focil-and-peerdas/22909',
        type: 'article',
        date: '2025-08',
      },
      {
        title: 'LMD GHOST with ~256 Validators and a Fast-Following Finality Gadget',
        url: 'https://ethresear.ch/t/lmd-ghost-with-256-validators-and-a-fast-following-finality-gadget/22856',
        type: 'article',
        date: '2025-08',
      },
    ],
  },
];
