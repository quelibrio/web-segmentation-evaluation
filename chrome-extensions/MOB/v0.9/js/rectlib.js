function rectObj() {

	this.data = undefined;

	this.init = function(win,doc)  {
		if (doc) this.document = doc; else this.document = document;
		if (win) this.window = win; else this.window = window;
		this.data = this.document.createElement('div');
		return(this);
	}
	this.draw = function() {
		this.document.body.appendChild(this.data);
	}
	this.clear = function() {
		this.document.body.removeChild(this.data);
	}
	this.clear = function() {
		try {
			this.document.body.removeChild(this.data);
		} catch(err) {
			//handle
		}
	}
	this.build = function(x,y,w,h,border,background,cont,id) {
		if (!this.document) this.init();
		if (!this.data) this.data = this.document.createElement('div');
		this.setId(id);
		this.setContent(cont);
		this.move(x,y);
		this.resize(w,h);
		this.rectInit();
		this.applyStyle('border',border);
		this.applyStyle('background',background);
		this.draw();
		return(this);
	}
	
	this.deleteRect = function() {
		var ind = this.rects.indexOf(this.data);
		this.document.body.removeChild(this.data);
	}
	
	this.resize = function(w,h) {
		this.data.style.width = w + "px";
		this.data.style.height = h + "px";
	}
	this.move = function(x,y) {
		this.data.style.left = x + "px";
		this.data.style.top = y + "px";
	}
	this.applyStyle = function(selector,sty) {
		if (selector=='border')
			this.data.style.border = sty;
		else {
			this.data.style.background = sty;
		}
		this.data.style.display = "block";
	}
	this.setOpacity = function(value) {
		this.data.style.opacity = value;
	}
	this.setPosition = function(pos) {
		this.data.style.position=pos;
	}
	this.setClass = function(css) {
		this.data.className=css;
	}
	this.rectInit = function() {
		this.data.style.zIndex = 100000;
		this.data.style.position = "absolute";
		//this.data.style.overflow = "scroll";
	}
	this.setContent = function(cont) {
		this.data.innerHTML = cont;
	}
	this.setId = function(id) {
		if (id) 
			this.data.setAttribute("id",id);
		else
			this.data.setAttribute("id","reclib_" + Math.floor((Math.random()*1000)+1));
	}
	this.getRect = function() {
		if (this.data)
			return(this.data.getBoundingClientRect());
	}
	this.hide = function() {
		this.data.style.display = "none";
	}
	this.show = function() {
		this.data.style.display = "block";
	}
	this.ishidden = function() {
		return(this.data.style.display!="block");
	}
	this.toFront = function() {
		this.data.style.zIndex = 9999999999999;
	}
}
