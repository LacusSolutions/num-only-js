function numOnly(target: unknown): string {
  return String(target).replace(/\D/g, '');
}

export default numOnly;
