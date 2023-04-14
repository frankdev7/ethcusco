import { Inter } from 'next/font/google'
import { PageData } from '@/components/page-data';
import { Contract, ethers } from "ethers";
import { ABI_APIConsumer } from '@/contracts/APIConsumer';
import { useEffect, useState } from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [provider, setProvider] = useState<any>()
  const [contract, setContract] = useState<Contract>()
  const [temperature, setTemperature] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_WSS_ALCHEMY)
      setProvider(new ethers.providers.WebSocketProvider(process.env.NEXT_PUBLIC_WSS_ALCHEMY));
  }, [])


  useEffect(() => {
    if (provider && process.env.NEXT_PUBLIC_CONTRACT_ADDRESS) {
      setContract(new ethers.Contract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS, ABI_APIConsumer, provider));
    }
  }, [provider])


  useEffect(() => {
    if (contract && process.env.NEXT_PUBLIC_EVENT) {
      const getTemperature = async () => {
        const initialTemperature = await contract.price();
        setTemperature(initialTemperature.toNumber().toString());
      }
      getTemperature();

      contract.on(process.env.NEXT_PUBLIC_EVENT, (requestId: string, price: ethers.BigNumber) => {
        setTemperature(price.toNumber().toString());
      });
    }
  }, [contract]);


  return (
    <>
      <PageData temperature={temperature !== undefined ? temperature : "..."} />

    </>
  );

}
