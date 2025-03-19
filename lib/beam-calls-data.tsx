export interface BeamCall {
  id: string
  title: string
  status: "completed" | "upcoming" | "unscheduled"
  date: string
  summary: string
  thumbnail: string
  youtubeUrl: string
  resources?: {
    title: string
    url: string
    type: "agenda" | "slides" | "notes"
  }[]
}

export const beamCallsData: BeamCall[] = [
  {
    id: "call-1",
    title: "Beam Call #1: Social Layer Updates",
    status: "completed",
    date: "February 14, 2025",
    summary:
      "The kickoff call covering social layer progress, funding structures, legal updates, introductions of research specialists and client teams, and coordinator presentations",
    thumbnail: "/placeholder.svg?height=180&width=320",
    youtubeUrl: "https://www.youtube.com/watch?v=sSx6juIu4AI",
    resources: [
      {
        title: "Meeting agenda",
        url: "https://github.com/ethereum/pm/issues/1327",
        type: "agenda"
      },
      {
        title: "Presentation slides",
        url: "https://docs.google.com/presentation/d/14Fx1s5cBMNG9LDw5PsMsvq7KV5mSqlf9z3ZMCcOuxkM",
        type: "slides"
      }
    ]
  },
  {
    id: "call-2",
    title: "Beam Call #2: Technical Layer Updates",
    status: "completed",
    date: "February 28, 2025",
    summary:
      "Technical updates on post-quantum cryptography solutions, featuring technical presentations from researchers on signature schemes, hash functions, minimal zkVMs, and formal verification.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    youtubeUrl: "https://www.youtube.com/watch?v=BtYb_guRq78",
    resources: [
      {
        title: "Meeting agenda",
        url: "https://github.com/ethereum/pm/issues/1336",
        type: "agenda"
      },
      {
        title: "Introduction slides",
        url: "https://docs.google.com/presentation/d/1V3utqODaki03C_UqOEuD9sD_sm_rqSq035nMD_qa7Sg",
        type: "slides"
      },
      {
        title: "Kakarot Labs' introduction",
        url: "https://docs.google.com/presentation/d/1zjXOUuP_Dyiuxb5w35E4n-EWf8UD4x2oKvKlsIxG_-s",
        type: "slides"
      },
      {
        title: "Thomas Coratger's slides on zkVM",
        url: "https://hackmd.io/@tcoratger/B16moU0q1x#/",
        type: "slides"
      },
      {
        title: "Benedikt Wagner's slides on hash-based multi-signatures",
        url: "./resources/beam-calls/status-hash-sig.pdf",
        type: "slides"
      },
      {
        title: "Alex's slides on post-quantum distributed validators",
        url: "./resources/beam-calls/thbs_beamcall2.pdf",
        type: "slides"
      },
    ]
  },
  {
    id: "call-3",
    title: "Beam Call #3: P2P Networking",
    status: "upcoming",
    date: "April 4, 2025",
    summary:
      "Discussion on the latest developments in peer-to-peer networking.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    youtubeUrl: "#",
  },
  {
    id: "call-4",
    title: "Beam Call #4: 3SF (Finality)",
    status: "unscheduled",
    date: "TBD",
    summary:
      "Discussion on the finality of the 3SF protocol, including its implementation and implications on the network.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    youtubeUrl: "#",
  },
  {
    id: "call-5",
    title: "Beam Call #5: APS (Attester-Proposer Separation)",
    status: "unscheduled",
    date: "TBD",
    summary:
      "Exploration of the Attester-Proposer Separation (APS) concept, its benefits, and potential applications for the Beam Chain.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    youtubeUrl: "#",
  },
  {
    id: "call-6",
    title: "Beam Call #6: Rainbow Staking",
    status: "unscheduled",
    date: "TBD",
    summary:
      "Introduction to Rainbow Staking, a novel staking mechanism designed to enhance network security and decentralization.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    youtubeUrl: "#",
  },
  {
    id: "call-7",
    title: "Beam Call #7: PQ Sub-Spec",
    status: "unscheduled",
    date: "TBD",
    summary:
      "In-depth discussion on the Post-Quantum (PQ) sub-specification, focusing on its cryptographic aspects and integration into the Beam Chain.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    youtubeUrl: "#",
  },
  {
    id: "call-8",
    title: "Beam Call #8: P2P Sub-Spec",
    status: "unscheduled",
    date: "TBD",
    summary:
      "Examination of the Peer-to-Peer (P2P) sub-specification, covering its role in facilitating decentralized communication within the Beam Chain.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    youtubeUrl: "#",
  },
  {
    id: "call-9",
    title: "Beam Call #9: 3SF Sub-Spec",
    status: "unscheduled",
    date: "TBD",
    summary:
      "Delving into the 3SF sub-specification, including its technical details and implications for the network's finality.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    youtubeUrl: "#",
  },
  {
    id: "call-10",
    title: "Beam Call #10: APS Sub-Spec",
    status: "unscheduled",
    date: "TBD",
    summary:
      "Exploring the Attester-Proposer Separation (APS) sub-specification, its benefits, and potential applications in the Beam Chain.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    youtubeUrl: "#",
  },
  {
    id: "call-11",
    title: "Beam Call #11: Beam Spec (Part 1)",
    status: "unscheduled",
    date: "TBD",
    summary:
      "First part of the Beam specification discussion, covering the overall architecture and core components of the Beam Chain.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    youtubeUrl: "#",
  },
  {
    id: "call-12",
    title: "Beam Call #12: Beam Spec (Part 2)",
    status: "unscheduled",
    date: "TBD",
    summary:
      "Second part of the Beam specification discussion, focusing on the protocol's advanced features, security considerations, and future development plans.",
    thumbnail: "/placeholder.svg?height=180&width=320",
    youtubeUrl: "#",
  },
]
