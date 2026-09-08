import {
    ArrowRight,
    PlayCircle,
    GraduationCap,
    Trophy
} from "lucide-react";
import CodeTypewriter from "./CodeTypewriter";
import Reveal from "./Reveal";

export default function Hero() {
    return (
        <section className="relative w-full overflow-x-hidden bg-[#fafafa] text-slate-900 pt-8 pb-20 lg:pt-14 lg:pb-32">

            <style>{`
                @keyframes float {
                    0% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-12px) rotate(1deg); }
                    100% { transform: translateY(0px) rotate(0deg); }
                }
                @keyframes float-delayed {
                    0% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(-1deg); }
                    100% { transform: translateY(0px) rotate(0deg); }
                }
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.95); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 8s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float-delayed 7s ease-in-out 3s infinite;
                }
            `}</style>

            {/* ─── Ultra Clean Light Background with Living Mesh ─── */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

                {/* Optional Textured Background Image Layer */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.25] mix-blend-overlay"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=3000&auto=format&fit=crop')" }}
                />

                {/* Animated Brand-colored highlight blobs */}
                <div className="absolute top-[5%] right-[5%] w-[400px] xl:w-[600px] h-[400px] xl:h-[600px] bg-sky-300/30 rounded-full blur-[100px] animate-blob mix-blend-multiply" />
                <div className="absolute top-[25%] right-[15%] w-[400px] xl:w-[500px] h-[400px] xl:h-[500px] bg-purple-300/30 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply" />
                <div className="absolute top-[45%] right-[-5%] w-[400px] xl:w-[500px] h-[400px] xl:h-[500px] bg-pink-300/30 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply" />

                {/* Ambient glow behind text */}
                <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-sky-200/20 rounded-full blur-[120px] pointer-events-none" />

                {/* Crisp grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                        maskImage: "linear-gradient(to bottom, #000 10%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to bottom, #000 10%, transparent 100%)"
                    }}
                />
            </div>

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">

                <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8 relative">

                    {/* ─── LEFT COLUMN ─── */}
                    <div className="lg:col-span-6 flex flex-col items-start text-left relative z-20 xl:pr-10 pb-10 lg:pb-0">
                        <Reveal>
                            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-purple-100 bg-purple-50/50 backdrop-blur-sm text-[13px] font-bold text-purple-700 shadow-[0_2px_10px_-4px_rgba(168,85,247,0.4)] transition-all hover:bg-purple-100/50">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-600" />
                                </span>
                                <span>New batches starting soon. Limited seats.</span>
                            </div>
                        </Reveal>

                        <Reveal delay={100}>
                            <h1 className="mt-8 text-[52px] sm:text-[62px] xl:text-[76px] font-extrabold tracking-tight text-slate-900 leading-[1.05]">
                                Master the skills that <br className="hidden lg:block" />
                                <span className="relative inline-block mt-2">
                                    <span className="absolute -inset-1 blur-lg bg-gradient-to-r from-sky-300 via-purple-300 to-pink-300 opacity-40 rounded-xl pointer-events-none" />
                                    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-purple-600 to-pink-500 drop-shadow-sm">
                                        get you hired.
                                    </span>
                                </span>
                            </h1>
                        </Reveal>

                        <Reveal delay={200}>
                            <p className="mt-7 text-[18px] leading-[1.7] text-slate-500 max-w-[500px] font-medium">
                                Industry-designed bootcamps in web development, data analytics, and design. Powered by real-world projects, live mentorship, and verified certifications.
                            </p>
                        </Reveal>

                        <Reveal delay={300}>
                            <div className="mt-12 flex flex-wrap items-center gap-5">
                                <a
                                    href="#courses"
                                    className="group relative inline-flex items-center gap-2 px-9 py-4 rounded-full bg-slate-900 text-[15px] font-bold text-white transition-all shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] hover:-translate-y-1 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                                    <span className="relative z-10 flex items-center gap-2">Start Learning <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></span>
                                </a>
                                <a
                                    href="#how-it-works"
                                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-slate-200 bg-white/70 backdrop-blur-sm text-[15px] font-bold text-slate-700 transition-all shadow-sm hover:shadow-lg hover:-translate-y-1"
                                >
                                    <div className="p-1 rounded-full bg-slate-100 group-hover:bg-blue-50 transition-colors">
                                        <PlayCircle size={18} className="text-slate-500 group-hover:text-blue-600 transition-colors" />
                                    </div>
                                    <span>How it works</span>
                                </a>
                            </div>
                        </Reveal>
                    </div>

                    {/* ─── RIGHT COLUMN (Code Window) ─── */}
                    <Reveal delay={400} className="lg:col-span-6 relative z-10 hidden sm:block">
                        <div className="relative mx-auto w-full max-w-[650px] group">

                            {/* Ambient drop-glow reflecting the code block */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-sky-400 via-purple-400 to-pink-400 rounded-[2.5rem] blur-2xl transition-all duration-700 opacity-20 pointer-events-none group-hover:opacity-30 group-hover:blur-3xl" />

                            {/* Premium Glass Code Terminal Wrapper */}
                            <div className="relative w-full rounded-2xl bg-gradient-to-br from-white/20 to-white/0 p-[1px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] transition-transform duration-700 hover:-translate-y-2 hover:rotate-[0.5deg]">
                                <div className="relative h-full w-full rounded-2xl bg-[#0b1120] overflow-hidden leading-relaxed border border-slate-800">

                                    {/* Mac-style Window Header */}
                                    <div className="flex items-center justify-between px-5 py-3.5 bg-[#121b2f] border-b border-white/5 relative z-10">
                                        <div className="flex gap-2">
                                            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                                        </div>
                                        <div className="text-[10px] font-mono tracking-widest text-[#64748b] bg-black/40 px-4 py-1.5 rounded-full border border-white/5">
                                            get-up-skill.js
                                        </div>
                                    </div>

                                    {/* Code Editor Body */}
                                    <div className="p-4 sm:p-6 md:p-8 min-h-[300px] xl:min-h-[400px] bg-transparent flex items-center justify-center relative">
                                        {/* Subtle internal grid for code block */}
                                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
                                        <CodeTypewriter />
                                    </div>

                                </div>
                            </div>

                            {/* Floating Left Stat Chip - Verified Certificate */}
                            <div className="absolute -left-6 lg:-left-12 top-[10%] z-30 bg-white/70 border border-white rounded-[20px] p-3 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.15)] flex items-center gap-4 animate-float backdrop-blur-xl hidden sm:flex transition-transform hover:scale-105">
                                <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-[14px] shadow-inner border border-blue-100 text-blue-600">
                                    <GraduationCap size={22} className="drop-shadow-sm" />
                                </div>
                                <div className="pr-3">
                                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-extrabold mb-0.5">Verified</p>
                                    <p className="font-black text-slate-800 text-sm sm:text-[15px] tracking-tight">Certificates</p>
                                </div>
                            </div>

                            {/* Floating Right Stat Chip - Success Rate */}
                            <div className="absolute -right-4 lg:-right-10 bottom-[12%] z-30 bg-white/70 border border-white rounded-[20px] p-3 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.15)] flex items-center gap-4 animate-float-delayed backdrop-blur-xl hidden sm:flex transition-transform hover:scale-105">
                                <div className="p-3 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-[14px] shadow-inner border border-emerald-100 text-emerald-600">
                                    <Trophy size={22} className="drop-shadow-sm" />
                                </div>
                                <div className="pr-3">
                                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-extrabold mb-0.5">Success Rate</p>
                                    <p className="font-black text-slate-800 text-sm sm:text-[15px] tracking-tight">98% Placed</p>
                                </div>
                            </div>

                        </div>
                    </Reveal>
                </div>

            </div>
        </section>
    );
}
