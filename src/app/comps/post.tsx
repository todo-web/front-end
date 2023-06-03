import { Box, Image } from "@chakra-ui/react"
import { useState } from "react"

export default function(props: {t: string|undefined, d: string|undefined, ok: number, id: number}){
    let postOK = "./post_ok.svg"
    let post = "./post.svg"
    let [opacity_v, opacity_c] = useState<number>(0);
    return (
        <article onMouseLeave={() => {opacity_c(0)}} onMouseMove={() =>{opacity_c(1)}}>
            <img id="post-img" src={props.ok? postOK: post}></img>
            <Image
                pos="absolute"
                zIndex={10}
                w="30px"
                h="30px"
                m="10px 0 0 160px"
                bgColor="#00000000"
                id="edit"
                opacity={opacity_v}
                src="edit.svg"
                cursor="pointer"
                transition="all .5s"
                transitionTimingFunction="cubic-bezier(0, -0.14, 0, 2.16)"
                _hover={{
                    transform: "translateY(-1px)"
                }}
                onClick={() => {console.log("click")}}
            />
            <h1>{props.t}</h1>
            <section>{props.d}</section>
        </article>
    )
}