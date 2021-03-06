import React from "react";
import fotoKevin from "../assets/images/foto.png";

export default function PersonalInfo() {
    return (
        <div>
            <div className="flex p-2 box-border inline-flex">
                <h1 className="font-bold">Kevin Jefrey Daza Acosta</h1>
            </div>
            <div
                className=" 2xl:block w-60 bg-white h-60 float-right mt-2"
                id="container_photo"
            >
                <img src={ fotoKevin } alt="" srcset=""  className="ml-6 w-4/5 h-full"/>
            </div>
            <h4 className="p-2">
                Lifesheet - <i>Frontend Developer</i>
            </h4>

            <h1 className="mt-20 p-2">Un poco sobre mi...</h1>
            <p className="text-justify p-2">
                Me gusta mucho el desarrollo Frontend, es una de las partes m谩s
                esenciales de todo proyecto y la que presenta un gran primer
                impacto a todo usuario. Me gusta ser curioso y original con cada
                proyecto que realizo, de la misma forma en cada proyecto, trato
                de probar cosas nuevas y asi seguir aprendiendo m谩s cada d铆a.
            </p>
            <h1 className="p-2">Educaci贸n : </h1>
            <h6>
                馃帗 <strong>Primaria: </strong>
                <i>Noviembre - 2012 - I.E Crist贸bal Col贸n</i>
            </h6>
            <h6>
                馃帗 <strong>Bachiller: </strong>
                <i>Noviembre - 2019 - I.E Gustavo Matamoros D'Costa</i>
            </h6>
            <h6>
                馃帗 <strong>SENA: </strong>
                <i>Noviembre - 2019 - Titulaci贸n "Tecnico en Sistemas".</i>
            </h6>
            <h6>
                馃帗 <strong>a la espera de titulaci贸n SENA: </strong>
                <i>
                    "Tecn贸logo en An谩lisis y Desarrollo de Sistemas de
                    Informaci贸n".
                </i>
            </h6>
            <h1 className="p-2">Experiencia : </h1>
            <h5 className="p-2">
                Github Repository:{" "}
                <a href="https://github.com/K-DAZA?tab=repositories">
                    https://github.com/K-DAZA?tab=repositories
                </a>
            </h5>

            <h1 className="p-2">Contacto: </h1>
            <div className="p-2">
                <h5>Correo: kjda232001@gmail.com</h5>
                <h5>Celular: 3145639053</h5>
                <h5>Direcci贸n: Barrio 14 de Octubre Mz C Casa # 29 - 94</h5>
            </div>
        </div>
    );
}
