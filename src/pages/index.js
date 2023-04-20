import { useState, useEffect } from "react"


export default function Home() {

  const [data, setData] = useState('')

  useEffect(() => {
    fetch('api/hello')
      .then(res => res.json())
      .then(data => setData(data.name))
  }, [])



  return (
    <>
      <h1>Hello World</h1>
      <p>{`This is the name from the api - ${data}` }</p>
    </>
  )
}
