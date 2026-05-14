'use client';

import { useEffect } from 'react';

let audioCtx: AudioContext | null = null;

function playTick() {
    if (!audioCtx) audioCtx = new AudioContext();

    const now = audioCtx.currentTime;

    // Sine oscillator — frequency sweeps down like iOS tap
    const osc = audioCtx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1100, now);
    osc.frequency.exponentialRampToValueAtTime(700, now + 0.018);

    const oscGain = audioCtx.createGain();
    oscGain.gain.setValueAtTime(0, now);
    oscGain.gain.linearRampToValueAtTime(0.18, now + 0.001); // instant attack
    oscGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.018); // fast decay

    // Tiny noise transient for the initial "click" texture
    const bufSize = Math.floor(audioCtx.sampleRate * 0.006);
    const noiseBuf = audioCtx.createBuffer(1, bufSize, audioCtx.sampleRate);
    const data = noiseBuf.getChannelData(0);
    for (let i = 0; i < bufSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufSize, 5);
    }
    const noise = audioCtx.createBufferSource();
    noise.buffer = noiseBuf;

    const noiseGain = audioCtx.createGain();
    noiseGain.gain.value = 0.06;

    // Master
    const master = audioCtx.createGain();
    master.gain.value = 0.55;

    osc.connect(oscGain);
    oscGain.connect(master);
    noise.connect(noiseGain);
    noiseGain.connect(master);
    master.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.02);
    noise.start(now);
}

export default function SoundProvider() {
    useEffect(() => {
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

        document.addEventListener('mouseover', onOver);
        document.addEventListener('mouseout', onOut);
        return () => {
            document.removeEventListener('mouseover', onOver);
            document.removeEventListener('mouseout', onOut);
        };
    }, []);

    return null;
}
