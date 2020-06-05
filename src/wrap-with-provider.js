import React from 'react';
import { MonetizeProvider } from 'react-monetize';

export const wrapWithProvider = ({ element }, pluginOptions) => (
    <MonetizeProvider paymentPointer={pluginOptions.paymentPointer}>{element}</MonetizeProvider>
);
