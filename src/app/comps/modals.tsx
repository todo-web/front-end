import { Box, Center } from "@chakra-ui/react"
import { Dispatch, RefObject, SetStateAction } from "react"
type Props = {
    modal_c: Dispatch<SetStateAction<boolean>>
    modal_v: boolean
    
    height: number

    posts_c: Dispatch<SetStateAction<Array<{t: string|undefined, d: string|undefined}>>>
    posts_v: Array<{t: string|undefined, d: string|undefined}>

    title: RefObject<HTMLInputElement>
    des: RefObject<HTMLInputElement>
}
export default function AddModal(props: Props){
    return (
        <Box
        position="fixed"
        w="100%"
        h={`${props.height}px`}
        display={props.modal_v? "flex": "none"}
        alignItems="center"
        justifyContent="center"
        
        top="0"
        left="0"
        zIndex="5"
        
      >
        <Box
        position="absolute"
        zIndex="-10" 
        w="100%"
        h="100%"
        transition="10s"
        backdropFilter={props.modal_v? "blur(10px)": "blur(0)"}
        bgColor={props.modal_v? "#00000050": "00000000"}
        onClick={() => {props.modal_c(!props.modal_v)}}
        ></Box>
        <form action="" id="post-add" onSubmit={(e) => {
          e.preventDefault()
          props.modal_c(!props.modal_v)
          let a = [...props.posts_v]
          a.push({t: props.title.current?.value, d: props.des.current?.value})
          props.posts_c(a)
        }}>
          <Center
            fontSize="30px"
            fontWeight="600"
            pb="30px"
          >add</Center>
          <input type="text" id="title" ref={props.title} required/>
          <br />
          <label htmlFor="title">title</label>
          
          <br />
          <br />

          <input type="text" id="des"  ref={props.des} required/>
          <br />
          <label htmlFor="des">description</label>
          
          <br />
          <br />

          <input type="submit" value="submit" />
        </form>
      </Box>
    )
}