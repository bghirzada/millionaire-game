import moneyPyramid from "../data/MoneyPyramid"

const ScoreBoard = ({ setShowScore, step }) => {

  return (
    <div className='fixed flex flex-col gap-2 justify-around right-0 top-0 p-8 w-96 h-screen bg-blue-900'>
      {moneyPyramid.map((item, index) => (
        <div key={index} className={`flex flex-col items-center justify-center ${step === index && 'bg-amber-800'}`}>{item.amount}</div>
      ))}
      <div onClick={() => setShowScore(false)} className='cursor-pointer'>Leave</div>
    </div>
  )
}

export default ScoreBoard
