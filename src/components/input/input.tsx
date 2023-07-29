
interface InputProps{
    type?:string
    placehoder?:string
    className?:string
    onChange?: (e:any)=> void
    value?: any
    chacked?: boolean
    onChecked?: (e:any)=> void
}
export const Input=(props:InputProps)=>{
    return(
        <>
        <input type={props.type} placeholder={props.placehoder} onChange={props.onChange} value={props.value} className={props.className}/>
        </>
    )
}