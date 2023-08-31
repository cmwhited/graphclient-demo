export function buildClassList(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}
