import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded",
  square: "rounded-[0px]",
};
const variants = {
  fill: {
    blue_gray_900: "bg-blue_gray-900",
  },
  outline: {
    gray_200: "border-gray-200 border-b-[3px] border-solid text-blue_gray-300",
  },
};
const sizes = {
  xs: "h-[40px] px-2.5",
  sm: "h-[53px] px-[35px] text-sm",
};

const Button2 = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "sm",
  color = "gray_200",
  ...restProps
}) => {
  return (
    <button2
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button2>
  );
};

Button2.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["blue_gray_900", "gray_200"]),
};

export { Button2 };
