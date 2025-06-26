// export async function getServerSideProps() {
//   return {
//     props: {
//       hora: new Date().toLocaleString()
//     }
//   }
// }

// export default function Home({ hora }) {
//   return (
//     <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
//       <h1>SSR funcionando! 🎉</h1>
//       <p>Hora gerada no servidor: {hora}</p>
//     </div>
//   )
// }


import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className="text-white">Página Inicial</h1>
      <p>
        <Link href="/sobre" className="text-blue-500 hover:text-blue-700">
          Ir para a página Sobre
        </Link>
      </p>
    </div>
  )
}
