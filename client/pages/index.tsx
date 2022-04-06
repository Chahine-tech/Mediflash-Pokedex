import React from 'react';
import Head from 'next/head'
import Card from "../components/Card"
import { gql, useQuery } from '@apollo/client'

const AllLinksQuery = gql`
  query pokemons($offset: Int, $limit: Int){
    pokemon(offset: $offset, limit: $limit) {
      id,
      name
      
      }
  }
`

export default function Home() {
  const [offset, setOffset] = React.useState(0)

  const { data, loading } = useQuery(AllLinksQuery, {
    variables: {
      offset,
      limit: 9
    },
  })
  if (loading) return <p>Loading...</p>
  console.log(data)
  return (
    <div className="">
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-2">
          {data.pokemon.map(pokemon => <Card title={pokemon.name} id={pokemon.id} />)}
        </div>
        <div className="items-center space-x-8">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none" onClick={() => setOffset(offset - 10)}>Previous</button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none" onClick={() => setOffset(offset + 10)}>Next</button>
        </div>
      </div>
    </div>

  )
}