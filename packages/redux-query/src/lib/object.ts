export const pick = (
  source: { [key: string]: unknown },
  keysToPick?: Array<string> | undefined,
): { [key: string]: unknown } => {
  const picked = { ...source };
  const keysToPickSet = new Set(keysToPick);
  const keysToDelete = Object.keys(source).filter(key => !keysToPickSet.has(key));

  for (const key of keysToDelete) {
    if (picked.hasOwnProperty(key)) {
      delete picked[key];
    }
  }

  return picked;
};
