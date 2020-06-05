import React from 'react';
import { WrapRootElementBrowserArgs, WrapRootElementNodeArgs } from 'gatsby';
import { MonetizeProvider } from 'react-monetize';

export const wrapWithProvider = (
    { element }: WrapRootElementBrowserArgs | WrapRootElementNodeArgs,
    pluginOptions: { paymentPointer: string },
): JSX.Element => <MonetizeProvider paymentPointer={pluginOptions.paymentPointer}>{element}</MonetizeProvider>;
