import axios from "axios";

// 타입 정의
export type IslandType = {
    Name: string
    Reward: string
}

export type IslandsResponse = {
    Island: IslandType[]
    IslandDate : string
    Result : string
  };

export type IslandError = {
    error: string;
};

export const fetchIsland = async () => {
    const res = await axios.get<IslandsResponse>("https://lostarkapi.ga/adventureisland/");
    return res.data;
}


    // try {
    //     const res = await axios.get<IslandsResponse>("http://152.70.248.4:5000/adventureisland/");
    // } catch (e) {
    //     if (axios.isAxiosError(e) && e.response) {
    //         console.log((e.response?.data as IslandError).error);
            
    //     }
    // }