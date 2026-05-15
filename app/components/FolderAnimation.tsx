'use client';

import Link from 'next/link';

const files = [
    { label: 'council',    href: '/work#council' },
    { label: 'claude-guardian',  href: '/work#claude-guardian' },
    { label: 'chess-llm',      href: '/work#chess-platform' },
];

const paperClass = ['folder-paper-1', 'folder-paper-2', 'folder-paper-3'];
const paperBg    = ['#fdfaf2', '#f5f0e6', '#ede8dc'];
const lineColor  = ['#ddd0a0', '#d4c48e', '#c8b98a'];

export default function FolderAnimation() {
    return (
        <div
            className="cursor-pointer folder-wrap inline-block cursor-default"
            style={{ perspective: '500px' }}
        >
            <div style={{ paddingTop: 0 }}>
                <div className="folder relative" style={{ width: 76, height: 52 }}>

                    {/* folder body */}
                    <div
                        className="absolute bottom-0 left-0 rounded-b-lg rounded-tr-lg"
                        style={{
                            width: 76,
                            height: 44,
                            background: 'linear-gradient(150deg, #e8c84a 0%, #c8a620 100%)',
                            boxShadow: '0 4px 16px rgba(160,120,0,0.22)',
                            zIndex: 1,
                        }}
                    />

                    {/* folder tab */}
                    <div
                        className="absolute rounded-t-md"
                        style={{ top: 0, left: 0, width: 28, height: 10, background: '#c8a620', zIndex: 1 }}
                    />

                    {/* papers — back to front */}
                    {[...files].reverse().map((file, i) => {
                        const idx = files.length - 1 - i; // 2, 1, 0
                        return (
                            <Link
                                key={file.href}
                                href={file.href}
                                className={`${paperClass[idx]} absolute rounded-sm`}
                                style={{
                                    bottom: 6,
                                    left: 9,
                                    width: 58,
                                    height: 36,
                                    background: paperBg[idx],
                                    zIndex: 2 + idx,
                                    cursor: 'pointer',
                                    textDecoration: 'none',
                                    display: 'block',
                                }}
                            >
                                <div style={{ margin: '6px 8px 0', display: 'flex', flexDirection: 'column', gap: 3 }}>
                                    <span style={{ fontSize: 7, fontWeight: 600, color: '#7a6a3a', fontFamily: 'monospace', letterSpacing: '0.04em' }}>
                                        {file.label}
                                    </span>
                                    <div style={{ height: 2, borderRadius: 2, background: lineColor[idx], width: '80%' }} />
                                    <div style={{ height: 2, borderRadius: 2, background: lineColor[idx], width: '55%' }} />
                                </div>
                            </Link>
                        );
                    })}

                    {/* flap */}
                    <div
                        className="folder-flap absolute left-0"
                        style={{
                            top: 8,
                            width: 76,
                            height: 38,
                            background: 'linear-gradient(150deg, #f2d84e 0%, #d4ae28 100%)',
                            borderRadius: '0 6px 0 0',
                            transformOrigin: 'top center',
                            zIndex: 5,
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
