import { Dispatch, SetStateAction } from "react";
import Post from "./post";

type Props = {
    arr: Array<{t: string|undefined, d: string|undefined}>
    modal: {
        change: Dispatch<SetStateAction<boolean>>
    }
}

export default function Posts(props: Props){
    return(
        <>
            {
                props.arr.map((value, _i) => (
                    <Post t={value.t} d={value.d} ok={0} id={0} modal={props.modal}/>
                ))
            }
        </>
    )
}