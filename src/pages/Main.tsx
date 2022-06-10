import React, { useState } from 'react'
import MainContents from 'components/mainContents/MainContents';


const Main = () => {


    const [charactersData, setCharctersData] = useState<loaChar[]>([
        {
            characterName: "하얀눈송이아래",
            level: 1582.5,
            daily: {
                gardian: {
                    count: 0,
                    safe : 0
                },
                chaosDungeon: {
                    count: 0,
                    safe : 0
                }
            }
        },
    ]);

    const addCharacterData = () => {
        setCharctersData([...charactersData ,{
            characterName: "하얀눈송이아래",
            level: 1582.5,
            daily: {
                gardian: {
                    count: 0,
                    safe : 0
                },
                chaosDungeon: {
                    count: 0,
                    safe : 0
                }
            }
        } ]);
    }

    return (
        <>
            <MainContents/>
        </>
    )
}

export default Main;