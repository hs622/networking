export function formatChatTime(timestamp: string): string {
  const date = new Date(timestamp);
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function capitalize(value: string): string {
  if (value) {
    const result = value
      .toLowerCase()
      .split(" ")
      .map(
        (value) => value.charAt(0)?.toUpperCase() + value.slice(1).toLowerCase()
      )
      .join(" ");

    return result;
  }
  return "";
}

export function initials(value: string): string {
  return value.toLowerCase().split(" ").map(value => value.at(0)?.toUpperCase()).join("");
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + " ..."; 
}
