import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import { Key, ReactNode } from "react";
import {  ALargeSmall, ArrowBigUp, ArrowUpRight, Code, LucideIcon, MessageCircle, Notebook, School, Speech } from "lucide-react";
import { title } from "process";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const Status = () => {
    return (  <Section className="flex max-md:flex-col items-start gap-3" >
        <Card className="flex-[3] p-4 w-full flex flex-col gap-2">
            <p className="text-lg text-muted-foreground">
                Side, fun project
            </p>

        </Card>
        <div className="flex[3] w-full">
            <Card className="w-full p-4 flex flex-col gap-2 w-ful ">
                <p className="text-lg text-muted-foreground">Side, futur</p>
                <div className="flex flex-col gap-4">
                    {SIDE_PROJECT.map((project: { Logo: LucideIcon; title: string; description: string; }, index: Key | null | undefined) => (
                        <SideProject 
                            key={index}
                            Logo={project.Logo}
                            title={project.title}
                            description={project.description} url={""}                        />
                    ))}

                </div>
            </Card>
        </div>
        <div className="flex[2] w-full flex flex-col  gap-4 ml-auto">
            <Card className="p-4 flex-1">
                <p className="flex flex-muted-foreground">Work</p>
                <div className="flex flex-col gap-4">
                    {WORK.map((work, index) => (
                        <Work 
                            key={index}
                           {...work}
                        />
                    ))}
                </div>
            </Card>
            <Card className="p-4 flex-1 flex flex-col gap-2">
            <p className="flex flex-muted-foreground">Mes contacts</p> 
            <ContactCard 
                name="@mouctarlawan" 
                image="/image/pp.jpg" 
                mediumImage={"image/logo2.jpg"} 
                description={"Ecrivez moi en privee"} 
            />
            <ContactCard 
                name="Mouctar LAWAN" 
                image="/image/pp.jpg" 
                mediumImage={"image/linkedin.png"} 
                description={"120"} 
            />
            </Card>
        </div>
    </Section>
    );
};


const ContactCard = (props: {
    image: string;
    mediumImage: string;
    name: string;
    description: string;
}) => {
    return (
        <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
            <div className="relative">
                <img src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-contain" />
                <img src={props.mediumImage} alt={props.name} className="w-5 h-5 absolute -bottom-1 -right-1 rounded-full object-contain" />
            </div>
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                <p className="text-lg font-semibold">{props.name}</p>
                </div>
                <p className="text-sm  text-muted-foreground">{props.description}</p>
            </div>
            <ArrowUpRight className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform" 
                size={16} 
            />
        </Card>
    )
}
const SIDE_PROJECT: SideProjectProps[] = [
    {
        Logo: Code, 
        title: "Blog", 
        description:" Plateforme de developpeur",
        url:"/",

    },
    {
        Logo: Notebook, 
        title: "TodoList", 
        description:" Plateforme de developpeur",
        url:"/",

    },
    {
        Logo: MessageCircle, 
        title: "Flaviegpt", 
        description:" Plateforme de developpeur",
        url:"/",

    },
    {
        Logo: ALargeSmall, 
        title: "BulCorrector", 
        description:" Plateforme de developpeur",
        url:"/",

    },
    {
        Logo: School, 
        title: "MyJobs", 
        description:"Apllication de gestion des etudiants",
        url:"/",

    }
]

type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string
};

const SideProject = (props:SideProjectProps) => {
    return (
        <Link 
            href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <props.Logo size={16}/>
            </span>
            <div>
            <p className="text-lg font-semibold">{props.title}</p>

                <p className="text-sm text-muted-foreground">
                    {props.description}
                </p>
            </div>
        </Link>
        
    ) 
};

const WORK: WorkProps[] = [
    {
    image: "./image/douane.jpeg",
    title: "Douane",
    role:"Contractuel",
    date:"2022 - 2023",
    url: "https://edouanes.cf/?lang=fr",
    

},
{
    image: "https://edouanes.cf/assets/logo-9b1c6eac894c77717ee846ec99411623.svg",
    title: "Douane",
    role:"Contractuel",
    date:"2022 - 2023",
    url: "https://edouanes.cf/?lang=fr",
    freelance: true

},
{
    image: "https://edouanes.cf/assets/logo-9b1c6eac894c77717ee846ec99411623.svg",
    title: "Douane",
    role:"Contractuel",
    date:"2022 - 2023",
    url: "https://edouanes.cf/?lang=fr",
}
];

type WorkProps = {
    image: string;
    title: string;
    role: string;
    date: string;
    url: string;
    freelance?: boolean
};

const Work = (props:WorkProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
          
                <img 
                    src={props.image} 
                    alt={props.title} 
                    className="w-10 h-10 object-contain rounded-md" 
                    
                />
            
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                <p className="text-lg font-semibold">{props.title}</p>
                {props.freelance && <Badge variant="outline">Mission</Badge>  }
                </div>
                <p className="text-sm  text-muted-foreground">
                    {props.role}
                </p>
            </div>
            <div className="ml-auto">
                <p className="text-xs text-end text-muted-foreground">
                        {props.date}
                </p> 
             </div>
        </Link>
        
    ) 
};
