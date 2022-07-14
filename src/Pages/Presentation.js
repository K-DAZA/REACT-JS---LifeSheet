import React from "react";
import "../assets/css/clippy-path.css";
import PersonalInfo from "../components/PersonalInfo";
import Skills from "../components/Skills";

export default function Presentation() {
    return (
        <div className="2xl:flex w-full">
            <div
                className="w-full 2xl:w-3/6 text-white p-4 m-0"
                id="container_left"
            >
                <PersonalInfo />
            </div>
            <div className="text-white 2xl:w-3/6 m-0" id="container_right">
                <Skills />
            </div>
        </div>
    );
}
