// Typescript 타입 선언 참조 bmp, gif, jpeg 등 리소프 파일 가져오기를 지원한다
// module.css , module.scss 확장자를 가진 css 모듈 가져오기에 대한 지원을 추가한다.
/// <reference types="react-scripts" />

// 테스트 데이터
type userData = {
    id: string,
    name: string,
    email: string,
    phone : string
}

// 실전데이터
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