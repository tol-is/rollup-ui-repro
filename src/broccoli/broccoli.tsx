import cx from "classnames";
import React from "react";

import styles from "./broccoli.module.css";

export interface BroccoliProps {
  children?: string;

  className?: string;
}

export const Broccoli = (props: BroccoliProps) => {
  const { children, className, ...rest } = props;

  return (
    <button
      data-child="broccoli"
      className={cx(styles.root, className)}
      {...rest}
    >
      {children}
    </button>
  );
};

Broccoli.displayName = "Broccoli";
