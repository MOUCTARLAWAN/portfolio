import { PropsWithChildren } from "react"

export const Section = (props: PropsWithChildren) => {
    return (
        <div className="max-w-3xl px-4 m-auto" >
            {props.children}
        </div>
    )
}