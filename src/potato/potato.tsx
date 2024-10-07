import cx from "classnames";
import React from "react";

import styles from "./potato.module.css";

export interface PotatoProps {
  children?: string;

  className?: string;
}

export const Potato = (props: PotatoProps) => {
  const { children, className, ...rest } = props;

  return (
    <span data-child="potato" className={cx(styles.root, className)} {...rest}>
      {children}
    </span>
  );
};

Potato.displayName = "Potato";
