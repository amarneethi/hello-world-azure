import { useState } from "react"


export default function Home() {

  const [name, setName] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('api/hello', {
      method: 'POST',
      body: JSON.stringify({ name }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await res.json()
    setName (data.name)
    

  }





  return (
    <>
      <h1>Hello World</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        </label>
        <button type="submit">Submit</button>
      </form>
      {name && <p>{`This is the name from the form - ${name}`}</p>}
    </>
  )
}
