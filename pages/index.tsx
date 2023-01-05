import Head from 'next/head'
import Header from '../Components/Header'
import AddTodo from '../Components/AddTodo'
import Style from  "../styles/globals.css"

export default function Home() {
  const name = "Blog-App"

  return (
    <div className=''>
      <Head>
        <title>{name}</title>
        <meta name="description" content="A blog app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header name={name} />
      <AddTodo/>
    </div>
  )
}
