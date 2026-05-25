import Image from 'next/image';
import FolderAnimation from '@/app/components/FolderAnimation';

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
                    opacity: '0.45',
                    backgroundImage:
                        'url("https://framerusercontent.com/images/4FO4BnAJbz9awqCpxLhTlvveF4s.png")',
                    pointerEvents: 'none',
                }}
            />

            <nav className="fixed inset-x-0 top-0 z-10 border-b border-stone-100 bg-[#faf9f6]/80 backdrop-blur-md">
                <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
                    <span className="font-semibold tracking-tight text-stone-900">nihal.</span>
                    <div className="flex gap-6 text-sm text-stone-500">
                        <a href="/work" className="transition-colors hover:text-amber-600">
                            work
                        </a>
                        <a href="/writing" className="transition-colors hover:text-amber-600">
                            writing
                        </a>
                        <a href="#contact" className="transition-colors hover:text-amber-600">
                            contact
                        </a>
                    </div>
                </div>
            </nav>

            <main className="mx-auto max-w-2xl px-6">
                <section className="pt-36 pb-16">
                    <p className="mb-5 text-xs font-medium tracking-widest text-stone-400 uppercase">
                        bengaluru, india
                    </p>
                    <h1 className="mb-6 text-5xl font-bold tracking-tight text-stone-900">
                        hi, i&apos;m nihal.
                    </h1>
                    <div className="space-y-4 text-lg leading-relaxed text-stone-600">
                        <p className="">
                            senior software engineer & tech lead with 4+ years building things that
                            scale. right now i&apos;m at{' '}
                            <span className="font-semibold text-stone-900">apiwiz</span>, leading an
                            API orchestration platform that ships to 10+ enterprise customers across APAC and
                            the Middle East. And also my team&apos;s efforts got us into{' '}
                            <a
                                href="https://www.gartner.com/document/7020998?ref=solrAll&refval=500152819&toggle=1&viewType=Full"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative font-medium text-amber-600"
                            >
                                gartner magic quadrant 2025
                                <svg
                                    className="pointer-events-none absolute -bottom-2.5 left-0 w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    height="10"
                                    viewBox="0 0 200 10"
                                    preserveAspectRatio="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0,6 C5,2 12,9 22,5 C30,2 38,8 48,6 C57,3 63,8 74,5 C83,2 90,9 102,5 C111,2 119,8 130,6 C139,3 147,8 157,5 C165,2 174,9 184,5 C191,2 197,7 200,5"
                                        fill="none"
                                        stroke="#ccb41a"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                            .
                        </p>
                    </div>
                    <a href='https://www.linkedin.com/in/nihal-ahamed/' target='_blank' className="cursor-pointer mt-8 flex items-center gap-3 rounded-full border border-green-300 bg-green-50 px-4 py-2" style={{ width: "max-content", backgroundColor: "#cdf5d9" }}>
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                        <div className="inline-flex items-center gap-1.5 text-sm font-medium text-green-600">
                             open to opportunities
                        </div>
                    </a>
                </section>

                <div className="border-t border-stone-200 pb-12" />

                <section className="pb-12 space-y-4 text-2xl font-semibold leading-relaxed text-stone-800 [word-spacing:0.8rem]">
                    <p className="leading-[2.3]">
                        i architect applications that make developers fall harder than they&apos;d like to admit. the best codebases i&apos;ve shipped were never written alone,{' '}
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7279855739458727936/" target="_blank" rel="noopener noreferrer" className="inline-block overflow-hidden rounded-xl border-4 border-white shadow-md transition-transform duration-300 ease-out hover:scale-105 hover:rotate-1 cursor-pointer align-middle mx-1">
                            <Image
                                src="/assets/team.jpeg"
                                alt="the team"
                                width={80}
                                height={55}
                                className="object-cover block"
                                style={{ width: 80, height: 55 }}
                            />
                        </a>{' '}
                        Aristotle had it right  — &ldquo;the whole is greater than the sum of its parts.&rdquo;
                    </p>

                    <p className="leading-[2.3]" style={{ marginTop: "3rem" }}>
                        while i'm away you can find me at badminton{' '}
                        <span className="inline-block overflow-hidden rounded-xl border-4 border-white shadow-md transition-transform duration-300 ease-out hover:scale-105 hover:rotate-1 cursor-pointer align-middle mx-1">
                            <Image
                                src="/assets/badminton.jpg"
                                alt="badminton court"
                                width={40}
                                height={50}
                                className="object-cover block"
                                style={{ width: 40, height: 50 }}
                            />
                        </span>{' '}
                        or at chessboard. the strategy, the patterns, the endgames it&apos;s not too different from
                        system design, honestly.
                    </p>

                    <p className="leading-[2.3]" style={{ marginTop: "3.2rem" }}>
                        okay, enough of bragging about myself, let&apos;s talk business{' '}
                        <span className="inline-block align-middle mx-2">
                            <FolderAnimation />
                        </span>
                        i've been building products around LLM to ease my development and learning Rust to build low-level systems as well
                    </p>
                </section>

                {/* <section className="space-y-4 py-16 text-base leading-relaxed text-stone-600">
                    <p className="mb-6 text-xs font-medium tracking-widest text-stone-400 uppercase">
                        about
                    </p>
                    <p>
                        i&apos;m the kind of engineer who obsesses over numbers.{' '}
                        <span className="font-medium text-stone-900">
                            8x render-blocking reduction
                        </span>
                        , <span className="font-medium text-stone-900">3.5x DB throughput</span>{' '}
                        these things keep me up at night (in a good way).
                    </p>
                    <p>
                        when i&apos;m not shipping code, you&apos;ll probably catch me playing
                        badminton 🏸 or at chessboard ♟️ . the strategy, the patterns, the endgames
                        it&apos;s not too different from system design, honestly.
                    </p>
                    <p>
                        i&apos;m also exploring the Rust to build low-level systems for De-Fi
                        platforms and intersection of AI with engineering for web2 products
                    </p>
                </section> */}

                {/* <div className="border-t border-stone-200" /> */}

                <div className="border-t border-stone-200" />

                <section id="contact" className="py-16">
                    <p className="mb-6 text-xs font-medium tracking-widest text-stone-400 uppercase">
                        let&apos;s talk
                    </p>
                    <p className="mb-4 text-2xl font-bold tracking-tight text-stone-900">
                        got something interesting? i&apos;d love to hear it.
                    </p>
                    <p className="mb-8 text-stone-600">
                        whether it&apos;s a project, an opportunity, or just a good chess puzzle;
                        shoot me a message.
                    </p>
                    <a
                        href="mailto:nihaljesiya@gmail.com"
                        className="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-amber-600"
                    >
                        nihaljesiya@gmail.com ↗
                    </a>
                    <div className="mt-8 flex gap-5 text-sm">
                        <a
                            target="_blank"
                            href="https://github.com/Nihal-Ahamed-MS"
                            className="text-stone-400 transition-colors hover:text-amber-600"
                        >
                            github
                        </a>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/nihal-ahamed/"
                            className="text-stone-400 transition-colors hover:text-amber-600"
                        >
                            linkedin
                        </a>
                        <a
                            target="_blank"
                            href="https://x.com/NihalAh33111547"
                            className="text-stone-400 transition-colors hover:text-amber-600"
                        >
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
