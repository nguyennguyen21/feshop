import React from 'react';

export interface CardItem {
  id: string | number;
  label: string;
  icon?: React.ReactNode;
}

export interface CardProps {
  items: CardItem[];
  className?: string;
  itemClassName?: string;
  textClassName?: string;
  hoverFlex?: string;
  transitionDuration?: string;
  direction?: 'row' | 'col';
  width?: string;
  height?: string;
  borderColor?: string;
  textColor?: string;
}

export const ExpandableCard: React.FC<CardProps> = ({
  items,
  className = '',
  itemClassName = '',
  textClassName = '',
  hoverFlex = 'hover:flex-[4]',
  transitionDuration = 'duration-500',
  direction = 'row',
  width = 'w-[210px]',
  height = 'h-[254px]',
  borderColor = 'border-[#ff5a91]',
  textColor = 'text-[#ff568e]',
}) => {
  // Gộp class thủ công, không cần thư viện ngoài
  const containerClasses = [
    'flex gap-[5px] rounded bg-[#212121] p-[0.4em]',
    direction === 'col' && 'flex-col',
    width,
    height,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      {items.map((item) => {
        const itemClasses = [
          'group relative h-full flex-1 overflow-hidden cursor-pointer rounded-sm border bg-[#212121] transition-all',
          borderColor,
          hoverFlex,
          transitionDuration,
          itemClassName,
        ].filter(Boolean).join(' ');

        const textClasses = [
          'flex items-center justify-center whitespace-nowrap min-w-[14em] p-[0.5em] text-center uppercase tracking-widest transition-all',
          textColor,
          '-rotate-90 group-hover:rotate-0',
          transitionDuration,
          textClassName,
        ].filter(Boolean).join(' ');

        return (
          <div key={item.id} className={itemClasses}>
            <span className={textClasses}>
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};




type Category = {
  label: string;
  color?: string;
};

type CardVariant = "default" | "glass" | "gradient";

type CustomCardProps = {
  title: string;

  description?: string;

  image?: string;

  author?: string;

  date?: string;

  footer?: React.ReactNode;

  icon?: React.ReactNode;

  actions?: React.ReactNode;

  categories?: Category[];

  children?: React.ReactNode;

  variant?: CardVariant;

  width?: number | string;

  height?: number | string;

  borderRadius?: number;

  rotateOnHover?: number;

  hoverScale?: number;

  shadow?: boolean;

  blur?: boolean;

  loading?: boolean;

  className?: string;

  contentClassName?: string;

  onClick?: () => void;
};

const variantStyles: Record<CardVariant, string> = {
  default: `
    linear-gradient(#212121,#212121) padding-box,
    linear-gradient(145deg,transparent 35%,#e81cff,#40c9ff) border-box
  `,

  glass: `
    linear-gradient(rgba(255,255,255,0.05),rgba(255,255,255,0.05)) padding-box,
    linear-gradient(145deg,#ffffff22,#ffffff11) border-box
  `,

  gradient: `
    linear-gradient(#0f172a,#111827) padding-box,
    linear-gradient(145deg,#ff0080,#7928ca,#2afadf) border-box
  `,
};

const PremiumCard: React.FC<CustomCardProps> = ({
  title,

  description,

  image,

  author = "Unknown",

  date,

  footer,

  icon,

  actions,

  categories = [],

  children,

  variant = "default",

  width = 320,

  height = 400,

  borderRadius = 20,

  rotateOnHover = 6,

  hoverScale = 1.03,

  shadow = true,

  blur = false,

  loading = false,

  className = "",

  contentClassName = "",

  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        group
        relative
        overflow-hidden
        border-2
        border-transparent
        text-white
        transition-all
        duration-500
        ${shadow ? "shadow-2xl" : ""}
        ${blur ? "backdrop-blur-xl" : ""}
        ${className}
      `}
      style={{
        width,
        height,
        borderRadius,
        background: variantStyles[variant],
        transformOrigin: "right bottom",
      }}
    >
      <div className="flex h-full flex-col">
        {/* IMAGE */}
        {image && (
          <div className="h-48 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        )}

  
        <div
          className={`
            flex
            flex-1
            flex-col
            p-5
            transition-all
            duration-500
            ease-[cubic-bezier(0.23,1,0.320,1)]
            group-hover:rotate-(--rotate)
            ${contentClassName}
          `}
          style={
            {
              "--rotate": `${rotateOnHover}deg`,
              transform: `scale(${hoverScale})`,
            } as React.CSSProperties
          }
        >
          {/* HEADER */}
          <div className="flex items-start justify-between">
            <div>
              {(author || date) && (
                <div className="text-sm text-zinc-400">
                  <span className="font-semibold">
                    {author}
                  </span>

                  {date && <span> • {date}</span>}
                </div>
              )}
            </div>

            {icon && (
              <div className="text-2xl">
                {icon}
              </div>
            )}
          </div>

          {/* TITLE */}
          <h2 className="mt-5 text-2xl font-bold">
            {title}
          </h2>

          {/* DESCRIPTION */}
          {description && (
            <p className="mt-4 text-sm leading-6 text-zinc-300">
              {description}
            </p>
          )}

          {/* CUSTOM CONTENT */}
          <div className="mt-4 flex-1">
            {loading ? (
              <div className="animate-pulse space-y-3">
                <div className="h-4 rounded bg-zinc-700" />

                <div className="h-4 w-4/5 rounded bg-zinc-700" />

                <div className="h-4 w-3/5 rounded bg-zinc-700" />
              </div>
            ) : (
              children
            )}
          </div>

          {/* CATEGORIES */}
          {categories.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {categories.map((item, index) => (
                <span
                  key={index}
                  className="rounded-full px-3 py-1 text-xs font-semibold uppercase"
                  style={{
                    backgroundColor:
                      item.color || "#e81cff",
                  }}
                >
                  {item.label}
                </span>
              ))}
            </div>
          )}

          {/* ACTIONS */}
          {actions && (
            <div className="mt-5 flex gap-3">
              {actions}
            </div>
          )}

          {/* FOOTER */}
          <div className="mt-5 text-sm text-zinc-500">
            {footer || "Read More →"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumCard;
