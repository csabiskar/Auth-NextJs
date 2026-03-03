"use client"

import { useParams } from "next/navigation"

function page() {
  const params = useParams()
  return (
    <div>Profile page {params.id}</div>
  )
}

export default page