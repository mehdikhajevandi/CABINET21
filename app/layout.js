export const metadata = {
  title: 'Cabinet 21',
  description: 'طراحی تخصصی کابینت و دکوراسیون داخلی',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  )
}