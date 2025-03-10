function numOnly(target: unknown) {
  return String(target).replace(/\D/g, '');
}

export default numOnly;
