import Link from 'next/link';

const projects = [
    {
        id: 'chess-platform',
        name: 'Chess Platform',
        description:
            'a real-time PvP chess platform where you can play anyone, anywhere. built on a rust-based WebSocket service for low-latency gameplay. the interesting bit? post-game analysis powered by an LLM with a RAG pipeline, it compares your moves against stored embeddings and tells you exactly where things went wrong. WebAssembly handles the performance-critical client-side bits.',
        tech: [
            'Next.js',
            'Rust',
            'TypeScript',
            'WebAssembly',
            'Node.js',
            'PostgreSQL',
            'pgvector',
            'MongoDB',
            'Kubernetes',
        ],
        github: 'https://github.com/Nihal-Ahamed-MS/chess-ai',
        live: 'https://chess-ai-1-7wvw.onrender.com/',
    },
    {
        id: 'claude-guardian',
        name: 'Claude-Guardian',
        description:
            "a lightweight background daemon written in rust that sits quietly, intercepting claude code hooks before requests reach anthropic's servers, detecting and masking API keys, bearer tokens, AWS credentials, and IP addresses. TypeScript powers the real-time monitoring dashboard; SQLite logs every intercepted event.",
        tech: ['Rust', 'TypeScript', 'SQLite', 'Docker'],
        github: 'https://github.com/Nihal-Ahamed-MS/claude-guardian',
        live: undefined,
    },
];

export default function WorkPage() {
    return (
        <div className="relative min-h-screen bg-[#faf9f6]">
            <div
                style={{
                    position: 'absolute',
                    inset: '0px',
                    backgroundRepeat: 'repeat',
                    backgroundPosition: 'left top',
                    backgroundSize: '51.2px',
                    opacity: '0.45',
                    backgroundImage:
                        'url("https://framerusercontent.com/images/4FO4BnAJbz9awqCpxLhTlvveF4s.png")',
                    pointerEvents: 'none',
                }}
            />

            <nav className="fixed inset-x-0 top-0 z-10 border-b border-stone-100 bg-[#faf9f6]/80 backdrop-blur-md">
                <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
                    <Link href="/" className="font-semibold tracking-tight text-stone-900 hover:text-amber-600 transition-colors">
                        nihal.
                    </Link>
                    <div className="flex gap-6 text-sm text-stone-500">
                        <a href="/work" className="text-stone-900 font-medium">work</a>
                        <a href="/writing" className="transition-colors hover:text-amber-600">
                            writing
                        </a>
                        <Link href="/#contact" className="transition-colors hover:text-amber-600">contact</Link>
                    </div>
                </div>
            </nav>

            <main className="mx-auto max-w-2xl px-6 pt-36 pb-24">
                <p className="mb-2 text-xs font-medium uppercase tracking-widest text-stone-400">
                    projects
                </p>
                <h1 className="mb-16 text-4xl font-bold tracking-tight text-stone-900">
                    things i&apos;ve built.
                </h1>

                <div className="space-y-16">
                    {projects.map((project) => (
                        <div key={project.id} id={project.id} className="scroll-mt-28">
                            <div className="mb-3 flex items-start justify-between">
                                <h2 className="text-xl font-semibold text-stone-900">{project.name}</h2>
                                <div className="flex gap-3 text-sm">
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-stone-400 transition-colors hover:text-amber-600"
                                        >
                                            live ↗
                                        </a>
                                    )}
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-stone-400 transition-colors hover:text-amber-600"
                                    >
                                        github ↗
                                    </a>
                                </div>
                            </div>
                            <p className="mb-5 leading-relaxed text-stone-600">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-xs text-amber-700"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
