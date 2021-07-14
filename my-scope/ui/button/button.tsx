import React from 'react';

console.log('should be error from eslint');

export type ButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
};

export function Button({ text }: ButtonProps) {
  return <div>{text}</div>;
}
