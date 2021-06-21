import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { ObjectFlags } from 'typescript'

function App() {
  useEffect(() => {
    const sampleData = [
      {
        id: 1,
        studentName: 'Nuk',
        score: 60,
      },
      {
        id: 2,
        studentName: 'Ping',
        score: 100,
      },
      {
        id: 3,
        studentName: 'Amelia Watson',
        score: 14,
      },
      {
        id: 4,
        studentName: 'Gawr Gura',
        score: 125,
      },
    ]
    interface IStudent {
      id: number
      studentName: string
      score: number
    }

    console.log(sampleData)
    // Task: Create Interface

    // Task: filter failing student (score < 60)

    console.log(sampleData.filter((e) => e.score < 60))

    // Task: Array of name only ????

    console.log(sampleData.map((e) => e.studentName))

    // Task: Average score of class
    // let a = 0
    // sampleData.forEach((e) => {
    //   a += e.score
    // })
    // const b = a / sampleData.length
    // console.log(b)

    // function showStuName(student: IStudent): number {
    //   return 1
    // }
    // function getScore(obj: IStudent): Promise<number> {
    //   return new Promise<number>((resolved) => {
    //     setTimeout(() => {
    //       resolved(obj.score)
    //     }, 1000)
    //   })
    // }
    // getScore(sampleData[0]).then((e) => console.log(e))

    // const Teacher = {
    //   id: 1,
    //   student: [
    //     {
    //       id: 1,
    //       studentName: 'Nuk',
    //       score: 60,
    //     },
    //   ],
    // }
    // interface ITeacher {
    //   id: number
    //   student: IStudent[]
    // }
    // const mockUp: ITeacher = []

    // showStuName({ id: 1, score: 1, studentName: 'Halo' })

    function sumStuScore(obj: IStudent[]): number {
      let sum = 0
      obj.map((e) => {
        sum += e.score
      })
      return sum
    }
    console.log(sumStuScore(sampleData))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
