var i18n = {
	setFontSize: function() {
		if((document.documentElement.clientWidth / 7.5) > 60) {
			document.documentElement.style.fontSize = '60px';
		} else {
			document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
		}
		window.addEventListener('resize', function() {
			if((document.documentElement.clientWidth / 7.5) > 60) {
				document.documentElement.style.fontSize = '60px';
			} else {
				document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
			}
		});
	},
	message: {
		show: function(el) {
			var domObj = $(el);
			domObj = domObj[0] || domObj;
			domObj.style.display = 'block';
		},
		hide: function(el) {
			var domObj = $(el);
			domObj = domObj[0] || domObj;
			domObj.style.display = 'none';
		},
		dialog: function(param) {
			param = Object.assign({
				title: '',
				btnNum: '1', // 1 || 2
				btnLText: '取消',
				btnRText: '确定',
				complete: null
			}, param);
			var el = '<div><div class="c_dialogBj"></div>';
			el += '<div class="c_dialog">';
			el += '<div class="c_dialogTitle f42 texC fb">' + param.title + '</div>';
			el += '<div class="c_dialogBtnBox flex f42 fb">';
			if(param.btnNum != '1') {
				el += '<div class="c_dialogBtn flexGrow1" title="cancel">取消</div><div class="c_gapLine"></div>';
			}
			el += '<div class="c_dialogBtn flexGrow1" title="sure">确定</div>';
			el += '</div>';
			el += '</div>';
			el += '</div>';
			var htmlObj = $(el);
			$('body').prepend(htmlObj);
			htmlObj.find('.c_dialogBtn').unbind('click').on('click', function() {
				if(param.complete && (typeof(param.complete) == "function")) {
					param.complete(this.title);
				}
				htmlObj.remove();
			});
		}
	},
	printDom: function(el, strDom) {
		var elDom = document.querySelector(el);
		if(elDom) {
			elDom.innerHTML = strDom;
		}
	},
	getUrlParam: function(key, defValue) { //取参函数，key---参数,defValue---取不到值时，可填写默认值
		var locationHref = decodeURIComponent(location.href); //当前页url
		var searchStrArr = locationHref.split('?')[1];
		if(searchStrArr) {
			searchStrArr = searchStrArr.split('&');
			for(var i in searchStrArr) {
				var currentItem = searchStrArr[i].split('=');
				if(key == currentItem[0]) {
					if(!currentItem[1] && (defValue != null)) {
						return defValue;
					} else {
						return currentItem[1];
					}
				}
			}
		}
		if(defValue != null) {
			return defValue;
		}
	},
}

i18n.setFontSize();
window.i18n = i18n;