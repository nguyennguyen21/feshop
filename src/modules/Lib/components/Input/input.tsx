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
  width?: string;
}

export const FloatingInput = forwardRef<HTMLInputElement, CustomInputProps>(({
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

FloatingInput.displayName = 'FloatingInput';


type Input3DProps = {
  label?: string;
  placeholder?: string;
  buttonText?: string;
  maxWidth?: string;
  height?: string;
  backgroundColor?: string;
  primaryColor?: string;
  shadowColor?: string;
  borderColor?: string;
  inputBackground?: string;
};

const BrutalInput: React.FC<Input3DProps> = ({
  label = "USERNAME",
  placeholder = "Type here...",
  buttonText = "Go",
  maxWidth = "350px",
  height = "auto",
  backgroundColor = "#f0f0f0",
  primaryColor = "#e9b50b",
  shadowColor = "#000",
  borderColor = "#000",
  inputBackground = "#fff",
}) => {
  return (
    <div
      style={{
        position: "relative",
        background: backgroundColor,
        padding: "20px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "15px",
        border: `4px solid ${borderColor}`,
        maxWidth,
        height,
        transition: "all 400ms cubic-bezier(0.23, 1, 0.32, 1)",
        transformStyle: "preserve-3d",
        transform: "rotateX(10deg) rotateY(-10deg)",
        perspective: "1000px",
        boxShadow: `10px 10px 0 ${shadowColor}`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          "rotateX(5deg) rotateY(1deg) scale(1.05)";
        e.currentTarget.style.boxShadow = `
          25px 25px 0 -5px ${primaryColor},
          25px 25px 0 0 ${shadowColor}
        `;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "rotateX(10deg) rotateY(-10deg)";
        e.currentTarget.style.boxShadow = `10px 10px 0 ${shadowColor}`;
      }}
    >
      {/* Shadow */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          bottom: 0,
          zIndex: -1,
          transform: "translateZ(-50px)",
          background: `
            linear-gradient(
              45deg,
              rgba(255, 107, 107, 0.4) 0%,
              rgba(255, 107, 107, 0.1) 100%
            )
          `,
          filter: "blur(20px)",
        }}
      />

      {/* Label */}
      <div
        style={{
          position: "absolute",
          top: "-15px",
          left: "20px",
          background: primaryColor,
          color: "#000",
          fontWeight: "bold",
          padding: "5px 10px",
          fontSize: "14px",
          transform: "translateZ(50px)",
          zIndex: 4,
          border: `2px solid ${borderColor}`,
        }}
      >
        {label}
      </div>

      {/* Input */}
      <input
        type="text"
        placeholder={placeholder}
        style={{
          width: "100%",
          outline: "none",
          border: `3px solid ${borderColor}`,
          padding: "15px",
          fontSize: "18px",
          background: inputBackground,
          color: "#000",
          transform: "translateZ(10px)",
          transition: "all 400ms cubic-bezier(0.23, 1, 0.32, 1)",
          position: "relative",
          zIndex: 3,
          fontFamily: `"Roboto", Arial, sans-serif`,
          letterSpacing: "-0.5px",
          fontWeight: "bold",
        }}
        onFocus={(e) => {
          e.currentTarget.style.background = backgroundColor;
          e.currentTarget.style.transform =
            "translateZ(20px) translateX(-5px) translateY(-5px)";
          e.currentTarget.style.boxShadow = `5px 5px 0 0 ${shadowColor}`;
        }}
        onBlur={(e) => {
          e.currentTarget.style.background = inputBackground;
          e.currentTarget.style.transform = "translateZ(10px)";
          e.currentTarget.style.boxShadow = "none";
        }}
      />

      {/* Button */}
      <button
        style={{
          cursor: "pointer",
          border: `3px solid ${borderColor}`,
          background: primaryColor,
          transition: "all 400ms cubic-bezier(0.23, 1, 0.32, 1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 16px",
          transform: "translateZ(20px)",
          position: "relative",
          zIndex: 3,
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform =
            "translateZ(10px) translateX(-5px) translateY(-5px)";
          e.currentTarget.style.boxShadow = `5px 5px 0 0 ${shadowColor}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateZ(20px)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};





export interface DatePickerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  containerStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;

  width?: string;
  height?: string;

  borderRadius?: string;
  paddingLeft?: string;

  backgroundColor?: string;
  focusBackgroundColor?: string;

  borderColor?: string;
  focusBorderColor?: string;

  shadowColor?: string;
  focusShadowSize?: string;

  transitionDuration?: string;

  label?: string;
  labelStyle?: React.CSSProperties;
}

export const DatePicker = forwardRef<
  HTMLInputElement,
  DatePickerProps
>(
  (
    {
      containerStyle,
      inputStyle,

      width = "15em",
      height = "2.5em",

      borderRadius = "10px",
      paddingLeft = "0.8em",

      backgroundColor = "#f3f3f3",
      focusBackgroundColor = "#ffffff",

      borderColor = "transparent",
      focusBorderColor = "#4a9dec",

      shadowColor = "74, 157, 236",
      focusShadowSize = "7px",

      transitionDuration = "0.5s",

      label,
      labelStyle,

      ...rest
    },
    ref
  ) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          ...containerStyle,
        }}
      >
        {label && (
          <label
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#111",
              ...labelStyle,
            }}
          >
            {label}
          </label>
        )}

        <input
          ref={ref}
          type="date"
          {...rest}
          style={{
            border: `2px solid ${borderColor}`,
            width,
            height,
            paddingLeft,
            outline: "none",
            overflow: "hidden",
            backgroundColor,
            borderRadius,
            transition: `all ${transitionDuration}`,
            fontSize: "15px",
            fontWeight: 500,
            color: "#111",
            ...inputStyle,
          }}
          onFocus={(e) => {
            e.currentTarget.style.border = `2px solid ${focusBorderColor}`;
            e.currentTarget.style.boxShadow = `0px 0px 0px ${focusShadowSize} rgba(${shadowColor}, 0.2)`;
            e.currentTarget.style.backgroundColor =
              focusBackgroundColor;
          }}
          onBlur={(e) => {
            e.currentTarget.style.border = `2px solid ${borderColor}`;
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.backgroundColor =
              backgroundColor;
          }}
        />
      </div>
    );
  }
);

DatePicker.displayName = "DatePicker";

export { BrutalInput };