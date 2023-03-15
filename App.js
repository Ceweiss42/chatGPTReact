import React, { Component , useState} from "react";
import { ScrollView, Text, TextInput, View, Image, SafeAreaView , Button} from 'react-native';
import Chat from "./Chat";
import QuestionBox from "./Question";

const App = () => {

    const [components, setComponents] = useState(["first"]);

    function addComponent()
    {
        const newList = components.concat("...");
        setComponents(newList);
    }

    return (
        <SafeAreaView>
            {components.map((item, i) => {
                return (
                    <View>
                        <Chat key={i} user={i % 2 == 0} content={item} />
                    </View>
                );
            })}
            <QuestionBox />
            <Button onPress={() => addComponent()} title={"Send"}/>

        </SafeAreaView>

    )
}

export default App;