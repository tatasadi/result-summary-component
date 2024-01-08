import type { MetaFunction } from '@remix-run/node'
import data from '~/data.json'
import Score from '~/components/Score'
import { type ScoreVariant } from '~/types/ScoreVariant'

export const meta: MetaFunction = () => {
  return [{ title: 'Result Summary Component' }, { name: 'description', content: 'A Challenge from Frontend Mentor!' }]
}

export default function Index() {
  return (
    <main className="flex flex-col items-center justify-center sm:my-auto">
      <div className="flex flex-col bg-white shadow-[0_30px_60px_0px_rgba(61,108,236,0.15)] sm:max-w-xs sm:rounded-[2rem] lg:max-w-2xl lg:flex-row">
        <div className="flex flex-col items-center gap-6 rounded-b-[2rem] bg-gradient-to-b from-light-slate-blue-bg to-light-royal-blue-bg px-14 pb-10 pt-6 text-center text-white lg:w-1/2 lg:rounded-[2rem] lg:pb-14 lg:pt-9">
          <p className="text-lg font-bold text-light-lavender lg:text-2xl">Your Result</p>
          <div className="aspect-square rounded-full bg-gradient-to-b from-violet-blue-circle to-persian-blue-circle p-6 lg:p-14">
            <p className="text-[3.5rem] font-extrabold leading-[4.5rem] lg:text-[4.5rem]">76</p>
            <p className="font-bold text-light-lavender opacity-50 lg:text-lg">of 100</p>
          </div>
          <div>
            <h1 className="mb-2 text-2xl font-bold lg:text-[2rem]">Great</h1>
            <p className="font-medium text-light-lavender lg:text-lg">
              Your performance exceed 65% of the people conducting the test here!
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 p-6 lg:w-1/2">
          <h2 className="text-lg font-bold text-dark-gray-blue lg:text-2xl">Summary</h2>
          <div className="flex flex-col gap-4">
            {data.map(item => (
              <Score
                key={item.category}
                icon={item.icon}
                score={item.score}
                category={item.category}
                variant={item.variant as ScoreVariant}
              ></Score>
            ))}
          </div>
          <button className="cursor-pointer rounded-full bg-dark-gray-blue from-light-slate-blue-bg to-light-royal-blue-bg p-4 text-lg font-bold text-white hover:bg-gradient-to-b focus:bg-gradient-to-b">
            Continue
          </button>
        </div>
      </div>
    </main>
  )
}
