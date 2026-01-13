import React from 'react';
import { TrendingUp, ShieldCheck, Zap, Lock } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white selection:bg-blue-500/30">
      {/* 1. NAVIGATIE */}
      <nav className="border-b border-white/5 bg-[#0B1120]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold">B</div>
            <span className="text-xl font-bold tracking-tight uppercase">BeursAnalyse<span className="text-blue-500">Pro</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#methode" className="hover:text-white transition">Methode</a>
            <a href="#resultaten" className="hover:text-white transition">Resultaten</a>
            <a href="#pricing" className="hover:text-white transition">Tarieven</a>
          </div>
          <button className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-slate-200 transition">
            Leden Login
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTIE */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6 uppercase tracking-widest">
            <Zap size={14} /> Nieuwe Deep Dive: Palantir (PLTR) nu beschikbaar
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
            Institutionele Analyse voor de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Particuliere Belegger
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed">
            Geen vage tips, maar diepgravende rapporten op basis van fundamentele data en technische precisie. Krijg direct toegang tot onze Top 10 selectie voor 2026.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-600/20 transition">
              Bekijk de Top 10 Selectie
            </button>
            <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition border border-white/10">
              Hoe wij werken
            </button>
          </div>
        </div>
      </section>

      {/* 3. TEASER TABEL (Psychologische Trigger) */}
      <section className="max-w-5xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-[#161D2F] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-6 border-b border-white/5 flex justify-between items-center">
            <h3 className="font-bold flex items-center gap-2 uppercase tracking-wider text-sm text-slate-400">
              <TrendingUp size={16} className="text-emerald-500" /> Voorbeeld van de Selectie
            </h3>
            <span className="text-xs text-slate-500 font-mono italic underline">Laatst bijgewerkt: Jan 2026</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-black/20 text-slate-500 text-[10px] uppercase font-bold tracking-widest">
                  <th className="px-8 py-4">Ticker</th>
                  <th className="px-8 py-4">Status</th>
                  <th className="px-8 py-4 text-right">Potentieel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="bg-white/[0.02]">
                  <td className="px-8 py-6 font-mono font-bold text-blue-400 uppercase tracking-tighter">PLTR</td>
                  <td className="px-8 py-6"><span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold uppercase">Strong Buy</span></td>
                  <td className="px-8 py-6 text-right font-bold text-emerald-400">+38.5%</td>
                </tr>
                {/* Vervaagde Rijen */}
                <tr className="blur-[6px] opacity-40 select-none">
                  <td className="px-8 py-6 font-mono font-bold uppercase">XXXX</td>
                  <td className="px-8 py-6"><span className="bg-slate-500/20 text-slate-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Premium</span></td>
                  <td className="px-8 py-6 text-right font-bold">+24.1%</td>
                </tr>
                <tr className="blur-[6px] opacity-25 select-none">
                  <td className="px-8 py-6 font-mono font-bold uppercase">XXXX</td>
                  <td className="px-8 py-6"><span className="bg-slate-500/20 text-slate-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Premium</span></td>
                  <td className="px-8 py-6 text-right font-bold">+52.0%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-8 bg-blue-600/5 flex flex-col items-center justify-center text-center">
            <Lock className="text-blue-500 mb-3" size={24} />
            <p className="text-sm font-medium mb-4">Ontgrendel de overige 9 analyses en de volledige Top 10 kooplijst.</p>
            <button className="text-blue-400 font-bold hover:underline">Kies een abonnement</button>
          </div>
        </div>
      </section>

      {/* 4. PRICING SECTIE */}
      <section id="pricing" className="py-32 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16">Eenvoudige Tarieven, Geen Verborgen Kosten</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* MAANDELIJKS */}
          <div className="bg-[#161D2F] border border-white/10 p-10 rounded-3xl hover:border-blue-500/50 transition">
            <h3 className="text-xl font-bold mb-4">Maandelijks</h3>
            <div className="text-5xl font-extrabold mb-6">€49<span className="text-lg text-slate-500 font-normal">/mnd</span></div>
            <p className="text-slate-400 mb-8 text-sm">Altijd opzegbaar. Ideaal om de kwaliteit te testen.</p>
            <button className="w-full py-4 rounded-xl border border-white/20 font-bold hover:bg-white hover:text-black transition">Kies Maand</button>
          </div>
          {/* JAARLIJKS - POPULAIR */}
          <div className="bg-blue-600 p-10 rounded-3xl relative overflow-hidden shadow-2xl shadow-blue-600/20">
             <div className="absolute top-0 right-0 bg-emerald-400 text-black text-[10px] font-black px-8 py-1 rotate-45 translate-x-6 translate-y-4 uppercase tracking-tighter">Bespaar 25%</div>
            <h3 className="text-xl font-bold mb-4">Jaarabonnement</h3>
            <div className="text-5xl font-extrabold mb-6">€450<span className="text-lg text-blue-200 font-normal">/jr</span></div>
            <p className="text-blue-100 mb-8 text-sm">De meest gekozen optie voor serieuze beleggers.</p>
            <button className="w-full bg-white text-black py-4 rounded-xl font-bold hover:bg-slate-100 transition">Word nu Premium Lid</button>
          </div>
        </div>
      </section>
    </div>
  );
}
