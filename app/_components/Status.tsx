import { Section } from "./Section"

export const Status = () => {
    return  <Section className="flex max-md:flex-col items-start gap-3" >
        <div className="flex-[2] flex flex-col gap-2">
            side project
        </div>
        <div className="flex-1" >
            <div>
                Work
            </div>
            <div>
                Contact me
            </div>
        </div>
    </Section>
}