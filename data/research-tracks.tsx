import type { ReactNode } from "react"
import { Shield, Lock, FileCheck, Cpu, Feather, FileCode } from "lucide-react"

export interface ResearchTrack {
  id: string
  title: string
  description: string
  icon: ReactNode
  colorClass: string
  progress: number
  lead: string
  leadLink: string
  tags: string[]
  milestones: Milestone[]
  resources: Resource[]
}

export interface Milestone {
  title: string
  completed: boolean
  date?: string
}

export interface Resource {
  title: string
  url: string
  type: "paper" | "code" | "presentation" | "website"
}

export const researchTracksData: ResearchTrack[] = [
  {
    id: "poseidon",
    title: "Poseidon Cryptanalysis Initiative",
    description: "Comprehensively tests the security of the Poseidon hash function through a multi-faceted approach including competitive bounties, targeted research grants, specialized workshops, academic awards, and advanced hardware testing.",
    icon: <Lock className="h-5 w-5" />,
    colorClass: "blue",
    progress: 10,
    lead: "Dmitry Khovratovich",
    leadLink: "https://x.com/Khovr",
    tags: ["Post-Quantum Signatures", "Chain Snarkification"],
    milestones: [
      { title: "Bounties established ($66k already earned)", completed: true, date: "Jan 2025" },
      { title: "Research grants (three recipients chosen)", completed: true, date: "Feb 2025" },
      { title: "Workshop on Cryptanalysis of Algebraic Hash Functions at 31st Fast Software Encryption Conference", completed: true, date: "Mar 2025" },
      { title: "Workshop at Algebraic Hash Cryptanalysis Days", completed: false, date: "May 2025" },
      { title: "Groebner basis exploratorations", completed: false },
    ],
    resources: [
      { title: "EF's Poseidon Cryptanalysis Initiative", url: "https://www.poseidon-initiative.info/", type: "website" },
    ],
  },
  {
    id: "hash-based-multi-signatures",
    title: "Hash-Based Multi-Signatures",
    description:
      "Develop and analyze hash-based multi-signatures using Winternitz XMSS as a post-quantum replacement for BLS signatures.",
    icon: <FileCheck className="h-5 w-5" />,
    colorClass: "green",
    progress: 10,
    lead: "Benedikt Wagner",
    leadLink: "https://benedikt-wagner.dev/",
    tags: ["Post-Quantum Signatures"],
    milestones: [
      { title: "Paper publication (including proofs) and prototype implementation", completed: true, date: "Jan 2025" },
      { title: "Efficiency analysis of hash-based signature candidates", completed: true, date: "Mar 2025" },
      { title: "Exploring further optimizations for hash-based signature candidates", completed: false},
      { title: "Identification of alternatives for post-quantum multi-signatures", completed: false },
    ],
    resources: [
      { title: "Hash-Based Multi-Signatures for Post-Quantum Ethereum", url: "https://eprint.iacr.org/2025/055", type: "paper" },
      { title: "Towards Hash-Based Multi-Signatures for Post-Quantum Distributed Validators", url: "https://github.com/ObolNetwork/pqdv/blob/main/doc/main.pdf", type: "paper" },
      { title: "Reference implementation in Rust", url: "https://github.com/b-wagn/hash-sig", type: "code" },
    ],
  },
  {
    id: "minimal-zkvm",
    title: "Minimal Zero-Knowledge Virtual Machines",
    description:
      "Explore minimal zero-knowledge virtual machines (zkVMs) specifically optimized for signature aggregation, including various options like Binus M3, SP1, KRU, STU, Jolt, and OpenVM.",
    icon: <Cpu className="h-5 w-5" />,
    colorClass: "amber",
    progress: 10,
    lead: "Thomas Coratger",
    leadLink: "https://x.com/tcoratger",
    tags: ["Post-Quantum Signatures", "Chain Snarkification"],
    milestones: [
      { title: "Benchmark hash in SNARK (Plonky3, STwo, Binius, Hashcaster)", completed: true, date: "Feb 2025" },
      { title: "Hashcaster exploration work", completed: true, date: "Feb 2025" },
      { title: "Snarkify hash-based signature aggregation with SP1 & OpenVM", completed: true, date: "Feb 2025" },
      { title: "Explore GKR style provers", completed: false },
      { title: "Explore WHIR", completed: false },
      { title: "More explorations over binary field techniques", completed: false },
    ],
    resources: [
      { title: "Benchmark Hash in SNARK", url: "https://hackmd.io/@han/bench-hash-in-snark", type: "website" },
      { title: "Hash-based Signature Aggregation", url: "https://hackmd.io/@han/hash-sig-agg", type: "website" },
      { title: "Circuit gadgets", url: "https://hackmd.io/@tcoratger/SyWbmVPckx", type: "website" },
      { title: "WHIR", url: "https://gfenzi.io/papers/whir/", type: "paper" },
    ],
  },
  {
    id: "falcon-signatures",
    title: "Falcon Signatures",
    description:
      "Exploring lattice-based signatures as an alternative to hash-based signatures for their significantly smaller signatures, potentially allowing Ethereum to support five times more validators.",
    icon: <Feather className="h-5 w-5" />,
    colorClass: "red",
    progress: 10,
    lead: "Josh Beal",
    leadLink: "https://x.com/TheBealDeal",
    tags: ["Post-Quantum Signatures"],
    milestones: [
      { title: "Proposal for Falcon signature aggregation", completed: true, date: "Feb 2025" },
      { title: "Combining Falcon signatures with code-based SNARKs", completed: false },
    ],
    resources: [
      { title: "Falcon Signatures Website", url: "https://falcon-sign.info/", type: "website" },
      { title: "Some existing work on Falcon-based multi-signatures", url: "https://eprint.iacr.org/2024/311", type: "paper"},
    ],
  },
  {
    id: "formal-verification",
    title: "Formal Verification",
    description: "Mathematically prove the security properties of cryptographic proof systems like FRI, STU, and WHIR using the Lean 4 framework, creating structured blueprints that map out theorem dependencies to verify that the zkEVM implementations are correct.",
    icon: <FileCode className="h-5 w-5" />,
    colorClass: "indigo",
    progress: 10,
    lead: "Alex Hicks",
    leadLink: "https://x.com/alexanderlhicks",
    tags: ["Security Hardening"],
    milestones: [
      { title: "zkEVM formal verification project initiation", completed: true, date: "Jan 2025" },
      { title: "Lean 4 framework implementation", completed: false, date: "Mar 2025" },
      { title: "FRI proof system specification", completed: false },
      { title: "STIR proof system specification", completed: false },
      { title: "WHIR proof system specification", completed: false },
    ],
    resources: [
      { title: "EF's zkEVM Formal Verification Project", url: "https://verified-zkevm.org/", type: "website" },
      { title: "Formally Verified SNARKs in Lean", url: "https://github.com/Verified-zkEVM/ZKLib", type: "code" },
      { title: "Lean blueprints", url: "https://github.com/PatrickMassot/leanblueprint", type: "code" },
      { title: "zkLib Lean blueprint", url: "https://verified-zkevm.github.io/ZKLib/blueprint/index.html", type: "website" },
    ],
  },
]
