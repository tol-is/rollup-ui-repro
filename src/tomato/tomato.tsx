import cx from "classnames";
import React from "react";

import styles from "./tomato.module.css";

export interface TomatoProps {
  children?: string;

  className?: string;
}

/**
 *
 * asdghasdhu asodhsa dosaihd aso
 *
 */
export const Tomato = (props: TomatoProps) => {
  const { children, className, ...rest } = props;

  return (
    <button
      data-child="tomato"
      className={cx(styles.root, className)}
      {...rest}
    >
      {children}
    </button>
  );
};

Tomato.displayName = "Tomato";
