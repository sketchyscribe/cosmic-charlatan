export function clamp(value, min, max) {
    return Math.max(min, Math.min(value, max));
}

export function randomInRange(min, max) {
    return Math.min(min, (Math.random() * max, max));
}