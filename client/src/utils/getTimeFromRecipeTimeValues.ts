export function getTimeFromRecipeTimeValues(timeString: string) {
  return timeString.split(":")?.[1];
}
