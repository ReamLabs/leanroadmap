import React from 'react';

export function Footer() {
  return (
    <footer className="text-center text-sm text-slate-500 py-8">
      Made with ❤️ by{' '}
      <a href="https://twitter.com/ReamLabs" className="text-slate-600 hover:text-slate-900">
        ReamLabs
      </a>{' '}
      | Contribute on{' '}
      <a
        href="https://github.com/ReamLabs/leanroadmap"
        className="text-slate-600 hover:text-slate-900"
      >
        GitHub
      </a>
    </footer>
  );
}
