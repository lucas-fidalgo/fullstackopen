import { useState } from 'react'

const Display = (props) => {
  if (props.percent) {
    return(
      <p>{props.text} {props.value} %</p>
    )
  }
  return(
    <p>{props.text} {props.value}</p>
  )
}
const Button = ({ onClick, text }) =>
  <button onClick={onClick}>{text}</button>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const calculateStats = (g, n, b) => {
    const a = g + b + n

    setAll(a);
    setAverage((g - b) / a)
    setPositive((g / a) * 100)
  }

  const addGoodReview = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    calculateStats(updatedGood, neutral, bad)
  }

  const addNeutralReview = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    calculateStats(good, updatedNeutral, bad)
  }

  const addBadReview = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    calculateStats(good, neutral, updatedBad)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={addGoodReview} text='good' />
      <Button onClick={addNeutralReview} text='neutral' />
      <Button onClick={addBadReview} text='bad' />

      <h1>statistics</h1>
      <Display text='good' value={good} />
      <Display text='neutral' value={neutral} />
      <Display text='bad' value={bad} />
      <Display text='all' value={all} />
      <Display text='average' value={average} />
      <Display text='positive' value={positive} percent="true" />
    </div>
  )
}

export default App
