//终于把饿了么打发了  本来自己想很努力的去做Node  后来发现自己的知识真心是特别不牢固的 老大这周不来了 可以喘息了 自己想了一下 大概的安排就是整理下以前学过的东西   还有就是把table和UI的弄熟练起来还有就是地图那一块的  数据可视化  这些基本的知识自己都没有掌握 去学后台真心是急于求成  看了下自己需要补充的知识就是路由  既然这样就把react相关的都好好学习一下吧
// 正则 JQ 其他相关的自己就放一下把  因为暂时工作上用不到  自己现在要做的就是熟悉react相关的周边尽快的去开展工作 有梦想就好好去实现 因为自己在追梦想想工作半年后自己的简历什么都写不出来  依然不知道怎么下手 是不是很无语
//希望自己的简历上可以写  职位：react开发工程师  工作内容公司运营端后台管理系统 利用react实现相关的业务功能，熟练使用react开发  项目中运用到react-table和material-UI来实现展示和界面优化  利用G2实现营销数据可视化
//熟练使用node.js开发后台 版本数据迁移 并协助ios开发结合react-native实现公司的APP  （部分功能RN无法实现只能用原生ios来实现）
//基于这些自己需要努力的地方还有很多很多
//雪肌精
//接下来说减肥 自己又看了很多的东西 为什么于帅那个傻逼都能瘦了 自己就不能呢 自己买了很多的书 想着能够让自己的生活变得简单一点  不是什么都是乱七八糟的 断舍离 把不用的废弃的东西都丢掉让自己的生活变得简单一点 这个周末就这样干  然后就是下周开始忙碌起来自己一定要利用好这段闲置的时光 不能荒废
//再者就是好好减肥 好好减肥 在吃上注意一点 不能总是这样吧自己有种每天昏昏沉沉混日子的感觉 本来可以有半个月努力学习期呢 结果自己成功的 度过了10天假期  要不是老大不回来了 自己估计这一周都要干多少事情了 让自己封装一个组件都弄不好 日狗了 好好挣钱努力生活 别老是乱花钱 都不知道钱花哪里了
//总资产还有2000大洋 其实算一下的话 也不知道自己一个月能花多少来
//想以后早上自己做饭毕竟自己每天起来的还是比较晚的 早上来个面包加煎蛋什么的或者是其他的微波炉加热一下就能吃的那种  早餐好好吃
componentWillMount () {
    (async _ => {
        const info = await checkToken();
        window.userPermissions = [
            ...info.permissions,
            ...info.roles,
        ];
        window.uid = info.id;
        window.constants = await fetchConstants();
        this.setState({
            loading: false
        });
    })().catch(error => {
        /*eslint-disable*/
        console.error(error);
        this.setState({
            loading: false,
            error
        });
    });
}

componentWillMount () {
    (async _ => {
        const info = await checkToken();
        window.userPermissions = [
            ...info.permissions,
            ...info.roles,
        ];
        window.uid = info.id;
        window.constants = await fetchConstants();
        this.setState({
            loading: false
        });
    })().catch(error => {
        /*eslint-disable*/
        console.error(error);
        this.setState({
            loading: false,
            error
        });
    });
}