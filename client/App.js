import { useState } from "react";
import { 
    View,
    TextInput,
    Text,
    KeyboardAvoidingView,
    Platform
} from "react-native";

import { NETWORK_ADDRESS, SERVER_PORT } from '@env'

const App = () => {
    const [inputText, setInputText] = useState('');
    const [chatLogs, setChatLogs] = useState([]);

    const SERVER_ORIGIN = `${NETWORK_ADDRESS}:${SERVER_PORT}`;

    // Chat type -> { msg: string, type: string ('user' | 'bot' | 'loading') }

    const addChat = chat => {
         setChatLogs(prevLogs => {
            return [...prevLogs, chat];
        })
    }

    const handleTextSubmit = async () => {
        // User chat
        const newUserChat = { msg: inputText, type: 'user' };
        addChat(newUserChat);
        setInputText('');

        // Bot chat
        try {
            const res = await fetch(SERVER_ORIGIN, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ msg: newUserChat.msg })
            });

            const data = await res.json();
            const newBotChat = { msg: data.msg, type: 'bot' };

            addChat(newBotChat);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={-17}
        >
            <View className='h-full flex justify-end'>
                <View className='px-5 mb-8'>

                    {/* 
                        BUG: Check on (from -> to)
                             From -> mb-1 (parent) and mb-2 (child)
                             To -> mb-3 (parent) with flex gap-2 (child) 

                        BUG: max width to be around 70% on chat bubble
                        BUG: Scrolling on each chat section
                    */}

                    <View className='mb-1.5'>
                        {chatLogs && chatLogs.map((chat, index) => (
                            <View key={index} className={`${chat.type === 'user' ? 'self-end bg-[#0084FF]' : 'self-start bg-[#ECEFF1]'} px-3.5 py-2.5 rounded-3xl mb-2.5`}>
                                <Text className={`${chat.type === 'user' ? 'text-white' : 'text-black'} leading-5 text-base`}>{chat.msg}</Text>
                            </View>
                        ))}
                    </View>

                    <TextInput 
                        className='px-3 py-3 border border-[#CCCCCC] rounded-2xl bg-[#F5F5F5]'
                        placeholder="Message..."
                        defaultValue={inputText}
                        onChangeText={newText => setInputText(newText)}
                        onSubmitEditing={handleTextSubmit}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default App;
