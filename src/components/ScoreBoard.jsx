import moneyPyramid from "../data/MoneyPyramid"

const ScoreBoard = ({ setShowScore, step }) => {

  return (
    <div className='fixed flex flex-col gap-2 justify-around right-0 top-0 py-8 pl-96 pr-14 w-auto h-screen bg-gradient-to-b from-slate-900 to-blue-800 rounded-l-full'>
      {moneyPyramid.map((item, index) => (
        <div key={index} className={`flex flex-col items-center justify-center rounded-full text-white hover:shadow-lg hover:transform hover:scale-125 ${step === index && 'bg-gradient-to-l from-purple-950 via-purple-800 to-purple-400 shadow-xl transform scale-125'}`}>{item.amount}</div>
      ))}
      <div onClick={() => setShowScore(false)} className='py-2 px-10 mt-8 text-white rounded-full border-cyan-500 border-2 bg-gradient-to-l from-purple-950 via-purple-800 to-purple-400 hover:from-purple-400 hover:to-purple-950 cursor-pointer'>Leave</div>
    </div>
  )
}

export default ScoreBoard
