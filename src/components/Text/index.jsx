import React from "react";

const sizes = {
  xs: "text-base font-medium leading-5",
  s: "text-xl font-normal leading-[25px]",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-indigo-200 font-lexend ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
