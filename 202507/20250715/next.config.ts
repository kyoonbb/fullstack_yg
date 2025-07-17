export default {
  reactStrictMode: true, // 개발 중에 렌더링을 두번씩 해라
  compress: true, // 빌드시 시간을 더 들이고 용량을 압축하는 옵션
  basePath: '', // 웹페이지 만들때 기본 경로
  output: 'standalone', // 필요한 파일만 뽑아내서 독자적으로 사용할 수 있는 옵션
  trailingSlash: false, // 경로 작성시 마지막에 / 존재 여부
    // /home => /home/
}