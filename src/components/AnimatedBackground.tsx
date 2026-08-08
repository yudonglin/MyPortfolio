import { useEffect, useRef } from 'react';
import styles from './AnimatedBackground.module.css';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    /** Prefix of an `rgba(...)` string; the alpha and closing paren are appended when drawing. */
    color: string;
    alpha: number;
}

const PARTICLE_COUNT = 60;
const CONNECTION_DISTANCE = 150;
const CONNECTION_DISTANCE_SQ = CONNECTION_DISTANCE * CONNECTION_DISTANCE;
const MOUSE_RADIUS = 200;
/** Beyond 2x the extra pixels cost more than they add visually. */
const MAX_PIXEL_RATIO = 2;

const COLORS = [
    'rgba(74, 158, 255,',   // accent-blue
    'rgba(0, 212, 170,',    // accent-cyan
    'rgba(100, 130, 200,',  // muted blue
];

export default function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        let animationId: number | null = null;
        // Canvas size in CSS pixels; the backing store is scaled by the device ratio.
        let width = 0;
        let height = 0;
        const mouse = { x: -1000, y: -1000 };
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

        const resize = () => {
            const ratio = Math.min(window.devicePixelRatio || 1, MAX_PIXEL_RATIO);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.round(width * ratio);
            canvas.height = Math.round(height * ratio);
            ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
        };

        resize();

        const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            radius: Math.random() * 2 + 1,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            alpha: Math.random() * 0.5 + 0.1,
        }));

        const step = () => {
            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;

                // Bounce, then clamp back inside. Without the clamp a particle left
                // outside by a window resize flips direction every frame and sticks.
                if (p.x < 0 || p.x > width) {
                    p.vx *= -1;
                    p.x = Math.min(Math.max(p.x, 0), width);
                }
                if (p.y < 0 || p.y > height) {
                    p.vy *= -1;
                    p.y = Math.min(Math.max(p.y, 0), height);
                }

                // Mouse repulsion. Skipped at zero distance, where the unit vector
                // would be NaN and would poison the particle's velocity for good.
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const dist = Math.hypot(dx, dy);
                if (dist > 0 && dist < MOUSE_RADIUS) {
                    const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * 0.02;
                    p.vx += dx / dist * force;
                    p.vy += dy / dist * force;
                }

                p.vx *= 0.999;
                p.vy *= 0.999;
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            for (const p of particles) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `${p.color}${p.alpha})`;
                ctx.fill();
            }

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    // Compare squared lengths so the square root only runs for
                    // the handful of pairs actually close enough to connect.
                    const distSq = dx * dx + dy * dy;
                    if (distSq >= CONNECTION_DISTANCE_SQ) continue;

                    const opacity = (1 - Math.sqrt(distSq) / CONNECTION_DISTANCE) * 0.15;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(74, 158, 255, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        };

        const animate = () => {
            step();
            draw();
            animationId = requestAnimationFrame(animate);
        };

        const stop = () => {
            if (animationId !== null) {
                cancelAnimationFrame(animationId);
                animationId = null;
            }
        };

        // Reduced motion still gets the particle field, just held still.
        const start = () => {
            stop();
            if (reducedMotion.matches) draw();
            else animate();
        };

        const onResize = () => {
            resize();
            if (reducedMotion.matches) draw();
        };

        const onMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener('resize', onResize, { passive: true });
        window.addEventListener('mousemove', onMouseMove, { passive: true });
        reducedMotion.addEventListener('change', start);
        start();

        return () => {
            stop();
            window.removeEventListener('resize', onResize);
            window.removeEventListener('mousemove', onMouseMove);
            reducedMotion.removeEventListener('change', start);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true"/>;
}
