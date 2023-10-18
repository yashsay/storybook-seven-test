import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.scss";

import { ReactComponent as InfoIcon } from "../../assets/info.svg";

/**
 * Button Component for UI interaction.
 */
export const Button = ({
  label,
  variant,
  size,
  disabled,
  icon,
  iconPosition,
  iconButton,
  textButton,
  textButtonUnderlined,
  children,
  ...props
}) => {
  console.log("Element::", document.getElementsByClassName("iconSvg"));
  return (
    <button
      type="button"
      disabled={disabled}
      className={
        textButton
          ? `${styles.textButtonBaseStyles} ${
              textButtonUnderlined && styles.textButtonUnderlined
            }`
          : `${styles.baseStyles} ${styles[variant]} ${
              iconButton ? styles[`${size}IconButton`] : styles[size]
            }`
      }
      {...props}
    >
      {!iconButton && icon && iconPosition === "left" && (
        <span className={styles.icon}>
          {React.cloneElement(icon, { className: "iconSvg" })}
        </span>
      )}
      {iconButton ? (
        <span className={styles.icon}>
          {React.cloneElement(icon, { className: "iconSvg" })}
        </span>
      ) : (
        children || label
      )}
      {!iconButton && icon && iconPosition === "right" && (
        <span className={styles.icon}>
          {React.cloneElement(icon, { className: "iconSvg" })}
        </span>
      )}
    </button>
  );
};

Button.propTypes = {
  /**
   * Contents of Button.
   */
  label: PropTypes.string,
  /**
   * Variation of the Button.
   * Can be one of the following:
   */
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  /**
   * Size of Button.
   * Can be one of the following:
   */
  size: PropTypes.oneOf(["lg", "md", "sm", "xs"]),
  /**
   * Active State of Button. Accepts Boolean value.
   */
  disabled: PropTypes.bool,
  /**
   * Icon to display on button. Any SVG element/component can be passed as an icon.
   */
  icon: PropTypes.element,
  /**
   * Position of Icon.
   */
  iconPosition: PropTypes.oneOf(["left", "right"]),
  /**
   * If only Icon is to be displayed then "iconButton" Parameter should be set to true else false.
   */
  iconButton: PropTypes.bool,
  /**
   * If only Text as a link is to be displayed then "textButton" Parameter should be set to true else false.
   */
  textButton: PropTypes.bool,
  /**
   * If Text Button should have a underline, "textButtonUnderlined" Parameter should be set to true else false.
   */
  textButtonUnderlined: PropTypes.bool,
  /**
   * Children can be used to provide custom content.
   */
  children: PropTypes.node,
};

Button.defaultProps = {
  label: "",
  variant: "primary",
  size: "sm",
  disabled: false,
  // icon: null,
  icon: <InfoIcon />,
  iconPosition: "left",
  iconButton: false,
  textButton: false,
  textButtonUnderlined: false,
};
