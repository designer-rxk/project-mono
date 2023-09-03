import { RefObject, useEffect, useState } from 'react';

export function useHasInputValue(ref: RefObject<HTMLTextAreaElement | HTMLInputElement>): boolean {
  const [hasValue, setHasValue] = useState(false);

  if (ref && ref.current?.value && !hasValue) {
    setHasValue(true);
  }

  useEffect(() => {
    const element = ref.current;
    const onInput = (e: Event) => {
      if (e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLInputElement) {
        setHasValue(!!e.target.value);
      }
      return false;
    };

    element?.addEventListener('keyup', onInput, { passive: true });

    return () => {
      element?.removeEventListener('keyup', onInput);
    };
  }, [ref]);

  return hasValue;
}
