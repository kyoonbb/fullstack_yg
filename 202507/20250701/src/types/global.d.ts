declare module '*.module.css' { // module.css 가져올 때 자료형 타입 작성
  const classes: { [key:string]: string };
  export default classes;
}