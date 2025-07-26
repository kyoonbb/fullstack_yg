
// 임시데이터로 테스트해보는 더미데이터 방식
const dummy = await new Promise((resolve)=>setTimeout(()=>resolve(JSON.stringify([ // 문자로 바꾼다음에 import하게 한다.(변환까지 포함하려고) 실제로 서버에서 가져올 땐 문자로 바꿔서 가져오기 때문이다. resolve(JSON.stringify
  { title:'제목4', write:'2025/06/30', user:'관리자' },
  { title:'제목3', write:'2025/06/30', user:'관리자' },
  { title:'제목2', write:'2025/06/29', user:'관리자' },
  { title:'제목1', write:'2025/06/29', user:'관리자' }
])), 3000));
export { dummy };