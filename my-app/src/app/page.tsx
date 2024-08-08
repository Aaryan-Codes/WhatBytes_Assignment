"use client";

import Image from "next/image";
import { useState } from "react";
import { LineChartComponent } from "./components/LineChartComponent";
import { PieChartComponent } from "./components/PieChartComponent";
import SyllabusCard from "./components/SyllabusAnnalytics/SyllabusCard";
import { UpdateDialog } from "./components/UpdateDialog";

// export const TOTAL_SCORE = 15;


export default function Home() {
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [score, setScore] = useState(10);

  const handleUpdate = ({score, rank, percentile}: {score: number, rank: number, percentile: number}) => {
    setRank(rank);
    setPercentile(percentile);
    setScore(score);
  }

  return (
    <main className="h-full w-full">
      <header>
        <h3>Skill Test</h3>
      </header>
      <section className="grid grid-cols-6 gap-4">
        <article className="col-span-4 flex flex-col gap-4">
          {/* Score Card Section */}
          <div className="flex justify-between items-center border-2 rounded-md p-4">
            <div className="flex gap-4">
              <div>
                <Image
                  height={100}
                  width={100}
                  className="w-12 h-12"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s"
                  alt="html logo"
                />
              </div>
              <div>
                <p className="font-bold">Hyper Text Markup Language</p>
                <p>
                  Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                </p>
              </div>
            </div>
            <div>
              <UpdateDialog handleUpdate={handleUpdate}
              />
            </div>
          </div>
          {/* Quick Statistics Section */}
          <div className="flex flex-col gap-4 justify-between items-start border-2 rounded-md p-4">
            <p className="font-bold">Quick Statistics</p>
            <div className="flex w-full items-center justify-evenly px-10">
              <div className="flex gap-4 text-sm items-center">
                <span className="bg-gray-200 p-2 rounded-full">🏆</span>
                <span>
                  <p className="font-bold">{rank}</p>
                  <p>YOUR RANK</p>
                </span>
              </div>
              <div className="h-[100%] bg-gray-200"></div>
              <div className="flex gap-4 text-sm items-center">
                <span className="bg-gray-200 p-2 rounded-full">📅</span>
                <span>
                  <p className="font-bold">{percentile}%</p>
                  <p>PERCENTILE</p>
                </span>
              </div>
              <div className="h-[100%] bg-gray-200"></div>
              <div className="flex gap-4 text-sm items-center">
                <span className="bg-gray-200 p-2 rounded-full">✅</span>
                <span>
                  <p className="font-bold">{score}/{15}</p>
                  <p>CORRECT ANSWERS</p>
                </span>
              </div>
            </div>
          </div>
          {/* Comparison Graph */}
          <div className="flex flex-col gap-4 justify-between items-start border-2 rounded-md p-4">
            <p className="font-bold">Comparison Graph</p>
            <div className="flex items-center justify-between w-full">
              <p>
                You scored 30% percentile which is lower than the <br />
                average percentile of 72% of all the engineers who took the
                assessment
              </p>
              <span className="bg-gray-200 p-2 rounded-full">📈</span>
            </div>
            {/* graph */}
            <div className="w-full">
              <LineChartComponent />
            </div>
          </div>
        </article>
        <article className="col-span-2 flex flex-col gap-4">
          <div className="w-full border-2 rounded-md p-4">
            <p className="font-bold py-4">Syllabus Wise Analysis</p>
            <SyllabusCard
              text={"HTML Tools, Forms, History"}
              value={80}
              color={"bg-blue-500"}
            />
            <SyllabusCard
              text={"Tags & References in HTML"}
              value={60}
              color={"bg-orange-500"}
            />
            <SyllabusCard
              text={"Tables & References in HTML"}
              value={24}
              color={"bg-red-500"}
            />
            <SyllabusCard
              text={"Tables & CSS Basics"}
              value={96}
              color={"bg-green-500"}
            />
          </div>
          <div className="w-full border-2 rounded-md p-4">
            <div>
              <div className="w-full flex justify-between"><p className="font-bold ">Question Analysis</p><p>{score}/{15}</p> </div>
              
              <p className="text-sm">
                <b>You scored {score} question correct out of {15}.</b><br/>
                However it still needs some improvements
              </p>
            </div>
            <PieChartComponent score={score} />
          </div>
        </article>
      </section>
    </main>
  );
}
