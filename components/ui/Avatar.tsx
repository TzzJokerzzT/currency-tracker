import { Avatar, AvatarBadge, AvatarFallbackText, AvatarImage } from "./avatar/index"

const AvatarComponent = () => {
    return (
        <Avatar>
            <AvatarFallbackText>User</AvatarFallbackText>
            <AvatarImage source={{ uri: "https://bit.ly/dan-abramov" }} />
            <AvatarBadge />
        </Avatar>
    )
}

export default AvatarComponent
