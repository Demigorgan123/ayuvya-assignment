'use client'
import { useState } from "react";
import Likedislike from "./components/Likedislike";
import Starrating from "./components/Starrating";
import {Neuton, Nunito} from "next/font/google";
const neuton = Neuton({subsets:['latin-ext'], weight:['400']})
const nunito = Nunito({subsets:['latin'], weight:['600']});
type trait_state = {
  title: string;
  isClicked: boolean;
}
export default function Home() {
  const [traits, setTraits] = useState([
    {title:"Adventurous", isClicked:false},
    {title:"Clean", isClicked:false},
    {title:"Good listener", isClicked:false},
    {title:"Honest", isClicked:false},
    {title:"Humorous", isClicked:false},
    {title:"Inspiring", isClicked:false},
    {title:"Kind", isClicked:false},
    {title:"Knowledgable", isClicked:false},
    {title:"Non-judgemental", isClicked:false},
    {title:"Spontaneous", isClicked:false},
    {title:"Talkative", isClicked:false},
    {title:"Thoughtful", isClicked:false},
    {title:"Trustworthy", isClicked:false},
  ]);
  const handleClick = (idx:number):void=>{
    const update_traits:trait_state[] = [...traits];
    if(update_traits[idx].isClicked){
      update_traits[idx].isClicked = false;
    }
    else update_traits[idx].isClicked = true;
    setTraits(update_traits);
  }
  return (
    <div className='px-4 p-3'>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
          <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
      </div>
      <div className='mb-5 mt-2'>
        <p className={`text-5xl ${neuton.className}`}>Leave a review</p>
      </div>
      <div className='divide-y-2 divide-dashed'>
        <div className='py-10'>
          <p className={`text-4xl ${neuton.className}`}>Safety</p>
          <p className={`text-gray-400 my-3 ${nunito.className}`}>How safe did you feel with Trausti?</p>
          <Starrating rate={5} />
        </div>
        <div className='py-10'>
          <p className={`text-4xl ${neuton.className}`}>Communication</p>
          <p className={`text-gray-400 my-3 ${nunito.className}`}>How easy was to communicate with Trausti?</p>
          <Starrating rate={4} />
        </div>
        <div className='py-10'>
          <p className={`text-4xl ${neuton.className}`}>Would you recommend Trausti?</p>
          <p className={`text-gray-400 my-3 ${nunito.className}`}>{`Your opinion won't be posted publicly.`}</p>
          <Likedislike />
        </div>
        <div className="py-10">
          <p className={`text-4xl ${neuton.className}`}>Praise</p>
          <p className={`text-gray-400 my-3 ${nunito.className}`}>What traits best describe Trausti?</p>
          <div className="flex flex-wrap gap-x-3 gap-y-1 mt-4">
            {
              traits.map((trait:trait_state, idx: number) => {
                return (<div className={`${trait.isClicked?'bg-[#a1e6b8]':'bg-[#f0ece5]'} py-3 px-4 rounded-full ${nunito.className}`} key={idx} onClick={()=>handleClick(idx)}>{trait.title}</div>)
              })
            }
          </div>
        </div>
        <div className="py-10">
          <p className={`text-4xl ${neuton.className}`}>Care to share more?</p>
          <p className={`text-gray-400 my-3 ${nunito.className}`}>{`How was your overall experience? What's that one thing you won't forget Trausti for?`}</p>
          <textarea placeholder="Come on, you know the drill." rows={8} className={`outline-none border-[1px] border-gray-300 mt-3 w-full rounded-lg p-2 ${nunito.className}`} />
        </div>
      </div>
        <button className={`p-5 bg-[#a1e6b8] w-full my-4 rounded-lg text-[#1a5e69] ${nunito.className}`}>PUBLISH REVIEW</button>
    </div>
  );
}
