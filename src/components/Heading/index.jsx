import React from "react";

const sizes = {
  s: "text-4xl font-bold leading-[45px] md:text-[34px] sm:text-[32px]",
  xs: "text-[22px] font-bold leading-[27px]",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-lexend ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
