export default function MypageLayout({
  children, // 하위값 받아오기
  id // 우리가 id라는 슬롯을 만들었기에 이거도 가져와야함
}: {
  children: React.ReactNode,
  id: React.ReactNode
}) {
  return ( // body에 넣기 각자 만들어서 조립하는 방법
    <html lang="en"> 
      <body>
        {id} 
        {children}
      </body>
    </html>
  )
}
