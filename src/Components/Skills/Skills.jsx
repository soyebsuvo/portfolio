import html from "../../assets/html.png"
import css from '../../assets/css.png'
import tailwind from '../../assets/tailwind.png'
import js from '../../assets/js.png'
import react from '../../assets/react.svg'
import node from '../../assets/node.png'
import git from '../../assets/git.png'
import github from '../../assets/github.png'
import vscode from '../../assets/vscode.png'
import express from '../../assets/express.png'
import "./skills.css"
export default function Skills() {
  return (
    <div id="skills" className="md:px-16 py-8">
        <div className="text-center">
                <h2 className="text-3xl font-bold">My <span className="text-[#4155d5] py-3">Skills</span></h2>
                <hr className="border-4 border-dotted border-t-0 border-[#4155d5] mt-3 w-56 mx-auto" />
            </div>
      <div className="flex justify-center items-start gap-6 py-12">
        <div className="md:w-1/2 grid grid-cols-4 justify-center items-center gap-5">
            <img className="w-20" src={html} alt="" />
            <img className="w-20" src={css} alt="" />
            <img className="w-20" src={tailwind} alt="" />
            <img className="w-20" src={js} alt="" />
            <img className="w-20" src={react} alt="" />
            <img className="w-20" src={node} alt="" />
            <img className="w-20" src={git} alt="" />
            <img className="w-20" src={github} alt="" />
            <img className="w-20" src={vscode} alt="" />
            <img className="w-20" src={express} alt="" />
        </div>
        <div className="md:w-1/2 md:px-20 py-6">
            <div className="w-full flex justify-center items-center">
                <p className="font-bold mr-3 mb-1 w-20">HTML:</p> <progress className="progress progress-primary w-full" value="90" max="100"></progress>
            </div>
            <div className="w-full flex justify-center items-center">
                <p className="font-bold mr-3 mb-1 w-20">CSS:</p> <progress className="progress progress-primary w-full" value="80" max="100"></progress>
            </div>
            <div className="w-full flex justify-center items-center">
                <p className="font-bold mr-3 mb-1 w-20">Tailwind:</p> <progress className="progress progress-primary w-full" value="90" max="100"></progress>
            </div>
            <div className="w-full flex justify-center items-center">
                <p className="font-bold mr-3 mb-1 w-20">JS:</p> <progress className="progress progress-primary w-full" value="70" max="100"></progress>
            </div>
            <div className="w-full flex justify-center items-center">
                <p className="font-bold mr-3 mb-1 w-20">React:</p> <progress className="progress progress-primary w-full" value="80" max="100"></progress>
            </div>
            <div className="w-full flex justify-center items-center">
                <p className="font-bold mr-3 mb-1 w-20">Node:</p> <progress className="progress progress-primary w-full" value="70" max="100"></progress>
            </div>
            <div className="w-full flex justify-center items-center">
                <p className="font-bold mr-3 mb-1 w-20">Express:</p> <progress className="progress progress-primary w-full" value="85" max="100"></progress>
            </div>
            <div className="w-full flex justify-center items-center">
                <p className="font-bold mr-3 mb-1 w-20">Git:</p> <progress className="progress progress-primary w-full" value="60" max="100"></progress>
            </div>
            <div className="w-full flex justify-center items-center">
                <p className="font-bold mr-3 mb-1 w-20">Github:</p> <progress className="progress progress-primary w-full" value="70" max="100"></progress>
            </div>
            <div className="w-full flex justify-center items-center">
                <p className="font-bold mr-3 mb-1 w-20">Code:</p> <progress className="progress progress-primary w-full" value="80" max="100"></progress>
            </div>
        </div>
      </div>
    </div>
  )
}
