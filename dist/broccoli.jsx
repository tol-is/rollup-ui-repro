import cx from 'classnames';
import 'react';

var styles = {"root":"broccoli-module_root__rAzaW"};

const Broccoli = (props) => {
    const { children, className, ...rest } = props;
    return (<button data-child="broccoli" className={cx(styles.root, className)} {...rest}>
      {children}
    </button>);
};
Broccoli.displayName = "Broccoli";

export { Broccoli };
//# sourceMappingURL=broccoli.jsx.map
