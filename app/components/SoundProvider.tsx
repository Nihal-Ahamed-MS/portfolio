'use client';

import { useEffect } from 'react';

let audioCtx: AudioContext | null = null;

function getCtx() {
    if (!audioCtx) audioCtx = new AudioContext();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
}

function playTick() {
    const ctx = getCtx();
    if (ctx.state !== 'running') return;

    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1100, now);
    osc.frequency.exponentialRampToValueAtTime(700, now + 0.018);

    const oscGain = ctx.createGain();
    oscGain.gain.setValueAtTime(0, now);
    oscGain.gain.linearRampToValueAtTime(0.18, now + 0.001);
    oscGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.018);

    const bufSize = Math.floor(ctx.sampleRate * 0.006);
    const noiseBuf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
    const data = noiseBuf.getChannelData(0);
    for (let i = 0; i < bufSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufSize, 5);
    }
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuf;

    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.06;

    const master = ctx.createGain();
    master.gain.value = 0.55;

    osc.connect(oscGain);
    oscGain.connect(master);
    noise.connect(noiseGain);
    noiseGain.connect(master);
    master.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.02);
    noise.start(now);
}

export default function SoundProvider() {
    useEffect(() => {
        function unlock() {
            getCtx();
        }

        let lastLink: Element | null = null;

        function onOver(e: MouseEvent) {
            const link = (e.target as Element).closest('a');
            if (link && link !== lastLink) {
                lastLink = link;
                playTick();
            }
        }

        function onOut(e: MouseEvent) {
            const link = (e.target as Element).closest('a');
            if (link === lastLink) lastLink = null;
        }

        document.addEventListener('pointerdown', unlock, { once: true });
        document.addEventListener('touchstart', unlock, { once: true });
        document.addEventListener('keydown', unlock, { once: true });
        document.addEventListener('mouseover', onOver);
        document.addEventListener('mouseout', onOut);
        return () => {
            document.removeEventListener('pointerdown', unlock);
            document.removeEventListener('touchstart', unlock);
            document.removeEventListener('keydown', unlock);
            document.removeEventListener('mouseover', onOver);
            document.removeEventListener('mouseout', onOut);
        };
    }, []);

    return null;
}
