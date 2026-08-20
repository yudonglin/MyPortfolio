import type { ReactNode } from 'react';

type IconProps = {
    size?: number;
};

/**
 * Shared frame for the outline icons. They all inherit `currentColor`, so
 * callers set the colour on the wrapping element.
 */
function OutlineIcon({ size, strokeWidth = 1.5, children }: IconProps & {
    strokeWidth?: number;
    children: ReactNode;
}) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            {children}
        </svg>
    );
}

function SolidIcon({ size = 20, children }: IconProps & { children: ReactNode }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            {children}
        </svg>
    );
}

export function FolderIcon({ size = 24 }: IconProps) {
    return (
        <OutlineIcon size={size}>
            <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
        </OutlineIcon>
    );
}

export function ExternalLinkIcon({ size = 20 }: IconProps) {
    return (
        <OutlineIcon size={size}>
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
        </OutlineIcon>
    );
}

export function DocumentIcon({ size = 14 }: IconProps) {
    return (
        <OutlineIcon size={size} strokeWidth={2}>
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
        </OutlineIcon>
    );
}

export function CodeIcon({ size = 22 }: IconProps) {
    return (
        <OutlineIcon size={size}>
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
        </OutlineIcon>
    );
}

export function StackIcon({ size = 22 }: IconProps) {
    return (
        <OutlineIcon size={size}>
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
            <line x1="6" y1="6" x2="6.01" y2="6"/>
            <line x1="6" y1="18" x2="6.01" y2="18"/>
        </OutlineIcon>
    );
}

export function NeuronIcon({ size = 22 }: IconProps) {
    return (
        <OutlineIcon size={size}>
            <path d="M12 2a4 4 0 014 4c0 1.95-1.4 3.58-3.25 3.93L12 22"/>
            <path d="M12 2a4 4 0 00-4 4c0 1.95 1.4 3.58 3.25 3.93"/>
            <path d="M8.56 13a8 8 0 006.88 0"/>
        </OutlineIcon>
    );
}

export function ArrowUpIcon({ size = 20 }: IconProps) {
    return (
        <OutlineIcon size={size} strokeWidth={2}>
            <line x1="12" y1="20" x2="12" y2="5"/>
            <polyline points="5 12 12 5 19 12"/>
        </OutlineIcon>
    );
}

export function MailIcon({ size = 20 }: IconProps) {
    return (
        <OutlineIcon size={size}>
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="M22 7l-10 7L2 7"/>
        </OutlineIcon>
    );
}

export function GitHubIcon({ size = 20 }: IconProps) {
    return (
        <SolidIcon size={size}>
            <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </SolidIcon>
    );
}

export function LinkedInIcon({ size = 20 }: IconProps) {
    return (
        <SolidIcon size={size}>
            <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </SolidIcon>
    );
}
