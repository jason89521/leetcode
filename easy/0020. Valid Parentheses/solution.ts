export default function isValid(s: string): boolean {
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (/[)}\]]/.test(char)) {
      const last = stack.pop();
      const isValid =
        (last === '(' && char === ')') || (last === '{' && char === '}') || (last === '[' && char === ']');

      if (isValid) continue;

      return false;
    }

    stack.push(char);
  }

  return stack.length === 0 ? true : false;
}
