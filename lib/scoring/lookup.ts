export function lookupPenalty(
  table: Record<number, number>,
  value: number,
  min: number,
  max: number
): number {
  const clamped = Math.max(min, Math.min(max, value))

  return table[clamped] ?? 0
}
