const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmb00ts/",
            name: "ssmb00ts",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmb00ts/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "网络小说小程序"
        } 
    }
}
export default base
