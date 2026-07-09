"use client";

import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r pr-4 hidden md:block">
      <nav className="py-4">
        <ul className="space-y-2 text-sm">
          <li>
            <a href="/" className="block px-3 py-2 rounded hover:bg-slate-100">Dashboard</a>
          </li>
          <li>
            <a href="/wallets" className="block px-3 py-2 rounded hover:bg-slate-100">Wallets</a>
          </li>
          <li>
            <a href="/transactions" className="block px-3 py-2 rounded hover:bg-slate-100">Transactions</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
