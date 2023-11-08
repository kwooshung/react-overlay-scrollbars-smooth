declare module '*.js';
declare module '*.css';
declare module '*.less';
declare module '*.jpg';
declare module '*.gif';
declare module '*.png';
declare module '*.woff';
declare module '*.woff2';
declare module '*.ttf';
declare module '*.eot';
declare module '*.mp3';
declare module '*.mp4';
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
  const url: string;
  export default url;
}
declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module 'smoothscroll-for-websites';
