import Image from 'next/image';
import React from 'react'

const scores = [
    'Calling days panelty',
    'Calling window panelty',
    'Redial count penalty',
    'Redial interval penalty',
]

const CampaignScoreCard = () => {
  return (
    <div className='flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white overflow-hidden'>
        <div className='w-full relative'>
            <Image src='/level-1.svg' 
            alt='level-1'
            width={500}
            height={364}
            className='w-full h-full object-cover'
            />
        </div>
        <div className='flex flex-col gap-4 pb-4 '>
            {scores.map((score) => (
                <div key={score} className='flex px-10 justify-between items-center border-b border-zinc-100 pb-4 text-sm font-semibold tracking-[-0.28px]'>
                    <p className='text-zinc-500 '>{score}</p>
                    <p className='text-emerald-600 '>0</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CampaignScoreCard