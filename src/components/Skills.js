import React from "react";
import logoReact from "../assets/images/react.png";
import logoJS from "../assets/images/javascript.png";
import logoCSS from "../assets/images/css.png";
import logoHTML from "../assets/images/html.png";




export default function Skills() {
    return (
        <div className="2xl:text-black">
            <h1 className="text-center 2xl:text-black 2xl:pl-32 2xl:pt-5 font-bold">
                <h1 className="2xl:text-start">Habilidades Frontend</h1>
            </h1>
            <div className="2xl:flex">
                <div className="">
                    <img
                        src={logoReact}
                        alt=""
                        srcset=""
                        className="w-28 h-28 2xl:ml-32 2xl:mt-10"
                    />
                </div>
                <h6 className="text-justify w-96 mt-12 ml-8">
                    Tengo conocimientos de React js, manejo de componentes,
                    manejo de estados, manejo de algunos hooks de react, es una
                    libreria que me fascina utilizar, y de hecho, es mi
                    favorita.
                </h6>
                <h1 className="mt-12 ml-16 font-bold">60 %</h1>
            </div>
            <div className="2xl:flex">
                <img
                    src={logoJS}
                    alt=""
                    srcset=""
                    className="w-24 h-24 2xl:ml-24 2xl:mt-10"
                />
                <h6 className="text-justify w-96 mt-12 ml-8">
                    Tengo buenas bases de javascript, funciones, variables,
                    condicionales, bucles y mucho más. Es mi lenguaje de
                    programación favorito, así que cada día aprendo cosas nuevas
                    sobre él.
                </h6>
                <h1 className="mt-12 ml-16 font-bold">75 %</h1>
            </div>
            <div className="2xl:flex">
                <img
                    src={logoCSS}
                    alt=""
                    srcset=""
                    className="w-28 h-28 2xl:ml-16 2xl:mt-10"
                />
                <h6 className="text-justify w-96 mt-12 ml-8">
                    Sin duda alguna, CSS es demasiado importante para un
                    programador frontend, en este presento también buenas bases,
                    flexbox, diseño responsivo, Bootstrap, Tailwind,
                    animaciones. Un poco sobre el pre-procesador Sass.
                </h6>
                <h1 className="mt-16 ml-16 font-bold">85 %</h1>
            </div>
            <div className="2xl:flex">
                <img
                    src={logoHTML}
                    alt=""
                    srcset=""
                    className="w-28 h-28 2xl:ml-10 2xl:mt-10"
                />
                <h6 className="text-justify w-96 mt-12 ml-8">
                    En HTML tengo buen conocimiento, manejo muy bien las
                    etiquetas, al igual que trato de mantener mi código legible
                    y limpio. Contenedores, etiquetas SEO y mucho más.
                </h6>
                <h1 className="mt-16 ml-16 font-bold">90 %</h1>
            </div>
            <h5 className="mt-12 ml-10 font-bold">
                Desarrollado por: Kevin Jefrey Daza Acosta
            </h5>
            <h5 className="ml-10 font-bold">Libreria Utilizada: React JS</h5>
            <h5 className="ml-10 font-bold">
                Editor de código utilizado: Visual Studio Code
            </h5>
        </div>
    );
}
