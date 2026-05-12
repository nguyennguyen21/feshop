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

export const Card: React.FC<CardProps> = ({
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