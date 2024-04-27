import Link from "next/link";
import React from "react";

// Define a type for the component props
type ButtonProps = {
  text: string;
  className?: string;
  href?: string;
  to?: string;
};

const Button: React.FC<ButtonProps> = ({ text, className = "", href, to }) => {
  // Assuming the 'to' prop is used for in-page anchors and 'href' for navigation
  const isAnchorLink = Boolean(to && !href);

  return (
    <div className={className}>
      <Link
        href={isAnchorLink ? `#${to}` : href || ""}
        passHref
        id="btnAnchor"
        className="inline-block text-center text-primary bg-action border-2 border-action font-semibold py-3 w-full text-sm lg:text-lg rounded-lg cursor-pointer hover:scale105 hover:-translate-y1 hover:shadow-lg hover:shadow-action/30 hover:-translate-y-[2px] transition-all duration-200"
      >
        {text}
      </Link>
    </div>
  );
};

export default Button;
