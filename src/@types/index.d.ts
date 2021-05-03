declare module '*.md' {
  const MDXComponent: (props: any) => JSX.Element;

  export default MDXComponent;
}

declare module '*.mdx' {
  const MDXComponent: (props: any) => JSX.Element;

  export default MDXComponent;
}
