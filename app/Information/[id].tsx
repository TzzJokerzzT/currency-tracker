import InformationPage from "@/view/InformationPage";
import { useLocalSearchParams } from "expo-router";

export default function InformationScreen () {
    const { id } = useLocalSearchParams();
    return (
        <InformationPage cryptoId={id as string}/>
    )
};
