import en from "@assets/i18n/en"

interface IProps {
    translationId: string
}

//TODO: Hook me up to a real translation in a form of a middleware
export const translator = ({translationId}: IProps) => {
    return (en as any)[translationId] || translationId;
}