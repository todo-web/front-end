import Post from "./post";

export default function Posts(props: {arr: Array<{t: string|undefined, d: string|undefined}>}){
    return(
        <>
            {
                props.arr.map((value, _i) => (
                    <Post t={value.t} d={value.d} ok={0} id={0}/>
                ))
            }
        </>
    )
}