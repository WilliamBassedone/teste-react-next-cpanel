export async function getServerSideProps() {
  return {
    props: {
      hora: new Date().toLocaleString()
    }
  }
}

export default function Home({ hora }) {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h1>SSR funcionando! 🎉</h1>
      <p>Hora gerada no servidor: {hora}</p>
    </div>
  )
}
