/**
 * 
 */
class FootBall {
	constructor(name) {
		this.name = name;
	}
	/*
	 * @设置比赛名称
	 */
	gameTitle() {
		return this.name;
	}
	/*
	 * @根据赔率统计得出比赛结果，分别是 胜 平 负
	 */
	static pkResult(arr) {
		var result = ['胜', '平', '负'];
	    var sum = 0,
	        factor = 0,
	        random = Math.random();
	    for (var i = arr.length - 1; i >= 0; i--) {
	        sum += arr[i]; // 统计概率总和
	    };
	    random *= sum; // 生成概率随机数
	    for (var i = arr.length - 1; i >= 0; i--) {
	        factor += arr[i];
	        if (random <= factor)
	            return result[i];
	    };
	    return null;
	}
	/*
	 * @根据胜平负的赔率计算出各自的概率百分比
	 */
	static rateCount() {
		var win = parseFloat((9 / (10 * arguments[0])).toFixed(2));
	    var loss = parseFloat((9 / (10 * arguments[1])).toFixed(2));
	    var even = '';
	    var alen = arguments.length;
	    switch (alen) {
	        case 2:
	            even = 1 - win - loss;
	            break;
	        case 3:
	            even = parseFloat((9 / (10 * arguments[2])).toFixed(2));
	            break;    
	        default:
	            even = 1 - win - loss;
	            break;
	    }
	    return [win, even, loss];
	}
}

export { FootBall };