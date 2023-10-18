import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./button.module.scss";

import { ReactComponent as InfoIcon } from "../../assets/info.svg";
import { ReactComponent as CheckIcon } from "../../assets/check.svg";

const LOADER_STATES = {
  IDLE: "IDLE",
  LOADING: "LOADING",
  COMPLETE: "COMPLETE",
};

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
  buttonWithLoader,
  loaderLabel,
  completedLabel,
  completedIcon,
  isLoading,
  children,
  ...props
}) => {
  const loaderState = useState(LOADER_STATES.IDLE);

  /* useEffect(() => {
    if (buttonWithLoader) {
      isLoading
    }
  }, [isLoading]); */

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
      ) : children || (buttonWithLoader && isLoading) ? (
        `${loaderLabel}...`
      ) : (
        label
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
  icon: PropTypes.node,
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
   * Indicates whether a loader should be displayed inside the button. Progress Type Button.
   */
  buttonWithLoader: PropTypes.bool,
  /**
   * The label to display on the loader when `buttonWithLoader` is true.
   */
  loaderLabel: PropTypes.string,
  /**
   * The label to display on the completed state of loader when `buttonWithLoader` is true.
   */
  completedLabel: PropTypes.string,
  /**
   * The icon to display on the completed state of loader when `buttonWithLoader` is true.
   */
  completedIcon: PropTypes.node,
  /**
   * The loading state of loader when `buttonWithLoader` is true.
   */
  isLoading: PropTypes.bool,
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
  buttonWithLoader: false,
  loaderLabel: "Progressing",
  completedLabel: "Complete",
  completedIcon: <CheckIcon />,
  isLoading: false,
};
