export function getAssetUrl(path: string): string {
  return `${import.meta.env.BASE_URL}${path}`;
}
