const projects = [
    {
        name: 'Chess Platform',
        description:
            'a real-time PvP chess platform where you can play anyone, anywhere. built on a rust-based WebSocket service for low-latency gameplay. the interesting bit? post-game analysis powered by an LLM with a RAG pipeline, it compares your moves against stored embeddings and tells you exactly where things went wrong. WebAssembly handles the performance-critical client-side bits.',
        tech: ['Next.js', 'Rust', 'TypeScript', 'WebAssembly', 'Node.js', 'PostgreSQL', 'pgvector', 'MongoDB', 'Kubernetes'],
        github: 'https://github.com/Nihal-Ahamed-MS/chess-ai',
        live: 'https://chess-ai-1-7wvw.onrender.com/',
    },
    {
        name: 'Claude-Guardian',
        description:
            'a lightweight background daemon written in rust that sits quietly, intercepting claude code hooks before requests reach anthropic\'s servers, detecting and masking API keys, bearer tokens, AWS credentials, and IP addresses. TypeScript powers the real-time monitoring dashboard; SQLite logs every intercepted event.',
        tech: ['Rust', 'TypeScript', 'SQLite', 'Docker'],
        github: 'https://github.com/Nihal-Ahamed-MS/claude-guardian',
    },
];


export default function Page() {
    return (
        <div className="relative min-h-screen bg-[#faf9f6]">
            <div
                style={{
                    position: 'absolute',
                    borderRadius: 'inherit',
                    inset: '0px',
                    backgroundRepeat: 'repeat',
                    backgroundPosition: 'left top',
                    backgroundSize: '51.2px',
                    opacity: "0.45",
                    backgroundImage:
                        'url("https://framerusercontent.com/images/4FO4BnAJbz9awqCpxLhTlvveF4s.png")',
                    pointerEvents: 'none',
                }}
            />

            <nav className="fixed inset-x-0 top-0 z-10 border-b border-stone-100 bg-[#faf9f6]/80 backdrop-blur-md">
                <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
                    <span className="font-semibold tracking-tight text-stone-900">nihal.</span>
                    <div className="flex gap-6 text-sm text-stone-500">
                        <a href="#work" className="transition-colors hover:text-amber-600">
                            work
                        </a>
                        <a href="#contact" className="transition-colors hover:text-amber-600">
                            contact
                        </a>
                    </div>
                </div>
            </nav>

            <main className="mx-auto max-w-2xl px-6">
                <section className="pb-16 pt-36">
                    <p className="mb-5 text-xs font-medium uppercase tracking-widest text-stone-400">
                        bengaluru, india
                    </p>
                    <h1 className="mb-6 text-5xl font-bold tracking-tight text-stone-900">
                        hi, i&apos;m nihal.
                    </h1>
                    <div className="space-y-4 text-lg leading-relaxed text-stone-600">
                        <p>
                            senior software engineer & tech lead with 4+ years building things that scale. right
                            now i&apos;m a tech lead at{' '}
                            <span className="font-semibold text-stone-900">apiwiz</span>, leading an API
                            orchestration platform that ships to 200+ customers across APAC and the Middle East
                            and we made it into the{' '}
                            <span className="font-medium text-amber-600">gartner magic quadrant 2025</span>.
                        </p>
                    </div>
                    <div className="mt-8 flex items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                            open to opportunities
                        </span>
                    </div>
                </section>

                <div className="border-t border-stone-200" />

                <section className="space-y-4 py-16 text-base leading-relaxed text-stone-600">
                    <p className="mb-6 text-xs font-medium uppercase tracking-widest text-stone-400">about</p>
                    <p>
                        i&apos;m the kind of engineer who obsesses over numbers.{' '}
                        <span className="font-medium text-stone-900">8x render-blocking reduction</span>,{' '}
                        <span className="font-medium text-stone-900">3.5x DB throughput</span> these things
                        keep me up at night (in a good way).
                    </p>
                    <p>
                        when i&apos;m not shipping code, you&apos;ll probably catch me playing badminton 🏸 or at chessboard ♟️ .
                        the strategy, the patterns, the endgames it&apos;s not too different from system
                        design, honestly.
                    </p>
                    <p>
                        i&apos;m also exploring the Rust to build low-level systems for De-Fi platforms and intersection of AI with engineering for web2 products 
                    </p>
                </section>

                <div className="border-t border-stone-200" />

                <section id="work" className="py-16">
                    <p className="mb-8 text-xs font-medium uppercase tracking-widest text-stone-400">
                        projects
                    </p>
                    <div className="space-y-12">
                        {projects.map((project) => (
                            <div key={project.name}>
                                <div className="mb-2 flex items-start justify-between">
                                    <h3 className="text-lg font-semibold text-stone-900">{project.name}</h3>
                                    <div className="flex gap-3 text-sm">
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                className="text-stone-400 transition-colors hover:text-amber-600"
                                            >
                                                live ↗
                                            </a>
                                        )}
                                        <a
                                            href={project.github}
                                            className="text-stone-400 transition-colors hover:text-amber-600"
                                        >
                                            github ↗
                                        </a>
                                    </div>
                                </div>
                                <p className="mb-4 leading-relaxed text-stone-600">{project.description}</p>
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
                </section>

                <div className="border-t border-stone-200" />

                <section className="py-16">
                    <p className="mb-8 text-xs font-medium uppercase tracking-widest text-stone-400">
                        writing
                    </p>
                    <a
                        href="https://medium.com/@nihaljesiya/building-a-workflow-8f6837dfc69f"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all hover:border-amber-200 hover:shadow-md"
                    >
                        <div className="relative h-52 bg-gradient-to-br from-amber-50 via-stone-100 to-stone-200">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="space-y-2 text-center">
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/80 text-xl shadow-sm">
                                        ⚙️
                                    </div>
                                    <p className="text-xs font-medium text-stone-400">medium article</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-amber-600">
                                workflow engineering
                            </p>
                            <h3 className="mb-2 text-lg font-semibold text-stone-900 transition-colors group-hover:text-amber-600">
                                Workflow Builder | Reactflow | Redux
                            </h3>
                            <p className="text-sm leading-relaxed text-stone-500">
                                A walkthrough of how we built and scaled an API orchestration tool from the
                                ground up and the challenges we faced.
                            </p>
                            <span className="mt-4 inline-block text-sm font-medium text-amber-600">
                                read on medium ↗
                            </span>
                        </div>
                    </a>
                </section>

                <div className="border-t border-stone-200" />

                <section id="contact" className="py-16">
                    <p className="mb-6 text-xs font-medium uppercase tracking-widest text-stone-400">
                        let&apos;s talk
                    </p>
                    <p className="mb-4 text-2xl font-bold tracking-tight text-stone-900">
                        got something interesting? i&apos;d love to hear it.
                    </p>
                    <p className="mb-8 text-stone-600">
                        whether it&apos;s a project, an opportunity, or just a good chess puzzle; shoot me a
                        message.
                    </p>
                    <a
                        href="mailto:nihaljesiya@gmail.com"
                        className="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-amber-600"
                    >
                        nihaljesiya@gmail.com ↗
                    </a>
                    <div className="mt-8 flex gap-5 text-sm">
                        <a target="_blank" href="https://github.com/Nihal-Ahamed-MS" className="text-stone-400 transition-colors hover:text-amber-600">
                            github
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/nihal-ahamed/" className="text-stone-400 transition-colors hover:text-amber-600">
                            linkedin
                        </a>
                        <a target="_blank" href="https://x.com/NihalAh33111547" className="text-stone-400 transition-colors hover:text-amber-600">
                            twitter
                        </a>
                    </div>
                </section>
            </main>

            <footer className="border-t border-stone-100 py-6 text-center text-xs text-stone-400">
                nihal ahamed m s · {new Date().getFullYear()}
            </footer>
        </div>
    );
}
