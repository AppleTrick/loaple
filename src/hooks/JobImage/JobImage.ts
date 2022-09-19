import arcana from '../../assets/image/JobImage/arcana_s.png'
import artist from '../../assets/image/JobImage/artist_s.png'
import bard from '../../assets/image/JobImage/bard_s.png'
import battlemaster from '../../assets/image/JobImage/battlemaster_s.png'
import berserker from '../../assets/image/JobImage/berserker_s.png'
import blade from '../../assets/image/JobImage/blade_s.png'
import blaster from '../../assets/image/JobImage/blaster_s.png'
import demonic from '../../assets/image/JobImage/demonic_s.png'
import destroyer from '../../assets/image/JobImage/destroyer_s.png'
import devilhunter from '../../assets/image/JobImage/devilhunter_s.png'
import gunslinger from '../../assets/image/JobImage/gunslinger_s.png'
import hawkeye from '../../assets/image/JobImage/hawkeye_s.png'
import holyknight from '../../assets/image/JobImage/holyknight_s.png'
import infighter from '../../assets/image/JobImage/infighter_s.png'
import lancemaster from '../../assets/image/JobImage/lancemaster_s.png'
import reaper from '../../assets/image/JobImage/reaper_s.png'
import scouter from '../../assets/image/JobImage/scouter_s.png'
import sorceress from '../../assets/image/JobImage/sorceress_s.png'
import soulmaster from '../../assets/image/JobImage/soulmaster_s.png'
import striker from '../../assets/image/JobImage/striker_s.png'
import summoner from '../../assets/image/JobImage/summoner_s.png'
import warload from '../../assets/image/JobImage/warlord_s.png'
import weather_artist from '../../assets/image/JobImage/weather_artist_s.png'

export const useJobNameChange = (jobName : string) => {
    return ["gunslinger", "hawkeye", "devilhunter", "blaster", "bard","arcana","summoner","sorceress","soulmaster","infighter","battlemaster","lancemaster","warload","holyknight","berserker","destroyer","artist","weather_artist","striker","demonic","reaper","blade","scouter"][["건슬링어", "호크아이", "데몬헌터", "블래스터", "바드", "아르카나", "서머너", "소서리스", "기공사", "인파이터", "배틀마스터", "창술사", "워로드", "홀리나이트", "버서커", "디스트로이어", "도화가", "기상술사","스트라이커","데모닉","리퍼","블레이드","스카우터"].indexOf(jobName)];
}

export const useGetJobImage = (jobName : string) => {
    return [gunslinger, hawkeye, devilhunter, blaster, bard,arcana,summoner,sorceress,soulmaster,infighter,battlemaster,lancemaster,warload,holyknight,berserker,destroyer,artist,weather_artist,striker,demonic,reaper,blade,scouter][["건슬링어", "호크아이", "데몬헌터", "블래스터", "바드", "아르카나", "서머너", "소서리스", "기공사", "인파이터", "배틀마스터", "창술사", "워로드", "홀리나이트", "버서커", "디스트로이어", "도화가", "기상술사","스트라이커","데모닉","리퍼","블레이드","스카우터"].indexOf(jobName)];
}