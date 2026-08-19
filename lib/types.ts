// Shared helper types used across the /data CMS-style files.
// A `Placeholder<T>` field means: this value is NOT confirmed real-world
// information. It must be rendered with the placeholder treatment
// (see components/PlaceholderNote.tsx) rather than presented as fact.

export type Placeholder<T> = {
  value: T;
  isPlaceholder: true;
};

export type Confirmed<T> = {
  value: T;
  isPlaceholder: false;
};

export type MaybePlaceholder<T> = Placeholder<T> | Confirmed<T>;

export function placeholder<T>(value: T): Placeholder<T> {
  return { value, isPlaceholder: true };
}

export function confirmed<T>(value: T): Confirmed<T> {
  return { value, isPlaceholder: false };
}
