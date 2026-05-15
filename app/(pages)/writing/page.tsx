import Link from 'next/link';

const projects = [
    {
        id: 'blog1',
        name: 'Workflow Builder | Reactflow | Redux',
        tag: "workflow engineering",
        from: "medium article",
        readOn: "medium",
        description:
            'A walkthrough of how we built and scaled an API orchestration tool from the ground up and the challenges we faced.',
        link: 'https://medium.com/@nihaljesiya/building-a-workflow-8f6837dfc69f',
    },
    {
        id: 'blog2',
        name: '2x Performance improvement in JSON.Stringify()',
        tag: "performance improvement",
        from: "linkedin article",
        readOn: "linkedin",
        description:
            'Explored the V8 engine upgrade that delivers a 2x performance boost to native JSON.stringify()',
        link: 'https://www.linkedin.com/pulse/2x-performance-improvement-jsonstringify-nihal-ahamed-mjmuc/?trackingId=YWVutgOlQ3m5EM%2FrpzMZDQ%3D%3D',
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
                    <Link
                        href="/"
                        className="font-semibold tracking-tight text-stone-900 transition-colors hover:text-amber-600"
                    >
                        nihal.
                    </Link>
                    <div className="flex gap-6 text-sm text-stone-500">
                        <a href="/work" className="transition-colors hover:text-amber-600">
                            work
                        </a>
                        <a href="/writing" className="font-medium text-stone-900">
                            writing
                        </a>
                        <Link href="/#contact" className="transition-colors hover:text-amber-600">
                            contact
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="mx-auto max-w-2xl px-6 pt-36 pb-24">
                <p className="mb-2 text-xs font-medium tracking-widest text-stone-400 uppercase">
                    writings
                </p>
                <h1 className="mb-16 text-4xl font-bold tracking-tight text-stone-900">
                    things i&apos;ve written.
                </h1>

                <div className="space-y-16">
                    {projects.map((project) => (
                        <section key={project.id} className="">
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
                                            <p className="text-xs font-medium text-stone-400">
                                                {project.from}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="mb-2 text-xs font-medium tracking-widest text-amber-600 uppercase">
                                        {project.tag}
                                    </p>
                                    <h3 className="mb-2 text-lg font-semibold text-stone-900 transition-colors group-hover:text-amber-600">
                                        {project.name}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-stone-500">
                                        {project.description}
                                    </p>
                                    <span className="mt-4 inline-block text-sm font-medium text-amber-600">
                                        read on {project.readOn} ↗
                                    </span>
                                </div>
                            </a>
                        </section>
                    ))}
                </div>
            </main>
        </div>
    );
}
