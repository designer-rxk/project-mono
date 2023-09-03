import { WarningCircle } from '@mono/icons';
import clsx from 'clsx';
import { forwardRef, useRef } from 'react';
import { useTextField } from 'react-aria';

import { useHasInputValue } from '@mono/hooks';

type Props = {
  label: string;
  fluid?: boolean;
  description?: string;
  errorMessage?: string;
} & React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

function _TextArea(
  { label, fluid, placeholder, description, errorMessage, ...rest }: Props,
  forwardedRef: React.ForwardedRef<HTMLTextAreaElement>,
) {
  const innerRef = useRef<HTMLTextAreaElement | null>(null);
  const { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField(
    {
      label,
      validationState: errorMessage ? 'invalid' : 'valid',
      inputElementType: 'textarea',
    },
    innerRef,
  );

  const hasValue = useHasInputValue(innerRef);

  return (
    <div className="group relative">
      <label
        {...labelProps}
        className={clsx(
          { 'scale-75 text-neutral-50': hasValue },
          'group-focus-within:scale-75 group-focus-within:text-neutral-50',

          'pointer-events-none absolute left-3 top-2 block origin-top-left text-cap-base transition-all',
        )}>
        {label}
        {rest.required ? (
          <span aria-hidden className="text-primary-50">
            {' '}
            *
          </span>
        ) : null}
      </label>

      <textarea
        className={clsx(
          'resize-none rounded border border-neutral-30 bg-white px-3 py-6 text-body-sm',
          'focus:border-neutral-50 focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-primary-50 disabled:opacity-60',
          {
            'w-full': fluid,
          },
        )}
        ref={(el) => {
          innerRef.current = el;
          if (typeof forwardedRef === 'function') {
            forwardedRef(el);
          } else if (forwardedRef) {
            forwardedRef.current = el;
          }
        }}
        {...inputProps}
        {...rest}
        placeholder={placeholder ?? ' '}
      />

      {description ? (
        <div {...descriptionProps} className="text-cap-xs text-neutral-50">
          {description}
        </div>
      ) : null}

      {errorMessage && (
        <div {...errorMessageProps} className="mt-2 flex items-center gap-x-2 text-cap-sm">
          <WarningCircle className="h-5 w-5 shrink-0 text-semantic-error" />
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(_TextArea);
