cat > app/layout.js << 'EOF'
export const metadata = {
  title: 'MarketGazer',
  description: 'Market analysis tool',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
EOF