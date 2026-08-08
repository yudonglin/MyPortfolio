export type SectionId =
    | 'about'
    | 'objective'
    | 'education'
    | 'experience'
    | 'projects'
    | 'publications'
    | 'volunteering'
    | 'skills';

type SectionMeta = {
    id: SectionId;
    /** Text shown in the navbar. Section headings may say something longer. */
    label: string;
};

/**
 * Page order, in one place. The navbar renders these in order and every section
 * derives its heading ordinal from its position here, so the numbering can no
 * longer drift out of sync with the nav.
 *
 * The hero sits at index 0 and renders no numbered heading, which is what makes
 * the remaining ordinals read as 01., 02., … Keep this array in the same order
 * as the sections rendered by `App`.
 */
export const SECTIONS: SectionMeta[] = [
    { id: 'about', label: 'About' },
    { id: 'objective', label: 'Objective' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'volunteering', label: 'Volunteering' },
    { id: 'skills', label: 'Skills' },
];

/** Zero-padded ordinal shown beside a section heading, e.g. `'03'`. */
export function sectionOrdinal(id: SectionId): string {
    return String(SECTIONS.findIndex((section) => section.id === id)).padStart(2, '0');
}
