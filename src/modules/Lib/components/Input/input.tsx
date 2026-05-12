import React, { forwardRef } from 'react';

export interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  lineClassName?: string;
  borderColor?: string;
  lineColor?: string;
  shadowColor?: string;
  shadowOffset?: string;
  height?: string;
  duration?: string;
}

export const Input = forwardRef<HTMLInputElement, CustomInputProps>(({
  label,
  containerClassName = '',
  inputClassName = '',
  labelClassName = '',
  lineClassName = '',
  borderColor = '#0B2447',
  lineColor = '#0B2447',
  shadowColor = '#0B2447',
  shadowOffset = '7px',
  height = '40px',
  duration = '500ms',
  ...rest
}, ref) => {
  const themeStyle = {
    '--border-color': borderColor,
    '--line-color': lineColor,
    '--shadow-color': shadowColor,
    '--shadow-offset': shadowOffset,
    '--height': height,
    '--duration': duration,
  } as React.CSSProperties;

  const containerClasses = ['relative', containerClassName].filter(Boolean).join(' ');

  const baseInput = [
    'peer w-full px-[10px] border-2 border-l-[var(--border-color)] border-r-[var(--border-color)] border-t-0 border-b-0 bg-transparent outline-none text-[16px] transition-all',
    'h-[var(--height)]',
    '[box-shadow:var(--shadow-offset)_var(--shadow-offset)_0px_0px_var(--shadow-color)]',
    'peer-focus:[box-shadow:none]',
    `[transition-duration:var(--duration)]`,
    inputClassName
  ].filter(Boolean).join(' ');

  const baseLabel = [
    'peer-focus:top-[-10px] peer-focus:scale-100 absolute top-[10px] left-[10px] text-[var(--border-color)] transition-all scale-0 -z-10 pointer-events-none select-none',
    `[transition-duration:var(--duration)]`,
    labelClassName
  ].filter(Boolean).join(' ');

  const baseLine = [
    'absolute h-[2px] bg-[var(--line-color)] transition-all right-0 w-0',
    `[transition-duration:var(--duration)]`,
    lineClassName
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses} style={themeStyle}>
      <input ref={ref} className={baseInput} {...rest} />
      
      {label && <label className={baseLabel}>{label}</label>}
      
      <span className={`${baseLine} top-0 peer-focus:w-[35%]`} />
      <span className={`${baseLine} bottom-0 peer-focus:w-full`} />
    </div>
  );
});

Input.displayName = 'Input';