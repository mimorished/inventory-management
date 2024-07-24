import { Link } from 'lucide-react'
import React from 'react'

export default function FixedHeader({newLink, title}) {
  return (
    <div className="flex justify-between items-center bg-white py-5 px-4">
      <button href={newLink} className="text-2xl">{title}</button>
    </div>
  )
}
