import cx from 'classnames';
import 'react';

var styles = {"root":"tomato-module_root__ok7DM"};

/**
 *
 * asdghasdhu asodhsa dosaihd aso
 *
 */
const Tomato = (props) => {
    const { children, className, ...rest } = props;
    return (<button data-child="tomato" className={cx(styles.root, className)} {...rest}>
      {children}
    </button>);
};
Tomato.displayName = "Tomato";

export { Tomato };
//# sourceMappingURL=tomato.jsx.map
