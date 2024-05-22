import React from "react";

const sizes = {
  s: "text-lg font-bold leading-[23px]",
  md: "text-5xl font-black leading-[60px] md:text-[44px] sm:text-[38px]",
  xs: "text-base font-bold leading-6",
};

const Heading2 = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-lexend ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading2 };
