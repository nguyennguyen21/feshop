import { useState } from "react";

interface SubmenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

const Submenu = ({ trigger, children }: SubmenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block top-2"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="cursor-pointer text-black">
        {trigger}
      </div>

      {isOpen && (
        <div className="absolute left-0 top-full  min-w-52 rounded-lg border bg-white shadow-lg z-50">
          {children}
        </div>
      )}
    </div>
  );
};

export default Submenu;