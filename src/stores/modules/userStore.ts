import { defineStore } from "pinia";

const userData = {

  }

const questionAnswers=new Map()



//题型:1-选择,2-填空,3-地图标定,4-地图上标记当前所处位置
const questions=[
  {
    title:"一、地质罗盘的使用测试（25分）",
    isCommit:false,
    children:[
    {
      id:1,
      type:1,
      questionBody:"（1）下图是地质罗盘的示意图，请选出下列选项中各个部件描述正确的一项（5分）",
      questionChoice:[
        "A. ⑦是刻度螺旋，通过调整磁针，来进行磁偏角的修正",
        "B. ④是方位水准器，用来判断地质罗盘与水平面的垂直方向的夹角是否在可接受的误差范围内",
        "C. ⑨是方位刻度盘，用来读出方位角度",
        "D. ⑦是磁针制动器，用来控制磁针的摆动"
      ],
      questionImg:[
        "https://aquaman-1314140460.cos.ap-beijing.myqcloud.com/questionImg/11.png",
        "https://aquaman-1314140460.cos.ap-beijing.myqcloud.com/questionImg/12.png"]
    },
    {
      id:2,
      type:1,
      questionBody: "（2）用地质罗盘瞄准目的物时，下面哪些描述是正确的？（5分）",
      questionChoice:[
        "A.瞄准时眼睛、反光镜上的细线和目的物应该处于一条直线上",
        "B.瞄准目的物时，应该按住磁针制动器，保证瞄准时，磁针不左右晃动",
        "C.先瞄准目的物，再调整地质罗盘上的水准仪",
        "D.不管目的物处于视线上方还是下方，使用罗盘进行瞄准的方式都一样"
      ],
      questionImg: []
    },
    {
      id:3,
      type:1,
      questionBody: "（3）利用地质罗盘进行定位时的使用步骤（判断题）（10分）\n" +
        "1.记录方位刻度盘读数\n" +
        "2.地质罗盘磁偏角校正\n" +
        "3.使用地质罗盘进行瞄准\n" +
        "4.调整地质罗盘方位水准器，使气泡位于误差范围内\n" +
        "5.确定待测目标的大致位置\n" +
        "6.待磁针稳定后，按下磁针制动器",
      questionChoice:[
        "A.425316",
        "B.654321",
        "C.462513",
        "D.254361"
      ],
      questionImg: []
    },
    {
      id:4,
      type:1,
      questionBody: "（4）当目标地物在实现的不同高度的时候，应该怎么拿地质罗盘进行瞄准（5分）",
      questionChoice:[
        "A. 当目标地物位于视线下方或与视线齐平时，把罗盘放置胸前，使罗盘瞄准觇板指向测量地物，即使罗盘北端对着测量地物，南端靠着自己，低头查看反光镜，使得反光镜上的细线、瞄准觇板尖端和测量地物处于同一条直线，待指针稳定后，按下磁针制动器，进行读数。",
        "B. 当目标地物位于视线上方时，把罗盘放置胸前，使罗盘瞄准觇板指向测量地物，即使罗盘北端对着测量地物，南端靠着自己，低头查看反光镜，使得反光镜上的细线、瞄准觇板尖端和测量地物处于同一条直线，待指针稳定后，按下磁针制动器，进行读数。",
        "C. 当目标地物位于位于视线上方时,把罗盘抬到眼前，使罗盘瞄准觇板指向测量地物，即使罗盘南端对着测量地物，北端靠着自己，透过瞄准觇板上可以翻折的小孔进行瞄准，使测量地物与反光镜上的椭圆孔处于一条直线上，同时调整反光镜中圆形水准器和长水准器的气泡在红圈内，待指针稳定后，按下磁针制动器，进行读数。",
        "D. 不论目的地物相对于自己视角的高度,都可以把罗盘抬到眼前，使罗盘瞄准觇板指向测量地物，即使罗盘南端对着测量地物，北端靠着自己，透过瞄准觇板上可以翻折的小孔进行瞄准，使测量地物与反光镜上的椭圆孔处于一条直线上，同时调整反光镜中圆形水准器和长水准器的气泡在红圈内，待指针稳定后，按下磁针制动器，进行读数。"
      ],
      questionImg: []
    }
  ]},
  {
    title:"二.地形图读图测试（15分）",
    isCommit:false,
    children:[
      {
        id:5,
        type:1,
        questionBody:"（5）以下哪个关于地形图的描述是正确的？（5分）",
        questionChoice:[
          "A. 等高线之间的距离越小，表示地形越平缓",
          "B. 本次实验中用到的地形图的计曲线等高距为25m",
          "C. 只有在山区地形中才需要使用等高线",
          "D.通常用线状符号来标记地形高度或者点位信息"
        ],
        questionImg:[]
      },
      {
        id:6,
        type:3,
        questionBody:"（6）请打开地图并对地图进行标定（5分）",

      },
      {
        id:7,
        type:2,
        questionBody:"（7）记录摩天轮相对自己的角度（5分）",
        text:"摩天轮角度（2.5分）:"
      }
    ]},
  {
    title:"三.确定站立点测试题（30分）",
    isCommit:false,
    children:[
      {
        id:8,
        type:2,
        questionBody:"（8）记录南望山相对自己的角度（5分）",
        text:"南望山角度（2.5分）:"
      },
      {
        id:9,
        type:2,
        questionBody:"（9）记录喻家山相对自己的角度（5分）",
        text:"喻家山角度（2.5分）:"
      },
      {
        id:10,
        type:4,
        questionBody:"（10）在地图上标记现在所处的位置（判断打分）是否圆圈里面（点确认题）（10分）",
      },
      {
        id:11,
        type:1,
        questionBody:"（11）如下图所示，红色小人标识为小明现在所处的大概位置，他想使用前方交会法更加精确的确定自己的位置，请你结合本次实习的前两个步骤，来帮他选择两个地形点： （10分）",
        questionChoice:[
          "A. ①和②",
          "B. ④和⑤",
          "C. ⑥和⑦",
          "D. ③和⑦"
        ],
        questionImg:["https://aquaman-1314140460.cos.ap-beijing.myqcloud.com/questionImg/111.png"]
      },
    ]},
  {
    title:"四.确定地物位置测试题（30分）",
    isCommit:false,
    children:[

    ]},
]
export const useUserStore = defineStore("userInfo", {
  // 共享状态，数据
  state: () => {
    return {
      userData,
      questions,
      questionAnswers
    };
  },
  getters: {},
  actions: {
    async initUserData(){
      try {

      }catch (e) {
        console.log(e)
      }
    },
  },
});

