import type { MetaFunction } from '@remix-run/node'
import data from '../data.json'
import Score from '~/components/Score'

export const meta: MetaFunction = () => {
  return [{ title: 'Result Summary Component' }, { name: 'description', content: 'A Challenge from Frontend Mentor!' }]
}

export default function Index() {
  return (
    <main>
      <div className="bg-white">
        <div>
          <p>Your Result</p>
          <div>
            <p>76</p>
            <p>of 100</p>
          </div>
          <h1>Great</h1>
          <p>Your performance exceed 65% of the people conducting the test here!</p>
        </div>
        <div>
          <h2>Summary</h2>
          {data.map(item => (
            <Score className="" key={item.category} icon={item.icon} score={item.score}>
              <Score.Category className="">{item.category}</Score.Category>
            </Score>
          ))}
          <button>Continue</button>
        </div>
      </div>
    </main>
  )
}
