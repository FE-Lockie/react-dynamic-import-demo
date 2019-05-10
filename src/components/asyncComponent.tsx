import React from 'react';

export default function asyncComponent(importComponent) {

  const AsyncComponent = (props) => {

    const [component, setComponent] = React.useState(null);

    React.useEffect(() => {
      importComponent().then(c => {
        const Component = c.default || c;
        setComponent(<Component {...props} />);
      });
    }, []);

    return component;
  }

  return AsyncComponent;
}