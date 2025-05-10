'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/primitives';
import { Check, Rocket } from 'lucide-react';
import { keyResourcesData } from '@/data/key-resources';

export function BeamChainConcepts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      {/* Long-term Vision Card */}
      <Card className="col-span-1 bg-white border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle>Long-term Vision</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 p-0 md:pl-5 text-sm list-none">
            <li className="flex items-start">
              <Rocket className="h-4 w-4 mr-2 text-slate-500 mt-0.5 flex-shrink-0" />
              <span>
                Complete the roadmap in 4-5 years so Ethereum can go into maintenance mode
              </span>
            </li>
            <li className="flex items-start">
              <Rocket className="h-4 w-4 mr-2 text-slate-500 mt-0.5 flex-shrink-0" />
              <span>Start thinking about ossification like Bitcoin</span>
            </li>
            <li className="flex items-start">
              <Rocket className="h-4 w-4 mr-2 text-slate-500 mt-0.5 flex-shrink-0" />
              <span>
                Renaissance of solo validating through "Zen Staking," "Fish Staking," and "Fiverr
                Staking"
              </span>
            </li>
            <li className="flex items-start">
              <Rocket className="h-4 w-4 mr-2 text-slate-500 mt-0.5 flex-shrink-0" />
              <span>Clean and simple protocol worthy of a neutral global base layer</span>
            </li>
            <li className="flex items-start">
              <Rocket className="h-4 w-4 mr-2 text-slate-500 mt-0.5 flex-shrink-0" />
              <span>Fully verifying light clients that can work on even the smallest devices</span>
            </li>
          </ul>
        </CardContent>
        <CardHeader>
          <CardTitle>Rationales</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 p-0 md:pl-5 text-sm list-none">
            <li className="flex items-start">
              <Check className="h-4 w-4 mr-2 text-slate-500 mt-0.5 flex-shrink-0" />
              <span>
                Small incremental upgrades are only applicable to certain types of changes
              </span>
            </li>
            <li className="flex items-start">
              <Check className="h-4 w-4 mr-2 text-slate-500 mt-0.5 flex-shrink-0" />
              <span>Governance batching optimization: batch everything to a single fork</span>
            </li>
            <li className="flex items-start">
              <Check className="h-4 w-4 mr-2 text-slate-500 mt-0.5 flex-shrink-0" />
              <span>Avoid existing technical debts</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Key Resources Card */}
      <Card className="col-span-1 bg-white border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle>Key Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 p-0 md:pl-5 text-sm list-none">
            {keyResourcesData.map((resource, index) => (
              <li key={index} className="flex items-start">
                <resource.icon className="h-4 w-4 mr-2 text-slate-500 mt-0.5 flex-shrink-0" />
                <a href={resource.url} className="text-blue-600 hover:underline">
                  {resource.title}
                </a>
                <span className="text-gray-500 pl-1">({resource.date})</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
