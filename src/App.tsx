//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ConnectButton from './components/ConnectWallet.tsx'
import { ADDRESS_CONTRACT, ABI } from './assets/contracts/erc20.ts'
import { useAccount, useReadContract, useWriteContract } from 'wagmi';

function App() {
  //const [count, setCount] = useState(0)
  const {address, isConnected } = useAccount();


 const { data: nameContract } = useReadContract({
    abi: ABI,
    address: ADDRESS_CONTRACT,
    functionName: 'name',
  })
  
  const { data: balanceOf } = useReadContract({
    abi: ABI,
    address: ADDRESS_CONTRACT,
    functionName: "balanceOf",
    args: [address],
}) as { data: number };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <ConnectButton />
      </div>
      <h1 className='titulo'>Workshop</h1>
      {isConnected ? (
        <>
          <div>
            <div>
              <p>
                {nameContract as string }
                <br />
                {balanceOf && balanceOf.toString()}
              </p>
            </div>
            </div>
          </>
      ) : (
        <p>
          Aún no estás conectado
        </p>
      )}



      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
