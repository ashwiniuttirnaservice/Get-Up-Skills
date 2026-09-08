import { Sparkles, Box, Atom, Terminal, Code2, Database, PenTool, Cloud, Megaphone, Search, BarChart3, Brain, GitBranch } from "lucide-react";

function ToolBadge({ icon, name, gradient }) {
    return (
        <div className="group flex items-center gap-4 p-2 pr-8 rounded-full bg-white transition-all duration-300 hover:-translate-y-1 shadow-[0_12px_24px_-8px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_-8px_rgba(0,0,0,0.12)] cursor-default flex-shrink-0 border border-transparent hover:border-slate-100">
            <div className={`w-11 h-11 rounded-full flex items-center justify-center text-white shadow-inner bg-gradient-to-br ${gradient}`}>
                {icon}
            </div>
            <span className="text-[15px] font-extrabold text-[#334155] tracking-tight">{name}</span>
        </div>
    );
}

export default function ToolsMarquee() {
    return (
        {/* Set to the beautiful warm cream background to make the white chips pop */ }
        < section className = "w-full bg-[#fdfbf6] py-24 overflow-hidden relative" >

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marquee-reverse {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                    display: flex;
                    width: max-content;
                }
                .animate-marquee-reverse {
                    animation: marquee-reverse 45s linear infinite;
                    display: flex;
                    width: max-content;
                }
                .animate-marquee:hover, .animate-marquee-reverse:hover {
                    animation-play-state: paused;
                }
            `}</style>

    {/* Top title pill */ }
            <div className="flex flex-col items-center mb-16 relative z-20">
                <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-slate-200/60 bg-white/50 backdrop-blur-sm shadow-[0_8px_16px_-6px_rgba(0,0,0,0.05)]">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.6)] animate-pulse" />
                    <span className="text-[11px] font-extrabold text-slate-500 uppercase tracking-[0.2em] pt-0.5">
                        Master the tools top companies hire for
                    </span>
                    <Sparkles size={14} className="text-indigo-400" />
                </div>
            </div>

            <div className="relative w-full flex flex-col gap-7">
                
                {/* ─── ROW 1 ─── */}
                <div className="flex overflow-hidden relative w-full items-center">
                    {/* Fade Out Edges mapping strictly to the cream background */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#fdfbf6] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#fdfbf6] to-transparent z-10 pointer-events-none" />
                    
                    <div className="animate-marquee gap-6 px-3">
                        {/* Triplicated lists for absolute seamless ultra-wide screens */}
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex gap-6 pr-6">
                                <ToolBadge icon={<Box size={20}/>} name="Docker" gradient="from-rose-400 to-orange-400" />
                                <ToolBadge icon={<Atom size={20}/>} name="React" gradient="from-emerald-400 to-teal-500" />
                                <ToolBadge icon={<Terminal size={20}/>} name="Node.js" gradient="from-blue-500 to-indigo-600" />
                                <ToolBadge icon={<Code2 size={20}/>} name="Python" gradient="from-fuchsia-500 to-pink-500" />
                                <ToolBadge icon={<Database size={20}/>} name="SQL" gradient="from-amber-400 to-orange-500" />
                                <ToolBadge icon={<PenTool size={20}/>} name="Figma" gradient="from-sky-400 to-blue-500" />
                                <ToolBadge icon={<Cloud size={20}/>} name="AWS" gradient="from-violet-500 to-purple-600" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ─── ROW 2 ─── */}
                <div className="flex overflow-hidden relative w-full items-center">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#fdfbf6] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#fdfbf6] to-transparent z-10 pointer-events-none" />
                    
                    <div className="animate-marquee-reverse gap-6 px-3 ml-[-150px]">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex gap-6 pr-6">
                                <ToolBadge icon={<Database size={20}/>} name="MongoDB" gradient="from-purple-500 to-indigo-500" />
                                <ToolBadge icon={<Megaphone size={20}/>} name="Google Ads" gradient="from-pink-500 to-rose-400" />
                                <ToolBadge icon={<Search size={20}/>} name="SEO" gradient="from-orange-400 to-amber-500" />
                                <ToolBadge icon={<BarChart3 size={20}/>} name="Pandas" gradient="from-teal-400 to-emerald-500" />
                                <ToolBadge icon={<Brain size={20}/>} name="Scikit-learn" gradient="from-blue-500 to-cyan-500" />
                                <ToolBadge icon={<GitBranch size={20}/>} name="CI/CD" gradient="from-rose-500 to-pink-600" />
                                <ToolBadge icon={<Box size={20}/>} name="Kubernetes" gradient="from-emerald-400 to-green-500" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section >
    );
}
