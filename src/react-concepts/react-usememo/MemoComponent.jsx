import React, { useEffect, useState } from 'react'
import PureComponentMemoInstance from './PureComponentMemoInstance'

function MemoComponent() {
    const [name, setName] = useState("Srivatsava")
    useEffect(()=>{
        console.log("Name in parent", name)
    })
  return (
    <>
        <div>MemoComponent</div>
        <button onClick={()=>setName("Chathan")}>Change Name in Memo</button>
    </>
  )
}

export default MemoComponent