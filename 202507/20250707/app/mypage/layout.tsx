export default function MypageLayout({
  children,
  id
}: {
  children: React.ReactNode,
  id: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {id}
        {children}
      </body>
    </html>
  )
}
