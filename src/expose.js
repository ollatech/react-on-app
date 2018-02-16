/**
 * Get the context, be it window or global
 * @returns {boolean|Window|*|context}
 */
export default function expose() {
  return ((typeof window !== 'undefined') && window) ||
    ((typeof global !== 'undefined') && global) ||
    this;
}