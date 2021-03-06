export class Searcher{
  id: number;
  playerName: string;

  //基礎データ
  name: string;
  education: string;
  mentallyIll: string;
  sex: string;
  age: number;

  //能力値と技能
  status: {[key: string]:number} = {STR:0, DEX:0, INT:0, CON:0, APP:0, POW:0, SIZ:0, SAN:0, EDU:0};
  statusRoll: {[key: string]:number} = {idea:0, luck:0, knowledge:0};
  firstAbilities: any[] = [["言いくるめ",,5,0,0,5],["医学",,5,0,0,5],["運転（自動車）",,20,0,0,20],["運転","detail",20,0,0,20],["応急手当て",,30,0,0,30],["オカルト",,5,0,0,5],["回避",,0,0,0,0],["化学",,1,0,0,1],["鍵開け",,1,0,0,1],["隠す",,15,0,0,15],["隠れる",,10,0,0,10],["機械修理",,20,0,0,20],["聞き耳",,25,0,0,25],["クトゥルフ神話",,0,0,0,0],["芸術","detail",5,0,0,5],["芸術","detail",5,0,0,5],["経理",,10,0,0,10],["考古学",,1,0,0,1],["コンピューター",,1,0,0,1],["忍び歩き",,10,0,0,10],["写真術",,10,0,0,10],["重機械操作",,1,0,0,1],["乗馬",,5,0,0,5],["信用",,15,0,0,15],["心理学",,5,0,0,5],["人類学",,1,0,0,1],["水泳",,25,0,0,25],["製作","detail",5,0,0,5],["製作","detail",5,0,0,5]];
  secondAbilities: any[] = [["精神分析",,1,0,0,1],["生物学",,1,0,0,1],["説得",,15,0,0,15],["操縦","detail",1,0,0,1],["操縦","detail",1,0,0,1],["地質学",,1,0,0,1],["跳躍",,25,0,0,25],["追跡",,10,0,0,10],["電気修理",,10,0,0,10],["電子工学",,1,0,0,1],["天文学",,1,0,0,1],["投擲",,25,0,0,25],["登攀",,40,0,0,40],["図書館",,25,0,0,25],["ナビゲート",,10,0,0,10],["値切り",,5,0,0,5],["博物学",,10,0,0,10],["物理学",,1,0,0,1],["武道","detail",1,0,0,1],["武道","detail",1,0,0,1],["変装",,1,0,0,1],["法律",,5,0,0,5],["他の言語","detail",1,0,0,1],["他の言語","detail",1,0,0,1],["母国語",,0,0,0,0],["目星",,25,0,0,25],["薬学",,1,0,0,1],["歴史",,20,0,0,20],["居合い",,1,0,0,1],["拳銃",,20,0,0,20]];
  battleAbilities: any[] = [["サブマシンガン",,15,0,0,15], ["ショットガン",,30,0,0,30], ["マシンガン",,15,0,0,15], ["ライフル",,25,0,0,25], ["キック",,25,0,0,25], ["組みつき",,25,0,0,25], ["こぶし",,50,0,0,50], ["頭突き",,10,0,0,10]];

  //設定
  address: string;
  description: string;
  family: string;
  insanity: string;
  injury: string;
  scar: string;
  history: string;

  //収入・資産
  income: number;
  cash: number;
  deposit: number;
  wealth: string;
  estate: string;
  belongings: string;

  //クトゥルフ神話関連
  magicBooks: string;
  artifacts: string;
  spell: string;
  supernaturals: string;
}