import './css/mainTable.css';
import React, { useState } from 'react'
import TestComponent from '../components/TestComponent/TestComponent';

interface loaChar {
    characterName: string,
    level: number,
    daily: {
        gardian: {
            count: number,
            safe : number
        },
        chaosDungeon: {
            count: number,
            safe: number
        }
    },
}

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
        }
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
            <table>
                <tr>
                    <th>이름</th>
                    <th>레벨</th>
                    <th>일일가디언</th>
                    <th>휴식게이지</th>
                    <th>카오스던전</th>
                    <th>휴식게이지</th>
                </tr>
                {charactersData.map((e, index) =>
                    (
                    <tr key={index}>
                        <th>{e.characterName}</th>
                        <th>{e.level}</th>
                        <th>{e.daily.gardian.count}</th>
                        <th>{e.daily.gardian.safe}</th>
                        <th>{e.daily.chaosDungeon.count}</th>
                        <th><TestComponent/></th>
                        {/* <th>{e.daily.chaosDungeon.safe}</th> */}

                    </tr>)
                )}
            </table>
            <button onClick={addCharacterData}>정보추가하기</button>
        </>
    )
}

export default Main;