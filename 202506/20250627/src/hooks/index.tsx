// 폴더 만들어서 index만 불러오고 여기 안에있는거 전부 한방에 쓰게하는거 여러 커스텀 훅 쓸때 이거 하나면 아주 굿임

export { useLocalStorage } from "./localstorage"; //내용을 가져오자마자 내보내는 것
export { useSessionStorage } from './sessionstorage'; // 밑도 다 동일
export { useDisclosure } from './disclosure';
export { useClamp } from './clamp';
export { useDebounce } from './debounce';

// export {
//   useLocalStorage
// };