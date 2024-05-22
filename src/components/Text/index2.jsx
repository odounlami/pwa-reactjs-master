import React from "react";

const sizes = {
  xs: "text-sm font-normal leading-[21px]",
  s: "text-base font-medium leading-6",
};

const Text2 = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-lexend ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text2 };
