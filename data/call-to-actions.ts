import {
  BookOpen,
  BarChart3,
  KeyRound,
  Package,
  Youtube,
  MessageCircle,
  Twitter,
  LucideIcon,
} from 'lucide-react';

export interface CallToAction {
  title: string;
  url: string;
  icon: LucideIcon;
  type: 'repo' | 'community';
  description?: string;
}

export const callToActionsData: CallToAction[] = [
  {
    title: 'leanSpec',
    url: 'https://github.com/leanEthereum/leanSpec',
    icon: BookOpen,
    type: 'repo',
    description: 'Specifications for the Lean Consensus work',
  },
  {
    title: 'leanSig',
    url: 'https://github.com/leanEthereum/leanSig',
    icon: KeyRound,
    type: 'repo',
    description: 'Post-quantum signature scheme reference implementation',
  },
  {
    title: 'leanMultisig',
    url: 'https://github.com/leanEthereum/leanMultisig',
    icon: Package,
    type: 'repo',
    description: 'Post-quantum signature aggregation scheme reference implementation',
  },
  {
    title: 'leanMetrics',
    url: 'https://github.com/leanEthereum/leanMetrics',
    icon: BarChart3,
    type: 'repo',
    description: 'Specifications for Lean Consensus metrics',
  },
  {
    title: 'PQ Interop Breakout Meetings',
    url: 'https://www.youtube.com/playlist?list=PLJqWcTqh_zKF_Q9HNXBLW_AtktsjToTIu',
    icon: Youtube,
    type: 'community',
    description: 'Re-watch the weekly breakout discussions',
  },
  {
    title: 'Eth R&D Discord',
    url: 'https://discord.gg/ZJWqHacjGK',
    icon: MessageCircle,
    type: 'community',
    description: 'Join the #post-quantum channel',
  },
  {
    title: '@leanEthereum',
    url: 'https://x.com/leanEthereum',
    icon: Twitter,
    type: 'community',
    description: 'Follow for updates on X',
  },
];
