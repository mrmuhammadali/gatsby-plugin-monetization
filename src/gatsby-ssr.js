import { createElement } from 'react';

export { wrapWithProvider as wrapRootElement } from './wrap-with-provider';
export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }, pluginOptions) => {
    const headComponents = getHeadComponents();
    const meta = createElement('meta', {
        name: 'monetization',
        content: pluginOptions.paymentPointer,
    });
    replaceHeadComponents([...headComponents, meta]);
};
