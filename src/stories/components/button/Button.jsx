import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.scss";

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
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`${styles.baseStyles} ${styles[variant]} ${styles[size]}`}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className={styles.icon}>{icon}</span>
      )}
      {iconButton ? null : children || label}
      {icon && iconPosition === "right" && (
        <span className={styles.icon}>{icon}</span>
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
   * Children can be used to provide custom content.
   */
  children: PropTypes.node,
};

Button.defaultProps = {
  label: "",
  variant: "primary",
  size: "sm",
  disabled: false,
  icon: null,
  iconPosition: "left",
  iconButton: false,
  textButton: false,
};
