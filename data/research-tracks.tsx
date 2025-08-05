import type { ReactNode } from 'react';
import { Shield, Lock, FileCheck, Cpu, Feather, FileCode, Waypoints } from 'lucide-react';

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
  type: 'specs' | 'paper' | 'code' | 'presentation' | 'website';
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
    progress: 10,
    lead: 'Dmitry Khovratovich',
    leadLink: 'https://x.com/Khovr',
    tags: ['Post-Quantum Signatures', 'Chain Snarkification'],
    milestones: [
      { title: 'Bounties established ($66k already earned)', completed: true, date: 'Jan 2025' },
      { title: 'Research grants (three recipients chosen)', completed: true, date: 'Feb 2025' },
      {
        title:
          'Workshop on Cryptanalysis of Algebraic Hash Functions at 31st Fast Software Encryption Conference',
        completed: true,
        date: 'Mar 2025',
      },
      {
        title: 'Workshop at Algebraic Hash Cryptanalysis Days',
        completed: false,
        date: 'May 2025',
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
      },
      {
        title: 'Attacking Poseidon via Graeffe-Based Root-Finding over NTT-Friendly Fields',
        url: 'https://eprint.iacr.org/2025/937',
        type: 'paper',
      },
      {
        title:
          'Breaking Poseidon Challenges with Graeffe Transforms and Complexity Analysis by FFT Lower Bounds',
        url: 'https://eprint.iacr.org/2025/950',
        type: 'paper',
      },
      {
        title: 'Poseidon and Neptune: Gröbner Basis Cryptanalysis Exploiting Subspace Trails',
        url: 'https://eprint.iacr.org/2025/954',
        type: 'paper',
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
    tags: ['Post-Quantum Signatures'],
    milestones: [
      {
        title: 'Paper publication (including proofs) and prototype implementation',
        completed: true,
        date: 'Jan 2025',
      },
      {
        title: 'Efficiency analysis of hash-based signature candidates',
        completed: true,
        date: 'Mar 2025',
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
      },
      {
        title: 'Follow-up research on Hash-Based Multi-Signatures (Top of the hypercube)',
        url: 'https://eprint.iacr.org/2025/889.pdf',
        type: 'paper',
      },
      {
        title: 'Towards Hash-Based Multi-Signatures for Post-Quantum Distributed Validators',
        url: 'https://github.com/ObolNetwork/pqdv/blob/main/doc/main.pdf',
        type: 'paper',
      },
      {
        title: 'Reference implementation in Rust',
        url: 'https://github.com/b-wagn/hash-sig',
        type: 'code',
      },
    ],
  },
  {
    id: 'minimal-zkvm',
    title: 'Minimal Zero-Knowledge Virtual Machines',
    description:
      'Explore minimal zero-knowledge virtual machines (zkVMs) specifically optimized for \
      signature aggregation, including various options like Binus M3, SP1, KRU, STU, Jolt, and OpenVM.',
    icon: <Cpu className="h-5 w-5" />,
    colorClass: 'amber',
    status: 'active',
    progress: 10,
    lead: 'Thomas Coratger',
    leadLink: 'https://x.com/tcoratger',
    tags: ['Post-Quantum Signatures', 'Chain Snarkification'],
    milestones: [
      {
        title: 'Benchmark hash in SNARK (Plonky3, STwo, Binius, Hashcaster)',
        completed: true,
        date: 'Feb 2025',
      },
      { title: 'Hashcaster exploration work', completed: true, date: 'Feb 2025' },
      {
        title: 'Snarkify hash-based signature aggregation with SP1 & OpenVM',
        completed: true,
        date: 'Feb 2025',
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
      { title: 'Circuit gadgets', url: 'https://hackmd.io/@tcoratger/SyWbmVPckx', type: 'website' },
      { title: 'WHIR', url: 'https://gfenzi.io/papers/whir/', type: 'paper' },
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
      { title: 'Proposal for Falcon signature aggregation', completed: true, date: 'Feb 2025' },
      { title: 'Combining Falcon signatures with code-based SNARKs', completed: false },
    ],
    resources: [
      { title: 'Falcon Signatures Website', url: 'https://falcon-sign.info/', type: 'website' },
      {
        title: 'Some existing work on Falcon-based multi-signatures',
        url: 'https://eprint.iacr.org/2024/311',
        type: 'paper',
      },
      {
        title: 'Benchmarks for LaBRADOR aggregation of Falcon signatures',
        url: 'https://ethresear.ch/t/lattice-based-signature-aggregation/22282',
        type: 'code',
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
    progress: 10,
    lead: 'Alex Hicks',
    leadLink: 'https://x.com/alexanderlhicks',
    tags: ['Security Hardening'],
    milestones: [
      { title: 'zkEVM formal verification project initiation', completed: true, date: 'Jan 2025' },
      { title: 'Lean 4 framework implementation', completed: false, date: 'Mar 2025' },
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
        url: 'https://github.com/Verified-zkEVM/ZKLib',
        type: 'code',
      },
      {
        title: 'Lean blueprints',
        url: 'https://github.com/PatrickMassot/leanblueprint',
        type: 'code',
      },
      {
        title: 'zkLib Lean blueprint',
        url: 'https://verified-zkevm.github.io/ZKLib/blueprint/index.html',
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
    progress: 10,
    lead: 'Pop',
    leadLink: 'https://github.com/ppopth',
    tags: ['Networking'],
    milestones: [
      {
        title: 'Practical Rateless Set Reconciliation research',
        completed: true,
        date: 'Feb 2024',
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
      },
      {
        title: 'Generalised Gossipsub specification',
        url: 'https://github.com/libp2p/specs/pull/664',
        type: 'specs',
      },
      {
        title: 'Gossipsub v2.0 specification',
        url: 'https://github.com/libp2p/specs/pull/653',
        type: 'specs',
      },
    ],
  },
];
