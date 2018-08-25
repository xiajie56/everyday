import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

const store = new vuex.Store({
    state: {
        day:0,//今天日期
        currentTime:0,//当前文章日期
        fontSize:"smallFont",//字体大小
        backgroundColor:"white",//背景颜色
        isNight:"byDay"//日夜阅读模式
    },
    mutations: {
        setDay(state,num){
            state.day=num
        },
        setCurrentTime(state,num){
            state.currentTime=num
        },
        setFontSize(state,str){
            state.fontSize=str
        },
        setBackgroundColor(state,str){
            state.backgroundColor=str
        },
        setIsNight(state,str){
            state.isNight=str
        }
    }
})

export default store