import { Box } from "@chakra-ui/react"
import { useState } from "react"

export default function(props: {t: string|undefined, d: string|undefined, ok: number, id: number}){
    let postOK = "./post_ok.svg"
    let post = "./post.svg"
    let [display_v, display_c] = useState<string>("none")
    return (
        <article onMouseLeave={() => {display_c("none")}} onMouseMove={() =>{display_c("block")}}>
            <img src={props.ok? postOK: post}></img>
            <Box
            pos="absolute"
            w="20px"
            h="20px"
            m="10px 0 0 170px"

            bgColor="#ddd"
            id="edit"
            display={display_v}
            ></Box>
            <h1>{props.t}</h1>
            <section>{props.d}</section>
        </article>
    )
}