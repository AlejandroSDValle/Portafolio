export type skill = {
    categoria: string,
    img: string
    tecnologia: string
}

export type ProjectImages = {
    imagen: string;
    descripcion: string;
};

export type project = {
    id: number
    img: string
    name: string
    shortDescription: string
    fullDescription: string
    tecnologies: string[]
    link: string
    imagenes: ProjectImages[];
}