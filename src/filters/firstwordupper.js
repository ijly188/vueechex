export default function (str) {
  return str.toLowerCase().replace(/\b[a-z]/g, function (s) { return s.toUpperCase(); });
}
