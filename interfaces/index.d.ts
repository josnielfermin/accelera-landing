import { StaticImageData } from "next/image";

export interface SubLink {
    name: string;
    href?: string;
    icon?: JSX.Element;
}

export interface Link {
    name: string;
    href?: string;
    subLinks?: SubLink[];
    icon?: JSX.Element;
}

export interface IProduct {
    image: StaticImageData;
    name: string;
    apy: string;
}

export interface Difference {
    icon: StaticImageData;
    name: JSX.Element;
    description: string;
    minorPaddingTop?: boolean;
}
