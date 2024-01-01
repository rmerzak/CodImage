import { PaddingSelectorProps } from '@/interfaces'
import React from 'react'

function PaddingSelector({ padding, currentPading, setCurrentPading }: PaddingSelectorProps) {
  return (
    <div>
      <p className='py-[5px] test-sm font-medium'>Padding Selector</p>
      <div className='flex gap-2'>
        {padding.map((p, i) => {
          return (
            <button key={i} className={`px-1 h-[30px] rounded flex items-center justify-center text-sm ${currentPading === p ? 'bg-[#3c3c3c] text-[#ffff]' : 'bg-[#191919] text-[#848484]'} hover:bg-[#3c3c3c] hover:text-[#fff]`} onClick={() => setCurrentPading(p)}>{p}</button>
          )
        })}
      </div>
    </div>
  )
}

export default PaddingSelector
