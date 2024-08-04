import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { LaravelLogo } from "./icons/LaravelLogo";
import { Code } from "./Code";
import { TailwindLogo } from "./icons/TailwindLogo";
import { NextjsLogo } from "./icons/NextjsLogo";
import { MongoLogo } from "./icons/MongoLogo";
import { ReactLogo } from "./icons/ReactLogo";

export type SpacingProps = {
    size?: "sm" | "md" | "lg";
};

export const Skill = () => {
    return  <Section className="flex flex-col items-start gap-4">
        <Badge variant={"outline"}>Mes competences</Badge>
                <h2 className=" pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    Frontend
                </h2>
                <div className="flex max-md:flex-col gap-4">
                    <div className="flex flex-col gap-2 flex-1">
                            <ReactLogo 
                                size={42} 
                                className="animate-spin"  
                                style={{animationDuration: "10s"}}
                                />
                        <h3 className=" text-2xl font-semibold tracking-tight">
                            React 
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Le framework <Code>Laravel</Code>  pour des projets simple de e-commerce, presentation d'entreprise ou de produits. 
                            En utilsant <Code>Nextjs</Code> pour le front-end.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                            <LaravelLogo size={42} />
                        <h3 className=" text-2xl font-semibold tracking-tight">
                            Angular
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Le framework <Code>Laravel</Code>  pour des projets simple de e-commerce, presentation d'entreprise ou de produits. 
                            En utilsant <Code>Nextjs</Code> pour le front-end.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                            <TailwindLogo size={42} />
                        <h3 className=" text-2xl font-semibold tracking-tight">
                            TailwindCSS
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Le framework <Code>Laravel</Code>  pour des projets simple de e-commerce, presentation d'entreprise ou de produits. 
                            En utilsant <Code>Nextjs</Code> pour le front-end.
                        </p>
                    </div>
                </div>
                <br/>

                <h2 className=" pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    Backend
                </h2>
                <div className="flex max-md:flex-col gap-4">
                    <div className="flex flex-col gap-2 flex-1">
                            <MongoLogo size={42} />
                        <h3 className=" text-2xl font-semibold tracking-tight">
                            MongoDB
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Le framework <Code>Laravel</Code>  pour des projets simple de e-commerce, presentation d'entreprise ou de produits. 
                            En utilsant <Code>Nextjs</Code> pour le front-end.
                        </p>
                    </div>
                    
                    <div className="flex flex-col gap-2 flex-1">
                            <LaravelLogo size={42} />
                        <h3 className=" text-2xl font-semibold tracking-tight">
                            Laravel
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Le framework <Code>Laravel</Code>  pour des projets simple de e-commerce, presentation d'entreprise ou de produits. 
                            En utilsant <Code>Nextjs</Code> pour le front-end.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                            <TailwindLogo size={42} />
                        <h3 className=" text-2xl font-semibold tracking-tight">
                            NodeJS
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Le framework <Code>Laravel</Code>  pour des projets simple de e-commerce, presentation d'entreprise ou de produits. 
                            En utilsant <Code>Nextjs</Code> pour le front-end.
                        </p>
                    </div>
                </div>
    </Section>
}