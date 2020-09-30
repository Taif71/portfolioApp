import React, { Component } from 'react';
import Terminal from 'terminal-in-react';

import {
    about,
    help,
    contact,
    interests,
    //publications,
    learning,
    takeTo,
    manliness,
    books,
    films,
    tech
} from './utils';

class App extends Component<{}, {}> {
    render() {
        return (
            <div className="terminal"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh"
                }}
            >
                <Terminal
                    color='white'
                    backgroundColor='#2b051b'
                    barColor='#1B1B1B'
                    style={{ fontWeight: "bold", fontSize: "1.8em" }}
                    prompt='yellow'
                    promptSymbol='$'
                    allowTabs={false}
                    commands={{
                        'help': () => help(),
                        'about': () => about(),
                        'interests': () => interests(),
                        //'publications': () => publications(),
                        'learning': () => learning(),
                        'contact': () => contact(),
                        'blog': () => takeTo('blog'),
                        'medium': () => takeTo('medium'),
                        //'photography': () => takeTo('photography'),
                        'github': () => takeTo('github'),
                        'manliness': () => manliness(),
                        'books': () => books(),
                        'films': () => films(),
                        'tech': () => tech()
                    }}
                    msg={                        
                        '       Welcome to my About Me Site.\n   I am Mohammad Tasneemul Alam Bakshi.\n\n' + 
                        '***IMPORTANT: Read Through Below: ***' +
                        '\n❓Type help (and press enter or return) to get started!\n'+
                        '❓Type clear to clean the terminal\n'+
                        '❓You can also click on the green dot on top to maximize the console.\n' +
                        `⏱${new Date()}`
                    }
                />
            </div>
        );
    }
}

export default App;
