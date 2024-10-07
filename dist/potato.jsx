import cx from 'classnames';
import 'react';

var styles = {"root":"potato-module_root__YVfL3"};

const Potato = (props) => {
    const { children, className, ...rest } = props;
    return (<span data-child="potato" className={cx(styles.root, className)} {...rest}>
      {children}
    </span>);
};
Potato.displayName = "Potato";

export { Potato };
//# sourceMappingURL=potato.jsx.map
