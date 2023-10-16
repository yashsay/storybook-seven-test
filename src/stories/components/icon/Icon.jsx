import React from "react";

const Icon = ({ svgComponent, width, height, fill }) => {
  const svgContent = svgComponent && svgComponent.props.children;

  return (
    <svg
      width={width || "12"}
      height={height || "12"}
      viewBox="0 0 12 12"
      fill={fill || "currentColor"}
      xmlns="http://www.w3.org/2000/svg"
    >
      {svgContent}
    </svg>
  );
};

export default Icon;
