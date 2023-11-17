import { Pressable, Text } from "react-native";

const NewButton = ({ title, onPress, style = {
    backgroundColor: 'cyan',
    borderColor: '#000',
    borderWidth: 1,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
} }) => {
    return (
        <Pressable onPress={onPress} style={style}>
            <Text>{title}</Text>
        </Pressable>
    );
}

export default NewButton;