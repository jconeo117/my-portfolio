import React from "react";
import { Projects } from "../components/proyects";
import style from '../styles/projects.module.css'


export const Proyectos =()=>{
    return(
        <section id="portfolio" className={style.portfolio}>
            <div className={style.contenido_seccion}>
                <h2>portafolio</h2>
                <Projects/>
            </div>
        </section>
    )
}