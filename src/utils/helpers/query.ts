export const only_query = (fields: String[]) => {
  return fields.map(field => `&only[BASE][]=${field}`).join('');
}

export const isBlt = (uid) => {
  return uid.startsWith('blt') && uid.length === 19;
}