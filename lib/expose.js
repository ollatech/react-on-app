'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = expose;
/**
 * Get the context, be it window or global
 * @returns {boolean|Window|*|context}
 */
function expose() {
  return typeof window !== 'undefined' && window || typeof global !== 'undefined' && global || this;
}