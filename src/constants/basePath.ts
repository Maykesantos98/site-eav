const basePath = process.env.NODE_ENV === "production" ? "/site-eav" : "";

export function asset(path: string) {
  return `${basePath}${path}`;
}

export default basePath;
